var SET_WEATHER = 'SET_WEATHER';
var setWeather = function(content) {
	return {
		type: SET_WEATHER,
		content: content
	};
};

var SET_LOCATION = 'SET_LOCATION';
var setLocation = function(content) {
	return {
		type: SET_LOCATION,
		content: content
	};
};

exports.SET_WEATHER = SET_WEATHER;
exports.setWeather = setWeather;
exports.SET_LOCATION = SET_LOCATION;
exports.setLocation = setLocation;
