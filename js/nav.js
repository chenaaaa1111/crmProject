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
                    title: '产品管理',
                    url: ''
                },
                {
                    title: '产品分类',
                    url: ''
                }
            ]
        },
        {
            title: '产品管理',
            child: [
                {
                    title: '发布产品',
                    url: ''
                },
                {
                    title: '产品分类',
                    url: ''
                }
            ]
        },
        {
            title: '案例管理',
            child: [
                {
                    title: '发布案例',
                    url: ''
                },
                {
                    title: '合作客户',
                    url: ''
                }
            ]
        },
        {
            title: '服务介绍',
            child: [
                {
                    title: '服务说明',
                    url: ''
                },
                {
                    title: '行业优势',
                    url: ''
                }
            ]
        },
        {
            title: '资讯管理',
            child: [
                {
                    title: '资讯管理',
                    url: ''
                }
            ]
        },
        {
            title: '人才招聘',
            child: [
                {
                    title: '发布招聘',
                    url: ''
                },
                {
                    title: '应聘信息',
                    url: ''
                }
            ]
        },
        {
            title: '关于企业',
            child: [
                {
                    title: '公司简介',
                    url: ''
                },
                {
                    title: '团队信息',
                    url: ''
                },
                {
                    title: '企业文化',
                    url: ''
                },
                {
                    title: '荣誉资质',
                    url: ''
                }
            ]
        },
        {
            title: '客户服务',
            child: [
                {
                    title: '客户信息',
                    url: ''
                }
            ]
        },
        {
            title: '系统管理',
            child: [
                {
                    title: '操作员管理',
                    url: ''
                },
                {
                    title: '系统设置',
                    url: ''
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
                            '<a class="navList" href="javascript:;"><span>'+data[i].title+'</span><i class="glyphicon glyphicon-menu-right glyphicon-menu-down" aria-hidden="true"></i></a>'+
                            '<ul class="childBox">';
            }
            for (var n=0;n<data[i].child.length;n++){
                if (i==0&&n==0) {
                    html += '<li><a class="childList current" href="'+data[i].child[n].url+'"><span>'+data[i].child[n].title+'</span></a></li>';
                } else {
                    html += '<li><a class="childList" href="'+data[i].child[n].url+'"><span>'+data[i].child[n].title+'</span></a></li>';
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
        return false;
    });
});