import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent{

  person: Person;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private registrationService: RegistrationService
  ) { 
    this.person = new Person();
  }

  onSubmit(){
    this.registrationService.addPerson( this.person ).subscribe( result => this.goToPersonList());
  }

  goToPersonList(){
    this.router.navigate(['getReport']);
  }

}
