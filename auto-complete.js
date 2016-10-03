var React = require('react');

var Results = React.createClass({
	render: function() {
		var onAddressSelect = this.props.onAddressSelect;
		var results = (this.props.results || []).map(function(result, i) {
			var address = result.formatted_address;
			var key = 's' + i;
			return (
				<li key={key} onClick={onAddressSelect} className="autoCompList" >
		            <div id={key}>{address}</div>
		        </li>
			);
		});
		return (
			<div id="autoCompResults" className='hidden'>
	        	<ul>
	        		{results}
	        	</ul>
	   		</div>
		);
	}
});

module.exports = Results;