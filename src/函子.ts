import { 类型代表 } from "./类型代表";

export const 函子: unique symbol = Symbol();
export interface 函子 {
  [函子]: true;
}

export interface map实现 {}
export var map: map实现 = (f: any) => (a: any) => {
  return a[类型代表].map(f)(a);
};
