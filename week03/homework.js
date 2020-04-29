// 数字转字符
// num: 输入的数字(10进制数字)
// system: 输出的数字进制(10以内，未考虑字母)
function convertNumber2String(num, system = 10) {
    let num_int = ~~(num);
    let num_frac = num - num_int;

    let num_str = '';
    while(num_int > 0){
        num_str = ~~(num_int % system)+num_str;
        num_int = ~~(num_int/system);
    }
    if(num_frac > 0) num_str+='.';

    let bits = 0;
    while(num_frac >0){
        num_str += ~~(num_frac * system); //取整
        num_frac = num_frac * system - ~~(num_frac * system);
        bits++;
        if(bits == 10) break;
    }

    return num_str;
}

//字符串转数字
//str: 输入的字符串
//system: 输入数字的进制(10以内，未考虑字母)

function convertString2Number(str, system=10){
    let chars = str.split('');
    let number = 0, num_i = 0, num_frac = 0;
    let code0 = '0'.codePointAt(0)
    
    while (num_i<chars.length && chars[num_i] != '.'){
        number *= system;
        number += chars[num_i++].codePointAt(0) - code0;
    }
    
    if(chars[num_i] ==='.') ++num_i;
    
    let frac = 1;
    while (num_i<chars.length){
        frac = frac / system;
        number += (chars[num_i++].codePointAt(0) - code0)*frac;
        num_frac++;
    }

    let res = new Number(number);
    return res.toFixed(num_frac)
    
}