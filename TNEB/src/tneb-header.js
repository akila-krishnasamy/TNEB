import { LitElement, html, css } from 'lit';

export class TnebHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    nav {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #1976d2;
      text-decoration: none;
    }
    ul {
      display: flex;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    a {
      color: #333;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
    }
    a:hover {
      color: #1976d2;
    }
  `;

  render() {
    return html`
      <nav>
        <a href="/" class="logo">TNEB</a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/forms">Forms & Downloads</a></li>
          <li><a href="/map">Map</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/signup">Sign-up</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('tneb-header', TnebHeader);