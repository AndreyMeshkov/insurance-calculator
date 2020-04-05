import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Rate, RateService} from '../../services/rate.service';

interface SelectForm {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-green-card',
  templateUrl: './green-card.component.html',
  styleUrls: ['./green-card.component.scss']
})
export class GreenCardComponent implements OnInit {
  rates: Rate[];
  form: FormGroup;
  costEuro: number;
  currencyKey: string;
  constructor(private rateService: RateService) {}

  typeOfPolicyholder: SelectForm[] = [
    {value: 'individual', viewValue: 'Физическое лицо'},
    {value: 'entrepreneur', viewValue: 'Индивидуальный предприниматель'},
    {value: 'entity', viewValue: 'Юридическое лицо'}
  ];

  insurancePeriod: SelectForm[] = [
    {value: 'day15', viewValue: '15 дней'},
    {value: 'month1', viewValue: '1 месяц'},
    {value: 'month2', viewValue: '2 месяца'},
    {value: 'month3', viewValue: '3 месяца'},
    {value: 'month4', viewValue: '4 месяца'},
    {value: 'month5', viewValue: '5 месяцев'},
    {value: 'month6', viewValue: '6 месяцев'},
    {value: 'month7', viewValue: '7 месяцев'},
    {value: 'month8', viewValue: '8 месяцев'},
    {value: 'month9', viewValue: '9 месяцев'},
    {value: 'month10', viewValue: '10 месяцев'},
    {value: 'month11', viewValue: '11 месяцев'},
    {value: 'year1', viewValue: '1 год'}
  ];

  countryOfDeparture: SelectForm[] = [
    {value: 'ru', viewValue: 'Российская Федерация'},
    {value: 'ua', viewValue: 'Украина и Молдова'},
    {value: 'all', viewValue: 'Все страны'}
  ];

  paymentCurrency: SelectForm[] = [
    {value: 'rub', viewValue: 'RUB'},
    {value: 'usd', viewValue: 'USD'},
    {value: 'eur', viewValue: 'EUR'}
  ];

  typeOfTransport: SelectForm[] = [
    {value: 'car', viewValue: 'Легковой автомобиль'},
    {value: 'truck', viewValue: 'Грузовой автомобиль'},
    {value: 'motorcycle', viewValue: 'Мотоцикл'}
  ];
  submit() {
    const costMap = {
      all: {
        car: {
          day15: 30,
          month1: 50,
          month2: 100,
          month3: 145,
          month4: 190,
          month5: 225,
          month6: 230,
          month7: 290,
          month8: 295,
          month9: 305,
          month10: 360,
          month11: 410,
          year1: 425
        },
        truck: {
          day15: 65,
          month1: 75,
          month2: 115,
          month3: 175,
          month4: 220,
          month5: 285,
          month6: 320,
          month7: 380,
          month8: 430,
          month9: 490,
          month10: 540,
          month11: 580,
          year1: 630
        },
        motorcycle: {
          day15: 20,
          month1: 30,
          month2: 50,
          month3: 75,
          month4: 95,
          month5: 120,
          month6: 145,
          month7: 165,
          month8: 200,
          month9: 210,
          month10: 235,
          month11: 260,
          year1: 285
        }
      },
      ua: {
        car: {
          day15: 5,
          month1: 10,
          month2: 15,
          month3: 25,
          month4: 35,
          month5: 40,
          month6: 45,
          month7: 50,
          month8: 55,
          month9: 60,
          month10: 65,
          month11: 70,
          year1: 75
        },
        truck: {
          day15: 10,
          month1: 15,
          month2: 20,
          month3: 30,
          month4: 40,
          month5: 50,
          month6: 55,
          month7: 65,
          month8: 75,
          month9: 85,
          month10: 95,
          month11: 100,
          year1: 110
          },
        motorcycle: {
          day15: 3,
          month1: 5,
          month2: 8,
          month3: 11,
          month4: 15,
          month5: 18,
          month6: 21,
          month7: 25,
          month8: 30,
          month9: 32,
          month10: 35,
          month11: 38,
          year1: 40
        }
      },
      ru: {
        car: {
          day15: 10,
          month1: 19,
          month2: 35,
          month3: 49,
          month4: 60,
          month5: 70,
          month6: 79,
          month7: 86,
          month8: 92,
          month9: 97,
          month10: 101,
          month11: 105,
          year1: 108
        },
        truck: {
          day15: 20,
          month1: 38,
          month2: 70,
          month3: 97,
          month4: 120,
          month5: 140,
          month6: 156,
          month7: 170,
          month8: 182,
          month9: 192,
          month10: 201,
          month11: 208,
          year1: 215
        },
        motorcycle: {
          day15: 6,
          month1: 12,
          month2: 22,
          month3: 30,
          month4: 37,
          month5: 44,
          month6: 49,
          month7: 53,
          month8: 57,
          month9: 60,
          month10: 63,
          month11: 65,
          year1: 67
        }
      }
    };
    const countryKey = this.form.get('country').value;
    const transportKey = this.form.get('transport').value;
    const monthKey = this.form.get('month').value;
    const currencyKey = this.form.get('currency').value;
    this.costEuro = ((costMap[countryKey])[transportKey])[monthKey];
    this.currencyKey = currencyKey;
    }
  ngOnInit(): void {
    this.form = new FormGroup({
      type: new FormControl('', Validators.required),
      month: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      currency: new FormControl('', Validators.required),
      transport: new FormControl('', Validators.required)
    });
    this.rateService.getRate()
      .subscribe(rates => {
        this.rates = rates;
      });
  }


}
