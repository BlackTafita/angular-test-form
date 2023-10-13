export interface AnswerInterface {
  type: string,
  question: string,
  answer?: string,
  checkboxes?: string[],
  other?: string;
}
