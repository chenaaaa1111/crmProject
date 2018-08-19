/**
 * Created by admin on 2018/8/19.
 */
$(function () {
    var myVisitChart = echarts.init(document.getElementById("visit"));
    var myNumberChart = echarts.init(document.getElementById("number"));
    var myNewsChart = echarts.init(document.getElementById("news"));

    var chartJson = {
        week: {
            cols: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            data: {
                visit : [10, 52, 200, 334, 390, 330, 220],
                number: [20, 52, 200, 334, 390, 330, 210],
                news  : [30, 52, 200, 334, 390, 330, 200]
            }
        },
        month: {
            cols: ['第一周', '第二周', '第三周', '第四周'],
            data: {
                visit : [10, 52, 200, 334],
                number: [20, 52, 200, 334],
                news  : [30, 52, 200, 334]
            }
        },
        quarter:{
            cols: ['上上月', '上月', '本月'],
            data: {
                visit : [10, 52, 200],
                number: [20, 52, 200],
                news  : [30, 52, 200]
            }
        }
    }
    // 默认显示周
    initCharts(chartJson.week.cols,chartJson.week.data);
    function initCharts (cols,data) {
        console.log(data.number );
        initVisitCharts(cols,data.visit);
        initNmuberCharts(cols,data.number);
        initNewsCharts(cols,data.news);
    }
    //form.on('select(level)', function (item) {
    //    var type = item.value;
    //    initCharts(chartJson[type].cols,chartJson[type].data)
    //})
    $(".form-control").on("change",function () {
       var type = $(this).val();
        initCharts(chartJson[type].cols,chartJson[type].data)
    });
    // 访问次数
    function initVisitCharts (cols,data) {
        var option = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'item',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (datas) {
                    return 123
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: cols,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: data
                }
            ],
            label: {
                show: true,
                position: "top",
            }
        };
        myVisitChart.setOption(option);
        $("#visit").next().text(sum(data));
    }
    // 访客数量
    function initNmuberCharts (cols,data) {
        console.log(data,999);
        var option = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'item',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (datas) {
                    return 123
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: cols,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: data
                }
            ],
            label: {
                show: true,
                position: "top",
            }
        };
        myNumberChart.setOption(option);
        $("#number").next().text(sum(data));
    }
    // 新闻总阅读量
    function initNewsCharts (cols,data) {
        var option = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'item',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (datas) {
                    return 123
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: cols,
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: data
                }
            ],
            label: {
                show: true,
                position: "top",
            }
        };
        myNewsChart.setOption(option);
        $("#news").next().text(sum(data));
    }

    function sum(arr) {
        var s = 0;
        for (var i=arr.length-1; i>=0; i--) {
            s += arr[i];
        }
        return s;
    }
});