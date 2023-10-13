import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddQuestionDialogComponent} from '../add-question-dialog/add-question-dialog.component';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionInterface} from '../question.interface';
import {atLeastOne} from '../custom-validators';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent {

  form: FormGroup = new FormGroup({
    questions: new FormArray([]),
  });

  get questionsFormArray(): FormArray {
    return this.form.get('questions') as FormArray;
  }

  questions: QuestionInterface[] = []

  constructor(public dialog: MatDialog) {
  }

  openAddQuestionDialog() {
    const dialogRef = this.dialog.open(AddQuestionDialogComponent);

    dialogRef.afterClosed().subscribe((res: QuestionInterface) =>  {
        this.questions.push(res);
        this.addQuestion(res);
    });
  }

  getFormElem(i: number) {
    return this.questionsFormArray.controls[i] as FormGroup;
  }

  addQuestion(res: QuestionInterface): void {
    const validators = res.isRequired ? [Validators.required] : [];
    if (res.type === 'text') {
      this.questionsFormArray.push(new FormControl('', validators));
    } else {
      this.questionsFormArray.push(new FormGroup({
        checkboxes:  new FormArray(res.answers.map((a) => {
          return new FormControl('');
        }), ),
        other: new FormControl(''),
      }, [atLeastOne()]))
    }
  }



}
