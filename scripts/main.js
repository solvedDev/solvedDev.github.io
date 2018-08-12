const projects = [
	{
		title: "JSON Editor",
		text: "An advanced tool to simplify creating Minecraft addons. Enables a new addon syntax!",
		link: "https://github.com/solvedDev/JSON-Editor-App"
	},
	{
		title: "AnyLanguage",
		text: "A generator to simplify your work with .lang files.",
		link: "https://github.com/solvedDev/AnyLanguage"
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
	}
]

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

function renderProjects() {
	for(let i in projects) {
		new Article(projects[i].image, projects[i].title, projects[i].text, projects[i].link).add();
	}
}