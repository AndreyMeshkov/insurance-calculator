import { Component, OnInit } from '@angular/core';
import {Rate, RateService} from '../../services/rate.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

interface SelectForm {
  value: string | number;
  viewValue: string;
}

@Component({
  selector: 'app-casco',
  templateUrl: './casco.component.html',
  styleUrls: ['./casco.component.scss']
})
export class CascoComponent implements OnInit {
  rates: Rate[];
  form: FormGroup;
  cost: number;
  numberCoefficient: number;
  currencyValue: string;
  today: number = Date.now();
  currencyCoefficient: number;
  constructor(private rateService: RateService) {}

  periods: SelectForm[] = [
    {value: 1, viewValue: 'Один год'}
  ];

  numberOfPayments: SelectForm[] = [
    {value: 1, viewValue: 'Единовременно'},
    {value: 2, viewValue: 'В два этапа'},
    {value: 4, viewValue: 'Ежеквартально'},
  ];

  location: SelectForm[] = [
    {value: 1.1, viewValue: 'Все страны мира'},
    {value: 1, viewValue: 'Республика Беларусь'}
  ];

  others: SelectForm[] = [
    {value: 0.8, viewValue: 'Да'},
    {value: 1, viewValue: 'Нет'}
  ];

  wears: SelectForm[] = [
    {value: 1.1, viewValue: 'С учетом износа'},
    {value: 1, viewValue: 'Без учета износа'}
  ];

  years: SelectForm[] = [
    {value: 1, viewValue: '2020'},
    {value: 1, viewValue: '2019'},
    {value: 1, viewValue: '2018'},
    {value: 1.1, viewValue: '2017'},
    {value: 1.1, viewValue: '2016'},
    {value: 1.1, viewValue: '2015'},
    {value: 1.2, viewValue: '2014'},
    {value: 1.2, viewValue: '2013'},
    {value: 1.3, viewValue: '2012'},
    {value: 1.3, viewValue: '2011'}
  ];

  currency: SelectForm[] = [
    {value: 'RUB', viewValue: 'RUB'},
    {value: 'USD', viewValue: 'USD'},
    {value: 'EUR', viewValue: 'EUR'},
    {value: 'BYN', viewValue: 'BYN'}
  ];

  submit() {
    const periodCoefficient = this.form.get('periodControl').value;
    const locationCoefficient = this.form.get('locationControl').value;
    const otherCoefficient = this.form.get('otherControl').value;
    const wearCoefficient = this.form.get('wearControl').value;
    const yearCoefficient = this.form.get('yearControl').value;
    this.currencyValue = this.form.get('currencyControl').value;
    const amountValue = this.form.get('amountControl').value;
    this.numberCoefficient = this.form.get('numControl').value;
    switch (this.currencyValue) {
      case 'RUB':
        this.currencyCoefficient = (this.rates[2].curRate / this.rates[2].curScale);
        break;
      case 'USD':
        this.currencyCoefficient = (this.rates[0].curRate / this.rates[0].curScale);
        break;
      case 'EUR':
        this.currencyCoefficient = (this.rates[1].curRate / this.rates[1].curScale);
        break;
      default:
        this.currencyCoefficient = 1;
    }
    this.cost = amountValue * 0.05 * periodCoefficient * locationCoefficient * otherCoefficient * wearCoefficient * yearCoefficient;
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      periodControl: new FormControl('', Validators.required),
      numControl: new FormControl('', Validators.required),
      locationControl: new FormControl('', Validators.required),
      otherControl: new FormControl('', Validators.required),
      wearControl: new FormControl('', Validators.required),
      yearControl: new FormControl('', Validators.required),
      currencyControl: new FormControl('', Validators.required),
      amountControl: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')])
    });
    this.rateService.getRate()
      .subscribe(rates => {
        this.rates = rates;
      });
  }
}


