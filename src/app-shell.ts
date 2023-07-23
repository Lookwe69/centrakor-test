import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import './app-main';
import './app-footer';

@customElement('app-shell')
export class AppShell extends LitElement {
  @property({ type: String }) header = 'My app';

  static styles = css`
    :host {
      min-height: 100dvh;
      min-width: 100dvw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--app-shell-background-color);
    }

    :host {
      --color-primary-50: #eaf6f6;
      --color-primary-100: #cbe9e8;
      --color-primary-200: #a8dbd9;
      --color-primary-300: #85ccc9;
      --color-primary-400: #6ac1be;
      --color-primary-500: #50b6b2;
      --color-primary-600: #49afab;
      --color-primary-700: #40a6a2;
      --color-primary-800: #379e99;
      --color-primary-900: #278e8a;

      --color-grey-50: #f0f0f0;
      --color-grey-100: #d9d9d9;
      --color-grey-200: #c0c0c0;
      --color-grey-300: #a6a6a6;
      --color-grey-400: #939393;
      --color-grey-500: #808080;
      --color-grey-600: #787878;
      --color-grey-700: #6d6d6d;
      --color-grey-800: #636363;
      --color-grey-900: #505050;

      --color-outline: var(--color-primary-500);

      --transition-duration: 0.2s;
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
