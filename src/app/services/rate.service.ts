import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Rate {
  curName: string;
  curScale: number;
  curRate: number;
  curAbbreviation: string;
}


@Injectable({
  providedIn: 'root'
})
export class RateService {
  constructor(private http: HttpClient) {}
  getRate(): Observable<Rate[]> {
    return this.http.get('http://www.nbrb.by/api/exrates/rates?periodicity=0')
      .pipe(map( (data) => {
          const rates = [].slice.call(data);
          return rates.map((rate: any) => {
            return {
              curName: rate.Cur_Name,
              curScale: rate.Cur_Scale,
              curRate: rate.Cur_OfficialRate,
              curAbbreviation: rate.Cur_Abbreviation
            };
          });
        }));
    }
  }

