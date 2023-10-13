import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {QuestionInterface} from '../question.interface';
import {filter, tap} from 'rxjs';

@Component({
  selector: 'app-checkbox-question',
  templateUrl: './checkbox-question.component.html',
  styleUrls: ['./checkbox-question.component.scss']
})
export class CheckboxQuestionComponent implements  OnInit {

  @Input()
  form!: FormGroup;

  @Input()
  question!: QuestionInterface;


  isOtherSelected = new FormControl(false);

  ngOnInit() {
    this.isOtherSelected.valueChanges.pipe(
      filter(val => !val),
      tap(() => {
        const otherControl = this.form.get('other');
        otherControl?.patchValue('');
      })
    )
  }

}
