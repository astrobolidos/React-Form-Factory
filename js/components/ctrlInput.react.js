var React = require('react/addons');

var CtrlInput = React.createClass({
	render: function() {
		return (
			<p>
				<input type={this.props.control.type} value="hello"/>
			</p>
		);
	}
});

module.exports = CtrlInput;