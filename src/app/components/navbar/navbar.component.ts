import { Component } from '@angular/core';
import {NgbModule, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbModule,NgbNavModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  active = 1;
}
