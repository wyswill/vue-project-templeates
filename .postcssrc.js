/*
 * @LastEditors: wyswill
 * @Description: 
 * @Date: 2021-06-05 15:18:42
 * @LastEditTime: 2021-06-05 15:19:08
 */
module.exports = {
  plugins: {
    'postcss-px2rem': {
      rootValue: 16,//结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
      propList: ['*']
    },
    autoprefixer: { browsers: ['Android >= 4.0', 'iOS >= 7'] },
  },
};
