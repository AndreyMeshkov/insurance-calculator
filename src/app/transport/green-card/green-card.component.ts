import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Rate, RateService} from '../../services/rate.service';
import {GreenCardDataService, GreenData} from '../../services/green-card-data.service';

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
  private data: GreenData;
  constructor(private rateService: RateService,
              private greenCardService: GreenCardDataService) {}

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
    const countryKey = this.form.get('country').value;
    const transportKey = this.form.get('transport').value;
    const monthKey = this.form.get('month').value;
    const currencyKey = this.form.get('currency').value;
    this.costEuro = (((this.data)[countryKey])[transportKey])[monthKey];
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
    this.data = this.greenCardService.getData();
  }


}
