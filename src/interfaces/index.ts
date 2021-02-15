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

export type GetResponseType = {
  code: number;
  nextUrl: string;
  label: string;
  username: boolean;
  lists: RecipeType[];
};
