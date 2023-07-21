import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('app-link')
export class AppLink extends LitElement {
    static styles = css`
        :host {
            display: inline-flex;
        }

        a {
            all: unset;
            display: flex;
            cursor: pointer;
            border-radius: 2px;

            &:focus-visible {
                outline: 2px solid var(--color-outline);
                outline-offset: 2px;
            }
        }
    `;
    
    @property() href: string = '';
    
    @property() target: string = '_self';

    render() {
        return html`
            <a href=${this.href} target=${this.target}>
                <slot></slot>
            </a>
        `;
    }
}