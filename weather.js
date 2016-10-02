var React = require('react');

var Weather = React.createClass({
	render: function() {
		return (
			 <div className="main">
	            <div id="location"><span>Lake Worth, FL, USA</span></div>
	            <div id="day"><span id="dy">Sundat 06:31 PM</span></div>
	            <div id="wtrDscrp"><span id="dscrp">Broken Clouds</span></div>
	            <div id="temp">
	                <div>
	                	<div id="icon"><img src="https://openweathermap.org/img/w/04d.png"/></div>
	                    <div id="tmp">
	                        <span>82</span>
	                    </div>
	                    <div id="deg">
	                        <span>&#8457</span>
	                    </div>
	                </div>
	            </div>
	            <div id="misc">
	                <div className="humidity">
	                    Humidity: <span id="humidity">86%</span>
	                </div>
	                <div className="wind">
	                    Wind: <span id="wind">1 mph</span>
	                </div>
	            </div>
	            <div id="hrForecast"></div>
	            <div id="dayForecast">
	            	<div id="df">
	            		<div id=""></div>
	            		<div></div>
	            	</div>
	            </div>
	        </div>
		);
	}
});

module.exports = Weather;