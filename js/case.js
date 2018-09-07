/**
 * Created by admin on 2018/8/17.
 */
$(function () {
    // 添加
    $("#add").on("click", function () {
        $("#myModal").modal('show');
        $("#myModalLabel").text('添加产品');
    });
    // 编辑
    $(".table").on("click",".editRow", function () {
        $("#myModal").modal('show');
        $("#myModalLabel").text('编辑产品');
        var id = $(this).parents('tr').find('.hideCol').text();
        var title = $(this).parents("tr").find(".title").text();
        var describe = $(this).parents("tr").find(".describe").text();
        var classify = $(this).parents("tr").find(".classify").text();
        $("#title").val(title);
        $("#describe").val(describe);
        $("#classify").val(classify);
    });
    // 预览图片
    $(".table").on("click","img", function () {
        var src = $(this).attr("src");
        $("#imgModal").modal('show');
        $("#imgModalLabel").text('编辑产品');
        $(".ylPic").attr("src",src);
    });
    var colId = '';
    // 点击删除按钮打开弹框
    $(".table").on("click",".delete", function () {
        colId = $(this).parents('tr').find('.hideCol').text();
        $("#errModal").modal('show');
        $("#errModalLabel").text('提示信息');
        //alert("删除id = "+id+" 的信息");
    });
    // 确认删除
    $(".deleteCol").on("click", function () {
        console.log("确认删除 id = "+colId+"的信息")
        $("#errModal").modal('hide');
    });
    // 保存
    $(".save").on("click", function () {
        var id = $(this).parents('tr').find('.hideCol').text();
        var title = $("#title").val();
        var describe = $("#describe").val();
        var classify = $("#classify").val();
        // var imgarry=imgArray.elem;
        // console.log('case',imgarry);
        $("#failModal").modal('show');
    });
    // 清空
    $('#myModal').on('hide.bs.modal', function () {
        console.log(123);
        $(".up-section").remove();
        $("#inputFile").val();// 这里清空一下file的值
        $("#title").val('');
        $("#describe").val('');
        $("#classify").val('');
    });
    // 分页
    $(".pageBox").createPage({
        pageCount: 10,
        current: 1,
        backFn: function(p) {
            console.log(p,'当前页数');
        }
    })
});