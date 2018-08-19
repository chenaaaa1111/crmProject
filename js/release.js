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
        var position = $(this).parents("tr").find(".position").text();
        var department = $(this).parents("tr").find(".department").text();
        var number = $(this).parents("tr").find(".number").text();
        var money = $(this).parents("tr").find(".money").text();
        var describe = $(this).parents("tr").find(".describe").text();
        var condition = $(this).parents("tr").find(".condition").text();
        $("#position").val(position);
        $("#department").val(department);
        $("#number").val(number);
        $("#money").val(money);
        $("#describe").val(describe);
        $("#condition").val(condition);
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
        var position = $("#position").val();
        var department = $("#department").val();
        var number = $("#number").val();
        var money = $("#money").val();
        var describe = $("#describe").val();
        var condition = $("#condition").val();
        $("#failModal").modal('show');
    });
    // 清空
    $('#myModal').on('hide.bs.modal', function () {
        $("#position").val('');
        $("#department").val('');
        $("#number").val('');
        $("#money").val('');
        $("#describe").val('');
        $("#condition").val('');
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