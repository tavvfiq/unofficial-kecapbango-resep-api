type Attribute = {
  cost: string;
  time: string;
  portion: string;
};

export type RecipeType = {
  id: string;
  title: string;
  pic: string;
  url: string;
  attr: Attribute;
};

export type RecipeDetailType = {
  [key: string]: string | string[];
};

export type GetResponseType = {
  code: number;
  nextUrl: string;
  lists: RecipeType[] | RecipeDetailType;
};
