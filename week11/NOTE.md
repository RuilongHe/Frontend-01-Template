### 异步编程
- setTimeout
- promise
- async/await
```
    function sleep(t) {
        return new Promise((reslove, reject) => {
            setTimeout(resolve, t);
        })
    }

    async function go() {
        while(true) {
            green();
            await sleep(1000);
            yellow();
            await sleep(200);
            red();
            await sleep(500);
        }
    }
```
- generator
```
    function sleep(t) {
        return new Promise((reslove, reject) => {
            setTimeout(resolve, t);
        })
    }

    function* go() {
        while(true) {
            green();
            yield sleep(1000);
            yellow();
            yield sleep(200);
            red();
            yield sleep(500)
        }
    }
```

### 寻路
- 深度优先搜索
- 广度优先搜索
- A*

### 正则表达式
- match
- replace
- exec
- lastIndex