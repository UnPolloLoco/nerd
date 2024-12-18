let meta = `
	<title>NERD</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">`;

//	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+" crossorigin="anonymous">
//	<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js" integrity="sha384-7zkQWkzuo3B5mTepMUcHkMB5jZaolc2xDwL6VFqjFALcbeS9Ggm/Yr2r3Dy4lfFg" crossorigin="anonymous"></script>

let header = `
	<div id="header">
		<a href="index.html">
			COOL HEADING
		</a>
	</div>
	<div id="content">`;

document.head.innerHTML = meta + document.head.innerHTML;
document.body.innerHTML = header + document.body.innerHTML + '</div>';

// Load style
let sLink  = document.createElement('link');
sLink.rel  = 'stylesheet';
sLink.type = 'text/css';
sLink.href = 'style.css';
document.head.appendChild(sLink);

// Revert background on load
sLink.onload = () => {
	document.documentElement.style.background = 'unset';
}

// Load Katex script
let kScript = document.createElement('script');
kScript.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js';
kScript.crossorigin = "anonymous"
document.head.appendChild(kScript);

// Load Katex style
let kLink  = document.createElement('link');
kLink.rel  = 'stylesheet';
kLink.type = 'text/css';
kLink.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css';
kLink.crossorigin = "anonymous"
document.head.appendChild(kLink);

// Use Katex script
kScript.onload = () => {
	let katexElementList = document.getElementsByTagName('katex');
	for (let i = 0; i < katexElementList.length; i++) {
		let element = katexElementList[i];
		katex.render(element.innerText, element, {throwOnError: false});
	}
}

// Prepare accordions
let accordionList = document.getElementsByTagName('c-accordion');
for (let i = 0; i < accordionList.length; i++) {
	let accordionElement = accordionList[i];
	accordionElement.innerHTML = accordionElement.innerHTML + '<c-accordionindicator>+</c-accordionindicator>';

	let openID = accordionElement.getAttribute('data-opens');
	let accordionPanel = document.querySelector(`[data-openedby='${openID}']`);
	let accordionIndicator = document.querySelector(`[data-opens='${openID}'] > c-accordionindicator`);

	accordionElement.addEventListener('click', function() { 
		accordionClick(accordionElement, accordionPanel, accordionIndicator);
	});
}

// Accordion click function
function accordionClick(accordion, panel, indicator) {
	let isNested = accordion.parentElement.tagName == 'C-EXTRA';
	if (indicator.innerHTML == '+') {
		// SHOW
		indicator.innerHTML = '&ndash;';
		panel.style.display = 'block';
		accordion.style.marginBottom = '0';

	} else {
		// HIDE
		indicator.innerText = '+';
		panel.style.display = 'none';
		if (!isNested) accordion.style.marginBottom = '40px';
	}
}