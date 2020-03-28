import { Component, OnInit } from '@angular/core';

interface TypePolicyholder {
  value: string;
  viewValue: string;
}

interface InsurancePeriod {
  value: string;
  viewValue: string;
}

interface CountriesDeparture {
  value: string;
  viewValue: string;
}

interface PaymentCurrency {
  value: string;
  viewValue: string;
}

interface TypeOfTransport {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-green-card',
  templateUrl: './green-card.component.html',
  styleUrls: ['./green-card.component.scss']
})
export class GreenCardComponent implements OnInit {

  typePolicyholder: TypePolicyholder[] = [
    {value: 'individual', viewValue: 'Физическое лицо'},
    {value: 'entrepreneur', viewValue: 'Индивидуальный предприниматель'},
    {value: 'entity', viewValue: 'Юридическое лицо'}
  ];

  insurancePeriod: InsurancePeriod[] = [
    {value: 'day15', viewValue: '15 дней'},
    {value: 'month1', viewValue: '1 месяц'},
    {value: 'months2', viewValue: '2 месяца'},
    {value: 'months3', viewValue: '3 месяца'},
    {value: 'months4', viewValue: '4 месяца'},
    {value: 'months5', viewValue: '5 месяцев'},
    {value: 'months6', viewValue: '6 месяцев'},
    {value: 'months7', viewValue: '7 месяцев'},
    {value: 'months8', viewValue: '8 месяцев'},
    {value: 'months9', viewValue: '9 месяцев'},
    {value: 'months10', viewValue: '10 месяцев'},
    {value: 'months11', viewValue: '11 месяцев'},
    {value: 'year1', viewValue: '1 год'}
  ];

  countriesDeparture: CountriesDeparture[] = [
    {value: 'ru', viewValue: 'Российская Федерация'},
    {value: 'ua', viewValue: 'Украина и Молдова'},
    {value: 'all', viewValue: 'Все страны'}
  ];

  paymentCurrency: PaymentCurrency[] = [
    {value: 'RUB', viewValue: 'RUB'},
    {value: 'USD', viewValue: 'USD'},
    {value: 'EUR', viewValue: 'EUR'}
  ];

  typeOfTransport: TypeOfTransport[] = [
    {value: 'car', viewValue: 'Легковой автомобиль'},
    {value: 'truck', viewValue: 'Грузовой автомобиль'},
    {value: 'motorcycle', viewValue: 'Мотоцикл'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
