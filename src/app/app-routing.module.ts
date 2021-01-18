import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from '../app/person-list/person-list.component';
import { PersonFormComponent } from '../app/person-form/person-form.component';

const routes: Routes = [
  { path: 'getReport', component: PersonListComponent },
  { path: 'addPerson', component: PersonFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }