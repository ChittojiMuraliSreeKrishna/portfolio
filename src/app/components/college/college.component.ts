import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})

export class CollegeComponent implements OnInit {

  summerIntern1 = '../../../assets/Images/college/cs5.png'
  miniProject1 = '../../../assets/Images/college/cs9.jpg'
  
  summerInternShipCode = 'https://github.com/ChittojiMuraliSreeKrishna/collegeProjects/tree/main/summerinternship'
  miniProjectCode = 'https://github.com/ChittojiMuraliSreeKrishna/collegeProjects/tree/main/miniProject'

  constructor() { }

  ngOnInit(): void {
  }

}
