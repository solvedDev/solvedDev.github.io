const projects = [
	{
		title: "JSON Editor",
		text: "An advanced tool to simplify creating Minecraft addons. Enables a new addon syntax!",
		link: "https://github.com/solvedDev/JSON-Editor-App"
	},
	{
		title: "AnyLanguage",
		text: "A generator to simplify your work with .lang files.",
		link: "https://solveddev.github.io/AnyLanguage"
	},
	{
		title: "VS Code Suggestions",
		text: "Auto-completions for addons in Visual Studio Code.",
		link: "https://github.com/solvedDev/VSCode-Minecraft-Suggestions"
	},
	{
		title: "Chain-Crafting",
		text: "A custom crafting engine for Minecraft Bedrock based on the <em>minecraft:interact</em> component.",
		link: "https://github.com/solvedDev/Chain-Crafting"
	},
	{
		title: "Item-Generator",
		text: "Custom item behavior made easy. On every entity.",
		link: "https://github.com/solvedDev/Item-Generator"
	},
	{
		title: "MCBE Documentation",
		text: "<strong>[WIP]</strong> A parseable addon documentation created out of vanilla files.",
		link: "https://github.com/solvedDev/MCBE-Documentation"
	},
	{
		type: "local-article",
		key: "server-uis",
		title: "Server UIs",
		text: "About how you can create an immersive, new UI for NPCs with only a behavior pack."
	}
];
const local_articles = {
	"server-uis": "https://solveddev.github.io/local_articles/server-uis"
};

class Article {
	constructor(pImage="images/template.png", pTitle, pText, pLink="#") {
		this.data = `<a class="article" href=${pLink}>
			<span class="img-container">
				<img src="${pImage}" class="center" alt="">
			</span>
			<span class="article-main">
				<h1>${pTitle}</h1>
				<p class="article-text">
					${pText}
				</p>
			</span>
		</a>`
	}

	get() {
		return this.data;
	}
	add() {
		document.querySelector("body div").innerHTML += this.data;
	}
}

class LocalArticle extends Article {
	constructor(pImage="images/template.png", pTitle, pKey, pText) {
		super(pImage, pTitle, "", "");
		this.data = `<a class="article" href="#" onclick="renderLocalArticle('${pKey}')">
			<span class="img-container">
				<img src="${pImage}" class="center" alt="">
			</span>
			<span class="article-main">
				<h1>${pTitle}</h1>
				<p class="article-text">
					${pText}
				</p>
			</span>
		</a>`
	}
}

class CodeSnippet {
	constructor() {
		this.data = `<figure>
			<pre>
			  <code>
				<!-- your code here -->
				{
					"x": {

					}
				}
			  </code>
			</pre>
		</figure>`
	}
}

class ErrorScreen {
	constructor(pError) {
		this.data = `<h1>ERROR</h1>
		<p>${pError}</p>`;
	}

	get() {
		return this.data;
	}
}

function renderProjects(pReset=true) {
	if(pReset) {
		let main = document.querySelector("body div");
		main.innerHTML = "";
		main.classList.add("main-page");
		window.scrollTo(0, 0);
	} 
	for(let i in projects) {
		if(projects[i].type == "local-article") {
			new LocalArticle(projects[i].image, projects[i].title, projects[i].key, projects[i].text).add();
		} else {
			new Article(projects[i].image, projects[i].title, projects[i].text, projects[i].link).add();
		}
	}
}

function renderLocalArticle(pKey) {
	let main = document.querySelector("body div");
	fetch(local_articles[pKey])
		.then(pResponse => pResponse.text())
		.then(pText => main.innerHTML = pText)
		.catch(pError => main.innerHTML = new ErrorScreen(pError).get());

	let nav = document.querySelector("nav");
	let btn = document.createElement("button");
	btn.innerText = "<";
	btn.classList.add("back-btn");
	btn.onclick = function() {
		nav.removeChild(btn);
		renderProjects();
	}

	main.classList.remove("main-page");
	nav.insertBefore(btn, nav.firstElementChild);
	window.scrollTo(0, 0);
}
