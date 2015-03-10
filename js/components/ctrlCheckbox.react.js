var React = require('react/addons');
var MUI = require('material-ui');
var Checkbox = MUI.Checkbox;

var CtrlCheckbox = React.createClass({
	render: function() {
		return (
			<p>
				<h5>{this.props.control.title}</h5>
				<Checkbox
				  name="checkboxName1"
				  value="checkboxValue1"
				  label="went for a run today" />
				<Checkbox
				  name="checkboxName2"
				  value="checkboxValue2"
				  label="fed the dog"
				  defaultChecked={true} />
				<Checkbox
				  name="checkboxName3"
				  value="checkboxValue3"
				  label="built a house on the moon"
				  disabled={true} />
			</p> 
		);
	}
});

module.exports = CtrlCheckbox;