import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import "./app-main";
import "./app-footer";

@customElement('app-shell')
export class AppShell extends LitElement {
  @property({ type: String }) header = 'My app';

  static styles = css`
    :host {
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--app-shell-background-color);
    }

    :host {
      --color-primary-50: #EAF6F6;
      --color-primary-100: #CBE9E8;
      --color-primary-200: #A8DBD9;
      --color-primary-300: #85CCC9;
      --color-primary-400: #6AC1BE;
      --color-primary-500: #50B6B2;
      --color-primary-600: #49AFAB;
      --color-primary-700: #40A6A2;
      --color-primary-800: #379E99;
      --color-primary-900: #278E8A;


      --color-grey-50: #F0F0F0;
      --color-grey-100: #D9D9D9;
      --color-grey-200: #C0C0C0;
      --color-grey-300: #A6A6A6;
      --color-grey-400: #939393;
      --color-grey-500: #808080;
      --color-grey-600: #787878;
      --color-grey-700: #6D6D6D;
      --color-grey-800: #636363;
      --color-grey-900: #505050;

      --color-outline: var(--color-primary-500);

      --transition-duration: .2s;
    }

    app-main {
      flex-grow: 1;
    }
  `;

  render() {
    return html`
      <app-main></app-main>
      <app-footer></app-footer>
    `;
  }
}
