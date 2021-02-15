import cheerioModule from 'cheerio';
import { Request, Response } from 'express';
import { RecipeDetailType } from '../interfaces';
import { arrToObj } from './obj';

export const ScrapeRecipeDetail = (
  _req: Request,
  res: Response,
  html: string
): void => {
  try {
    const $ = cheerioModule.load(html);
    const data: RecipeDetailType = {};
    const areaDetail = $('.text-area-detail').find(
      'div.text-container.col.left'
    );
    const title = areaDetail.find('div.row.title').find('h1:first').text();
    const attr: string[] = [];
    let rating = 0;
    areaDetail
      .find('div.row.attrib:first')
      .find('div.col.middle.nitem')
      .each((_, e) => {
        const val = $(e).find('div.col.middle.text').text();
        attr.push(val);
      });
    areaDetail
      .find('div.row.rating')
      .children('i')
      .each((_, e) => {
        const _class = e.attribs.class.split(' ');
        if (_class.includes('fa-star')) {
          rating++;
        } else if (_class.includes('fa-star-half-o')) {
          rating += 0.5;
        }
      });
    const recipeBody = $('div.row.center.content-recipe-container');
    recipeBody.find('div.col.left.content-box').each((_, e) => {
      const parent = $(e).find('div.row.content');
      const title = $(parent).find('.row.title').text();
      data[title === '' ? 'desc' : title] =
        title === '' ? (data['desc'] ? data['desc'] : '') : [];
      const desc = $(parent).find('.row.desc');
      $(desc)
        .find('p')
        .each((_, p) => {
          data['desc'] += $(p).text();
        });
      $(desc)
        .find('ul')
        .each((_, ul) => {
          $(ul)
            .children('li')
            .each((_, e) => {
              (data[title] as string[]).push($(e).text());
            });
        });
    });
    data['title'] = title;
    data['attr'] = arrToObj(attr, ['time', 'portion', 'cost']);
    data['rating'] = `${rating}/5.0`;
    $('div.row.mainslider.image-pos-frame')
      .find('img:first')
      .each((_, e) => {
        data['pic'] = e.attribs.src;
      });
    res.send({ ...data });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
