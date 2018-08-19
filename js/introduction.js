/**
 * Created by admin on 2018/8/17.
 */
$(function () {
    // 编辑
    $("#edit").on("click", function () {
        var title = $(".infoBox .title").text();
        var text = $(".infoBox .content").text();
        $("#title").val(title);
        $("#describe").val(text);
        $("#myModal").modal('show');
        $("#myModalLabel").text('编辑简介');
    });

    // 保存
    $(".save").on("click", function () {
        var id = $(this).parents('tr').find('.hideCol').text();
        var title = $("#title").val();
        var text = $("#describe").val();
        $("#failModal").modal('show');
    });
    // 清空
    $('#myModal').on('hide.bs.modal', function () {
        $("#inputFile").val('');// 这里清空一下file的值
        $(".fileName").text('');
        $("#title").val('');
        $("#describe").val('');
    });
    // 选中文件
    $("#inputFile").change(function (event,file) {
        var namarry = $(this).val().split("\\");
        var sname = namarry[namarry.length - 1];
        $(".fileName").text(sname);
    });

});