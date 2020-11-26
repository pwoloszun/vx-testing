import axios from 'axios';

const DEFAULT_DELAY = 1800;

const port = 4100;
const baseUrl = `http://localhost:${port}`;

export function resolveAfter<T>(data: T, delay): Promise<T> {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(data);
    }, delay);
  });
}

export interface DataEntity {
  id: number;
}

export default class DataApiService<T extends DataEntity> {
  constructor(private url, private delay = DEFAULT_DELAY) {
  }

  find(id: number): Promise<T> {
    return axios.get(this._getSingleUrl({ id } as T))
      .then((response) => response.data)
      .then((entity: T) => resolveAfter(entity, this.delay));
  }

  update(id: number, changes: Partial<T>): Promise<T> {
    return axios.put(this._getSingleUrl({ id } as T), changes)
      .then((response) => response.data)
      .then((entity) => resolveAfter(entity, this.delay));
  }

  remove(entity: T): Promise<number> {
    return axios.delete(this._getSingleUrl(entity))
      .then(() => entity.id)
      .then((id) => resolveAfter(id, this.delay));
  }

  create(entity: Partial<T>): Promise<T> {
    return axios.post(this._getUrl(), entity)
      .then((response) => response.data)
      .then((created) => resolveAfter(created, this.delay));
  }

  getAll(): Promise<T[]> {
    return axios.get(this._getUrl())
      .then((response) => response.data)
      .then((data) => resolveAfter(data, this.delay));
  }

  private _getUrl(): string {
    return `${baseUrl}${this.url}`;
  }

  private _getSingleUrl(entity: T): string {
    return `${this._getUrl()}/${entity.id}`;
  }
}
