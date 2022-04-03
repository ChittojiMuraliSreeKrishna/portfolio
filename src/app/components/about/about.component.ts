import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  myBackground = '../../../assets/Images/mine2.jpg'
  aboutImg = '../../../assets/Images/mine3.jpg'

  html = '../../../assets/Images/icons/html.png'
  css = '../../../assets/Images/icons/css.png'
  javaScript = '../../../assets/Images/icons/javascript.png'
  python = '../../../assets/Images/icons/python.png'

  constructor() { }

  ngOnInit(): void {
  }

}
