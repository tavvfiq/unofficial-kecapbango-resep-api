## Unofficial bango.co.id/resep API 🐦😋🍳
---

Indonesian food recipes API scraped from bango.co.id/resep. Build with  __Cheerio__ and __Node js__.

---

**Status**: on progress

### Documentation
---

| Params/query | Description |
| ------ | ----------- |
| page   | page of recipe(s) |
| q | url query to recipe detail page. example ```https://www.bango.co.id/resep/detail/lapis-daging-istimewa``` |
| tag    | recipe category tag. ```1 = ayam, 2 = daging, 3 = ikan, 4 = sayur, 5 = tempe/tahu```|
| search    | search keyword query |

### Usage
---
* Get newest recipe
  ``` /api/recipes/:page```
* Get recipe detail
  ``` /api/recipe/?q=```
* Search recipe (not yet implemented)
  ``` /api/recipe/?search=```

### Response
---
* Get recipe
```
{
  id:string;
  title:string;
  pic:string;
  url:string;
  attr:{
    cost:string;
    time:string;
    portion:string;
  }
}
```
* Get recipe detail
```
{
  title:string;
  pic:string;
  attr:{
    cost:string;
    time:string;
    portion:string;
  };
  rating:string;
  Bahan:string[];
  "Cara Memasak:string[];
  [key:string]:string;
}
```

