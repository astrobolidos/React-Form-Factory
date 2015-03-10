var React = require('react/addons');

var QuestionList = React.createClass({
	getInitialState: function() {
		return { questions: QuestionData }
	},
	componentWillMount: function(){
		this.setState( { questions: this.state.questions })
	},
	render: function() {

		var self = this, questions = this.state.questions;
		console.log('this is question list');
		console.log(questions);
		return (
			<div className="question-list"> 
				<h1>Welcome to Question List Component</h1>
				<h2>To show a component store working!</h2>
				<ul>
					{ Object.keys(questions).map(function(question){
						return (
							<li key={question.key}>
								<h1>{questions[question].title}</h1> 
								<h2>{questions[question].type}</h2>
								{ questions[question].value }
							</li>
						)		 
					})} 
				</ul>
			</div>
		);
	}
});

var QuestionData = [
	{ id: 1,title: 'Question One', type: 'input', value:'test' },
	{ id: 2,title: 'Question Two', type: 'radio', value:'1' },
	{ id: 3,title: 'Quesiton Three', type: 'slide', value:'48' },
	{ id: 4,title: 'Question Four', type: 'checkbox', value:'checked' },
	{ id: 5,title: 'Question Five', type: 'select', value:'2' },
];

module.exports = QuestionList;