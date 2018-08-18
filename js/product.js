/**
 * Created by admin on 2018/8/17.
 */
$(function () {
    // 添加
    $("#add").on("click", function () {
        $("#title").val('');
        $("#describe").val('');
        $("#classify").val('');
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
    // 删除
    $(".table").on("click",".delete", function () {
        var id = $(this).parents('tr').find('.hideCol').text();
        alert("删除id = "+id+" 的信息");
    });
    // 保存
    $(".save").on("click", function () {
        var title = $("#title").val();
        var describe = $("#describe").val();
        var classify = $("#classify").val();
        alert('保存')
    });
    // 选中文件
    $("#inputFile").change(function (event,file) {
        var namarry = $(this).val().split("\\");
        var sname=namarry[namarry.length-1];
        $(".fileName").text(sname);
    });
    //分页
    $(".pageBox").createPage({
        pageCount: 10,
        current: 1,
        backFn: function(p) {
            console.log(p,'当前页数');
        }
    });

});