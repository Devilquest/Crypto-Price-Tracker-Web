/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-CONFIGURATION_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/
var tradingPair = "BTCUSDT"; //The trading pair to check the price. (Only Binance trading pairs)
var buyPrice = 35245.24; //Price at which the asset was purchased
var buyQuantity = 0.125; //Quantity purchased.
var currencySymbol = "$"; //Currency symbol to display.
var updateInterval = 10; //Price update interval. In seconds. (Minimum 5)
var decimalPlaces = 2; //Number of decimal places to display. Typically 2 for traditional currencies and 8 for cryptocurrencies.
/*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-*/

$(document).ready(function(){
	$("#initial-value").text(round(buyPrice * buyQuantity, decimalPlaces).toFixed(decimalPlaces) + currencySymbol);
	
	GetBitcoinPrice();
    
    if(updateInterval < 5) updateInterval = 5;

	setInterval(function(){ 
		GetBitcoinPrice();
	}, updateInterval * 1000);
});

function GetBitcoinPrice(){
	$.getJSON( 'https://api.binance.com/api/v3/ticker/price?symbol=' + tradingPair.toUpperCase(), function(data) {
		var actualValue = buyQuantity * data.price;
		var difference = actualValue - buyPrice * buyQuantity;
		var precent = Math.abs((data.price / buyPrice * 100) - 100);
		
		$("#actual-value").text(round(actualValue, decimalPlaces).toFixed(decimalPlaces) + currencySymbol);
		
		if(difference > 0)
		{
			$("#profit-loss-label").text( "Profit:" );
			
			$("#profit-loss").removeClass("text-danger");
			$("#profit-loss").addClass("text-success");
            
			$("#percentage").removeClass("text-danger");
			$("#percentage").addClass("text-success");
		}
		else
		{
			$("#profit-loss-label").text( "Loss:" );
			
			$("#profit-loss").removeClass("text-success");
			$("#profit-loss").addClass("text-danger");
            
			$("#percentage").removeClass("text-success");
			$("#percentage").addClass("text-danger");
		}
		
		$("#profit-loss").text(round(difference, decimalPlaces).toFixed(decimalPlaces) + currencySymbol);
		$("#percentage").text(round(precent, 2).toFixed(2) + "%");
	})
	.fail(function() {
		$("#actual-value").text("Error!");
		$("#profit-loss-label").text("Wrong Trading Pair?");
		$("#profit-loss").text(tradingPair);
	});
}

function round(value, exp) {
	if (typeof exp === 'undefined' || +exp === 0)
		return Math.round(value);

	value = +value;
	exp = +exp;

	if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
		return NaN;

	// Shift
	value = value.toString().split('e');
	value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

	// Shift back
	value = value.toString().split('e');
	return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}

