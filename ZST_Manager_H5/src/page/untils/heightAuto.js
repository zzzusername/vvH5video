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
    } else if (obj.indexOf("https") >= 0 ){
        return obj;
    }else{
        // 判断 图片 是否带有 http
        var index = obj.lastIndexOf(str);
        obj = obj.substring(index + 1, obj.length);
        let imgUrl = window.ServerUrl + '/' + obj;    
        return imgUrl;
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


// 判断字符串中 是否含有空格
function isWhitespace(str) {
    let isPsaa = false;
    let arr = str.split(" ");
    
    if (arr.length != 1) {
        isPsaa = true;
    }

    return isPsaa;
}
export { isWhitespace }


// 监控和终端的访问接口地址 
/* 
根据角色信息和所在区域字端
区域管理员  超级管理员
全国节点  非全国节点
1,3 为区域管理员  REGION_NATIONWIDE 为全国节点 REGION_NON_NATIONWIDE 为 非全国节点
2,4 为企业管理员  SUPER_NATIONWIDE 为全国节点 SUPER_NOO_NATIONWIDE 为非全国节点
*/
function distinguishRole() {
    let isTherootNode = '';
    // 获取角色信息／ 角色所在区域
    // 获取企业所在区域

    let rootInformation = localStorage.isDistrictadmin  // 是否为区域管理员
    let rootUserCode = localStorage.UserCode            // 管理员地区
    let EnterpriseCode = localStorage.EnterpriseCode    // 企业管理区域
    if(rootInformation === 'true'){
        // 判断所在地区)
        if (rootUserCode === '000000000000'){
            isTherootNode = 'REGION_NATIONWIDE';
        }else{
            
            isTherootNode = 'REGION_NON_NATIONWIDE';
        }
    }else if(rootInformation === 'false'){
        console.log('企业管理员');
        if (EnterpriseCode === '000000000000') {
            isTherootNode = 'SUPER_NATIONWIDE';
        }else{
            isTherootNode = 'SUPER_NOO_NATIONWIDE';
        }
    }
    return isTherootNode;
}
export { distinguishRole }


