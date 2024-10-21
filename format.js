let meta = `
	<title>NERD</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">`;

//	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+" crossorigin="anonymous">
//	<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js" integrity="sha384-7zkQWkzuo3B5mTepMUcHkMB5jZaolc2xDwL6VFqjFALcbeS9Ggm/Yr2r3Dy4lfFg" crossorigin="anonymous"></script>

let header = `
	<div id="header">
		<a href="index.html">
			COOL HEADING
		</a>
	</div>
	<div id="content">`;

document.head.innerHTML = meta
document.body.innerHTML = header + document.body.innerHTML + '</div>';

// Load Katex script
let script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js';
script.crossorigin = "anonymous"
document.head.appendChild(script);

// Load Katex style
let link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css';
link.crossorigin = "anonymous"
document.head.appendChild(link);

// Use Katex script
script.onload = () => {
	let katexElementList = document.getElementsByTagName('katex');
	for (let i = 0; i < katexElementList.length; i++) {
		let element = katexElementList[i];
		katex.render(element.innerText, element, {throwOnError: false});
	}
}