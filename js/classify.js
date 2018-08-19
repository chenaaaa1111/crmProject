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
        var className = $(this).parents("tr").find(".className").text();
        $("#className").val(className);
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
        var className = $("#className").val();
        $("#failModal").modal('show');
    });
    // 清空
    $('#myModal').on('hide.bs.modal', function () {
        $("#className").val('');
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