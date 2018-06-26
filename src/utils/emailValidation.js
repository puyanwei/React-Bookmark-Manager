let urlValidation = (input) => {
	// Regex taken from https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149
	const websiteRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
	return websiteRegex.test(input);
};

export { urlValidation };
