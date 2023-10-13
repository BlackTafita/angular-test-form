import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuilderComponent} from './builder/builder.component';
import {AnswersComponent} from './answers/answers.component';

const routes: Routes = [
  {path: 'builder', component: BuilderComponent},
  {path: 'answers', component: AnswersComponent},
  {path: '', redirectTo: 'builder', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
