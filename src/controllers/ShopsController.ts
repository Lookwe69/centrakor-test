import { ReactiveController, ReactiveControllerHost } from 'lit';

type Shop = {};

export class ShopsController implements ReactiveController {
  #list: Shop[] | undefined;

  get list() {
    return this.#list;
  }

  set list(list) {
    const oldValue = this.list;
    this.#list = list;
    if (oldValue !== this.list) {
      this.#host.requestUpdate();
    }
  }

  #host!: ReactiveControllerHost;

  constructor(host: ReactiveControllerHost) {
    (this.#host = host).addController(this);
  }

  searchByCity(city: string) {
    console.log(city);
    this.list = []; // Pas de recherche
  }

  hostConnected() {}
}
