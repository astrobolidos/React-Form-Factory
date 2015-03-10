var React = require('react/addons');
var ControlFactory = require('./controlFactory.react');

var QuestionList = React.createClass({
	getInitialState: function() {
		return { questions: QuestionData }
	},
	componentWillMount: function(){
		this.setState( { questions: this.state.questions })
	},
	render: function() {
		return (
			<div className="question-list"> 
				<h1>Welcome to Question List Component</h1>
				<h2>To show a component store working!</h2>
				<ul>
					{ this.state.questions.map(function(question) {
						return <ControlFactory key={question.id} control={question} />;
					})}
				</ul>
			</div>
		);
	}
});

var QuestionData = [
	{ id: 1, title: 'Question One', type: 'input', value:'test' },
	{ id: 2, title: 'Question Two', type: 'radio', value:'1' },
	{ id: 3, title: 'Quesiton Three', type: 'slide', value:'48' },
	{ id: 4, title: 'Question Four', type: 'checkbox', value:'checked' },
	{ id: 5, title: 'Question Five', type: 'select', value:'2' },
];

module.exports = QuestionList;