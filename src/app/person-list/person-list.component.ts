import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})

export class PersonListComponent implements OnInit {

  people: Person[];

  constructor(private registrationService: RegistrationService) {}

  ngOnInit() {
    this.registrationService.getReport().subscribe(data => {
      this.people = data
    });
  }

}
