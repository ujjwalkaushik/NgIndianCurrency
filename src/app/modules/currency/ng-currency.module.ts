import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIndianCurrencyModule } from './ng-indian-currency.pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgIndianCurrencyModule
  ],
  exports: [NgIndianCurrencyModule]
})
export class NgCurrencyModule { }
