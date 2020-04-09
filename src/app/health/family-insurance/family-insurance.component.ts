import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Rate, RateService} from '../../services/rate.service';

interface SelectForm {
  value: string | number;
  viewValue: string;
}

@Component({
  selector: 'app-family-insurance',
  templateUrl: './family-insurance.component.html',
  styleUrls: ['./family-insurance.component.scss']
})
export class FamilyInsuranceComponent implements OnInit {

  rates: Rate[];
  form: FormGroup;
  cost: number;
  numCoefficient: number;
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

  discountCard: SelectForm[] = [
    {value: 1, viewValue: 'Нет'},
    {value: 0.95, viewValue: 'Карта "Е-Плюс'},
    {value: 0.9, viewValue: 'Карта сети АЗС А-100 "Дзякуй" статус "Золотой" или "Золотой +"'},
    {value: 0.93, viewValue: 'Карта сети АЗС А-100 "Дзякуй" статус "Серебряный"'}
  ];

  numberOfPersons: SelectForm[] = [
    {value: 'one', viewValue: 'Один человек'},
    {value: 'two', viewValue: 'Два человека'},
    {value: 'three', viewValue: 'Три человека'},
    {value: 'four', viewValue: 'Четыре человека'},
    {value: 'five', viewValue: 'Пять человек'}
  ];

  amounts: SelectForm[] = [
    {value: 'small', viewValue: '1000 USD'},
    {value: 'big', viewValue: '2500 USD'}
  ];

  submit() {
    const tariffMap = {
      small: {
        one: 6, two: 10, three: 13, four: 15, five: 16
      },
      big: {
        one: 12, two: 20, three: 26, four: 30, five: 32
      }
    };
    const cardCoefficient = this.form.get('cardControl').value;
    const numberKey = this.form.get('numberControl').value;
    const amountKey = this.form.get('amountControl').value;
    const tariff = tariffMap[amountKey][numberKey];

    this.numCoefficient = this.form.get('numControl').value;
    this.periodCoefficient = this.form.get('periodControl').value;
    this.currencyCoefficient = (this.rates[0].curRate / this.rates[0].curScale);

    this.cost = this.periodCoefficient * this.currencyCoefficient * cardCoefficient * tariff;
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      periodControl: new FormControl('', Validators.required),
      numControl: new FormControl('', Validators.required),
      cardControl: new FormControl('', Validators.required),
      numberControl: new FormControl('', Validators.required),
      amountControl: new FormControl('', Validators.required)
    });
    this.rateService.getRate()
      .subscribe(rates => {
        this.rates = rates;
      });
  }
}

