function ajax_(methods, url, callback) {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    var result;
    ajax_.open(methods, url);
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                result = ajax_.responseText;
                result = JSON.parse(result);
                callback(result);
            } else {
                console.log('请求失败');
            }
        }
    }

}