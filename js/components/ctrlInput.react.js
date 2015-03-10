var React = require('react/addons');

var CtrlInput = React.createClass({
	render: function() {
		return (
			<p>
				<input type="text" value="hello"/>
			</p>
		);
	}
});

module.exports = CtrlInput;