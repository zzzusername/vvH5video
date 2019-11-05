/* 高度自适应 */
import $ from "jquery";

function heightAuto(row){
    var hei = document.documentElement.clientHeight;
    $(row).css("height", hei - 178);
    $(window).resize(function () {
        var wid = document.documentElement.clientWidth,
            hei = document.documentElement.clientHeight;
        $(row).css("height", hei - 178);
    });
}
export {heightAuto}

/* 
    截取图片路径
    obj url
    str :截取 /upload
*/
function getCaption(obj, str) {
    if (obj.indexOf("http") >= 0){
        return obj;
    }else{
        // 判断 图片 是否带有 http
        var index = obj.lastIndexOf(str);
        obj = obj.substring(index + 1, obj.length);
        return obj;
    }
}
export { getCaption }


function splitCode(code){
    var codes = ["00", "00", "00", "000", "000"];
    if (!code) {
        return codes;
    }

    if (code.length < 12) {
        code += "000000000000";
        code = code.substring(0, 12);
    }
    var pos = 0;
    for (var i = 0, l = codes.length; i < l; i++) {
        var len = codes[i].length;
        codes[i] = code.substring(pos, pos + len);
        pos += len;
    }
    return codes;
}
function toShort(code) {
    if (!code) {
        return null;
    }
    var codes = splitCode(code);
    var shortCode = "";
    for (var i = 0, len = codes.length; i < len; i++) {
        shortCode += codes[i];
        if (i + 1 < len && (codes[i + 1] == "00" || codes[i + 1] == "000")) {
            break;
        }
    }
    return shortCode;
}
export { toShort,splitCode }

// 数组对象去重 Array object deweighting
/* 
    n : 数组对象
    o : 数组对象
    u ： key
*/  
function arrayObjdeweighting(n,o,u) {
    let json = [...n, ...o]
    let newJson = []; 
    let n1,n2 = {};
    for (n1 of json) {  
        let flag = true;  
        for (n2 of newJson) {  

            if (n1[u] == n2[u]) { 
                flag = false;
            }
        }
        if (flag) { 
            newJson.push(n1); 
        }
    }

    return newJson;
}
export { arrayObjdeweighting}



