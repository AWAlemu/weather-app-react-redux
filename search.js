var React = require('react');

var AutoCompleteResults = require('./auto-complete');

var Search = React.createClass({
	getInitalState: function() {
		return {
			input: '',
			location: []
		};
	},
	onSearchClick: function(event) {
		event.preventDefault();
	},
	onInputChange: function(event) {
		var inputValue = event.target.value;
		this.setState({input: inputValue});
		
		this.getLocation(inputValue);
	},
	getLocation: function(adrs) {
	    var callback = function(array) {
	    	this.setState({location: array});
	    };
	    var cb = callback.bind(this);
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
	                cb(array);
	            })
	            .fail(function(jqXHR, error) {
	                var errorElem = showError(error);
	                console.log('Location API call failed');
	                //$('.weatherResult').append(errorElem);
	            });
	    } else {
	        $('#autoCompResults').addClass('hidden').children().empty();
	    }
	},
	// onAddressSelect: function(event) {
	// 	console.log(event.target);
	// 	console.log(event.target.id);
	// 	event.preventDefault();
	// 	//var key = event.target.key;
	// 	//console.log(key);
	// },
	render: function() {
		if (this.state) {
			console.log('inside this.state');
			var results = (this.state.location || []);
		} else {
			var results = [];
		}
		return(
			<form className="city" autocomplete="off" id="userInput">
		        <div className="search">
		            <input onChange={this.onInputChange} type="text" name="city" id="autocomplete" placeholder="Search weather by city, ZIP" required/>
		            <button onClick={this.onSearchClick}>
		            	<i className="fa fa-search"></i>
		            </button>
			        <AutoCompleteResults results={results} onAddressSelect={this.onAddressSelect}/>
			   	</div>
		    </form>
		);
	}
});

module.exports = Search;