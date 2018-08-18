/**
 * Created by admin on 2018/8/19.
 */
$(function () {
    // 设置
    $("#set").on("click", function () {
        $("#myModal").modal('show');
        var name = $(".table").find(".name").text();
        var phone1 = $(".table").find(".phone1").text();
        var phone2 = $(".table").find(".phone2").text();
        var address1 = $(".table").find(".address1").text();
        var address2 = $(".table").find(".address2").text();
        $("#name").val(name);
        $("#phone1").val(phone1);
        $("#phone2").val(phone2);
        $("#address1").val(address1);
        $("#address2").val(address2);
    });
    // 保存
    $(".save").on("click", function () {
        var name = $("#name").val('');
        var phone1 = $("#phone1").val('');
        var phone2 = $("#phone2").val('');
        var address1 = $("#address1").val('');
        var address2 = $("#address2").val('');
        alert('保存')
    });
    // 清空
    $('#myModal').on('hide.bs.modal', function () {
        $("#inputFile").val('');
        $(".fileName").text('');
        $("#name").val('');
        $("#phone1").val('');
        $("#phone2").val('');
        $("#address1").val('');
        $("#address2").val('');
    });
});