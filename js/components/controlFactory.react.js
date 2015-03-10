var React = require('react/addons');
var CtrlInput = require('./ctrlInput.react');

var ControlFactory = React.createClass({
	render: function() {
		var control;
		switch (this.props.control.type) {
			case 'input': 
				control = <CtrlInput control={this.props.control} />
				break;
			default: 
				control = <p>Control {this.props.control.title} could not be rendered!
				invalid type: {this.props.control.type}</p>
				break;
		}

		return (
			<li>{control}</li> 
		)
	}
});

module.exports = ControlFactory;