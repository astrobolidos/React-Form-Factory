var React = require('react/addons');
var CtrlInput = require('./ctrlInput.react');
var CtrlSelect = require('./ctrlSelect.react');
var CtrlRadio = require('./ctrlRadio.react');

var ControlFactory = React.createClass({
	render: function() {
		var control;
		switch (this.props.control.type) {
			case 'input': 
			case 'checkbox':
				control = <CtrlInput control={this.props.control} /> 
				break;
			case 'radio':	
				control = <CtrlRadio control={this.props.control} />
				break;
			case 'select': 
				control = <CtrlSelect control={this.props.control} />
				break;
			default: 
				control = <p>Control {this.props.control.title} could not be rendered!
				invalid type: {this.props.control.type}</p>
				break;
		}

		return ( <li>{control}</li>);
	}
});

module.exports = ControlFactory;