import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import layout from "./styles/layout";

import "./components/app-slider";

import { armchairList, bottleList } from "./data/data";

@customElement('app-main')
export class AppMain extends LitElement {
    static styles = [layout, css`
        .slider-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px 50px;
            padding: 5px;
        }
    `];

    render() {
        return html`
            <main>
                <section class="container slider-container">
                    <app-slider>
                        <span slot="title">La bouteille isotherme 50cL</span>
                        ${bottleList.map(bottle => html`
                            <img src=${bottle.imageSrc} alt=${bottle.imageAlt} />
                        `)}
                    </app-slider>

                    <app-slider>
                        <span slot="title">Le fauteil patchwork</span>
                        ${armchairList.map(armchair => html`
                            <img src=${armchair.imageSrc} alt=${armchair.imageAlt} />
                        `)}
                    </app-slider>
                </section>
            </main>
        `;
    }
}