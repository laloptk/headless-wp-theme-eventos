
class WpApiOps {
  constructor() {
    if (new.target === WpApiOps) {
      throw new TypeError("Cannot instantiate abstract class WpAPIOps directly."); // Abstract classes are not meant to be called directly
    }

    this.baseUrl = import.meta.env.VITE_WP_SITE_URL.replace(/\/+$/, '');
    this.apiBase = `${this.baseUrl}/wp-json/wp/v2`;
    this.auth = { Authorization: `Basic ${import.meta.env.VITE_WP_SITE_URL}` }; // e.g., { Authorization: 'Basic xxx' } or { Authorization: 'Bearer xxx' }
  }

  buildUrl(endpoint, params = {}) {
    const url = new URL(`${this.apiBase}/${endpoint}`);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
    return url;
  }

  async request(endpoint, method = 'GET', body = null, params = {}) {
    const url = this.buildUrl(endpoint, params);
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(this.auth || {}),
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    const json = await response.json();

    if (!response.ok) {
      throw new Error(
        `Error ${method} ${endpoint}: ${response.statusText} - ${JSON.stringify(json)}`
      );
    }

    return json;
  }
}

export default WpApiOps;