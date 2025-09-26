import { LitElement, html, css } from 'lit';

export class TnebFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #f5f5f5;
      padding: 2rem 0;
      margin-top: 2rem;
    }
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
      padding: 0 1rem;
    }
    .sms-signup {
      margin-bottom: 2rem;
    }
    input {
      padding: 0.5rem;
      margin-right: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    button {
      background: #1976d2;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
    .social-links {
      margin: 1rem 0;
    }
    .social-links a {
      color: #1976d2;
      text-decoration: none;
      margin: 0 0.5rem;
    }
  `;

  render() {
    return html`
      <div class="footer-content">
        <div class="sms-signup">
          <p>Subscribe for SMS Alerts:</p>
          <input type="text" placeholder="Enter your mobile number" />
          <button @click=${this._handleSubscribe}>Subscribe</button>
        </div>
        <p>© 2024 TNEB. All Rights Reserved.</p>
        <p>Contact Us: <a href="mailto:support@tneb.com">support@tneb.com</a></p>
        <div class="social-links">
          <a href="#">Facebook</a> |
          <a href="#">Twitter</a> |
          <a href="#">Instagram</a>
        </div>
      </div>
    `;
  }

  _handleSubscribe() {
    const input = this.shadowRoot.querySelector('input');
    console.log('Subscribe clicked with number:', input.value);
  }
}

customElements.define('tneb-footer', TnebFooter);