import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BgPastService {
  tasks = [
    {
      pic: 'assets/pics/start.jpg'
    },
    {
      question: 'When did you last meet your friend?',
      pic: 'assets/pics/friends.jpeg'
    },
    {
      question: 'What was the last book you read?',
      pic: 'assets/pics/reading.jpg'
    },
    {
      question: 'When did you last fly on a plane?',
      pic: 'assets/pics/plane.jpg'
    },
    {
      question: 'Who did you last give a present to?',
      pic: 'assets/pics/presents.jpg'
    },
    {
      question: 'When did you last go to the beach?',
      pic: 'assets/pics/beach.jpg'
    },
    {
      question: 'When did you last see a doctor',
      pic: 'assets/pics/doctor.jpeg'
    },
    {
      question: 'When did you last ride a bicycle',
      pic: 'assets/pics/bicycle.jpg'
    },
    {
      question: 'When did you last have a party?',
      pic: 'assets/pics/party.jpg'
    },
    {
      question: 'When did you last take a photo?',
      pic: 'assets/pics/photo.jpg'
    },
    {
      question: 'When did you last get lost?',
      pic: 'assets/pics/gettingLost.jpg'
    },
    {
      question: 'Which song did you sing last?',
      pic: 'assets/pics/singing.jpeg'
    },
    {
      question: 'When did you last drink coffee?',
      pic: 'assets/pics/coffee.jpg'
    },
    {
      question: 'Who did you last buy flowers for?',
      pic: 'assets/pics/flowers.jpeg'
    },
    {
      question: 'What did you wear yesterday?',
      pic: 'assets/pics/wear.jpeg'
    },
    {
      question: 'What did you buy yesterday?',
      pic: 'assets/pics/purchases.jpg'
    },
    {
      question: 'How many phone calls did you make yesterday?',
      pic: 'assets/pics/phoneCalls.jpg'
    },
    {
      question: "Where did you spend New Year's Eve last year?",
      pic: 'assets/pics/newYearEve.jpg'
    },
    {
      question: 'What time did you go to bed last night?',
      pic: 'assets/pics/sleeping.jpeg'
    },
    {
      pic: 'assets/pics/finish.jpg'
    }
  ];
  constructor() {}
}
