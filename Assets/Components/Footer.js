

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
                    border-top: 1px solid hsl(var(--border));
                }
                .footer {
                    background: hsl(var(--card));
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    align-items: center;
                }

                .footer-name-container {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    margin: 10px;
                }

                .footer-name {
                    text-align: center;
                    font-size: 1em;
                    font-weight: bold;
                    margin: 0;
                }

                .footer-neptun {
                    text-align: center;
                    font-size: 0.75em;
                    color: hsl(var(--muted-foreground));
                    margin: 0;
                }
            </style>
            <footer class="footer">
                <div class="footer-name-container">
                    <p class="footer-name">Fülöp Andor Zoltán</p>
                    <p class="footer-neptun">LTLNTG</p>
                </div>
                <div class="footer-name-container">
                    <p class="footer-name">Szauter Milán</p>
                    <p class="footer-neptun">GYT3DJ</p>
                </div>
            </footer>  
        `;
    }
}

customElements.define("my-footer", CustomHeader);
