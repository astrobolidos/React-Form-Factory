var React = require('react/addons');

var CtrlSelect = React.createClass({
	render: function() {
		return (
			<p>
				<select name="select" defaultValue="value2">
					<option value="value1">Value 1</option> 
					<option value="value2">Value 2</option>
					<option value="value3">Value 3</option>
				</select> 
			</p>
		);
	}
});

module.exports = CtrlSelect;