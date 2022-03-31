import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Component, OnInit, Input } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-font-icon',
  templateUrl: './font-icon.component.html',
  styleUrls: ['./font-icon.component.css']
})
export class FontIconComponent implements OnInit {
  @Input() faIcon: string = '';
  faUser = faUser
  
  constructor() { }

  ngOnInit(): void {
  }

}
