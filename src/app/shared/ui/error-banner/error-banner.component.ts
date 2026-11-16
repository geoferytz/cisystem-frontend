
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cis-error-banner',
  standalone: true,
  imports: [],
  templateUrl: './error-banner.component.html',
  styleUrl: './error-banner.component.scss'
})
export class ErrorBannerComponent {
  @Input() message: string | null = null;
}
