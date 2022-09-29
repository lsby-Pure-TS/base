import { 类型代表 } from "./类型代表";

export const 单子: unique symbol = Symbol();
export interface 单子 {
  [单子]: true;
}

export interface bind实现 {}
export var bind: bind实现 = (a: any) => (f: any) => {
  return a[类型代表].bind(a)(f);
};
