import { Component, OnInit, Output } from '@angular/core';
import { Headers } from './mock-header'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() headers: any[] = Headers

  constructor() { }

  ngOnInit(): void {
  }

}
