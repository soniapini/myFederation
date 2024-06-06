import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FirstComponent} from "./first/first.component";

@Component({
  selector: 'mfe1-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FirstComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mfe1';


}
