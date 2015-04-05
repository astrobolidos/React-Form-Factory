require('../css/styles.less');
window.React = require('react/addons');

var React = require('react/addons');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


var QuestionList = require('./components/questionList.react');


React.render(<QuestionList />, document.getElementById('example'));