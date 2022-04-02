import { Component, OnInit, Output } from '@angular/core';
import {Images} from './mock-college'

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
  @Output() images: any = Images

  summerInternShipCode = 'https://github.com/ChittojiMuraliSreeKrishna/collegeProjects/tree/main/summerinternship'
  miniProject1 = '../../../assets/Images/college/cs9.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
