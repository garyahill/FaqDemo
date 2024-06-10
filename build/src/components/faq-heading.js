import * as React from "react";
import "./faq-heading.less";
var starIcon = require("../images/icon-star.svg");
var FaqHeading = function () {
    return (React.createElement("div", { className: "title-container" },
        React.createElement("img", { src: starIcon, alt: "missing" }),
        React.createElement("div", { className: "title" }, "FAQs")));
};
export default FaqHeading;
