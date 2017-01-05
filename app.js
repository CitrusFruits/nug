/* global Vue, exclamations, calculateTexts */
(function(){
	var CALCULATE_DURATION = 2000;
	var CALCULATE_INTERVAL = 50;
	var app = new Vue({
		el: '#nug-app',
		data: {
			money: '5',
			food: { value: 'chickennuggets', text: 'Chicken Nuggets', exchangeRate: 5 },
			foods: [
				{ value: 'chickennuggets', text: 'Chicken Nuggets', exchangeRate: 5 },
				{ value: 'mcdoubles', text: 'McDoubles', exchangeRate: 2 },
				{ value: 'tacos', text: 'Tacos', exchangeRate: 3 },
				{ value: 'gumballs', text: 'Gumballs', exchangeRate: 4 },
			],
			foodCount: 0,
			showCount: false,
			exclamation: '',
			calculateText: calculateTexts[Math.floor(calculateTexts.length*Math.random())]
		},
		methods: {
			calculate: function(){
				var self = this;
				var calcDuration = 0;
				setTimeout(runaround, CALCULATE_INTERVAL);
				function runaround(){
					if(calcDuration > CALCULATE_DURATION){
						self.foodCount = self.food.exchangeRate * self.money;
						return;
					}
					self.foodCount = Math.ceil(5000 * Math.random());
					calcDuration += CALCULATE_INTERVAL;
					setTimeout(runaround, CALCULATE_INTERVAL);
				}
				self.exclamation = exclamations[Math.floor(exclamations.length * Math.random())];
				this.showCount = true;
			},
			clearResult: function(){
				this.showCount = false;
			}
		}
	});
})();