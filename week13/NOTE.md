### 组件化基础
1. 对象
+ Properties/Methods/Inherit

2. 组件
+ Properties/Methods/Inherit/Attribute/Config && State/Event/Lifecycle/Children
+ Attribute 强调描述性； Property 强调从属关系。

3. 如何设计组件状态

| 名称 | Markup set | JS set | JS change | User Input Change |
| :---:  | :---: | :---: | :---: | :---: |
| property | no | yes | yes | - |
| attribute | yes | yes | yes | - |
| state | no | no | no | yes |
| config | no | yes | no | no |