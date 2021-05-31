# Crypto Price Tracker Web
**Web to track the profit/loss of a crypto asset.**
(Only works with [Binance](https://bit.ly/MartiBinance10) trading pairs)

## Configuration
There are five variables in the `Main.js` file:
- **tradingPair:** Trading Pair to check the price. (e.g., `BTCUSDT`, `ETHEUR`, `ADABTC`, etc. _Only works with [Binance](https://bit.ly/MartiBinance10) trading pairs_).^1^
- **buyPrice:** Price at the asset was purchased.
- **buyQuantity:** Quantity purchased.
- **currencySymbol:** Currency symbol to display.  (e.g., `$`, `€`, `£`, `BTC`, etc.).^1^ 
- **updateInterval:** Interval, **in seconds**, of how often the price is updated. (Minimum 5).
- **decimalPlaces:** Decimal places to display. Usually `2` for traditional currencies and `8` for cryptocurrencies.

1. **String variable:** Place it between quotes or double quotes.

## Examples
### BTCUSDT
0.125 Bitcoin purchased at a Bitcoin price of 35245.24$. With an update interval of 10 seconds, showing 2 decimal places.
```javascript
var tradingPair = "BTCUSDT";
var buyPrice = 35245.24;
var buyQuantity = 0.125;
var currencySymbol = "$"; 
var updateInterval = 10;
var decimalPlaces = 2; 
```

### ETHEUR
3.5 Ethereum purchased at a price of 325€ each. With an update interval of 25 seconds, showing 2 decimal places.
```javascript
var tradingPair = "ETHEUR";
var buyPrice = 325;
var buyQuantity = 3.5;
var currencySymbol = "€"; 
var updateInterval = 25;
var decimalPlaces = 2;
```
### ADABTC
1500 Cardano purchased at a price of 0.00004215 Bitcoin each. With an update interval of 5 seconds, showing 8 decimal places.
```javascript
var tradingPair = "ADABTC";
var buyPrice = 0.00004215;
var buyQuantity = 1500;
var currencySymbol = "BTC";
var updateInterval = 5;
var decimalPlaces = 8;
```
<br>

-------------
## :heart:Donations
**Donations are always greatly appreciated. Thank you for your support!**

[![Bitcoin Badge](https://img.shields.io/badge/Bitcoin-89520e?style=flat&logo=bitcoin&logoColor=white)](#heartdonations)
[![Ethereum Badge](https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white)](#heartdonations)
[![Dogecoin Badge](https://img.shields.io/badge/Dogecoin-C2A633?style=flat&logo=dogecoin&logoColor=white)](#heartdonations)
[![Litecoin Badge](https://img.shields.io/badge/Litecoin-A6A9AA?style=flat&logo=litecoin&logoColor=white)](#heartdonations)

**BTC:** 1M5yLyLWmELQo2e6chBZ35RkhcTUon66u5

**ETH:** 0xa6d337a733cbce6aa2f0aa72f83beced3464ee86

**DOGE:** DNm19soXsPHHSpqsMUiy75kciw9sBrqeZ8

**LTC:** MKiegbfCssBEJdtNm3tGcnAhBF2xvcQ6d1