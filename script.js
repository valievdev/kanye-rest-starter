const fetchAndRenderQuote = async () => {
	// Let's fetch the quote here from https://api.kanye.rest
	// You can read up on how to use fetch https://javascript.info/fetch OR https://codedamn.com/learn/javascript-basics/modern-javascript-es6/promises-and-fetch.4ZGpfLemRny1KR_cjVlmc
	// We want to fetch from the kanye rest url, then 
	// format the response as JSON, because it is a javascript object

	const result = fetch(); // fill in the rest

	// Once you fetch and parse with .json(), you'll get a response like this
	// {
	//		quote: "....."	
	// }

	// Let's access the quote property from this object
	// and populate our quote__text field with it

	const quoteTextElement = document.querySelector(); // fill in the rest

	// Now that you've selected the quoteTextElement, you need to set
	// the textContent property to our text the quote we recieved above
}

const renderImage = () => {
	// Go ahead and create an image element,
	const image = document. // Finish this line to create img element
	// and set the src attribute to something like
	// https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-kanye-west-pdart.jpg
	// Don't forget the alt either :)

	// then you can select the div with class quote__img
	const quoteImageWrapper = document.querySelector() // finish this line
	// and append your new img element there
}

const renderRefreshQuoteButton = () => {
	// Let's create a button here that when we click it,
	// it will run fetchAndRenderQuote() to get a new quote

	// First create the button element
	const button = document. // Finish this line to create button element
	// and make sure to give it some textContent

	button.textContent // Finish this line with button text

	// Then add an event listener to it for a click
	// and you can set the callback function to be fetchAndRenderQuote()

	// Lastly, don't forget to append the element to the page
	// specifically the div with class quote__content
	const quoteContentWrapper = document.querySelector(); // Complete this line

	// Now append the button element to the quoteContentWrapper
}

window.onload = () => {
	// Here is the code we're going to run when the page is loaded
	fetchAndRenderQuote();
	renderImage();
	renderRefreshQuoteButton();
}