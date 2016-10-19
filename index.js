var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var connect = require('react-redux').connect;

var store = require('./store');
var Search = require('./search');
var Weather = require('./weather');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<div className="header">
					<h1>Weather</h1>
				</div>
				<Search />
				<Weather />
			</div>
		);
	}
});

$(document).ready(function() {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('app')
	);
});