var React = require('react');
var connect = require('react-redux').connect;

var AutoCompleteResults = require('./auto-complete');
var actions = require('./actions');

var Search = React.createClass({
	getInitalState: function() {
		return {
			input: '',
			location: []
		};
	},
	onSearchClick: function(event) {
		event.preventDefault();
		var location = this.state.location[0];
		var latitude = location.geometry.location.lat;
		var longitude = location.geometry.location.lng;
		this.getCurrent(latitude, longitude);
		this.setState({input: '', location: []});
	},
	onAddressSelect: function(event) {
		event.preventDefault();
		var id = event.target.id;
		var index = id.substring(1);
		var location = this.state.location[index];
		var lctnString = location.formatted_address;
		this.props.dispatch(actions.setLocation(lctnString));
		var latitude = location.geometry.location.lat;
		var longitude = location.geometry.location.lng;
		this.getCurrent(latitude, longitude);
		this.setState({input: '', location: []});
	},
	onInputChange: function(event) {
		if (this.state && this.state.input == '') {
			this.props.dispatch(actions.setLocation(''));
		}
		var inputValue = event.target.value;
		this.setState({input: inputValue});
		this.getLocation(inputValue);
	},
	getCurrent: function(lt, lng) {
	    var callback = function(result) {
	    	this.props.dispatch(actions.setWeather(result));
	    };
	    var result = callback.bind(this);
	    
	    var request = {
	        lat: lt,
	        lon: lng,
	        APPID: '8dac38d11acbe3e6ecf035a449582cac',
	    };
	    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + request.lat + '&lon=' + request.lon + '&APPID=' + request.APPID, function(data) {
	    	console.log(data);
	    	result(data);
	    });
	    // $.ajax({
	    //         url: 'http://api.openweathermap.org/data/2.5/weather',
	    //         crossDomain: true,
	    //         data: request,
	    //         dataType: 'json',
	    //         type: 'GET',
	    //     })
	    //     .done(function(data) {
	    //         result(data);
	    //     })
	    //     .fail(function(jqXHR, error) {
	    //         console.log('Weather API call failed', error);
	    //     });
	},
	getLocation: function(adrs) {
	    var callback = function(array) {
	    	this.setState({location: array});
	    };
	    var result = callback.bind(this);
	    
	    var params = {
	        address: adrs,
	        key: 'AIzaSyBflgBDGxIWpqwAjzvQYOVjQ_dVd6QCXDQ',
	    };
	    if (adrs != '') {
	        $.ajax({
	                url: 'https://maps.googleapis.com/maps/api/geocode/json',
	                data: params,
	                type: 'GET',
	            })
	            .done(function(data) {
	                $('#autoCompResults').removeClass('hidden');
	                var array = data.results;
	                result(array);
	            })
	            .fail(function(jqXHR, error) {
	                console.log('Location API call failed', error);
	            });
	    } else {
	        $('#autoCompResults').addClass('hidden').children().empty();
	    }
	},
	render: function() {
		if (this.state) {
			var results = (this.state.location || []);
		} else {
			var results = [];
		}
		return(
			<form className="city" autocomplete="off" id="userInput">
		        <div className="search">
		            <input onChange={this.onInputChange} type="text" name="city" id="autocomplete" value={this.state ? this.state.input : ''} placeholder="Search weather by city, ZIP" required/>
		            <button onClick={this.onSearchClick}>
		            	<i className="fa fa-search"></i>
		            </button>
			        <AutoCompleteResults results={results} onAddressSelect={this.onAddressSelect}/>
			   	</div>
		    </form>
		);
	}
});

var Container = connect()(Search);

module.exports = Container;