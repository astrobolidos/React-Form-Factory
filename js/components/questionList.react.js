var React = require('react/addons');

var QuestionList = React.createClass({
	render: function() {
		console.log('this is question list');
		return (
			<h1>Welcome to Question List</h1>
		);
	}
});

module.exports = QuestionList;