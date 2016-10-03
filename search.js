var React = require('react');

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
	                console.log(this.state.location);
	                this.setState({location: array});
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
	render: function() {
		return(
			<form className="city" autocomplete="off" id="userInput">
		        <div className="search">
		            <input onChange={this.onInputChange} type="text" name="city" id="autocomplete" placeholder="Search weather by city, ZIP" required/>
		            <button onClick={this.onSearchClick} type="submit"><i className="fa fa-search"></i></button>
			        <div id="autoCompResults" className='hidden'>
			        	<ul></ul>
			   		</div>
			   	</div>
		    </form>
		);
	}
});

module.exports = Search;