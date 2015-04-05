var React = require('react/addons');
var DatePicker = require('material-ui').DatePicker;

var CtrlCalendar = React.createClass({
	render: function() {
		return <DatePicker hintText='Your date of birth' mode="landscape" /> 
	}
});

module.exports = CtrlCalendar;