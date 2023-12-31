import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import layout from './styles/layout';

import './components/app-button';
import './components/app-link';
import './components/app-icon';

const logo = new URL('../../assets/CTK-img.png', import.meta.url).href;
const fondFooter = new URL('../../assets/fond_footer.jpg', import.meta.url)
  .href;

@customElement('app-footer')
export class AppFooter extends LitElement {
  static styles = [
    layout,
    css`
      :host {
        display: flex;
        width: 100%;
      }

      footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 40px;
        width: 100%;
        font-size: 70%;
      }

      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 1em 7em;
      }

      h3 {
        margin: 0;
        font-weight: bold;
      }

      .logo {
        aspect-ratio: 1 / 1;
        height: 15em;
      }

      .logo > img {
        width: 100%;
        height: 100%;
      }

      .infos {
        display: flex;
        flex-direction: column;
        gap: 1em;
      }

      .social-networks {
        display: flex;
        justify-content: center;
        gap: 0.5em;
      }

      .fond-footer {
        margin-top: 2em;
        width: 100%;
        height: 1em;
        object-fit: cover;
      }

      app-link {
        font-size: 120%;
        color: var(--color-grey-900);
      }
    `,
  ];

  render() {
    return html`
      <footer>
        <div class="container" id="zzzzzzz">
          <div>
            <div class="logo">
              <img alt="ctk logo" src=${logo} loading="lazy" />
            </div>
          </div>
          <div class="infos">
            <h3>QUI SOMMES-NOUS ?</h3>
            <app-button>Découvrez Centrakor</app-button>
            <span>et suivez nos aventures sur<br />les réseaux sociaux</span>
            <div class="social-networks">
              <app-link href="">
                <app-icon icon="facebook-square"></app-icon>
              </app-link>
              <app-link href="">
                <app-icon icon="instagram"></app-icon>
              </app-link>
              <app-link href="">
                <app-icon icon="pinterest-square"></app-icon>
              </app-link>
              <app-link href="">
                <app-icon icon="tiktok"></app-icon>
              </app-link>
            </div>
          </div>
        </div>
        <img class="fond-footer" alt="" src=${fondFooter} loading="lazy" />
      </footer>
    `;
  }
}
