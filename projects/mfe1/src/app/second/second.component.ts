import { Component } from '@angular/core';

@Component({
  selector: 'mfe1-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  search(): void {
    alert('Not implemented in this demo!');
  }
}
