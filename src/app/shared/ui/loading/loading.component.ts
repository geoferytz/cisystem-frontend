
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cis-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  @Input() label = 'Loading...';
}
