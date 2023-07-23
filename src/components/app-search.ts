import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ShopsController } from '../controllers/ShopsController';

import './app-icon';

interface ChangeEvent extends Event {
  target: HTMLInputElement;
}

@customElement('app-search')
export class AppSearch extends LitElement {
  static styles = css`
    .search-container {
      background-color: #ffffff;
      border-radius: 2px;
    }

    .search-header {
      display: flex;
      flex-wrap: wrap;
      padding: 1em 2em;
      gap: 0.5em;

      .input {
        --color-border: black;
        --background-color: white;
        --color-button: white;
        --background-color-button: black;
        --background-color-button-hover: black;
        font-size: 80%;
        flex-grow: 1;
        display: flex;
        overflow: hidden;
        height: 2.5em;
        text-align: start;
        background-color: var(--background-color);
        border: 2px solid var(--color-border);
        border-radius: 3px;

        transition: background-color var(--transition-duration),
          border-color var(--transition-duration);

        & > * {
          all: unset;
          appearance: none;
          box-sizing: border-box;
        }

        & > *:first-child {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 0 1.5em;
          min-width: 5em;
        }

        & > span {
          color: var(--color-border);
        }

        & > button {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          aspect-ratio: 1 / 1;
          color: var(--color-button);
          background-color: var(--background-color-button);
          transition: background-color var(--transition-duration);

          &:hover {
            background-color: var(--background-color-button-hover);
          }

          &:focus {
            outline: 2px solid var(--color-outline);
            outline-offset: -2px;
          }
        }

        &.black {
          --color-border: var(--color-grey-200);
          --color-button: #ffffff;
          --background-color-button: #000000;
          --background-color-button-hover: #202020;

          &:has(input:focus) {
            --color-border: var(--color-grey-400);
          }
        }

        &.primary {
          --color-border: var(--color-primary-500);
          --color-button: #ffffff;
          --background-color-button: var(--color-primary-500);
          --background-color-button-hover: var(--color-primary-400);
          --color-outline: black;
        }
      }
    }

    .result-container {
      &:not(:empty) {
        padding: 1em;
      }
    }
  `;

  @state() searchCity: string = '';

  #shops = new ShopsController(this);

  render() {
    return html`
      <div class="search-container">
        <div class="search-header">
          ${this.renderInputCity()} ${this.renderInputGps()}
        </div>
        <div class="result-container">${this.renderResult()}</div>
      </div>
    `;
  }

  renderInputCity() {
    return html`
      <form
        class="input black"
        onsubmit="return false"
        @submit=${() => this.#shops.searchByCity(this.searchCity)}
      >
        <input
          type="text"
          placeholder="Indiquez une ville"
          .value=${this.searchCity}
          @change=${(e: ChangeEvent) => (this.searchCity = e.target.value)}
        />
        <button type="submit">
          <app-icon icon="search"></app-icon>
        </button>
      </form>
    `;
  }

  renderInputGps() {
    return html`
      <form class="input primary" onsubmit="return false">
        <span>Magasin autour de moi</span>
        <button type="submit">
          <app-icon icon="gps-fixed"></app-icon>
        </button>
      </form>
    `;
  }

  renderResult() {
    if (!this.#shops.list) return '';
    return html`
      merci pour votre recherche
      <ul>
        ${this.#shops.list.map(shop => html`<li>shop trouvé : ${shop}</li>`)}
      </ul>
    `;
  }
}
