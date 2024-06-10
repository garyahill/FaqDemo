import * as React from "react";
import './App.less';
import getApplicationData from './data/data';
import QuestionArea from './components/question-area';
import FaqHeading from './components/faq-heading';
function App() {
    var items = getApplicationData();
    return (React.createElement("div", { className: "app-container" },
        React.createElement("div", { className: "faq-container" },
            React.createElement(FaqHeading, null),
            React.createElement(QuestionArea, { questions: items }))));
}
export default App;
