import WpApiOps from './AbstractWPAPIOps';


class FetchWP extends WpApiOps {
  getPosts(params = {}) {
    return this.request('posts', 'GET', null, params);
  }

  getPages(params = {}) {
    return this.request('pages', 'GET', null, params);
  }

  getCategories(params = {}) {
    return this.request('categories', 'GET', null, params);
  }

  getTags(params = {}) {
    return this.request('tags', 'GET', null, params);
  }

  getUsers(params = {}) {
    return this.request('users', 'GET', null, params);
  }

  getMedia(params = {}) {
    return this.request('media', 'GET', null, params);
  }

  getTaxonomies() {
    return this.request('taxonomies');
  }

  getPostTypes() {
    return this.request('types');
  }

  getSingle(endpoint, id) {
    return this.request(`${endpoint}/${id}`);
  }

  getCustom(endpoint, params = {}) {
    return this.request(endpoint, 'GET', null, params);
  }
}

export default FetchWP;