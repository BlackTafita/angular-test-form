import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  formQuestions: FormGroup = new FormGroup({});
  questionTitles: string[] = [];

  constructor() { }
}
