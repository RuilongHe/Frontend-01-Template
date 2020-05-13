### 结构化程序设计
1. Reamls
- Realm包括一套内置对象，一个ECMAScript全局环境，所有加载到全局环境中的ECMAScript代码以及关联状态和资源。我的理解是，Realm是给代码提供一切外部资源的总集合，全局环境、全局对象等，一个Realm会提供一套完整的资源供ECMAScript代码使用。

2. Execution Content
- Execution Context，也就是执行上下文，实际上也叫Running Execution Context。每次函数调用，形成的Execution Context，会被推入Execution Context Stack中，也就是执行上下文栈，它的踪迹在ECMAScript标准里随处可寻。。执行栈栈顶的元素就是当前的Execution Context。

- Execution Content包括:
    - Code evaluation state
    - Function
    - Script or Module
    - Generator
    - Lexical Environment
    - Variable Environment

3. Environment Record
这是一个链式的结构，如下：

- Declarative Environment Records
    - Function Environment Records
    - Module Environment Records
- Global Environment Records
- Object Environment Records