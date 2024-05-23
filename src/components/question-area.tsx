import React, { useState } from 'react';
import QuestionItem from "./question-item";
import "./question-area.less";
import { Question } from '../data/data';

interface QuestionAreaProps {
	questions: ReadonlyArray<Question>;
}

const QuestionArea = (props: QuestionAreaProps) => {
	const { questions } = props;
	const [openItem, setOpenItem] = useState<number | undefined>(undefined);

	function buildOutput() {

		const getElements = () => {
			const results = questions.map((element, index: number) => {
				const itemIsOpen = openItem === index ? true : false;
				return (
					<div key={`Question_Group_${index}`} className="container">
						<QuestionItem
							Question={element}
							Index={index}
							Open={itemIsOpen}
							OnClick={() => itemIsOpen ? setOpenItem(undefined) : setOpenItem(index)}
						/>
					</div>
				)
			});

			return results;
		}

		return (<div>{getElements()}</div>);
	}

	const content = buildOutput();
	return content;
};

export default QuestionArea;
