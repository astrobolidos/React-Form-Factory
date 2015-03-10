var React = require('react/addons');
var CtrlInput = require('./ctrlInput.react');
var CtrlSelect = require('./ctrlSelect.react');
var CtrlRadio = require('./ctrlRadio.react');
var CtrlCheckbox = require('./ctrlCheckbox.react');

var ControlFactory = React.createClass({
	render: function() {
		var control;
		switch (this.props.control.type) {
			case 'input': 
				control = <CtrlInput control={this.props.control} /> 
				break;
			case 'radio':	
				control = <CtrlRadio control={this.props.control} />
				break;
			case 'checkbox':
				control = <CtrlCheckbox control={this.props.control} />
				break;
			case 'select': 
				control = <CtrlSelect control={this.props.control} />
				break;
			default: 
				control = <p>
					<h5>{this.props.control.title}</h5> 
					This control could not be rendered! Invalid type: {this.props.control.type}</p>
				break;
		}

		return (<li>{control}</li>);
	}
});

module.exports = ControlFactory;