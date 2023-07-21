import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from 'lit/directives/style-map.js';

@customElement('app-icon')
export class AppIcon extends LitElement {
    static styles = css`
        :host {
            display: inline-flex;
        }

        .icon {
            --icon-url: url(http://localhost:8001/assets/icons/flake.svg);

            display: flex;
            aspect-ratio: 1 / 1;
            height: 1.2em;

            background-color: currentColor;

            -webkit-mask-size: contain;
            mask-size: contain;
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
            -webkit-mask-position: 50% 50%;
            mask-position: 50% 50%;
            -webkit-mask-image: var(--icon-url);
            mask-image: var(--icon-url);
        }
    `;

    @property() icon: string = '';

    render() {
        const url = new URL(`../../../assets/icons/${this.icon}.svg`, import.meta.url).href;
        return html`
            <div
                class="icon"
                style=${styleMap({
                    '--icon-url': `url(${url})`,
                })}
            ></div>
        `;
    }
}