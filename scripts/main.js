const products = [
	{
		image: "",
		title: "JSON Editor",
		text: "",
		link: ""
	}
]

class Article {
	constructor(pTitle, pText, pLink, pImage) {
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
}