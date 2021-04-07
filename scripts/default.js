
$(document).ready(function () {
    var preNavAbout = 'about-contents';
    $('#nav-about a').click(function () {
        var activeId = $(this).attr('id') + "-contents";
        $('#nav-wrapper-contents >div').removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');
        var child = $(this).attr('id') + "-contents >div";
        console.log(preNavAbout);
        $('#' + preNavAbout + ' >div').removeClass('active');
        preNavAbout = $(this).attr('id') + '-contents';
        $('#' + child).addClass('active').siblings().addClass('active');
        console.log(child);
        $('#' + activeId).addClass('active').siblings().removeClass('active');
    });
    $('#btnSubmit').click(function () {
        submitButton();
    });
});
function submitButton() {
    var mName = $("#mName")[0].value;
    var mSubject = $("#mSubject")[0].value;
    if (mSubject == "") {
        mSubject = "No Subject";
    }
    var mEmail = $("#mEmail")[0].value;
    var mMessage = $("#message")[0].value;
    var body = mName + "    " + mEmail + "     " + mMessage;
    if(body==""){
        body = 'Message Here';
    }
    $('#contact-form a').attr('href', 'mailto:sundaracharya096@gmail.com?' + 'subject=' + mSubject + '&body=' + body);
};