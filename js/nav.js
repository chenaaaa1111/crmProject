/**
 * Created by admin on 2018/8/17.
 */
$(function () {
    var navData = [
        {
            title: '数据统计',
            child: [
                {
                    title: '数据统计',
                    url: 'count.html'
                }
            ]
        },
        {
            title: '产品管理',
            child: [
                {
                    title: '发布产品',
                    url: 'pages/product.html'
                },
                {
                    title: '产品分类',
                    url: 'pages/classify.html'
                }
            ]
        },
        {
            title: '案例管理',
            child: [
                {
                    title: '发布案例',
                    url: 'pages/case.html'
                },
                {
                    title: '合作客户',
                    url: 'pages/cooperation.html'
                }
            ]
        },
        {
            title: '服务介绍',
            child: [
                {
                    title: '服务说明',
                    url: 'pages/service.html'
                },
                {
                    title: '行业优势',
                    url: 'pages/industry.html'
                }
            ]
        },
        {
            title: '资讯管理',
            child: [
                {
                    title: '资讯管理',
                    url: 'pages/news.html'
                }
            ]
        },
        {
            title: '人才招聘',
            child: [
                {
                    title: '发布招聘',
                    url: 'pages/release.html'
                },
                {
                    title: '应聘信息',
                    url: 'pages/response.html'
                }
            ]
        },
        {
            title: '关于企业',
            child: [
                {
                    title: '公司简介',
                    url: 'pages/introduction.html'
                },
                {
                    title: '团队信息',
                    url: 'pages/teamInfo.html'
                },
                {
                    title: '企业文化',
                    url: 'pages/culture.html'
                },
                {
                    title: '荣誉资质',
                    url: 'pages/honor.html'
                }
            ]
        },
        {
            title: '客户服务',
            child: [
                {
                    title: '客户信息',
                    url: 'pages/customer.html'
                }
            ]
        },
        {
            title: '系统管理',
            child: [
                {
                    title: '操作员管理',
                    url: 'pages/worker.html'
                },
                {
                    title: '系统设置',
                    url: 'pages/system.html'
                }
            ]
        }
    ];
    setNav (navData);
    function setNav (data) {
        var html = '<ul>';
        for(var i=0;i<data.length;i++) {
            if (i == 0) {
                html += '<li class="nav-item active">'+
                            '<a class="navList" href="javascript:;"><span>'+data[i].title+'</span><i class="glyphicon glyphicon-menu-right glyphicon-menu-down" aria-hidden="true"></i></a>'+
                            '<ul class="childBox">';
            } else {
                html += '<li class="nav-item">'+
                            '<a class="navList" href="javascript:;"><span>'+data[i].title+'</span><i class="glyphicon glyphicon-menu-right" aria-hidden="true"></i></a>'+
                            '<ul class="childBox">';
            }
            for (var n=0;n<data[i].child.length;n++){
                if (i==0&&n==0) {
                    html += '<li><a class="childList current" data_url="'+data[i].child[n].url+'"><span>'+data[i].child[n].title+'</span></a></li>';
                } else {
                    html += '<li><a class="childList" data_url="'+data[i].child[n].url+'"><span>'+data[i].child[n].title+'</span></a></li>';
                }

            }
            html += '</ul></li>';
        }
        html += '</ul>';

        $(".myNavBox").html(html);
    }
    $(".myNavBox").on("click",".nav-item", function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).find(".glyphicon").removeClass("glyphicon-menu-down");
        } else {
            $(this).addClass('active').siblings().removeClass('active');
            $(this).find(".glyphicon").addClass("glyphicon-menu-down")
            $(this).siblings().find(".glyphicon").removeClass("glyphicon-menu-down")
        }
    });
    $(".myNavBox").on("click",".childList", function () {
        for(var i=0;i<$(".myNavBox .childList").length;i++) {
            $(".myNavBox .childList").eq(i).removeClass('current');
        }
        $(this).addClass('current');
        var url = $(this).attr('data_url');
        $('#myIframe').attr('src',url);
        return false;
    });
});