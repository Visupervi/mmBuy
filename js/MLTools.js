
// 从url里获取参数对应的值

// http://www.baidu.com?username='xingge'&age=18&id=123321;

// var id = $.getUrlParam('id');

// 切记: 必须是在当前url下有,

(function($) {

    $.getUrlParam = function(name) {

        var reg = new RegExp("(^|&)" +

            name + "=([^&]*)(&|$)");

        var r = window.location.search.substr(1).match(reg);

        if (r != null) return decodeURI(r[2]);

        return null;

    }

})(jQuery);

