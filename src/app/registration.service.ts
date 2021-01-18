import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Person } from './person';

@Injectable()
export class RegistrationService {

  private addUrl:string;
  private reportUrl:string;

  constructor(private http:HttpClient) { 
    
    this.addUrl = 'http://localhost:8080/registration/add';
    this.reportUrl = 'http://localhost:8080/registration/report';

  }

  public getReport(): Observable <Person[]> {
    return this.http.get<Person[]>(this.reportUrl);
  }

  public addPerson(person: Person){
    return this.http.post<Person>(this.addUrl, person);
  }

}
