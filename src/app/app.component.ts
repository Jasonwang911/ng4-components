import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/price-quote.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stock = '';
  amount = '';

  // 接收子组件发射过来的属性
  priceQuote: PriceQuote = new PriceQuote('', 0);
  buy: PriceQuote = new PriceQuote('', 0);
  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }
  buyHandler(event: PriceQuote) {
    this.buy = event;
  }
}
