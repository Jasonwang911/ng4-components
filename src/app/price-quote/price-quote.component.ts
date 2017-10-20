import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  stockCode: string = 'IBM';

  price: number;

  // 要发送到父组件的数据
  @Output()
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter();
  @Output()
  buy: EventEmitter<PriceQuote> = new EventEmitter();

  constructor() { 
    setInterval( () => {
      let priceQuote: PriceQuote = new PriceQuote('IBB', 100*Math.random());

      this.price = priceQuote.lastPrice;

      this.lastPrice.emit(priceQuote);

    }, 1000);
  }

  ngOnInit() {
  }

  // 购买股票
  buyStock() {
    this.buy.emit(new PriceQuote(this.stockCode, this.price));
  }
}

export class PriceQuote {

  constructor(
    public stockCode: string,
    public lastPrice: number
  ) {

  }
}
