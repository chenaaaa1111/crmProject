/**
 * Created by admin on 2018/8/17.
 */
$(function () {
    // 添加
    $("#add").on("click", function () {
        $("#myModal").modal('show');
        $("#myModalLabel").text('添加员工');
    });
    // 编辑
    $(".table").on("click",".editRow", function () {
        $("#myModal").modal('show');
        $("#myModalLabel").text('编辑员工信息');
        var id = $(this).parents('tr').find('.hideCol').text();
        var number = $(this).parents("tr").find(".number").text();
        var name = $(this).parents("tr").find(".name").text();
        var phone = $(this).parents("tr").find(".phone").text();
        var user = $(this).parents("tr").find(".user").text();
        var password = $(this).parents("tr").find(".password").text();
        var status = $(this).parents("tr").find(".status").text();
        //var status = $(this).parents("tr").find("input[name='inlineRadio']:checked").text();


        $("#number").val(number);
        $("#name").val(name);
        $("#phone").val(phone);
        $("#user").val(user);
        $("#password").val(password);
        var radios = $('.radio-inline').find('input[name="inlineRadio"]');
        for(var i=0;i<radios.length;i++) {
            if(radios.eq(i).val() == status) {
                radios.eq(i).attr("checked",true);
            }
        }
    });
    // 同步输入
    $("#phone").bind('input propertychange',function () {
        var summary=$(this).val();
        $("#user").val(summary);
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
        var number = $("#number").val();
        var name = $("#name").val();
        var phone = $("#phone").val();
        var user = $("#user").val();
        var password = $("#password").val();
        var radios = $('.radio-inline').find('input[name="inlineRadio"]');
        var status = '';
        for(var i=0;i<radios.length;i++) {
            if(radios.eq(i).attr('checked') == true) {
                status = radios.eq(i).attr('checked')
            }
        }
        $("#failModal").modal('show');
    });
    // 清空
    $('#myModal').on('hide.bs.modal', function () {
        var radios = $('.radio-inline').find('input[name="inlineRadio"]');
        $("#number").val('');
        $("#name").val('');
        $("#phone").val('');
        $("#user").val('');
        $("#password").val('');
        radios.eq(0).attr("checked",true);
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