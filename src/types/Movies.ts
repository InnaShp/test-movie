export interface BaseMovie {
  title: string;
  description: string;
  rating: number;
  release_date: string;
  genre: string[];
  actors: string[];
  director: string;
  image: string;
}

export interface Movie extends BaseMovie {
  id: string;
}

export interface NewMovie extends BaseMovie {}
