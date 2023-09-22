# Crypto Price Tracker Web
**A website for tracking the profit/loss of a crypto asset.**

## Configuration
There are five variables in the `Main.js` file:
- **tradingPair:[^1]** The trading pair to check the price. (e.g., `BTCUSDT`, `ETHEUR`, `ADABTC`, etc. _Only works with [Binance](https://www.binance.com) trading pairs_).
- **buyPrice:** The price at which the asset was purchased.
- **buyQuantity:** The quantity purchased.
- **currencySymbol:[^1]** The currency symbol to display (e.g., `$`, `€`, `£`, `BTC`, etc.).
- **updateInterval:** The interval, **in seconds**, at which the price is updated (Minimum 5).
- **decimalPlaces:** The number of decimal places to display. Typically `2` for traditional currencies and `8` for cryptocurrencies.

[^1]: **String variable:** Enclose it in single or double quotes.

## Examples
### BTCUSDT
0.125 Bitcoin purchased at a Bitcoin price of 35245.24$. With an update interval of 10 seconds, displaying 2 decimal places.
```javascript
var tradingPair = "BTCUSDT";
var buyPrice = 35245.24;
var buyQuantity = 0.125;
var currencySymbol = "$"; 
var updateInterval = 10;
var decimalPlaces = 2; 
```

### ETHEUR
3.5 Ethereum purchased at a price of 325€ each. With an update interval of 25 seconds, displaying 2 decimal places.
```javascript
var tradingPair = "ETHEUR";
var buyPrice = 325;
var buyQuantity = 3.5;
var currencySymbol = "€"; 
var updateInterval = 25;
var decimalPlaces = 2;
```
### ADABTC
1500 Cardano purchased at a price of 0.00004215 Bitcoin each. With an update interval of 5 seconds, displaying 8 decimal places.
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

<a href="https://www.buymeacoffee.com/devilquest" target="_blank"><img src="https://i.imgur.com/RHHFQWs.png" alt="Buy Me A Dinosaur"></a>
