/**
 * Created by admin on 2018/8/19.
 */
$(function () {
    // 设置
    $("#set").on("click", function () {
        $("#myModal").modal('show');
        var name = $(".table").find(".name").text();
        var slogan = $(".table").find(".slogan").text();
        var phone = $(".table").find(".phone").text();
        var address = $(".table").find(".address").text();
        var email = $(".table").find(".email").text();
        $("#name").val(name);
        $("#slogan").val(slogan);
        $("#phone").val(phone);
        $("#address").val(address);
        $("#email").val(email);
    });
    // 保存
    $(".save").on("click", function () {
        var name = $("#name").val();
        var slogan = $("#slogan").val();
        var phone = $("#phone").val();
        var address = $("#address").val();
        var email = $("#email").val();
        $("#failModal").modal('show');
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