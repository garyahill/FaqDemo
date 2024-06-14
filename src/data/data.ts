export interface Question {
	Question: string;
	Answer: string;
}

function getApplicationData(): ReadonlyArray<Question> {
	return [
		{
			"Question": "How can I reset my password on your website?",
			"Answer": "You can reset your password by clicking on the \"Forgot Password\" link on the login page. Follow the instructions sent to your registered email address to reset your password securely.",
		},
		{
			"Question": "What payment methods do you accept?",
			"Answer": "We accept payments via credit cards (Visa, MasterCard, American Express), PayPal, and sometimes direct bank transfers. Our checkout process will guide you through the available options.",
		},
		{
			"Question": "How long does shipping typically take?",
			"Answer": "Shipping times vary depending on your location and the shipping method chosen. Standard shipping within the continental US usually takes 3-7 business days, while international shipping may take longer.",
		},
		{
			"Question": "Can I return or exchange an item if I'm not satisfied?",
			"Answer": "Yes, we offer a return and exchange policy for most items within 30 days of purchase.",
		},
	];
}

export default getApplicationData;