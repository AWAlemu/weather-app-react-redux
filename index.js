var React = require('react');
var ReactDOM = require('react-dom');

var Search = require('./search');
var Weather = require('./weather');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Search />
				<Weather />
			</div>
		);
	}
});

$(document).ready(function() {
	ReactDOM.render(
		<App />,
		document.getElementById('app')
	);
});