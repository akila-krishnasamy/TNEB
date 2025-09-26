import { LitElement, html, css } from 'lit';
import './components/tneb-header.js';
import './components/tneb-hero.js';
import './components/tneb-services.js';
import './components/tneb-shutdown.js';
import './components/tneb-customer-service.js';
import './components/tneb-footer.js';

export class TnebApp extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
  `;

  render() {
    return html`
      <tneb-header></tneb-header>
      <main>
        <tneb-hero></tneb-hero>
        <tneb-services></tneb-services>
        <tneb-shutdown></tneb-shutdown>
        <tneb-customer-service></tneb-customer-service>
      </main>
      <tneb-footer></tneb-footer>
    `;
  }
}

customElements.define('tneb-app', TnebApp);