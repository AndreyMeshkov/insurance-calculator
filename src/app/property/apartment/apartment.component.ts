import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Rate, RateService} from '../../services/rate.service';

interface SelectForm {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss']
})
export class ApartmentComponent implements OnInit {

  rates: Rate[];
  form: FormGroup;
  numberCoefficient: number;
  cost: number;
  periodCoefficient: number;
  currencyCoefficient: number;
  otherCoefficient: number;
  cardCoefficient: number;
  creditCoefficient: number;
  locationCoefficient: number;
  constructor(private rateService: RateService) {}

  periods: SelectForm[] = [
    {value: 'oneYear', viewValue: 'Один год'},
    {value: 'twoYears', viewValue: 'Два года'},
    {value: 'threeYears', viewValue: 'Три года'}
  ];

  numberOfPayments: SelectForm[] = [
    {value: 'one', viewValue: 'Единовременно'},
    {value: 'two', viewValue: 'Два раза в год'},
    {value: 'three', viewValue: 'Три раза в год'},
    {value: 'four', viewValue: 'Четыре раза в год'},
    {value: 'six', viewValue: 'Шесть раз в год'}
  ];

  paymentCurrency: SelectForm[] = [
    {value: 'rub', viewValue: 'RUB'},
    {value: 'usd', viewValue: 'USD'},
    {value: 'eur', viewValue: 'EUR'},
    {value: 'byn', viewValue: 'BYN'}
  ];

  otherTreaty: SelectForm[] = [
    {value: 'yes', viewValue: 'Да'},
    {value: 'no', viewValue: 'Нет'}
  ];

  discountCard: SelectForm[] = [
    {value: 'no', viewValue: 'Нет'},
    {value: 'e-card', viewValue: 'Карта "Е-Плюс'},
    {value: 'gold-card', viewValue: 'Карта сети АЗС А-100 "Дзякуй" статус "Золотой" или "Золотой +"'},
    {value: 'silver-card', viewValue: 'Карта сети АЗС А-100 "Дзякуй" статус "Серебряный"'}
  ];

  creditFunds: SelectForm[] = [
    {value: 'yes', viewValue: 'Да'},
    {value: 'no', viewValue: 'Нет'}
  ];

  location: SelectForm[] = [
    {value: 'minsk', viewValue: 'Территория г.Минска и Минского района'},
    {value: 'other', viewValue: 'Вне территории г.Минска и Минского района'}
  ];
submit() {
  const periodValue = this.form.get('periodControl').value;
  const numberValue = this.form.get('numControl').value;
  const currencyValue = this.form.get('currencyControl').value;
  const otherValue = this.form.get('otherControl').value;
  const cardValue = this.form.get('cardControl').value;
  const creditValue = this.form.get('creditControl').value;
  const locationValue = this.form.get('locationControl').value;
  const amountValue = this.form.get('amountControl').value;

  switch (periodValue) {
   case 'oneYear':
     this.periodCoefficient = 1;
     break;
   case 'twoYears':
     this.periodCoefficient = 2;
     break;
   default:
     this.periodCoefficient = 3;
 }

  switch (numberValue) {
      case 'one':
        this.numberCoefficient = 1;
        break;
      case 'two':
        this.numberCoefficient = 2;
        break;
      case 'three':
        this.numberCoefficient = 3;
        break;
      case 'four':
        this.numberCoefficient = 4;
        break;
      default:
        this.numberCoefficient = 6;
  }

  switch (currencyValue) {
    case 'rub':
      this.currencyCoefficient = (this.rates[16].curRate / this.rates[16].curScale);
      break;
    case 'usd':
      this.currencyCoefficient = (this.rates[4].curRate / this.rates[4].curScale);
      break;
    case 'eur':
      this.currencyCoefficient = (this.rates[5].curRate / this.rates[5].curScale);
      break;
    default:
      this.currencyCoefficient = 1;
  }

  this.otherCoefficient = (otherValue === 'yes') ? 0.95 : 1;
  this.creditCoefficient = (creditValue === 'yes') ? 0.97 : 1;
  this.locationCoefficient = (locationValue === 'minsk') ? 1.1 : 1;

  switch (cardValue) {
    case 'no':
      this.cardCoefficient = 1;
      break;
    case 'e-card':
      this.cardCoefficient = 0.95;
      break;
    case 'silver-card':
      this.cardCoefficient = 0.93;
      break;
    default:
      this.cardCoefficient = 0.9;
  }
  this.cost = +amountValue * 0.01 * this.periodCoefficient * this.currencyCoefficient * this.otherCoefficient
    * this.cardCoefficient * this.creditCoefficient * this.locationCoefficient;
  console.log(this.cost);
}
  ngOnInit(): void {
    this.form = new FormGroup({
      periodControl: new FormControl('', Validators.required),
      numControl: new FormControl('', Validators.required),
      otherControl: new FormControl('', Validators.required),
      currencyControl: new FormControl('', Validators.required),
      cardControl: new FormControl('', Validators.required),
      creditControl: new FormControl('', Validators.required),
      locationControl: new FormControl('', Validators.required),
      amountControl: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')])
    });
    this.rateService.getRate()
      .subscribe(rates => {
        this.rates = rates;
      });
  }
}

