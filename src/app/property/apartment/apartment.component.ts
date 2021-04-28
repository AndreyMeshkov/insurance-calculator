import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Rate, RateService} from '../../services/rate.service';

interface SelectForm {
  value: string | number;
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
  cost: number;
  numberCoefficient: number;
  periodCoefficient: number;
  currencyCoefficient: number;
  constructor(private rateService: RateService) {}

  periods: SelectForm[] = [
    {value: 1, viewValue: 'Один год'},
    {value: 2, viewValue: 'Два года'},
    {value: 3, viewValue: 'Три года'}
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

  creditFunds: SelectForm[] = [
    {value: 0.97, viewValue: 'Да'},
    {value: 1, viewValue: 'Нет'}
  ];

  location: SelectForm[] = [
    {value: 1.1, viewValue: 'Территория г.Минска и Минского района'},
    {value: 1, viewValue: 'Вне территории г.Минска и Минского района'}
  ];
submit() {
  const currencyValue = this.form.get('currencyControl').value;
  const otherCoefficient = this.form.get('otherControl').value;
  const cardCoefficient = this.form.get('cardControl').value;
  const creditCoefficient = this.form.get('creditControl').value;
  const locationCoefficient = this.form.get('locationControl').value;
  const amountValue = this.form.get('amountControl').value;

  this.numberCoefficient = this.form.get('numControl').value;
  this.periodCoefficient = this.form.get('periodControl').value;

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

  this.cost = +amountValue * 0.01 * this.periodCoefficient * this.currencyCoefficient * otherCoefficient
    * cardCoefficient * creditCoefficient * locationCoefficient;
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

