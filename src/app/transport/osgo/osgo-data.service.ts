import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OsgoDataService {

 private data: {[key: string]: {[key: string]: {[key: string]: number}}} = {
  groupA: {
    // tslint:disable-next-line:max-line-length
    groupA1: {half: 1.7, one: 3.4, two: 6.0, three: 8.5, four: 10.5, five: 12.2, six: 13.7, seven: 14.9, eight: 16.0, nine: 16.7, ten: 17.5, eleven: 18.2, twelve: 18.8},
    // tslint:disable-next-line:max-line-length
    groupA2: {half: 2.1, one: 4.2, two: 7.6, three: 10.6, four: 13.2, five: 15.3, six: 17.2, seven: 18.6, eight: 20.1, nine: 21.0, ten: 21.9, eleven: 22.9, twelve: 23.6},
    // tslint:disable-next-line:max-line-length
    groupA3: {half: 2.6, one: 5.3, two: 9.4, three: 13.2, four: 16.5, five: 19.1, six: 21.5, seven: 23.2, eight: 25.0, nine: 26.2, ten: 27.3, eleven: 28.5, twelve: 29.4},
    // tslint:disable-next-line:max-line-length
    groupA4: {half: 3.9, one: 7.6, two: 14.0, three: 19.4, four: 24.1, five: 28.0, six: 31.3, seven: 34.1, eight: 36.5, nine: 38.5, ten: 40.3, eleven: 41.7, twelve: 43.1},
    // tslint:disable-next-line:max-line-length
    groupA5: {half: 4.6, one: 8.9, two: 16.5, three: 23.0, four: 28.4, five: 33.0, six: 37.0, seven: 40.3, eight: 43.1, nine: 45.5, ten: 47.5, eleven: 49.3, twelve: 59.0},
    // tslint:disable-next-line:max-line-length
    groupA6: {half: 9.7, one: 18.7, two: 34.5, three: 47.9, four: 59.2, five: 68.9, six: 77.1, seven: 84, eight: 89.9, nine: 94.9, ten: 99.1, eleven: 102.7, twelve: 106.1}
  },
  groupN: {
    // tslint:disable-next-line:max-line-length
    groupN1: {half: 1.1, one: 2.1, two: 4.0, three: 5.5, four: 6.8, five: 7.9, six: 8.9, seven: 9.7, eight: 10.3, nine: 10.9, ten: 11.4, eleven: 11.8, twelve: 12.2},
    // tslint:disable-next-line:max-line-length
    groupN2: {half: 1.4, one: 2.7, two: 5.0, three: 6.9, four: 8.5, five: 9.9, six: 11.1, seven: 12.1, eight: 13.0, nine: 13.7, ten: 14.3, eleven: 14.8, twelve: 15.3},
    // tslint:disable-next-line:max-line-length
    groupN3: {half: 1.7, one: 3.4, two: 6.2, three: 8.6, four: 10.3, five: 12.4, six: 13.9, seven: 15.1, eight: 16.2, nine: 17.1, ten: 17.8, eleven: 18.5, twelve: 19.1},
    // tslint:disable-next-line:max-line-length
    groupN4: {half: 2.1, one: 4.0, two: 7.5, three: 10.4, four: 12.8, five: 14.9, six: 16.7, seven: 18.2, eight: 19.5, nine: 20.6, ten: 21.5, eleven: 22.3, twelve: 23.0},
    // tslint:disable-next-line:max-line-length
    groupN5: {half: 2.5, one: 4.9, two: 9.0, three: 12.5, four: 15.4, five: 17.9, six: 20.0, seven: 21.9, eight: 23.4, nine: 24.7, ten: 25.8, eleven: 26.7, twelve: 27.6},
    // tslint:disable-next-line:max-line-length
    groupN6: {half: 9.7, one: 18.7, two: 34.5, three: 47.9, four: 59.2, five: 68.9, six: 77.1, seven: 84.0, eight: 89.9, nine: 94.9, ten: 99.1, eleven: 102.7, twelve: 106.1}
  }
 };

 private accidentData: {[key: string]: {[key: string]: {[key: string]: number}}} = {
   yes: {
     crash0: {first: 1, c0: 0.9, c1: 0.8, c2: 0.7, c3: 0.6, c4: 0.5, c5: 0.5, h1: 1, h2: 1.2, h3: 1.5},
     crash1: {c0: 1.5, c1: 1.5, c2: 1.5, c3: 1.5, c4: 1.5, c5: 1.5, h1: 2, h2: 2, h3: 2},
     crash2: {c0: 2, c1: 2, c2: 2, c3: 2, c4: 2, c5: 2, h1: 2, h2: 2, h3: 2},
   },
   no: {
     crash0: {c0: 1, c1: 0.9, c2: 0.8, c3: 0.7, c4: 0.6, c5: 0.5, h1: 1.2, h2: 1.5, h3: 2},
     crash1: {c0: 1.5, c1: 1.5, c2: 1.5, c3: 1.5, c4: 1.5, c5: 1.5, h1: 2, h2: 2, h3: 2},
     crash2: {c0: 2, c1: 2, c2: 2, c3: 2, c4: 2, c5: 2, h1: 2, h2: 2, h3: 2},
   }
 };

  getData() {
    return this.data;
  }

  getAccidentData() {
    return this.accidentData;
  }
}
