class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="footer">

    <p>&copy; 2023 League of Legends. All rights reserved.</p>
    </div>
      `;
  }
}

customElements.define("footer-component", Footer);
