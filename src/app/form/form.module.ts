import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { BuilderComponent } from './builder/builder.component';
import { AnswersComponent } from './answers/answers.component';


@NgModule({
  declarations: [
    BuilderComponent,
    AnswersComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
})
export class FormModule { }
