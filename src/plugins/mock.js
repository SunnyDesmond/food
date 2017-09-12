//引入mockjs
import Mock from 'mockjs';
const data = Mock.mock({
  "foodsList": {
    'foods0|10-50': [{
      'name': "@ctitle(2,10)",
      "img": "@image('600x600',#b7ef7c)",
      "brief": "@csentence(1,50)",
      "price|0-20.0-2": 1,
      "num": 0,
      "minusFlag": true,
      "time": "@time",
      "peisongfei|0-100.0-2": 1,
      "limit|20-50": 1
    }],
    'foods1|10-50': [{
      'name': "@ctitle(2,10)",
      "img": "@image('600x600',#e897d4)",
      "brief": "@csentence(1,50)",
      "price|0-20.0-2": 1,
      "num": 0,
      "minusFlag": true,
      "time": "@time",
      "peisongfei|0-100.0-2": 1,
      "limit|20-50": 1
    }],
    'foods2|10-50': [{
      'name': "@ctitle(2,10)",
      "img": "@image('600x600',#b8bb3d)",
      "brief": "@csentence(1,50)",
      "price|0-20.0-2": 1,
      "num": 0,
      "minusFlag": true,
      "time": "@time",
      "peisongfei|0-100.0-2": 1,
      "limit|20-50": 1
    }],
    'foods3|10-50': [{
      'name': "@ctitle(2,10)",
      "img": "@image('600x600',#f3ac32)",
      "brief": "@csentence(1,50)",
      "price|0-20.0-2": 1,
      "num": 0,
      "minusFlag": true,
      "time": "@time",
      "peisongfei|0-100.0-2": 1,
      "limit|20-50": 1
    }]
  },
  "saleList": {},
  "customer": {}
});

export default {
  data
}