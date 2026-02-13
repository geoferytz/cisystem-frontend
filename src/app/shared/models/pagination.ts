export type PageRequest = {
  page: number;
  size: number;
};

export type PageResult<T> = {
  items: T[];
  total: number;
  page: number;
  size: number;
};
