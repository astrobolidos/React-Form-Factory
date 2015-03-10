var React = require('react/addons');

var CtrlCheckbox = React.createClass({
	render: function() {
		return (
			<p>
				<label>{this.props.control.title}</label>
				<input type="checkbox" name="ckbx" value="option 1"/> Value One
				<input type="checkbox" name="ckbx" value="option 2"/> Value One
				<input type="checkbox" name="ckbx" value="option 3"/> Value One
			</p> 
		);
	}
});

module.exports = CtrlCheckbox;