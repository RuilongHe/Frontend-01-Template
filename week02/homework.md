### Week02作业
1. 写一个正则表达式，匹配所有Number直接量
```
/^[+|-]?(0|[1-9]\d*)\.?\d*([eE][+|-]?\d+)?$|^[+|-]?\0[x|X][0-9a-fA-F]+$|^[+|-]?\0[o|O][0-7]+$|^[+|-]?\0[b|B][01]+$|NaN/;
```

2. 写一个UTF-8 Encoding的函数
```
function encodeUtf8(string) {
    string = string.replace(/\r\n/g,"\n");
    let arr = [];
    for (let n = 0; n < string.length; n++) {
        let c = string.charCodeAt(n);
        if (c < 128) {
            arr.push(c);
        }
        else if((c > 127) && (c < 2048)) {
            arr.push((c>>6)|192)
            arr.push((c&63)|128);
        }
        else {
            arr.push((c>>12)|224)
            arr.push((c>>6)&63)
            arr.push((c&63)|128)
        }
    }
    return arr;
}
```

3. 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
```
/[\u0021-\u007E]{6,16}|[\x21-\x7E]{6,16}|(['"])(?:(?!\1).)*?\1/;
```