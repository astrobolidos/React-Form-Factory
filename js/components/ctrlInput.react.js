var React = require('react/addons');
var MUI = require('material-ui');
var TextField = MUI.TextField;

var CtrlInput = React.createClass({
	render: function() {
		return (
			<TextField hintText='Enter value here!' />
		);
	}
});

module.exports = CtrlInput;