import React, { useState } from 'react';
import QuestionItem from "./question-item";
import "./question-area.less";
var QuestionArea = function (props) {
    var questions = props.questions;
    var _a = useState(undefined), openItem = _a[0], setOpenItem = _a[1];
    function buildOutput() {
        var getElements = function () {
            var results = questions.map(function (element, index) {
                var itemIsOpen = openItem === index ? true : false;
                return (React.createElement("div", { key: "Question_Group_".concat(index), className: "container" },
                    React.createElement(QuestionItem, { Question: element, Index: index, Open: itemIsOpen, OnClick: function () { return itemIsOpen ? setOpenItem(undefined) : setOpenItem(index); } })));
            });
            return results;
        };
        return (React.createElement("div", null, getElements()));
    }
    var content = buildOutput();
    return content;
};
export default QuestionArea;
