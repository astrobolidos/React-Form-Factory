var React = require('react/addons');
var MUI = require('material-ui');
var TextField = MUI.TextField;

var CtrlInput = React.createClass({
	render: function() {
		return (
			<p>
				<h6>{this.props.control.title}</h6>
				<TextField hintText='Enter value here!' />
			</p>
		);
	}
});

module.exports = CtrlInput;