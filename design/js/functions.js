$(document).ready(function () {    
    $("a[rel='image1']").colorbox();
    $("a[rel='image2']").colorbox();
    //$.fn.HoverImageText.defaults.AnimShow = { marginTop: "241px", height: "show" };
    //$.fn.HoverImageText.defaults.AnimHide = { marginTop: "250px", height: "hide" }; 
    $("#coverImage").showFeatureText();

    $("#moreLink").click(function (event) {
        event.preventDefault();
        $("#moreDiv").slideToggle("slow");
        $("html").animate({ scrollTop: $(document).height() }, "slow");
        return false;
    });
    $("#moreLink a").click(function (event) {
        event.preventDefault();
        $("#moreDiv").slideUp();
    });
});

$.fn.showFeatureText = function () {
    return this.each(function () {
        var box = $(this);
        var text = $('p', this);

        text.hide();

        //box.hover(function () {
        //    text.show("fast");
        //}, function () {
        //    text.hide("slow");
        //});
    });
}


