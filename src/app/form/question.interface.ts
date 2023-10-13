export interface QuestionInterface {
  type: 'text' | 'checkbox';
  question: string;
  answers: string[];
  ownAnswer: boolean;
  isRequired: boolean;
}
