import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BgPastService {
  tasks = [
    {
      'question': 'When did you last meet your friend?',
      'pic': 'pics/friends.jpg'
    },
    {
      'question': 'What was the last book you read?',
      'pic': ''
    },
    {
      'question': 'When did you last fly on a plane?',
      'pic': ''
    },
    {
      'question': 'Who did you last give a present to?',
      'pic': ''
    },
    {
      'question': 'When did you last go to the beach?',
      'pic': ''
    },
    {
      'question': 'When did you last see a doctor', 
      'pic': ''
    },
    {
      'question': 'When did you last ride a bicycle',
      'pic': ''
    },
    {
      'question': 'When did you last have a party?',
      'pic': ''
    },
    {
      'question': 'When did you last take a photo?',
      'pic': ''
    },
    {
      'question': 'When did you last get lost?',
      'pic': ''
    },
    {
      'question': 'Which song did you sing last?',
      'pic': ''
    },
    {
      'question': 'When did you last drink coffee?',
      'pic': ''
    },
    {
      'question': 'Who did you last buy flowers for?',
      'pic': ''
    },
    {
      'question': 'What did you wear yesterday?',
      'pic': ''
    },
    {
      'question': 'What did you buy yesterday?',
      'pic': ''
    },
    {
      'question': 'How many phone calls did you make yesterday?',
      'pic': ''
    },
    {
      'question': "Where did you spend New Year's Eve last year?",
      'pic': ''
    },
    {
      'question': 'What time did you go to bed last night?',
      'pic': ''
    }
  ]
  constructor() { }
}
