/**
 * Created by admin on 2018/8/17.
 */
$(function () {
    // 添加
    $("#add").on("click", function () {
        $("#myModal").modal('show');
        $("#myModalLabel").text('添加客户');
    });
    // 编辑
    $(".table").on("click",".editRow", function () {
        $("#myModal").modal('show');
        $("#myModalLabel").text('编辑客户信息');
        var id = $(this).parents('tr').find('.hideCol').text();
        var title = $(this).parents("tr").find(".title").text();
        $("#title").val(title);
    });
    // 预览图片
    $(".table").on("click","img", function () {
        var src = $(this).attr("src");
        $("#imgModal").modal('show');
        $("#imgModalLabel").text('编辑产品');
        $(".ylPic").attr("src",src);
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
        alert('保存')
    });
    // 清空
    $('#myModal').on('hide.bs.modal', function () {
        $("#inputFile").val();// 这里清空一下file的值
        $("#title").val('');
        $(".fileName").text('');
    });
    // 选中文件
    $("#inputFile").change(function (event,file) {
        var namarry = $(this).val().split("\\");
        var sname = namarry[namarry.length - 1];
        $(".fileName").text(sname);
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