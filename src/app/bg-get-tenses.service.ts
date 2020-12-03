import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable } from 'rxrjs';

@Injectable({
  providedIn: 'root'
})
export class BgGetTensesService {
  [x: string]: any;
  constructor(private http: HttpClient) {}
  // eslint-disable-next-line @typescript-eslint/ban-types
  // getPastSimple(): Observable<Object> {
  //   return this.http.get('http://localhost:3000/pastSimple', {
  //     responseType: 'json'
  //   });
  // }

  pastSimple = [
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
      question: 'When did you last see a doctor?',
      pic: 'assets/pics/doctor.jpeg'
    },
    {
      question: 'When did you last ride a bicycle?',
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

  prPerfectPastSimple = [
    {
      pic: 'assets/pics/start.jpg'
    },
    {
      question: 'Have you ever eaten strange food?',
      pic: 'assets/pics/thaiFood.jpg'
    },
    {
      question: "What's the best present you have ever recieved",
      pic: 'assets/pics/bdPresent.jpg'
    },
    {
      question: 'When was the last time you ate pizza?',
      pic: 'assets/pics/pizza.jpg'
    },
    {
      question: 'Have you ever broken a leg?',
      pic: 'assets/pics/brokenLeg.jpg'
    },
    {
      question: 'When did you last watch a horror movie?',
      pic: 'assets/pics/horror.jpg'
    },
    {
      question: 'How many times have you visited the capital?',
      pic: 'assets/pics/capital.jpg'
    },
    {
      question: 'Have you ever touched a snake?',
      pic: 'assets/pics/snake.jpg'
    },
    {
      question: 'When was the last time you played a computer game?',
      pic: 'assets/pics/computerGame.jpg'
    },
    {
      question: 'Did you read a book last month? Did you like it?',
      pic: 'assets/pics/reading.jpg'
    },
    {
      question: 'Where did you go on your last vocation?',
      pic: 'assets/pics/vocation.jpg'
    },
    {
      question: 'Have you ever met a famous person?',
      pic: 'assets/pics/celebrity.jpg'
    },
    {
      question: 'Did you iron yesterday?',
      pic: 'assets/pics/ironing.jpg'
    },
    {
      question: 'What countries have you visited?',
      pic: 'assets/pics/travelling.jpg'
    },
    {
      question: "When did you last go to the hairdresser's?",
      pic: ''
    },
    {
      question: 'Have you ever read a book in English?',
      pic: 'assets/pics/englishBook.jpg'
    },
    {
      question: 'What did you eat 2 hours ago?',
      pic: 'assets/pics/meal.jpg'
    },
    {
      pic: 'assets/pics/finish.jpg'
    }
  ];
}
