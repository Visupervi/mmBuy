/* 接口地址管理 Route，ajax请求封装，请求基于 jquery */
(function(window) {


    var Route = {
        /* 提出 URL 以备 提取接口 可以集中管理 */
        baseUrl : 'http://192.168.22.43:9090',

               /* ------ 首页 api 数据请求 ------ */
        // 获取首页上面的菜单栏数据
        getindexmenu: v_GetIndexMenu,
        getmonetctrl:v_GetMoneyCtrl,
        getcategorytitle:v_GetCategoryTitle,
        getcategory:v_GetCategory,
        getcategorybyid:v_GetCategorybyId,
        getproductlist:v_GetProductList,
        getproductdetail:v_GetProductDetail,
        getproductcom:v_GetProductCom,
        getmoneyctrllist:v_GetMoneyCtrlList,
        getmoneyctrlproduct:v_GetMoneyCtrlProduct,
        getinlanddiscount:v_GetInlandDiscount,
        getdiscountproduct:v_GetDiscountProduct,
        getetam:v_GetEtam,
        getetamlist:v_GetEtamList,
        getcoupon:v_GetCoupon,
        getcoupolist:v_GetCoupoList,
        getgsshop:v_GetGsShop,
        getgsghoparea:v_GetGsShopArea,
        getgsproduct:v_GetGsProduct,
        getsitenav:v_GetSiteNav,
        getbrandtitle:v_GetBrandTitle,
        getbrand:v_GetBrand,
        getbrandlist:v_GetBrandList

      }

     /**
     * 获取首页上面的菜单栏数据
     * 方法名：getindexmenu
     * 请求方式：get
     * 传参:无
     * 返回数据样例：
     *     {
                "result": [{
                    "indexmenuId": “菜单的id”,
                    "name": "菜单的名称",
                    "img": "菜单的图片",
                    "titlehref": "菜单的链接地址"
                }]
            }
     */
    function v_GetIndexMenu(callback) {
        var url = Route.baseUrl + '/api/getindexmenu';
        
        $.get( url, function( res ) {
            callback && callback( res );
            
        }, 'json');

    }
    // 获取折扣数据，方式get，返回数据json

    function v_GetMoneyCtrl(callback){

      var url = Route.baseUrl + "/api/getmoneyctrl";
      $.get(url,function(val){

        callback && callback(val);
      },"json");
    }

    //获取商品分类数据，格式get，返回json 

    function v_GetCategoryTitle(callback){
       
        var url = Route.baseUrl + "/api/getcategorytitle";
        $.get(url,function(val){

        callback && callback(val);
      },"json");
    }
    //获取分类列表，格式get，返回json
    // 传入参数，
    //点击不同的分类，传给不同的分类id，获取不同的数据

    function v_GetCategory(callback, titleid){
        var url = Route.baseUrl + "/api/getcategory";
        $.get(url,{
            titleid: titleid
            }, function(val){
            callback && callback(val);
        },"json");
    } 

    // 获取商品列表id进行分类数据获取

    function v_GetCategorybyId(callback,id){
        var url = Route.baseUrl + "/api/getcategorybyid";
        $.get(url,{categoryid:id},function(val){
            callback && callback(val);
        },"json");
    }

    // 根据分类id获取该分类的商品列表并渲染到页面
    // 不传第二个参数也行
    function v_GetProductList(callback,categoryid,pageid ){
        var url = Route.baseUrl + "/api/getproductlist";
        $.get(url,{
            categoryid:categoryid,
            pageid :pageid 
        },function(val){
            callback &&callback(val);
        },"json");
    }
    // 获取商品详情数据
    function v_GetProductDetail(callback,pId){
        var url = Route.baseUrl + "/api/getproduct";
        $.get(url,{
            productid:pId
        },function(val){
            callback && callback(val);
        },"json")
    }
    //获取评论数据
    function v_GetProductCom(callback,pId){
        var url = Route.baseUrl + "/api/getproductcom";
        $.get(url,{
            productid:pId
        },function(val){
            callback && callback(val);
        },"json")
    } 

    // 省钱商品详情列表数据
    function v_GetMoneyCtrlList(callback,pageid){
        var url = Route.baseUrl + "/api/getmoneyctrl";
        $.get(url,{
            pageid:pageid
        },function(val){
            callback && callback(val);
        },"json")
    }


    // 省钱控商品详情api
    function v_GetMoneyCtrlProduct(callback,productid){
        var url = Route.baseUrl + "/api/getmoneyctrlproduct";
        $.get(url,{
            productid:productid
        },function(val){
            callback && callback(val);
        },"json")
    }
    // 省钱控商品列表api
    function v_GetInlandDiscount(callback){
        var url = Route.baseUrl + "/api/getinlanddiscount";
        $.get(url,function(val){
            callback && callback(val);
        },"json")
    }
    // 国内折扣商品详情api
    function v_GetDiscountProduct(callback,productid){
        var url = Route.baseUrl + "/api/getdiscountproduct";
        $.get(url,{
            productid:productid
        },function(val){
            callback && callback(val);
        })
    }

    // 白菜价返回的数据

    function v_GetEtam(callback){
        var url = Route.baseUrl + "/api/getbaicaijiatitle";
        $.get(url,function(val){
            callback && callback(val);
        })
    }

    // 白菜价商品列表
    function v_GetEtamList(callback,titleid){
        var url = Route.baseUrl + "/api/getbaicaijiaproduct";
        $.get(url,{
            titleid:titleid
        },function(val){
            callback && callback(val);
        })
    }
    //*********** 海淘商品数据直接调用省钱控就行
    // 优惠券标题

    function v_GetCoupon(callback){
        var url = Route.baseUrl + "/api/getcoupon";
        $.get(url,function(val){
            callback && callback(val);
        })
    }
    // 优惠券详情
    function v_GetCoupoList(callback,couponid){
            var url = Route.baseUrl + "/api/getcouponproduct";
            $.get(url,{
                couponid:couponid
            },function(val){
                callback && callback(val);
            })
        }
    // 凑单品页面页面
    //凑单品京东店铺api


    function v_GetGsShop(callback){
        var url = Route.baseUrl + "/api/getgsshop";
        $.get(url,function(val){
            callback && callback(val);
        })
    }

    //凑单品华北区域api/api/getgsshoparea
    function v_GetGsShopArea(callback){
        var url = Route.baseUrl + "/api/getgsshoparea";
        $.get(url,function(val){
            callback && callback(val);
        })
    }
    // 凑单品商品列表api
    function v_GetGsProduct(callback,shopid,areaid ){
        var url = Route.baseUrl + "/api/getgsproduct";
        $.get(url,{
            shopid:shopid,
            areaid :areaid 
        },function(val){
            callback && callback(val);
        })
    }
// 商城导航
 function v_GetSiteNav(callback){
    var url = Route.baseUrl + "/api/getsitenav";
    $.get(url,function(val){
        callback && callback(val);
    })
 }
// 品牌大全标题api
// /api/getbrandtitle
function v_GetBrandTitle(callback){
    var url = Route.baseUrl + "/api/getbrandtitle";
    $.get(url,function(val){
        callback && callback(val);
    })
}
// 品牌标题对应的十大品牌api
///api/getbrand

function v_GetBrand(callback,brandtitleid){
    var url = Route.baseUrl + "/api/getbrand";
    $.get(url,{
        brandtitleid:brandtitleid
    },function(val){
        callback && callback(val);
    })

} 
// 销量排行商品的评论api
 ///api/getproductcom
 // 直接调用 上方函数

function v_GetBrandList(callback,brandtitleid,pagesize){
    var url = Route.baseUrl + "/api/getbrandproductlist";
    $.get(url,{
        brandtitleid:brandtitleid,
        pagesize:pagesize || 4
    },function(val){
        callback && callback(val);
    })

} 








    window.Route = Route; /* 向外暴露 Route */
})(window);