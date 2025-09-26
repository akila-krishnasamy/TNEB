import { LitElement, html, css } from 'lit';

export class TnebHero extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #1976d2;
      color: white;
      padding: 4rem 2rem;
      text-align: center;
      margin-bottom: 2rem;
    }
    h1 {
      font-size: 2.5rem;
      margin: 0 0 1rem;
    }
    p {
      font-size: 1.25rem;
      margin: 0 0 2rem;
      opacity: 0.9;
    }
    button {
      background: white;
      color: #1976d2;
      border: none;
      padding: 1rem 2rem;
      font-size: 1.1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s;
    }
    button:hover {
      background: #f5f5f5;
    }
  `;

  render() {
    return html`
      <h1>Tamil Nadu Electricity Board</h1>
      <p>Your reliable partner in electricity services</p>
      <button @click=${this._handleLearnMore}>Learn More</button>
    `;
  }

  _handleLearnMore() {
    // Handle learn more click
    console.log('Learn more clicked');
  }
}

customElements.define('tneb-hero', TnebHero);