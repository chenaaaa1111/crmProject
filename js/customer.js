/**
 * Created by admin on 2018/8/17.
 */
$(function () {
    // 编辑
    $(".table").on("click",".editRow", function () {
        $("#myModal").modal('show');
        $("#myModalLabel").text('编辑产品');
        var id = $(this).parents('tr').find('.hideCol').text();
        var name = $(this).parents("tr").find(".name").text();
        var phone = $(this).parents("tr").find(".phone").text();
        var email = $(this).parents("tr").find(".email").text();
        var message = $(this).parents("tr").find(".message").text();
        var time = $(this).parents("tr").find(".time").text();

        $("#name").val(name);
        $("#phone").val(phone);
        $("#email").val(email);
        $("#message").val(message);
        $("#time").val(time);
    });
    // 删除
    $(".table").on("click",".delete", function () {
        var id = $(this).parents('tr').find('.hideCol').text();
        alert("删除id = "+id+" 的信息");
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