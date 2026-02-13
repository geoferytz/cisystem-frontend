import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cis-table-shell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-shell.component.html',
  styleUrl: './table-shell.component.scss'
})
export class TableShellComponent {
  @Input() title: string | null = null;
  @Input() subtitle: string | null = null;
  @Input() empty = false;
  @Input() emptyMessage = 'No data';
}
