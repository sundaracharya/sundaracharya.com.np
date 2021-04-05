
$(document).ready(function () {
    var preNavAbout = 'about-contents';
    $('#nav-about a').click(function () {
        var activeId = $(this).attr('id') + "-contents";
        $('#nav-wrapper-contents >div').removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');
        var child = $(this).attr('id') + "-contents >div";
        console.log(preNavAbout);
        $('#'+preNavAbout+' >div').removeClass('active');
        preNavAbout = $(this).attr('id')+'-contents';
        $('#' + child).addClass('active').siblings().addClass('active');
        console.log(child);
        $('#' + activeId).addClass('active').siblings().removeClass('active');
    });
});