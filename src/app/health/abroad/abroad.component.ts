import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Rate, RateService} from '../../services/rate.service';
import {AbroadDataService} from './abroad-data.service';

interface SelectForm {
  value: string | number;
  viewValue: string;
}

@Component({
  selector: 'app-abroad',
  templateUrl: './abroad.component.html',
  styleUrls: ['./abroad.component.scss']
})
export class AbroadComponent implements OnInit {
  rates: Rate[];
  form: FormGroup;
  cost: number;
  currencyCoefficient: number;
  private data: { [p: string]: { [p: string]: number } };
  constructor(private rateService: RateService,
              private abroadDataService: AbroadDataService) {}

  paymentCurrency: SelectForm[] = [
    {value: 'usd', viewValue: 'USD'},
    {value: 'eur', viewValue: 'EUR'}
  ];

  repeats: SelectForm[] = [
    {value: 0.85, viewValue: 'Да'},
    {value: 1, viewValue: 'Нет'}
  ];

  discountCard: SelectForm[] = [
    {value: 1, viewValue: 'Нет'},
    {value: 0.95, viewValue: 'Карта "Е-Плюс'},
    {value: 0.9, viewValue: 'Карта сети АЗС А-100 "Дзякуй" статус "Золотой" или "Золотой +"'},
    {value: 0.93, viewValue: 'Карта сети АЗС А-100 "Дзякуй" статус "Серебряный"'}
  ];

  amounts: SelectForm[] = [
    {value: 'fifty', viewValue: '50000'},
    {value: 'seventy', viewValue: '70000'},
    {value: 'hundred', viewValue: '100000'}
  ];

  countries: SelectForm[] = [
    {value: 1, viewValue: 'страны Шенгенской зоны или другие конкретные страны, группы стран (например, Турция, Египет)'},
    {value: 2, viewValue: 'все страны мира, за исключением Индии, Индонезии, Таиланда, Израиля, Соединенных Штатов' +
        ' Америки, Канады'},
    {value: 3, viewValue: 'Индия, Индонезия, Таиланд'},
    {value: 4, viewValue: 'Израиль, Соединенные Штаты Америки, Канада'},
    {value: 5, viewValue: ' все страны мира (по всему миру)'}
  ];

  ages: SelectForm[] = [
    {value: 0.8, viewValue: 'До 2-х лет включительно'},
    {value: 0.6, viewValue: '3-16 лет'},
    {value: 1, viewValue: '17-59 лет'},
    {value: 2, viewValue: '60-65 лет'},
    {value: 3, viewValue: '66-70 лет'},
    {value: 4, viewValue: '71-75 лет'},
    {value: 5, viewValue: '76 лет и старше'}
  ];

  drivers: SelectForm[] = [
    {value: 0.7, viewValue: 'Да'},
    {value: 1, viewValue: 'Нет'}
  ];

  sportsmen: SelectForm[] = [
    {value: 2, viewValue: 'Да'},
    {value: 1, viewValue: 'Нет'}
  ];

  submit() {
    const currencyValue = this.form.get('currencyControl').value;
    const driverCoefficient = this.form.get('driverControl').value;
    const sportsmanCoefficient = this.form.get('sportsmanControl').value;
    const cardCoefficient = this.form.get('cardControl').value;
    const ageCoefficient = this.form.get('ageControl').value;
    const repeatCoefficient = this.form.get('repeatControl').value;
    const countryCoefficient = this.form.get('countryControl').value;
    const amountKey = this.form.get('amountControl').value;
    const periodKey = this.form.get('periodControl').value;

    const amountCoefficient = ((this.data)[amountKey])[periodKey];

    currencyValue === 'usd' ? this.currencyCoefficient = (this.rates[0].curRate / this.rates[0].curScale) :
      this.currencyCoefficient = (this.rates[1].curRate / this.rates[1].curScale);

    this.cost = amountCoefficient * this.currencyCoefficient * driverCoefficient
      * cardCoefficient * sportsmanCoefficient * ageCoefficient * repeatCoefficient
      * countryCoefficient;
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      periodControl: new FormControl
      ('', [Validators.required, Validators.pattern('[0-9]*'), Validators.max(365)]),
      countryControl: new FormControl('', Validators.required),
      repeatControl: new FormControl('', Validators.required),
      currencyControl: new FormControl('', Validators.required),
      cardControl: new FormControl('', Validators.required),
      ageControl: new FormControl('', Validators.required),
      driverControl: new FormControl('', Validators.required),
      sportsmanControl: new FormControl('', Validators.required),
      amountControl: new FormControl('', Validators.required)
    });
    this.rateService.getRate()
      .subscribe(rates => {
        this.rates = rates;
      });
    this.data = this.abroadDataService.getData();
  }
}

