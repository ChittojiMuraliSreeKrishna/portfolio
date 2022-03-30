import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.css']
})
export class AnchorComponent implements OnInit {
  @Input() text: string = '';
  @Input() color: string = '';
  @Input() background: string = '';
  @Input() link: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
