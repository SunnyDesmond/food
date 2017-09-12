//引入mockjs
import Mock from 'mockjs';
const data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'foods1|10-50': [{
    'name': "@ctitle(2,10)",
    "img": "@image('600x600',#b7ef7c)",
    "brief": "@csentence(1,50)",
    "price|0-20.0-2": 1,
    "num": 0,
    "minusFlag": true,
    "time": "@time",
    "peisongfei|0-100.0-2": 1,
    "limit|0-50": 1
  }],
  "foods2|10-50": [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'name': "@ctitle(2,10)",
    "img": "@image('600x600',#fff000)",
    "brief": "@csentence(1,50)",
    "price|0-100.0-2": 1,
    "num": 0,
    "minusFlag": true,
    "time": "@time",
    "peisongfei|0-100.0-2": 1,
    "limit|0-100": 1
  }],
  "foods3|10-50": [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'name': "@ctitle(2,10)",
    "img": "@image('600x600',#ff4400)",
    "brief": "@csentence(1,50)",
    "price|0-100.0-2": 1,
    "num": 0,
    "minusFlag": true,
    "time": "@time",
    "peisongfei|0-100.0-2": 1,
    "limit|0-100": 1
  }],
  "foods4|10-50": [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'name': "@ctitle(2,10)",
    "img": "@image('600x600',#34fb34)",
    "brief": "@csentence(1,50)",
    "price|0-100.0-2": 1,
    "num": 0,
    "minusFlag": true,
    "time": "@time",
    "peisongfei|0-100.0-2": 1,
    "limit|0-100": 1
  }]
});

export default {
  data
}