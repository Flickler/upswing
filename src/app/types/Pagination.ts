export type Pagination<T> = {
  content: T;
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: Sort;
    offset: number;
    unpaged: boolean;
    paged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  sort: Sort;
  first: true;
  numberOfElements: number;
  empty: boolean;
};

export type Sort = {
  offset: number;
  unpaged: boolean;
  paged: boolean;
};
