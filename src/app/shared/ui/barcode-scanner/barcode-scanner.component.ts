import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild } from '@angular/core';
import type { IScannerControls } from '@zxing/browser';
import { ModalComponent } from '../modal/modal.component';

type ScanStatus = 'idle' | 'starting' | 'scanning' | 'error';

@Component({
  selector: 'cis-barcode-scanner',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './barcode-scanner.component.html',
  styleUrl: './barcode-scanner.component.scss'
})
export class BarcodeScannerComponent implements OnChanges, OnDestroy {
  @Input({ required: true }) open = false;
  @Input() title = 'Scan barcode';
  @Output() scanned = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  @ViewChild('preview') private preview?: ElementRef<HTMLVideoElement>;

  status: ScanStatus = 'idle';
  errorMessage = '';

  private controls?: IScannerControls;
  private generation = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['open']) return;
    if (this.open) {
      this.status = 'starting';
      this.errorMessage = '';
      setTimeout(() => this.start());
    } else {
      this.stop();
    }
  }

  ngOnDestroy(): void {
    this.stop();
  }

  requestClose(): void {
    this.stop();
    this.close.emit();
  }

  private async start(): Promise<void> {
    const generation = ++this.generation;
    if (!this.open) return;
    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      this.status = 'error';
      this.errorMessage = 'Camera scanning needs a secure (HTTPS) connection or localhost.';
      return;
    }
    const video = this.preview?.nativeElement;
    if (!video) return;
    try {
      const [{ BrowserMultiFormatReader, BarcodeFormat }, { DecodeHintType }] = await Promise.all([
        import('@zxing/browser'),
        import('@zxing/library')
      ]);
      if (generation !== this.generation) return;
      const hints = new Map();
      hints.set(DecodeHintType.POSSIBLE_FORMATS, [
        BarcodeFormat.EAN_13, BarcodeFormat.EAN_8, BarcodeFormat.UPC_A, BarcodeFormat.UPC_E,
        BarcodeFormat.CODE_128, BarcodeFormat.CODE_39, BarcodeFormat.CODE_93, BarcodeFormat.ITF,
        BarcodeFormat.QR_CODE, BarcodeFormat.DATA_MATRIX
      ]);
      const reader = new BrowserMultiFormatReader(hints, { delayBetweenScanAttempts: 200, delayBetweenScanSuccess: 1500 });
      const controls = await reader.decodeFromConstraints(
        { video: { facingMode: 'environment' }, audio: false },
        video,
        (result, _error, scanControls) => {
          if (!result || generation !== this.generation) return;
          const text = result.getText().trim();
          if (!text) return;
          scanControls.stop();
          this.scanned.emit(text);
          this.requestClose();
        }
      );
      if (generation !== this.generation) {
        controls.stop();
        return;
      }
      this.controls = controls;
      this.status = 'scanning';
    } catch (error) {
      if (generation !== this.generation) return;
      this.status = 'error';
      this.errorMessage = this.describeError(error);
    }
  }

  private stop(): void {
    this.generation++;
    this.controls?.stop();
    this.controls = undefined;
    const video = this.preview?.nativeElement;
    const stream = video?.srcObject;
    if (stream instanceof MediaStream) stream.getTracks().forEach(track => track.stop());
    if (video) video.srcObject = null;
    if (this.status !== 'error') this.status = 'idle';
  }

  private describeError(error: unknown): string {
    if (error instanceof DOMException) {
      if (error.name === 'NotAllowedError') return 'Camera permission was denied. Allow camera access for this site and try again.';
      if (error.name === 'NotFoundError' || error.name === 'OverconstrainedError') return 'No camera was found on this device.';
      if (error.name === 'NotReadableError') return 'The camera is busy in another app. Close it and try again.';
      if (error.name === 'SecurityError') return 'Camera scanning needs a secure (HTTPS) connection or localhost.';
    }
    return 'Could not start the camera. Check browser permissions and try again.';
  }
}
