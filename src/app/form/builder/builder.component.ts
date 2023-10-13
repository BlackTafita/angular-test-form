import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddQuestionDialogComponent} from '../add-question-dialog/add-question-dialog.component';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionInterface} from '../question.interface';
import {atLeastOne} from '../custom-validators';
import {Router} from '@angular/router';
import {FormService} from '../form.service';
import {AnswerInterface} from '../answer.interface';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent {

  form = this.formService.form;

  get questionsFormArray(): FormArray {
    return this.form.get('questions') as FormArray;
  }

  questions: QuestionInterface[] = []

  constructor(public dialog: MatDialog, private router: Router, private formService: FormService) {
  }

  openAddQuestionDialog() {
    const dialogRef = this.dialog.open(AddQuestionDialogComponent);

    dialogRef.afterClosed().subscribe((res: QuestionInterface) =>  {
      if (res) {
        this.questions.push(res);
        this.addQuestion(res);
      }
    });
  }

  getFormElem(i: number) {
    return this.questionsFormArray.controls[i] as FormGroup;
  }

  submit() {
    const formData = this.form.getRawValue();
    const data: AnswerInterface[] = this.questions.map((el, k) => {
      const formEl = formData.questions[k];
      const res: AnswerInterface = {
        type: el.type,
        question: el.question,
        answer: el.type === 'text' ? formEl : undefined,
      };

      if (el.type === 'checkbox') {
        const checkBoxValues = el.answers.filter((ch, key) => {
          return !!formEl.checkboxes[key];
        });

        res.checkboxes = checkBoxValues;
        res.other = formEl?.other;
      }

      return res;
    });

    this.formService.setResults(data);
    this.router.navigate(['form', 'answers']);
  }

  addQuestion(res: QuestionInterface): void {
    const validators = res.isRequired ? [Validators.required] : [];
    if (res.type === 'text') {
      this.questionsFormArray.push(new FormControl('', validators));
    } else {
      this.questionsFormArray.push(new FormGroup({
        checkboxes:  new FormArray(res.answers.map((a) => {
          return new FormControl(false);
        }), ),
        other: new FormControl(''),
      }, [atLeastOne()]))
    }
  }



}
