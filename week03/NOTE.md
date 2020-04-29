### Build-in Exotic Objects
- 文档9.4节，列举了7中build-in exotic objects

#### Bound Function Exotic Objects

1. Bound function objects 具有有别与普通对象的内置方法
 + [[call]] ( thisArgument, argumentsList )
 + [[Construct]] ( argumentsList, newTarget )
 + BoundFunctionCreate ( targetFunction, boundThis, boundArgs )

#### Array Exotic Objects

1. Array exotic object对于[[DefineOwnProperty]]这个内部方法提供了一个可替代的定义。
2. Array的length属性自动发生变化。

#### String Exotic Objects
1. 可通过索引访问每个字符。
2. 具有length属性
3. String exotic object具有有别与普通对象的内置方法
- [[GetOwnProperty]] ( P )
- [[DefineOwnProperty]] ( P, Desc )
- [[OwnPropertyKeys]] ( )
- StringCreate ( value, prototype )
- StringGetOwnProperty ( S, P )

#### Arguments Exotic Objects
1. 箭头函数没有arguments对象。

2. Arguments exotic objects具有有别与普通对象的内置方法
- [[GetOwnProperty]] ( P )
- [[DefineOwnProperty]] ( P, Desc )
- [[Get]] ( P, Receiver )
- [[Set]] ( P, V, Receiver )
- [[Delete]] ( P )
- CreateUnmappedArgumentsObject ( argumentsList )
- CreateMappedArgumentsObject ( func, formals, argumentsList, env )

#### Integer-indesed Exotic Objects
1. 对于整数索引属性键有特殊的操作。

2. Integer-indesed Exotic Objects具有有别与普通对象的内置方法
- [[GetOwnProperty]] ( P )
- [[HasProperty]] ( P )
- [[DefineOwnProperty]] ( P, Desc )
- [[Get]] ( P, Receiver )
- [[Set]] ( P, V, Receiver )
- [[OwnPropertyKeys]] ( )
- IntegerIndexedObjectCreate ( prototype, internalSlotsList )
- IntegerIndexedElementGet ( O, index )
- IntegerIndexedElementSet ( O, index, value )

#### Module Namespace Exotic Objects
1. 暴露出一个ECMAScript模块的绑定。

2. Module namespace exotic object具有有别与普通对象的内置方法
- [[SetPrototypeOf]] ( V )
- [[IsExtensible]] ( )
- [[PreventExtensions]] ( )
- [[GetOwnProperty]] ( P )
- [[DefineOwnProperty]] ( P, Desc )
- [[HasProperty]] ( P )
- [[Get]] ( P, Receiver )
- [[Set]] ( P, V, Receiver )
- [[Delete]] ( P )
- [[OwnPropertyKeys]] ( )
- ModuleNamespaceCreate ( module, exports )


#### Immutable Prototype Exotic Objects
1. 初始化之后就不可修改。

2. Immutable exotic objects具有有别与普通对象的内置方法

- [[SetPrototypeOf]] ( V )

- SetImmutablePrototype ( O, V )