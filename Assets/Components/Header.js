// custom-header.js
class CustomHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100vw;                    
                    padding: 10px 20px;
                    border-bottom: 1px solid hsl(var(--border));
                }
                .header {
                    background: hsl(var(--card));
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .title {
                    font-size: 1.5em;
                    font-weight: bold;
                }
                nav {
                    display: flex;
                    gap: 15px;
                }
                ::slotted(a) {
                    color: white;
                    text-decoration: none;
                    font-size: 1em;
                    padding: 5px 10px;
                }
                ::slotted(a:hover) {
                    background: hsl(var(--accent));
                    border-radius: 5px;
                }

                ::slotted(a.active-nav-link) {
                    background: hsl(var(--muted));
                    border-radius: 5px;
                }
            </style>
            <header class="header">
                <h1 class="title"></h1>
                <nav>
                    <slot></slot>  <!-- This allows user-defined nav elements -->
                </nav>
            </header>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelector(".title").textContent = this.getAttribute("title") || "Hello World";
    }
}

customElements.define("my-header", CustomHeader);
