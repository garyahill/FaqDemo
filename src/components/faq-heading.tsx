import * as React from "react";
import "./faq-heading.less";


const starIcon = require("../images/icon-star.svg");

const FaqHeading = () => {
	return (
		<div className="title-container">
			<img src={starIcon} alt="missing" />
			<div className="title">FAQs</div>
		</div>
	);
};

export default FaqHeading;