function bootstrapTabControl() {
    var i, items = $('.nav-link'),
        pane = $('.tab-pane');
    // next
    $('.nexttab').on('click', function () {
        for (i = 0; i < items.length; i++) {
            if ($(items[i]).hasClass('active') == true) {
                break;
            }
        }
        if (i < items.length - 1) {
            // for tab
            $(items[i]).removeClass('active').addClass('disabled').attr("tabindex", "-1").attr(
                "aria-disabled", "true");
            $(items[i + 1]).addClass('active');
            // for pane
            $(pane[i]).removeClass('show active');
            $(pane[i + 1]).addClass('show active');
        }

    });
}
bootstrapTabControl();

function checkPasswordMatch() {
    var password = $("#newpassword").val();
    var confirmPassword = $("#ulangi-password").val();

    if (password != confirmPassword)
        $("#divCheckPasswordMatch").html("Passwords tidak sama!");
    else
        $("#divCheckPasswordMatch").html("Passwords sama.");
}

$(document).ready(function () {
    $("#newpassword, #ulangi-password").keyup(checkPasswordMatch);
});

$('#newemail').on('keyup', function () {
    var valid = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(this.value) && this.value.length;
    $('#valid').html('Email\ ini' + (valid ? '' : ' tidak') + ' valid');
});