let urlValidation = (input) => {
	const websiteRegex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
	return websiteRegex.test(input);
};

export { urlValidation };
