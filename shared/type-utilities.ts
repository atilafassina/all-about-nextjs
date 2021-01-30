export type UnwrapPromise<Type> =
  Type extends Promise<infer ResolveValue> ? ResolveValue : Type