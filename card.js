console.log("Hello")
const CardTemplate = document.createElement("template");
CardTemplate.innerHTML = `
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<style>
	.card-image{
		// border: 1px solid red;
		width: fit-content;
		height: fit-content;
	};
	.material-symbols-outlined {
		font-variation-settings:
		'FILL' 0,
		'wght' 400,
		'GRAD' 0,
		'opsz' 48
	  };
</style>
<div class="card-template">
        <div class="card-item">
            <div class="card-image">
			<div class="material-symbols-outlined">
				close
			</div>
            </div>
        </div>
</div>`
;
class AppCards extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(CardTemplate.content.cloneNode(true));
	}
	connectedCallback() {
		var id = Math.random()
		var img = document.createElement("img") 
		img.setAttribute("src",this.getAttribute("url"))
		this.setAttribute("id",id)
		this.shadowRoot.querySelector(".card-image").appendChild(img)
		this.shadowRoot.querySelector(".material-symbols-outlined").setAttribute("onclick",`destroy(${id})`)
		img.setAttribute("ondblclick",`destroy(${id})`)
	}

	disconnectedCallback() {
	}

	adoptedCallback() {
	}
	


}

customElements.define("app-cards", AppCards);