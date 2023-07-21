import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';

@customElement('app-button')
export class AppButton extends LitElement {
    static styles = css`
        :host {
            display: flex;
        }
        :host {
            --button-color: currentColor;
            --button-background-color: transparent;
            --button-hover-background-color: var(--button-background-color);
            --button-active-background-color: var(--button-background-color);
            --button-border-radius: 0px;
            --button-padding: 0;
        }

        button {
            all: unset;
            appearance: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            padding: var(--button-padding);
            color: var(--button-color);
            background-color: var(--button-background-color);
            border-radius: var(--button-border-radius);

            transition: background-color var(--transition-duration);

            &:hover {
                background-color: var(--button-hover-background-color);
            }

            &:active {
                background-color: var(--button-active-background-color);
            }

            &:focus-visible {
                outline: 2px solid var(--color-outline);
                outline-offset: 2px;
            }
        }

        .primary, .primary-rounded {
            --button-color: #FFFFFF;
            --button-background-color: var(--color-primary-500, #50B6B2);
            --button-hover-background-color: var(--color-primary-400, #50B6B2);
            --button-active-background-color: var(--color-primary-600, #50B6B2);
        }

        .primary {
            --button-border-radius: 5em;
            --button-padding: 1em;
            min-width: min(15em, 90dvw);
            font-weight: bold;
        }

        .primary-rounded {
            --button-border-radius: 50%;
            --button-padding: .1em;
        }
    `;

    @property() variant: string = "primary";

    render() {
        return html`
            <button class=${classMap({
                [this.variant]: true,
            })}>
                <slot></slot>
            </button>
        `;
    }
}