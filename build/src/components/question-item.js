import * as React from "react";
import './question-item.less';
var plusIcon = require("../images/icon-plus.svg");
var minusIcon = require("../images/icon-minus.svg");
var QuestionItem = function (props) {
    var Question = props.Question, Index = props.Index, Open = props.Open, OnClick = props.OnClick;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { key: "Key_Question_".concat(Index), className: "question" },
            React.createElement("div", null, Question.Question),
            React.createElement("button", { onClick: OnClick },
                React.createElement("img", { src: Open ? minusIcon : plusIcon, alt: Open ? "close" : "expand" }))),
        Open &&
            React.createElement("div", { key: "Key_Answer_".concat(Index), className: "answer" }, Question.Answer)));
};
export default QuestionItem;
