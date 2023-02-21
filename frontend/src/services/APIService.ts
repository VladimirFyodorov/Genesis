import axios from 'axios';
import { Entity, EntityNamesEn, optionsMap } from '../types'

export class APIService {
  #userId: string;
  #APIurl: string;

  constructor() {
    this.#APIurl = '/api';
    this.#userId = '30878566';
    document.cookie = `X-Client-Id=${this.#userId}; SameSite=None; Secure`;
  }

  #url(path: string): string {
    return `${this.#APIurl}/${path}`;
  }

  async post(name: EntityNamesEn): Promise<Entity> {
    const url = this.#url(name);
    const nameRu = optionsMap.get(name);
    const data = { "name": nameRu };
    const config =  { headers: { "Content-Type": "application/json" } };
    const entity = (await axios.post(url, data, config))?.data as Entity;
    return entity;
  }

  async postLead(name: string): Promise<Entity> {
    const url = this.#url('lead');
    const data = { "name": name };
    const config =  { headers: { "Content-Type": "application/json" } };
    const entity = (await axios.post(url, data, config))?.data as Entity;
    return entity;
  }
}
