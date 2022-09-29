export type Function<A, R> = (a: A) => R;
export type Function1<A, R> = (a: A) => R;
export type Function2<A, B, R> = Function<A, Function<B, R>>;
export type Function3<A, B, C, R> = Function<A, Function<B, Function<C, R>>>;
export type Function4<A, B, C, D, R> = Function<
  A,
  Function<B, Function<C, Function<D, R>>>
>;
export type Function5<A, B, C, D, E, R> = Function<
  A,
  Function<B, Function<C, Function<D, Function<E, R>>>>
>;
export type Function6<A, B, C, D, E, F, R> = Function<
  A,
  Function<B, Function<C, Function<D, Function<E, Function<F, R>>>>>
>;
export type Function7<A, B, C, D, E, F, G, R> = Function<
  A,
  Function<
    B,
    Function<C, Function<D, Function<E, Function<F, Function<G, R>>>>>
  >
>;
export type Function8<A, B, C, D, E, F, G, H, R> = Function<
  A,
  Function<
    B,
    Function<
      C,
      Function<D, Function<E, Function<F, Function<G, Function<H, R>>>>>
    >
  >
>;
export type Function9<A, B, C, D, E, F, G, H, I, R> = Function<
  A,
  Function<
    B,
    Function<
      C,
      Function<
        D,
        Function<E, Function<F, Function<G, Function<H, Function<I, R>>>>>
      >
    >
  >
>;
