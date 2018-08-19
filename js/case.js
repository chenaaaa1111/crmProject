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
        $("#imgModal").modal('show');
        $("#imgModalLabel").text('编辑产品');
    });
    // 删除
    $(".table").on("click",".delete", function () {
        var id = $(this).parents('tr').find('.hideCol').text();
        alert("删除id = "+id+" 的信息");
    });
    // 保存
    $(".save").on("click", function () {
        var id = $(this).parents('tr').find('.hideCol').text();
        var title = $("#title").val();
        var describe = $("#describe").val();
        var classify = $("#classify").val();
        var imgarry=imgArray.elem;
        console.log('case',imgarry);
        alert('保存')
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