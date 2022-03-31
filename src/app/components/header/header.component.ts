import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Component, OnInit, Output } from '@angular/core';
import { Headers } from './mock-header'
import { faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() headers: any[] = Headers
  faUser = faUser as IconProp;
 
  constructor() { }

  ngOnInit(): void {
  }

}
