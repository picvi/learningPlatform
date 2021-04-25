export interface IQuestion {
  question: string;
  score: number;
  checked: boolean;
  isAudio?: boolean;
  audioPath?: string;
  audioName?: string;
}
