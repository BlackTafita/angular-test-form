import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormService} from '../form.service';
import {AnswerInterface} from '../answer.interface';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {

  answers!: AnswerInterface[];
  constructor(private router: Router, private formService: FormService) {
  }

  ngOnInit(): void {
    this.answers = this.formService.getResults();
  }

  goToForm(): void {
    this.router.navigate(['form', 'builder']);
  }

}
