var React = require('react/addons');
var MUI = require('material-ui');
var DropDownMenu = MUI.DropDownMenu;

var CtrlSelect = React.createClass({
	render: function() {
		var menuItems = [
			{ payload: '1', text: 'value1' },
			{ payload: '2', text: 'value2' },
			{ payload: '3', text: 'value3' },
		];

		return (
			<p>
				<h5>{this.props.control.title}</h5>
				<DropDownMenu menuItems={menuItems} selectedIndex={2} />
			</p>
		);
	}
});

module.exports = CtrlSelect;