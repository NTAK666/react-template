export const API = {
  API_URL: 'https://jsonplaceholder.typicode.com',
  get posts() {
    return `${this.API_URL}/posts`;
  },
};
