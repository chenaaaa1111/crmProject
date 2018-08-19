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
    // 分页
    $(".pageBox").createPage({
        pageCount: 10,
        current: 1,
        backFn: function(p) {
            console.log(p,'当前页数');
        }
    })
});