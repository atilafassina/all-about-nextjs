export type Unwrap<Type> =
  Type extends Promise<infer ResolveValue> ? ResolveValue :
  Type extends (...args: any) => Promise<infer ResolveValue> ? ResolveValue :
  Type extends (...args: any) => infer ResolveValue ? ResolveValue :
  Type