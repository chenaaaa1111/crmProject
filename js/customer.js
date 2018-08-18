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
        var sex = $(this).parents("tr").find(".sex").text();
        var education = $(this).parents("tr").find(".education").text();
        var age = $(this).parents("tr").find(".age").text();
        var skill = $(this).parents("tr").find(".skill").text();
        var phone = $(this).parents("tr").find(".phone").text();
        $("#name").val(name);
        $("#sex").val(sex);
        $("#education").val(education);
        $("#age").val(age);
        $("#skill").val(skill);
        $("#phone").val(phone);
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