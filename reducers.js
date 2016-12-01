var actions = require('./actions');

var combineReducers = require('redux').combineReducers;

var initialState = {
	location: {
		location: ''
	},
	weather: {
		description: '',
		humidity: '',
		windSpeed: '',
		temp: '',
		iconSrc: '',
	},
};
var weatherReducer = function(state, action) {
	state = state || initialState.weather;
	if (action.type === actions.SET_WEATHER) {
		var data = action.content;
		console.log('Content of reducer', data);
		var tmp = Math.floor(((data.main.temp * 9 / 5) - 459.67));
		var icon =	'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
		state = {
			description: data.weather[0].description,
			humidity: data.main.humidity,
			windSpeed: data.wind.speed,
			temp: tmp,
			iconSrc: icon
		};
	}
	return state;
};
var locationReducer = function(state, action) {
	state = state || initialState.location;
	if (action.type === actions.SET_LOCATION) {
		var loc = action.content;
		state = {
			location: loc
		};
	}
	return state;
};

var reducer = combineReducers({
	location: locationReducer,
	weather: weatherReducer
});

exports.reducer = reducer;