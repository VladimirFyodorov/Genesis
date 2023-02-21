import axios from 'axios';

export interface AuthData {
  access_token: string,
  base_domain: string,
};

export class AuthService {
  #store: Map<string, AuthData>;

  constructor() {
    this.#store = new Map<string, AuthData>();
  }

  has(clientId: string): boolean {
    return this.#store.has(clientId);
  }

  async get(clientId: string): Promise<AuthData> {
    let cookies = this.#store.get(clientId);
    if (cookies === undefined) {
      cookies = await this.update(clientId);
    }
    return cookies;
  }

  async update(clientId: string): Promise<AuthData> {
    const url = "https://test.gnzs.ru/oauth/get-token.php";
    const config =  { headers: { "X-Client-Id": clientId, "Content-Type": "application/json" } };
    const newCookies = (await axios.get(url, config))?.data as AuthData;
    this.#store.set(clientId, newCookies);
    return newCookies;
  }
}

export const authService = new AuthService();