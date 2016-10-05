var React = require('react');
var connect = require('react-redux').connect;

var Weather = React.createClass({
	render: function() {
		return (
			 <div className={this.props.location == '' ? 'hidden' : 'main'}>
	            <div>
		            <div id="location"><span>{this.props.location}</span></div>
		            <div id="day"><span id="dy">{this.props.dayTime}</span></div>
		            <div id="wtrDscrp"><span id="dscrp">{this.props.description}</span></div>
		            <div id="temp">
		                <div>
		                	<div id="icon"><img src={this.props.iconSrc}/></div>
		                    <div id="tmp">
		                        <span>{this.props.temp}</span>
		                    </div>
		                    <div id="deg">
		                        <span>{'\u2109'}</span>
		                    </div>
		                </div>
		            </div>
		            <div id="misc">
		                <div className="humidity">
		                    Humidity: <span id="humidity">{this.props.humidity}%</span>
		                </div>
		                <div className="wind">
		                    Wind: <span id="wind">{this.props.windSpeed} mph</span>
		                </div>
		            </div>
		        </div>
	        </div>
		);
	}
});

var mapStateToProps = function(state, props) {
	return {
		location: state.location.location,
		dayTime: state.dayTime,
		description: state.weather.description,
		humidity: state.weather.humidity,
		windSpeed: state.weather.windSpeed,
		iconSrc: state.weather.iconSrc,
		temp: state.weather.temp
	};
};

var Container = connect(mapStateToProps)(Weather);

module.exports = Container;