import * as React from "react";
import './question-item.less';
import { Question } from "../data/data";

interface QuestionItemProps {
	Question: Question;
	Index: number;
	Open: boolean;
	OnClick: () => void;
}

const plusIcon = require("../images/icon-plus.svg");
const minusIcon = require("../images/icon-minus.svg");

const QuestionItem = (props: QuestionItemProps) => {
	const { Question, Index, Open, OnClick } = props;
	return (
		<>
			<div key={`Key_Question_${Index}`} className="question" >
				<div>{Question.Question}</div>
				<button onClick={OnClick}>
					<img
						src={Open ? minusIcon : plusIcon}
						alt={Open ? "close" : "expand"}
					/>
				</button>
			</div>
			{Open &&
				<div key={`Key_Answer_${Index}`} className="answer">{Question.Answer}</div>
			}
		</>
	);
};

export default QuestionItem;