import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Rate, RateService} from '../../services/rate.service';

interface SelectForm {
  value: string | number;
  viewValue: string;
}

@Component({
  selector: 'app-responsibility',
  templateUrl: './responsibility.component.html',
  styleUrls: ['./responsibility.component.scss']
})
export class ResponsibilityComponent implements OnInit {

  rates: Rate[];
  form: FormGroup;
  cost: number;
  numberCoefficient: number;
  currencyCoefficient: number;
  constructor(private rateService: RateService) {}

  periods: SelectForm[] = [
    {value: 1, viewValue: 'Один месяц'},
    {value: 2, viewValue: 'Два месяца'},
    {value: 3, viewValue: 'Три месяца'},
    {value: 4, viewValue: 'Четыре месяца'},
    {value: 5, viewValue: 'Пять месяцев'},
    {value: 6, viewValue: 'Шесть месяцев'},
    {value: 7, viewValue: 'Семь месяцев'},
    {value: 8, viewValue: 'Восемь месяцев'},
    {value: 9, viewValue: 'Девять месяцев'},
    {value: 10, viewValue: 'Десять месяцев'},
    {value: 11, viewValue: 'Одиннадцать месяцев'},
    {value: 9.6, viewValue: 'Один год'},
  ];

  numberOfPayments: SelectForm[] = [
    {value: 1, viewValue: 'Единовременно'},
    {value: 2, viewValue: 'Два раза в год'},
    {value: 3, viewValue: 'Три раза в год'},
    {value: 4, viewValue: 'Четыре раза в год'},
    {value: 6, viewValue: 'Шесть раз в год'}
  ];

  paymentCurrency: SelectForm[] = [
    {value: 'rub', viewValue: 'RUB'},
    {value: 'usd', viewValue: 'USD'},
    {value: 'eur', viewValue: 'EUR'},
    {value: 'byn', viewValue: 'BYN'}
  ];

  otherTreaty: SelectForm[] = [
    {value: 0.95, viewValue: 'Да'},
    {value: 1, viewValue: 'Нет'}
  ];

  discountCard: SelectForm[] = [
    {value: 1, viewValue: 'Нет'},
    {value: 0.95, viewValue: 'Карта "Е-Плюс'},
    {value: 0.9, viewValue: 'Карта сети АЗС А-100 "Дзякуй" статус "Золотой" или "Золотой +"'},
    {value: 0.93, viewValue: 'Карта сети АЗС А-100 "Дзякуй" статус "Серебряный"'}
  ];

  location: SelectForm[] = [
    {value: 1, viewValue: 'Городская местность(города и поселки городского типа)'},
    {value: 0.8, viewValue: 'Сельская местность(сельские населенные пункты'}
  ];

  submit() {
    const currencyValue = this.form.get('currencyControl').value;
    const otherCoefficient = this.form.get('otherControl').value;
    const cardCoefficient = this.form.get('cardControl').value;
    const locationCoefficient = this.form.get('locationControl').value;
    const amountValue = this.form.get('amountControl').value;
    const periodCoefficient = this.form.get('periodControl').value;

    this.numberCoefficient = this.form.get('numControl').value;
    switch (currencyValue) {
      case 'rub':
        this.currencyCoefficient = (this.rates[2].curRate / this.rates[2].curScale);
        break;
      case 'usd':
        this.currencyCoefficient = (this.rates[0].curRate / this.rates[0].curScale);
        break;
      case 'eur':
        this.currencyCoefficient = (this.rates[1].curRate / this.rates[1].curScale);
        break;
      default:
        this.currencyCoefficient = 1;
    }

    this.cost = +amountValue * 0.0004 * periodCoefficient * this.currencyCoefficient * otherCoefficient
      * cardCoefficient * locationCoefficient;
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      periodControl: new FormControl('', Validators.required),
      numControl: new FormControl('', Validators.required),
      otherControl: new FormControl('', Validators.required),
      currencyControl: new FormControl('', Validators.required),
      cardControl: new FormControl('', Validators.required),
      locationControl: new FormControl('', Validators.required),
      amountControl: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')])
    });
    this.rateService.getRate()
      .subscribe(rates => {
        this.rates = rates;
      });
  }
}

