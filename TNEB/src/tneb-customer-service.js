import { LitElement, html, css } from 'lit';

export class TnebCustomerService extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2rem 0;
    }
    h2 {
      text-align: center;
      color: #333;
      margin-bottom: 2rem;
    }
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      text-align: center;
    }
    .contact-item h3 {
      color: #1976d2;
      margin-bottom: 1rem;
    }
    a {
      color: #1976d2;
      text-decoration: none;
      transition: color 0.3s;
    }
    a:hover {
      color: #1565c0;
    }
  `;

  render() {
    return html`
      <h2>Customer Service</h2>
      <div class="contact-grid">
        <div class="contact-item">
          <h3>Support Hotline</h3>
          <p>Call us at: <a href="tel:+914422223456">+91-44-2222-3456</a></p>
        </div>
        <div class="contact-item">
          <h3>Email Support</h3>
          <p>Email us at: <a href="mailto:support@tneb.com">support@tneb.com</a></p>
        </div>
      </div>
    `;
  }
}

customElements.define('tneb-customer-service', TnebCustomerService);