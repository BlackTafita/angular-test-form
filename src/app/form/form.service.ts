import { Injectable } from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {AnswerInterface} from './answer.interface';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  form: FormGroup = new FormGroup({
    questions: new FormArray([]),
  })

  private answers: AnswerInterface[] = [];

  constructor() { }

  getResults(): AnswerInterface[] {
    return this.answers;
  }

  setResults(res: AnswerInterface[]): void {
    this.answers = res;
  }
}
