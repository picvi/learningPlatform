import { Injectable } from '@angular/core';
import { IQuestions } from './asset/iquestions';

@Injectable({
  providedIn: 'root'
})
export class OwnGameSvcService {
  private firstTeamName!: string;
  private secondTeamName!: string;
  private currentCategory!: IQuestions | undefined;

  public questions: IQuestions[] = [
    {
      category: 'Poets and writers',
      questionsList: [
        {
          question:
            'A Scottish writer,he devoted all his time to writing detectives, an author of famous detective novels',
          score: 100,
          checked: false
        },
        {
          question:
            'He is a Belarusian humanist, scholar, translator and one of the first book printers in Eastern Europe.',
          score: 200,
          checked: false
        },
        {
          question: 'He wrote “The Curious Case of Benjamin Button’',
          score: 300,
          checked: false
        },
        {
          question:
            'He won the Nobel Prize for literature in 1954. He was a hunter, a fisherman, a soldier. He wrote “The old man and the sea”',
          score: 400,
          checked: false
        },
        {
          question:
            'An English playwright and poet who was born on the 23 of April and died 52 years later on his birthday.',
          score: 500,
          checked: false
        },
        {
          question:
            'In 1986 he got the Lenin Award for the story “Sign of Trouble”.',
          score: 600,
          checked: false
        }
      ]
    },
    {
      category: 'Great inventors',
      questionsList: [
        {
          question: 'Who created “Facebook”?',
          score: 100,
          checked: false
        },
        {
          question:
            'He waited more than 20 years to publish his theory on evolution.',
          score: 200,
          checked: false
        },
        {
          question:
            'Where was J. Alferov, a Nobel Prize Laureate in Physics born?',
          score: 300,
          checked: false
        },
        {
          question:
            'Who invented the first plane and had the first historic 12-second flight in 1903?',
          score: 400,
          checked: false
        },
        {
          question:
            'For 25 years he worked in the U.S. space research programme.',
          score: 500,
          checked: false
        },
        {
          question: 'Who created the telephone?',
          score: 600,
          checked: false
        }
      ]
    },
    {
      category: 'Music and Art',
      questionsList: [
        {
          question:
            'During the end of his performance of “Billie Jean” at the Motown 25th Anniversary special he performed his first moonwalk.',
          score: 100,
          checked: false
        },
        {
          question:
            'He was a Russian-French artist of Belarusian Jewish origin ',
          score: 200,
          checked: false
        },
        {
          question:
            'She was an American actress, model, and singer. The most successful scene was The "subway grate scene" in white dress. ',
          score: 300,
          checked: false
        },
        {
          question:
            'He gained widespread popularity playing a modern Sherlock Holmes in the television series Sherlock ',
          score: 400,
          checked: false
        },
        {
          question:
            'He was  leader or co leader of the British rock group the Beatles ',
          score: 500,
          checked: false
        },
        {
          question:
            'In 2018 she filmed a movie “Crystal Swan” and was applying for Oscar with it and now will direct a TV show for Netflix',
          score: 600,
          checked: false
        }
      ]
    }
  ];

  public setTeamsNames(firstName: string, secondName: string): void {
    this.firstTeamName = firstName;
    this.secondTeamName = secondName;
  }

  public chooseCategory(categoryName: string): IQuestions | undefined {
    this.currentCategory = this.questions.find((item: IQuestions) => {
      return item.category === categoryName;
    });
    return this.currentCategory;
  }

  public isAllQuestionsChecked(): boolean | undefined {
    return this.currentCategory?.questionsList.every((question) => {
      question.checked === true;
    });
  }
}
