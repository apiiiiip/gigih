export type searchSlice = {
  search: {
    searchValue: string;
  };
};

export type GiphyData = {
  id: string;
  images: {
    original: {
      url: string;
    };
  };
  title: string;
};

export type TrendingData = {
  id: string;
  title: string;
  images: {
    fixed_width: {
      url: string;
    };
  };
};

export type GlobalObjectString = {
  [key: string]: string;
};

export type GiphySearchResult = {
  data: GiphyData[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
};

export type TrendingDataResult = {
  data: TrendingData[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
};
