class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    
    <div class="header">
    <div class="nav-bar">
        <div class="dropdown">
            <button class="dropdown-toggle">Thay ảnh nền</button>
            <ul class="dropdown-menu">
                <li><a href="/">Mặc định</a></li>
                <li><a href="#" id="Yone">Yone</a></li>
                <li><a href="#" id="Ire">Irelia</a></li>
                <li><a href="#" id="Lee">Leesin</a></li>
            </ul>
        </div>
        <a href="index.html">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/764bbd9c-6d80-481d-8136-96848f01e843/ddx6q22-c6936a5b-73d6-409d-b248-0b370494f90f.png/v1/fill/w_280,h_320/icon__challenger___season_9____lol_rank_by_dasgrischa_ddx6q22-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzIwIiwicGF0aCI6IlwvZlwvNzY0YmJkOWMtNmQ4MC00ODFkLTgxMzYtOTY4NDhmMDFlODQzXC9kZHg2cTIyLWM2OTM2YTViLTczZDYtNDA5ZC1iMjQ4LTBiMzcwNDk0ZjkwZi5wbmciLCJ3aWR0aCI6Ijw9MjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Vppm1D6oqz65QRKw6Uo6CuGNhN7HzX1bV9fh0lpuMtE"
                alt="" width="60px" height="60px">
        </a>
        <div class="list-item">
            <a href="index.html">
                Home
            </a>
            <a href="#">
                AOV
            </a>
            <a href="lol-page.html">
                LOL
            </a>
            <a href="#">
                Valorant
            </a>
        </div>
    </div>
</div> `;
  }
}

customElements.define("header-component", Header);
