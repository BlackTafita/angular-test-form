import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { BuilderComponent } from './builder/builder.component';
import { AnswersComponent } from './answers/answers.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import { AddQuestionDialogComponent } from './add-question-dialog/add-question-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CheckboxQuestionComponent } from './checkbox-question/checkbox-question.component';


@NgModule({
  declarations: [
    BuilderComponent,
    AnswersComponent,
    AddQuestionDialogComponent,
    CheckboxQuestionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    FormRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class FormModule { }
