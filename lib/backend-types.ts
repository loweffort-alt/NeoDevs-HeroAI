export interface BackendData {
  questions: Question[];
}

export interface Question {
  question_id: string;
  chunk_id: string;
  question_dict: QuestionDict;
  reference_page: number;
}

export interface QuestionDict {
  question: string;
  options: string[];
  correct_answer: string;
}
