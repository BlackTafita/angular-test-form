import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject, takeUntil, tap} from 'rxjs';

@Component({
  selector: 'app-add-question-dialog',
  templateUrl: './add-question-dialog.component.html',
  styleUrls: ['./add-question-dialog.component.scss']
})
export class AddQuestionDialogComponent implements OnInit, OnDestroy {

  form: FormGroup = new FormGroup({
    type: new FormControl('', [Validators.required]),
    question: new FormControl('', [Validators.required]),
    answers: new FormArray([
    ]),
    ownAnswer: new FormControl(false),
    isRequired: new FormControl( true),
  });

  get answersFormArr(): FormArray {
    return this.form.get('answers') as FormArray;
  }

  get typeFormControl(): FormControl {
    return this.form.get('type') as FormControl;
  }

  destroy$$ = new Subject<void>;
  constructor(public dialogRef: MatDialogRef<AddQuestionDialogComponent>) {
  }

  ngOnInit(): void {
    this.typeFormControl.valueChanges
      .pipe(
        tap((val) => {
          if (val === 'text') {
            this.answersFormArr.controls = [];
          } else {
            this.addAnswerOption();
          }
        }),
        takeUntil(this.destroy$$)
      ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.unsubscribe();
  }

  addAnswerOption(): void {
    this.answersFormArr.push(new FormControl('', [Validators.required]));
  }

  submit(): void {
    this.dialogRef.close(this.form.getRawValue());
  }

}
