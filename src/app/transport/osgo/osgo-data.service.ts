import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OsgoDataService {

 private data: any = {
  groupA: {
    // tslint:disable-next-line:max-line-length
    groupA1: {half: 10, one: 20, two: 30, three: 30, four: 40, five: 50, six: 60, seven: 70, eight: 80, nine: 90, ten: 100, eleven: 110, twelve: 120},
    // tslint:disable-next-line:max-line-length
    groupA2: {half: 10, one: 20, two: 30, three: 30, four: 40, five: 50, six: 60, seven: 70, eight: 80, nine: 90, ten: 100, eleven: 110, twelve: 120},
    // tslint:disable-next-line:max-line-length
    groupA3: {half: 10, one: 20, two: 30, three: 30, four: 40, five: 50, six: 60, seven: 70, eight: 80, nine: 90, ten: 100, eleven: 110, twelve: 120},
    // tslint:disable-next-line:max-line-length
    groupA4: {half: 10, one: 20, two: 30, three: 30, four: 40, five: 50, six: 60, seven: 70, eight: 80, nine: 90, ten: 100, eleven: 110, twelve: 120},
    // tslint:disable-next-line:max-line-length
    groupA5: {half: 10, one: 20, two: 30, three: 30, four: 40, five: 50, six: 60, seven: 70, eight: 80, nine: 90, ten: 100, eleven: 110, twelve: 120},
    // tslint:disable-next-line:max-line-length
    groupA6: {half: 10, one: 20, two: 30, three: 30, four: 40, five: 50, six: 60, seven: 70, eight: 80, nine: 90, ten: 100, eleven: 110, twelve: 120}
  },
  groupN: {
    // tslint:disable-next-line:max-line-length
    groupN1: {half: 10, one: 20, two: 30, three: 30, four: 40, five: 50, six: 60, seven: 70, eight: 80, nine: 90, ten: 100, eleven: 110, twelve: 120},
    // tslint:disable-next-line:max-line-length
    groupN2: {half: 10, one: 20, two: 30, three: 30, four: 40, five: 50, six: 60, seven: 70, eight: 80, nine: 90, ten: 100, eleven: 110, twelve: 120},
    // tslint:disable-next-line:max-line-length
    groupN3: {half: 10, one: 20, two: 30, three: 30, four: 40, five: 50, six: 60, seven: 70, eight: 80, nine: 90, ten: 100, eleven: 110, twelve: 120},
    // tslint:disable-next-line:max-line-length
    groupN4: {half: 10, one: 20, two: 30, three: 30, four: 40, five: 50, six: 60, seven: 70, eight: 80, nine: 90, ten: 100, eleven: 110, twelve: 120},
    // tslint:disable-next-line:max-line-length
    groupN5: {half: 10, one: 20, two: 30, three: 30, four: 40, five: 50, six: 60, seven: 70, eight: 80, nine: 90, ten: 100, eleven: 110, twelve: 120},
    // tslint:disable-next-line:max-line-length
    groupN6: {half: 10, one: 20, two: 30, three: 30, four: 40, five: 50, six: 60, seven: 70, eight: 80, nine: 90, ten: 100, eleven: 110, twelve: 120}
  }
 };

 private accidentData: any = {
   yes: {
     crash0: {c0: 0.9, c1: 0.8, c2: 0.7, c3: 0.6, c4: 0.5, c5: 0.5, h1: 1, h2: 1.2, h3: 1.5},
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
