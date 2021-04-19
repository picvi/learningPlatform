import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IQuestions } from './asset/iquestions';
import { IResult } from './asset/iresult';

@Injectable({
  providedIn: 'root'
})
export class OwnGameService {
  private firstTeamName!: string;
  private secondTeamName!: string;
  private currentCategory!: IQuestions | undefined;
  private isFirstTeamTurn = true;
  private firstTeamScore = 0;
  private secondTeamScore = 0;

  private currentTurn$: BehaviorSubject<string> = new BehaviorSubject('');
  public currentTurn: Observable<string> = this.currentTurn$.asObservable();
  private isAllQuestionsChecked$: BehaviorSubject<any> = new BehaviorSubject(
    false
  );
  public isAllQuestionsChecked: Observable<boolean> = this.isAllQuestionsChecked$.asObservable();
  private isAllCategoriesChecked$: BehaviorSubject<any> = new BehaviorSubject(
    false
  );
  public isAllCategoriesChecked: Observable<boolean> = this.isAllCategoriesChecked$.asObservable();
  public questions: IQuestions[] = [
    {
      category: 'Poets and writers',
      questionsList: [
        {
          question:
            'He was a Belarusian humanist, scholar, translator and one of the first book printers in Eastern Europe.',
          score: 100,
          checked: false
        },
        {
          question:
            'A Scottish writer,he devoted all his time to writing detectives, an author of famous detective novels',
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
          question:
            'He waited more than 20 years to publish his theory on evolution.',
          score: 100,
          checked: false
        },
        {
          question:
            'Where was J. Alferov, a Nobel Prize Laureate in Physics born?',
          score: 200,
          checked: false
        },
        {
          question:
            'Who invented the first plane and had the first historic 12-second flight in 1903?',
          score: 300,
          checked: false
        },
        {
          question:
            'For 25 years he worked in the U.S. space research programme.',
          score: 400,
          checked: false
        },
        {
          question: 'Who created “Facebook”?',
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
    this.currentTurn$.next(this.firstTeamName);
  }

  public chooseCategory(categoryName: string): IQuestions | undefined {
    this.currentCategory = this.questions.find((item: IQuestions) => {
      return item.category === categoryName;
    });
    this.isAllQuestionsChecked$.next(
      this.currentCategoryCheckHandler(this.currentCategory)
    );
    return this.currentCategory;
  }

  public currentCategoryCheckHandler(
    category: IQuestions | undefined
  ): boolean | undefined {
    return category?.questionsList.every((question) => {
      return question.checked === true;
    });
  }

  private allCategoriesCheckHandler(): boolean | undefined {
    const result = this.questions.every((category) => {
      return this.currentCategoryCheckHandler(category);
    });
    this.isAllCategoriesChecked$.next(result);
    return result;
  }

  public setTurn(): void {
    this.isFirstTeamTurn = !this.isFirstTeamTurn;
    this.isFirstTeamTurn
      ? this.currentTurn$.next(this.firstTeamName)
      : this.currentTurn$.next(this.secondTeamName);
    this.isAllQuestionsChecked$.next(
      this.currentCategoryCheckHandler(this.currentCategory)
    );
    this.allCategoriesCheckHandler();
  }

  public counterIncrement(score: number): void {
    if (this.isFirstTeamTurn) {
      this.firstTeamScore += score;
    } else {
      this.secondTeamScore += score;
    }
  }

  public getResults(): IResult[] {
    return [
      { teamName: this.firstTeamName, score: this.firstTeamScore },
      { teamName: this.secondTeamName, score: this.secondTeamScore }
    ];
  }
}
