;(function(){
	
	'use strict';
	
	angular
		.module('beerBrawlApp')
		.factory('beerCalculator', beerCalculator);
		
	function beerCalculator() {
		function OfferInfo(canSize, cansInPack, numberOfPacks, cost, abv) {
			this.CanSize = canSize;
			this.CansInPack = cansInPack;
			this.NumberOfPacks = numberOfPacks;
			this.Cost = cost;
			this.ABV = abv;
		}
		
		/*
		Right now you're computing the cost per 100ml. 
		Instead you could be computing the cost per ml of alcohol. 
		If you take the total number of ml and multiply by ABV, then you get the number of mls of alcohol. 
		Dividing as you did before will indicate the cheapest way to get wasted. 
		*/
		
		function getPricePer100ml(model) {
			var totalCans = model.CansInPack * model.NumberOfPacks;
			var totalMl = totalCans * model.CanSize;
			var totalCl = totalMl / 100;
			return (model.Cost / totalCl).toFixed(2);
		}
		
		OfferInfo.prototype.getPricePerMlOfAlcohol = function () {
			var totalCans = this.CansInPack * this.NumberOfPacks;
			var totalMl = totalCans * this.CanSize;
			var numberOfMlsOfAlcohol = totalMl;
			if(!isNaN(this.ABV)) {
				numberOfMlsOfAlcohol = totalMl * this.ABV;
			}		
			return (this.Cost / numberOfMlsOfAlcohol);
		}	  
		
		OfferInfo.prototype.compare = function (otherOffer) {
			return this.getPricePer100ml() < otherOffer.getPricePer100ml() ? this : otherOffer;
		}
		
		function getOfferInfo1(model) {
			return {
				CanSize : model.cansize1,
				CansInPack : model.cansinpack1,
				NumberOfPacks : model.numberofpacks1,
				Cost : model.cost1,
				ABV : model.abv1
			};			
		}
		
		function getOfferInfo2(model) {
			return {
				CanSize : model.cansize2,
				CansInPack : model.cansinpack2,
				NumberOfPacks : model.numberofpacks2,
				Cost : model.cost2,
				ABV : model.abv2
			};			
		}		
		
		function calculate(model) {
			  var offer1 = getOfferInfo1(model);
			  var offer2 = getOfferInfo2(model);			  
			  
			  // calculate winner
			  var offer1per100ml = getPricePer100ml(offer1);
			  var offer2per100ml = getPricePer100ml(offer2);	

			  //var offer1per100mlABV = offer1.getPricePerMlOfAlcohol();
			  //var offer2per100mlABV = offer2.getPricePerMlOfAlcohol();				  	  
			  
			  //var offer1percan = (offer1per100ml / 100) * offer1.CanSize;
			  //var offer2percan = (offer2per100ml / 100) * offer2.CanSize;
			  			  
			  var resultHeadline = (offer1per100ml < offer2per100ml) ? "Offer 1 wins!" : "Offer 2 wins!";
			  if(offer1per100ml === offer2per100ml) {
				  resultHeadline = "Both Offers The Same!";
			  }
			  
			  return resultHeadline;
		}
		
		return {
			calculate: calculate
		};
	}
})();

