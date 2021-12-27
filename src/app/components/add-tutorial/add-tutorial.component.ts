import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial = {
    employeeNumber: '',
      firstName: '',
      lastName: '',
      gender: '',
      department: '',
      designation: '',
      dob: '',
      contactNumber: '',
      email: ''
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit() {
  }

  saveTutorial() {
    const data = {
      employeeNumber: this.tutorial.employeeNumber,
      firstName: this.tutorial.firstName,
      lastName: this.tutorial.lastName,
      gender: this.tutorial.gender,
      department: this.tutorial.department,
      designation: this.tutorial.designation,
      dob: this.tutorial.dob,
      contactNumber: this.tutorial.contactNumber,
      email: this.tutorial.email
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {
      employeeNumber: '',
      firstName: '',
      lastName: '',
      gender: '',
      department: '',
      designation: '',
      dob: '',
      contactNumber: '',
      email: ''
    };
  }

}
