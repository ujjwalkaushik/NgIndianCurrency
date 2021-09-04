import { NgModule, Pipe, PipeTransform } from "@angular/core";
import { formatCurrency, getCurrencySymbol } from "@angular/common";

@Pipe({
  name: "indianRupee",
})
export class NgIndianCurrencyPipe implements PipeTransform {
  transform(
    value: number,
    currencyCode: string = "INR",
    display: "code" | "symbol" | "symbol-narrow" | string | boolean = "symbol",
    digitsInfo: string = "1.0-0",
    locale: string = "en-IN"
  ): string | null {
    return formatCurrency(
      value,
      locale,
      getCurrencySymbol(currencyCode, "wide"),
      currencyCode,
      digitsInfo
    );
  }
}

@NgModule({
  declarations: [NgIndianCurrencyPipe],
  exports: [NgIndianCurrencyPipe],
})
export class NgIndianCurrencyModule {}
