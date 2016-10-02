var React = require('react');

var Search = React.createClass({
	render: function() {
		return(
			<form className="city" autocomplete="off" id="userInput">
		        <div className="search">
		            <input type="text" name="city" id="autocomplete" placeholder="Search weather by city, ZIP" required/>
		            <button type="submit"><i className="fa fa-search"></i></button>
			        <div id="autoCompResults" className='hidden'>
			        	<ul></ul>
			   		</div>
			   	</div>
		    </form>
		);
	}
});

module.exports = Search;