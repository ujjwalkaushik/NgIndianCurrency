# NgIndianCurrency

Angular Pipe to format your number into indian currency with ₹ symbol.


## Install

### npm
```
npm install ng-indian-currency
```


## How to use

After installation, import `NgCurrencyModule` into your module

```
@NgModule({
  declarations: [],
  imports: [
    NgCurrencyModule
  ],
  providers: [],
})

```
Now you can use `indianRupee` pipe as following

```
<span>{{ 5000 | indianRupee }}</span>

output: ₹5,000
```

