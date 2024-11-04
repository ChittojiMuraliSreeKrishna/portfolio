import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  myBackground = '../../../assets/Images/mine2.jpg';
  aboutImg = '../../../assets/Images/mine3.jpg';

  html = '../../../assets/Images/icons/html.png';
  css = '../../../assets/Images/icons/css.png';
  javaScript = '../../../assets/Images/icons/javascript.png';
  python = '../../../assets/Images/icons/python.png';
  springBoot = '../../../assets/Images/icons/springBoot.png';
  flask = '../../../assets/Images/icons/flask.png';
  scss = '../../../assets/Images/icons/sass.png';
  bootStrap = '../../../assets/Images/icons/bootStrap.png';
  react = '../../../assets/Images/icons/react.png';
  postgresql = '../../../assets/Images/icons/postgresql.png';
  mariadb = '../../../assets/Images/icons/mariadb.png';
  mysql = '../../../assets/Images/icons/mysql.png';
  php = '../../../assets/Images/icons/php.png';

  constructor() {}

  ngOnInit(): void {}
}
