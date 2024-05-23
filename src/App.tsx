import * as React from "react";
import './App.less';
import getApplicationData from './data/data';
import QuestionArea from './components/question-area';
import FaqHeading from './components/faq-heading';

function App() {

	const items = getApplicationData();

	return (
		<div className="app-container">
			<div className="faq-container">
				<FaqHeading />
				<QuestionArea questions={items} />
			</div>
		</div>
	);
}

export default App;