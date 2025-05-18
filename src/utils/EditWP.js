import WpApiOps from './AbstractWPAPIOps';

class EditWP extends WpApiOps {
  // Generic CRUD
  create(endpoint, data) {
    return this.request(endpoint, 'POST', data);
  }

  update(endpoint, id, data) {
    return this.request(`${endpoint}/${id}`, 'PUT', data);
  }

  delete(endpoint, id, force = true, extraParams = {}) {
    const params = { force, ...extraParams };
    return this.request(`${endpoint}/${id}`, 'DELETE', null, params);
  }

  // Specific CRUD operations
  createPost(data) {
    return this.create('posts', data);
  }

  updatePost(id, data) {
    return this.update('posts', id, data);
  }

  deletePost(id) {
    return this.delete('posts', id);
  }

  createPage(data) {
    return this.create('pages', data);
  }

  updatePage(id, data) {
    return this.update('pages', id, data);
  }

  deletePage(id) {
    return this.delete('pages', id);
  }

  createCategory(data) {
    return this.create('categories', data);
  }

  updateCategory(id, data) {
    return this.update('categories', id, data);
  }

  deleteCategory(id) {
    return this.delete('categories', id);
  }

  uploadMedia(file, filename, mimeType = 'image/jpeg') {
    const url = `${this.apiBase}/media`;
    const headers = {
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Content-Type': mimeType,
      ...(this.auth || {}),
    };

    return fetch(url, {
      method: 'POST',
      headers,
      body: file,
    }).then(async (res) => {
      const json = await res.json();
      if (!res.ok) throw new Error(`Upload failed: ${res.statusText}`);
      return json;
    });
  }
}

export default EditWP;