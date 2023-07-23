import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import layout from './styles/layout';
import { armchairList, bottleList } from './data/data';

import './components/app-slider';
import './components/app-icon';
import './components/app-button';
import './components/app-search';

const backgroundSrc = new URL('../../assets/BG_Hero-@2X.jpg', import.meta.url)
  .href;

@customElement('app-main')
export class AppMain extends LitElement {
  static styles = [
    layout,
    css`
      :host {
        display: flex;
        width: 100%;
      }
      main {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      section {
        display: flex;
        justify-content: center;
        padding: 3em;

        @media (width <= 640px) {
          padding-left: 1em;
          padding-right: 1em;
        }

        @media (width <= 320px) {
          padding-left: 0;
          padding-right: 0;
        }
      }

      .header-section {
        background-image: url(${unsafeCSS(backgroundSrc)});
        background-size: cover;
        background-position: center;

        @media (width <= 640px) {
          padding-bottom: 0;
        }

        .container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 4em;

          & > * {
            z-index: 1;
          }

          & > app-icon {
            --icon-shadow-color: white;
            color: white;
            position: absolute;
            z-index: 0;

            &[icon='flake'] {
              font-size: 6em;
              rotate: 10deg;
              top: 50%;
              left: 50%;
            }

            &[icon='gift'] {
              font-size: 3em;
              rotate: 20deg;
              left: 0;
              bottom: 0;
            }
          }
        }

        & app-button {
          font-size: 60%;

          & > SPAN {
            display: flex;
            align-items: center;
            gap: 1em;
          }
        }

        .title-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1em;
          flex-basis: 200px;
          flex-grow: 1;
          text-wrap: balance;

          & > img {
            height: 3em;
          }

          & > h1 {
            font-size: 160%;
            position: relative;
            z-index: 0;
            margin: 0;
            font-weight: bold;
            color: #004542;
            filter: drop-shadow(0px 0px 5px #e7af00);

            &::before {
              content: attr(data-text);
              position: absolute;
              z-index: -1;
              inset: 0;
              -webkit-text-stroke: 0.06em #ffffff;
              pointer-events: none;
            }
          }
        }

        .video-container {
          display: flex;
          position: relative;

          & > img {
            height: 4em;
            position: absolute;
            z-index: 1;
          }

          & > video {
            width: min(15em, 100dvw);
          }

          @media (width > 640px) {
            & > img {
              top: 0;
              left: 0;
              translate: -50% 0;
            }
          }

          @media (width <= 640px) {
            & > img {
              bottom: 1em;
              right: 1em;
            }
          }
        }
      }

      .slider-section {
        .container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2em 7em;
        }

        .slider-container {
          display: flex;
          flex-direction: column;
          gap: 0.6em;
          & > span {
            font-size: 70%;
            font-weight: bold;
          }
        }

        .slider {
          position: relative;

          & > img {
            pointer-events: none;
            height: 4em;
            position: absolute;
            z-index: 1;
            top: 0;
            left: -2em;
            @media (width <= 640px) {
              left: -0.4em;
            }
          }
          & > app-icon {
            --icon-shadow-color: var(--color-primary-500);
            pointer-events: none;
            font-size: 2em;
            position: absolute;
            z-index: 1;
            color: #ffffff;
            rotate: -10deg;
          }
        }

        .slider-1 > app-icon {
          top: 0;
          right: 0;
          translate: 50% -50%;
        }

        .slider-2 > app-icon {
          --icon-shadow-color: #e7af00;
          bottom: 0;
          right: 0;
          translate: 50% 50%;
        }
      }

      .search-section {
        background-color: #004542;

        .container {
          display: flex;
          flex-direction: column;
          gap: 1em;
        }

        & h4 {
          margin: 0;
          color: white;
          filter: drop-shadow(0px 0px 5px var(--color-primary-500));
        }

        .search-container {
          position: relative;

          & > app-icon {
            position: absolute;
            font-size: 2.2em;
            color: white;
            --icon-shadow-color: #e7af00;
            left: 0;
            top: 0;
            translate: -50% -50%;
            rotate: 15deg;
          }
        }
      }
    `,
  ];

  render() {
    return html`
      <main>
        ${this.renderSectionHeader()} ${this.renderSectionSlider()}
        ${this.renderSectionSearch()}
      </main>
    `;
  }

  @query('section.search-section') searchSection!: HTMLElement;

  renderSectionHeader() {
    const ctkLogo = new URL('../../assets/CTK-logo.svg', import.meta.url).href;
    const video = new URL(
      '../../assets/Vidéo - Landing page.mp4',
      import.meta.url
    ).href;
    const poster = new URL('../../assets/posterIMG.jpg', import.meta.url).href;
    const vuTV = new URL('../../assets/Vu-TV-icon.svg', import.meta.url).href;
    return html`
      <section class="header-section">
        <div class="container">
          <app-icon icon="flake"></app-icon>
          <app-icon icon="gift"></app-icon>
          <div class="title-container">
            <img src=${ctkLogo} alt="ctk logo" />
            <h1 data-text="Nos coups de coeur à prix magiques !">
              Nos coups de coeur à prix magiques !
            </h1>
            <app-button
              @click=${() =>
                this.searchSection.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>
                <app-icon icon="magasins"></app-icon>
                <span>JE TROUVE MON MAGASIN</span>
              </span>
            </app-button>
          </div>
          <div class="video-container">
            <img src=${vuTV} alt="" />
            <video poster=${poster} muted autoplay>
              <source src=${video} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    `;
  }

  renderSectionSlider() {
    const prixIso = new URL('../../assets/Encart-Prix-iso.png', import.meta.url)
      .href;
    const prixPatchwork = new URL(
      '../../assets/Encart-Prix-patchwork.png',
      import.meta.url
    ).href;
    return html`
      <section class="slider-section">
        <div class="container">
          <div class="slider-container">
            <div class="slider slider-1">
              <img src=${prixIso} alt="ctk logo" />
              <app-icon class="shadow" icon="star"></app-icon>
              <app-slider>
                ${bottleList.map(
                  bottle => html`
                    <img src=${bottle.imageSrc} alt=${bottle.imageAlt} />
                  `
                )}
              </app-slider>
            </div>
            <span>La bouteille isotherme 50cL</span>
          </div>

          <div class="slider-container">
            <div class="slider slider-2">
              <img src=${prixPatchwork} alt="ctk logo" />
              <app-icon icon="star"></app-icon>
              <app-slider>
                ${armchairList.map(
                  armchair => html`
                    <img src=${armchair.imageSrc} alt=${armchair.imageAlt} />
                  `
                )}
              </app-slider>
            </div>
            <span>Le fauteil patchwork</span>
          </div>
        </div>
      </section>
    `;
  }

  renderSectionSearch() {
    return html`
      <section class="search-section">
        <div class="container">
          <h4>JE CHERCHE MON MAGASIN</h4>
          <div class="search-container">
            <app-icon icon="gift"></app-icon>
            <app-search></app-search>
          </div>
        </div>
      </section>
    `;
  }
}
