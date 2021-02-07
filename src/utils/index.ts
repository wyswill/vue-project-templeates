import _ from 'lodash';

export function phoneNumberCrept(number: string) {
  const reg = /^\d{3}(\d{4})/g;
  reg.exec(number);
  return _.replace(number, RegExp.$1, '****');
}
