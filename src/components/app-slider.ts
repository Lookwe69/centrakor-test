import { LitElement, css, html } from "lit";
import { customElement, queryAssignedElements, state } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';
import { range } from 'lit/directives/range.js';
import { map } from 'lit/directives/map.js';

import "./app-button";
import "./app-icon";

@customElement('app-slider')
export class AppSlider extends LitElement {
    static styles = css`
        :host {
            font-size: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1em;
            --slider-width: min(10rem, 90dvw);
        }
        .slider {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: var(--color-grey-50);
            width: var(--slider-width);
            aspect-ratio: 1 / 1;
            position: relative;
        }
        .list {
            flex-grow: 1;
            display: flex;
            overflow: scroll;
            scroll-snap-type: x mandatory;


            ::slotted(*) {
                flex-shrink: 0;
                width: var(--slider-width);
                height: 100%;
                scroll-snap-align: center;
                scroll-snap-stop: always;
            }

            scrollbar-width: none;
            &::-webkit-scrollbar {
                display: none;
            }
        }

        .absolute-btn {
            flex-grow: 0;
            position: absolute;

            &.previous {
                left: 0;
                translate: -50% 0;
            }

            &.next {
                right: 0;
                translate: 50% 0;
            }
        }

        .points {
            display: flex;
            justify-content: center;
            gap: 1px;
        }

        @keyframes grow {
            0% {
                scale: 1;
            }
            50% {
                scale: 1.2;
            }
            100% {
                scale: 1;
            }
        }

        .point {
            all: unset;
            appearance: none;
            box-sizing: border-box;
            cursor: pointer;
            display: flex;
            aspect-ratio: 1 / 1;
            height: 8px;
            padding: 2px;

            &.active {
                animation: grow var(--transition-duration);
            }

            &::before {
                content: '';
                display: flex;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: var(--color-grey-400);
            }

            &:hover::before {
                background-color: var(--color-grey-300);
            }

            &.active::before {
                background-color: var(--color-primary-500);
            }

            &.active:hover::before {
                background-color: var(--color-primary-400);
            }
        }
        
        .title {
            font-weight: bold;
        }
    `;

    @queryAssignedElements({selector: '*'})
    listItems!: Array<HTMLElement>;

    @state() nbItems: number = 0;
    
    @state() activeItem: number = 0;

    setActiveItem(idx: number) {
        if (idx > this.nbItems - 1) idx = 0;
        if (idx < 0) idx = this.nbItems - 1;
        this.listItems[idx]?.scrollIntoView({behavior: "smooth", block: "nearest"});
    }

    goPrevious() {
        this.setActiveItem(this.activeItem - 1);
    }

    goNext() {
        this.setActiveItem(this.activeItem + 1);
    }

    handleSlotchange() {
        this.nbItems = this.listItems.length;
    }

    handleScroll(e: Event) {
        const scroller = e.target as HTMLElement;
        const leftScroller = scroller.getBoundingClientRect().left;
        for (const [idx,listItem] of this.listItems.entries()) {
            if (Math.abs(listItem.getBoundingClientRect().left - leftScroller) > 10) continue;
            this.activeItem = idx;
            break;
        }
    }

    render() {
        return html`
            <div class="slider">
                <app-button
                    variant="primary-rounded"
                    class="absolute-btn previous"
                    @click=${this.goPrevious}
                >
                    <app-icon icon="chevron-left"></app-icon>
                </app-button>
                <div 
                    class="list"
                    @scroll=${this.handleScroll}
                >
                    <slot @slotchange=${this.handleSlotchange}></slot>
                </div>
                <app-button
                    variant="primary-rounded"
                    class="absolute-btn next"
                    @click=${this.goNext}
                >
                    <app-icon icon="chevron-right"></app-icon>
                </app-button>
                ${this.renderPoints()}
            </div>
            <div class="title">
                <slot name="title"></slot>
            </div>
        `;
    }

    renderPoints() {
        return html`
            <div class="points">
                ${map(
                    range(this.nbItems),
                    idx => html`
                        <button
                            tabindex="-1"
                            class=${classMap({
                                "point": true,
                                "active": this.activeItem === idx,
                            })}
                            @click=${() => this.setActiveItem(idx)}
                        ></button>
                    `
                )}
            </div>
        `;
    }
}