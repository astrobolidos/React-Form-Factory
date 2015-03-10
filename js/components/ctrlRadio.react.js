var React = require('react/addons');
var MUI = require('material-ui');
var RadioButtonGroup = MUI.RadioButtonGroup;
var RadioButton = MUI.RadioButton;

var CtrlRadio = React.createClass({
	render: function() {
		return (
			<RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
				<RadioButton value="light"	label="prepare for light speed" />
				<RadioButton value="not_light" label="light speed too slow" defaultChecked={true} />
				<RadioButton value="ludicrous" label="go to ludicous speed" disabled={true}/>
			</RadioButtonGroup> 
		);
	}
});

module.exports = CtrlRadio;