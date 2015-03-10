var React = require('react/addons');

var CtrlRadio = React.createClass({
	render: function() {
		return (
			<p>
				<label>{this.props.control.title}</label>
				<input type="radio" name="rdo" value="option 1"/> Value One
				<input type="radio" name="rdo" value="option 2" checked/> Value One
				<input type="radio" name="rdo" value="option 3"/> Value One
			</p> 
		);
	}
});

module.exports = CtrlRadio;