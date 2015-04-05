var React 				= require('react/addons');
var CtrlInput 		= require('./ctrlInput.react');
var CtrlSelect 		= require('./ctrlSelect.react');
var CtrlRadio 		= require('./ctrlRadio.react');
var CtrlCheckbox 	= require('./ctrlCheckbox.react');
var CtrlCalendar	= require('./ctrlCalendar');

var ControlFactory = React.createClass({
	render: function() {
		control = CreateControl(this);

		return (<li>{control}</li>);
	}
});

module.exports = ControlFactory;

CreateControl = function(component) {
	var control;
	switch (component.props.control.type) {
		case 'input': 
			control = <CtrlInput control={component.props.control} /> 
			break;
		case 'radio':	
			control = <CtrlRadio control={component.props.control} />
			break;
		case 'checkbox':
			control = <CtrlCheckbox control={component.props.control} />
			break;
		case 'select': 
			control = <CtrlSelect control={component.props.control} />
			break;
		case 'calendar':
			control = <CtrlCalendar control={component.props.control} />
			break;
		default: 
			control = <p>
				<h5>{component.props.control.title}</h5> 
				This control could not be rendered! Invalid type: {component.props.control.type}</p>
			break;
	}
	return control;	
}