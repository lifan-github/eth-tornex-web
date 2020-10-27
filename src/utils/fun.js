
export const checkPlatform = () => {
    const platform = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    if(platform === null){
        return 'PC';
    }
    return 'Mobile';
}

/**
 * 格式化日期
 * 支持格式：
 * yyyy-MM-dd HH:mm:ss
 * yyyy-MM-dd HH:mm:ss.S
 * yyyyMMddHHmmss
 * yyyy-MM-dd
 * yyyyMMddHHmmssS
 * @param {date} date      日期
 * @param {String} fmt     日期格式
 */
export const formatDate = (date, fmt) => {
    const _len = fmt.length;
    const o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "H+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt.substr(0, _len);
}
