import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Rate, RateService} from '../../services/rate.service';
import {OsgoDataService} from './osgo-data.service';

interface SelectForm {
  value: string | number;
  viewValue: string;
}

@Component({
  selector: 'app-osgo',
  templateUrl: './osgo.component.html',
  styleUrls: ['./osgo.component.scss']
})
export class OsgoComponent implements OnInit {

  rates: Rate[];
  form: FormGroup;
  cost: number;
  numberCoefficient: number;
  costEuro: number;
  today: number = Date.now();
  private accidentData: { [p: string]: { [p: string]: { [p: string]: number } } };
  private data: { [p: string]: { [p: string]: { [p: string]: number } } };
  constructor(private rateService: RateService,
              private osgoDataService: OsgoDataService) {}

  periods: SelectForm[] = [
    {value: 'half', viewValue: 'Пятнадцать дней'},
    {value: 'one', viewValue: 'Один месяц'},
    {value: 'two', viewValue: 'Два месяца'},
    {value: 'three', viewValue: 'Три месяца'},
    {value: 'four', viewValue: 'Четыре месяца'},
    {value: 'five', viewValue: 'Пять месяцев'},
    {value: 'six', viewValue: 'Шесть месяцев'},
    {value: 'seven', viewValue: 'Семь месяцев'},
    {value: 'eight', viewValue: 'Восемь месяцев'},
    {value: 'nine', viewValue: 'Девять месяцев'},
    {value: 'ten', viewValue: 'Десять месяцев'},
    {value: 'eleven', viewValue: 'Одиннадцать месяцев'},
    {value: 'twelve', viewValue: 'Один год'},
  ];

  numberOfPayments: SelectForm[] = [
    {value: 1, viewValue: 'Единовременно'},
    {value: 2, viewValue: 'В два этапа'}
  ];

  exemptions: SelectForm[] = [
    {value: 0.5, viewValue: 'Да'},
    {value: 0, viewValue: 'Нет'}
  ];

  ages: SelectForm[] = [
    {value: 1, viewValue: 'Старше 25 лет'},
    {value: 1.1, viewValue: 'До 25 лет включительно'}
  ];

  experiences: SelectForm[] = [
    {value: 1, viewValue: 'Свыше 2 лет'},
    {value: 1.2, viewValue: 'До 2 лет включительно'},
    {value: 1.2, viewValue: 'в/у отсутствует'}
  ];

  location: SelectForm[] = [
    {value: 1.5, viewValue: 'г.Минск, Минский район'},
    {value: 1.2, viewValue: 'г.Гродно, Брест, Витебск, Гомель, Могилев'},
    {value: 1, viewValue: 'Города с численностью населения более 50 тыс. человек (за исключением Минского района)'},
    {value: 0.8, viewValue: 'Прочие населенные пункты (за исключением Минского района)'}
  ];

  taxis: SelectForm[] = [
    {value: 'yes', viewValue: 'Да'},
    {value: 'no', viewValue: 'Нет'}
  ];

  models: SelectForm[] = [
    {value: 'groupA', viewValue: 'за исключением ВАЗ, СЕАЗ, КАМАЗ, ЗАЗ, АЗЛК, "Москвич", ИЖ, ГАЗ, УАЗ, ЛУАЗ'},
    {value: 'groupN', viewValue: 'ВАЗ, СЕАЗ, КАМАЗ, ЗАЗ, АЗЛК, "Москвич", ИЖ, ГАЗ, УАЗ, ЛУАЗ'}
  ];

  accidents: SelectForm[] = [
    {value: 'first', viewValue: 'Договор заключается впервые'},
    {value: 'c0', viewValue: '1.00(C0)'},
    {value: 'c1', viewValue: '0.90(C1)'},
    {value: 'c2', viewValue: '0.80(C2)'},
    {value: 'c3', viewValue: '0.70(C3)'},
    {value: 'c4', viewValue: '0.60(C4)'},
    {value: 'c5', viewValue: '0.50(C5)'},
    {value: 'h1', viewValue: '1.20(H1)'},
    {value: 'h2', viewValue: '1.50(H2)'},
    {value: 'h3', viewValue: '2.00(H3)'}
  ];

  payments: SelectForm[] = [
    {value: 'yes', viewValue: 'Да'},
    {value: 'no', viewValue: 'Нет'}
  ];

  engines: SelectForm[] = [
    {value: '1', viewValue: 'До 1200 куб.см. включительно'},
    {value: '2', viewValue: 'От 1200 до 1800 куб.см. включительно'},
    {value: '3', viewValue: 'От 1800 до 2500 куб.см. включительно'},
    {value: '4', viewValue: 'От 2500 до 3500 куб.см. включительно'},
    {value: '5', viewValue: 'От 3500 куб.см.'}
  ];

  crashes: SelectForm[] = [
    {value: 'crash0', viewValue: '0'},
    {value: 'crash1', viewValue: '1'},
    {value: 'crash2', viewValue: '2 и более'}
  ];
  submit() {
    const periodValue = this.form.get('periodControl').value;
    const exemptionCoefficient = this.form.get('exemptionControl').value;
    const ageCoefficient = this.form.get('ageControl').value;
    const experienceCoefficient = this.form.get('experienceControl').value;
    const locationCoefficient = this.form.get('locationControl').value;
    const taxiValue = this.form.get('taxiControl').value;
    const modelValue = this.form.get('modelControl').value;
    const accidentValue = this.form.get('accidentControl').value;
    const paymentValue = this.form.get('paymentControl').value;
    const crashValue = this.form.get('crashControl').value;
    let engineValue = this.form.get('engineControl').value;
    const accidentRate = (((this.accidentData)[paymentValue])[crashValue])[accidentValue];
    const currency = (this.rates[1].curRate / this.rates[1].curScale);
    if (taxiValue === 'yes') { engineValue = '6'; }
    this.numberCoefficient = this.form.get('numControl').value;

    const tariff = (((this.data)[modelValue])[modelValue + engineValue])[periodValue];
    const coefficientThree = (ageCoefficient + experienceCoefficient - 1);
    let finalDiscount = 1 + ((accidentRate - 1) + (coefficientThree - 1) + (locationCoefficient - 1) - exemptionCoefficient);
    if (finalDiscount < 0.5) {finalDiscount = 0.5; }
    this.costEuro = tariff * finalDiscount;
    this.cost = this.costEuro * currency;
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      periodControl: new FormControl('', Validators.required),
      numControl: new FormControl('', Validators.required),
      exemptionControl: new FormControl('', Validators.required),
      ageControl: new FormControl('', Validators.required),
      experienceControl: new FormControl('', Validators.required),
      locationControl: new FormControl('', Validators.required),
      taxiControl: new FormControl('', Validators.required),
      modelControl: new FormControl('', Validators.required),
      accidentControl: new FormControl('', Validators.required),
      paymentControl: new FormControl('', Validators.required),
      crashControl: new FormControl('', Validators.required),
      engineControl: new FormControl('', Validators.required)
    });
    this.rateService.getRate()
      .subscribe(rates => {
        this.rates = rates;
      });
    this.data = this.osgoDataService.getData();
    this.accidentData = this.osgoDataService.getAccidentData();
  }
}


