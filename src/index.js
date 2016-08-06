/**
 * @method queryString
 * @param getObj 结果为对象否则为数组
 * @default false
 * @param str 需要解析的string
 * @default location.search
 * @return Object or Array
 * */
function queryString(getObj,str){
    var string = (str!== undefined) ? str :  window.location.search;
    var result = string.match(new RegExp("[^\?\&]+=[^\?\&]+","g"));
    if(result == null){
        result = '';
    }else if(getObj){
        var params = {};
        for(var i = 0; i < result.length; i++){
            var res = result[i].split('=');
            var key = res[0],
                value = res[1];
            params[key] = value;
        }
        result = params;
    }
    return result;
}
/**
 * @method queryByKey 获取指定key的值
 * @param key
 * @default null
 * @return string
 * */
function queryByKey(key){
    var result = location.search.match(new RegExp(key+"=[^\?\&]+","g"));
    var value = result?result[0].split('=')[1]:'';
    return value;
}
/**
 * @method queryByKey 获取指定index的值
 * @param index
 * @default null
 * @return string
 * */
function queryByIndex(index){
    var param = queryString()[index];
    var value = param ? param.split('=')[1] : ''
    return value;
}
exports={
    queryByKey:queryByKey,
    queryString:queryString,
    queryByIndex:queryByIndex
};