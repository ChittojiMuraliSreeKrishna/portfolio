import { Component, OnInit, Input } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.css']
})
export class AnchorComponent implements OnInit {
  @Input() text: string = '';
  @Input() link: string = '';
  @Input() class: string = '';
  @Input() faIcon: string = '';
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
