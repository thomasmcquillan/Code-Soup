
$(document).ready(function () {
    $(".sleeve-left").click(function () {
        if (
            $(".sleeve-left-wide-long").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-wide-long").toggle();
            $(".sleeve-left-wide-long-rotate").toggle();
            $(".sleeve-right-wide-long-rotate").toggle();
            $(".pattern-thumb-elbow-rotate-left").toggle();
            $(".pattern-thumb-elbow-rotate-right").toggle();
            currentSleeveLength = sleeveLong;
        } else if (
            $(".sleeve-left-wide-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-wide-long-rotate").toggle();
            $(".sleeve-left-wide-short").toggle();
            $(".sleeve-right-wide-short").toggle();
            $(".pattern-thumb-elbow-rotate-left").toggle();
            $(".pattern-thumb-elbow-rotate-right").toggle();
            currentSleeveLength = sleeveShort;
        } else if (
            $(".sleeve-left-wide-short").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-wide-short").toggle();
            $(".sleeve-left-wide-short-rotate").toggle();
            $(".sleeve-right-wide-short-rotate").toggle();
            $(".pattern-thumb-elbow-rotate-left").toggle();
            $(".pattern-thumb-elbow-rotate-right").toggle();
        } else if (
            $(".sleeve-left-wide-short-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-wide-short-rotate").toggle();
            $(".sleeve-left-narrow-short-rotate").toggle();
            $(".sleeve-right-narrow-short-rotate").toggle();
            $(".pattern-thumb-elbow-rotate-left").toggle();
            $(".pattern-thumb-elbow-rotate-right").toggle();
        } else if (
            $(".sleeve-left-narrow-short-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-narrow-short-rotate").toggle();
            $(".sleeve-left-narrow-long").toggle();
            $(".sleeve-right-narrow-long").toggle();
            $(".pattern-thumb-elbow-rotate-left").toggle();
            $(".pattern-thumb-elbow-rotate-right").toggle();
            currentSleeveLength = sleeveLong;
        } else if (
            $(".sleeve-left-narrow-long").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-narrow-long").toggle();
            $(".sleeve-left-narrow-long-rotate").toggle();
            $(".sleeve-right-narrow-long-rotate").toggle();
            $(".pattern-thumb-elbow-rotate-left").toggle();
            $(".pattern-thumb-elbow-rotate-right").toggle();
        } else if (
            $(".sleeve-left-narrow-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-narrow-long-rotate").toggle();
            $(".sleeve-left-narrow-short").toggle();
            $(".sleeve-right-narrow-short").toggle();
            $(".pattern-thumb-elbow-rotate-left").toggle();
            $(".pattern-thumb-elbow-rotate-right").toggle();
            currentSleeveLength = sleeveShort;
        } else if (
            $(".sleeve-left-narrow-short").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-narrow-short").toggle();
            $(".sleeve-left-wide-long").toggle();
            $(".sleeve-right-wide-long").toggle();
            $(".pattern-thumb-elbow-rotate-left").toggle();
            $(".pattern-thumb-elbow-rotate-right").toggle();
            currentSleeveLength = sleeveLong;
        } 
        $("#garment-circum").text(`${currentSleeveLength * 2}cm`);
        $("#fabric-required").text(`${currentSleeveLength * 2}cm wide x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm long`);
    });
});

$(document).ready(function () {
    $(".neck-tile").hover(function () {
        $("#neck-round").css("background-color", "#ffb3009d");
    }, function () {
        $("#neck-round").css("background-color", "#b7b3a7");
    });
});

// right sleeve tile function for WIDE sleeves

$(document).ready(function () {
    $(".sleeve-right").click(function () {
        if (
            $(".sleeve-right-wide-long").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-wide-long").toggle();
            $(".sleeve-left-wide-long-rotate").toggle();
            $(".sleeve-right-wide-long-rotate").toggle();
            $(".pattern-thumb-elbow-rotate-left").toggle();
            $(".pattern-thumb-elbow-rotate-right").toggle();
        } else if (
            $(".sleeve-right-wide-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-wide-long-rotate").toggle();
            $(".sleeve-left-wide-short").toggle();
            $(".sleeve-right-wide-short").toggle();
            $(".pattern-thumb-elbow-rotate-left").toggle();
            $(".pattern-thumb-elbow-rotate-right").toggle();
            currentSleeveLength = sleeveShort;
        } else if (
            $(".sleeve-right-wide-short").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-wide-short").toggle();
            $(".sleeve-left-wide-short-rotate").toggle();
            $(".sleeve-right-wide-short-rotate").toggle();
            $(".pattern-thumb-elbow-rotate-left").toggle();
            $(".pattern-thumb-elbow-rotate-right").toggle();
        } else if (
            $(".sleeve-right-wide-short-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-wide-short-rotate").toggle();
            $(".sleeve-left-wide-long").toggle();
            $(".sleeve-right-wide-long").toggle();
            $(".pattern-thumb-elbow-rotate-left").toggle();
            $(".pattern-thumb-elbow-rotate-right").toggle();
            currentSleeveLength = sleeveLong;
        }
        $("#garment-circum").text(`${currentSleeveLength * 2}cm`);
        $("#fabric-required").text(`${currentSleeveLength * 2}cm wide x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm long`);
    });
});

$(document).ready(function () {
    $(".sleeve-right").click(function () {
        if (
            $(".sleeve-right-narrow-long").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-narrow-long").toggle();
            $(".sleeve-left-narrow-long-rotate").toggle();
            $(".sleeve-right-narrow-long-rotate").toggle();
            $(".pattern-thumb-elbow-rotate-left").toggle();
            $(".pattern-thumb-elbow-rotate-right").toggle();
        } else if (
            $(".sleeve-right-narrow-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-narrow-long-rotate").toggle();
            $(".sleeve-left-narrow-short").toggle();
            $(".sleeve-right-narrow-short").toggle();
            $(".pattern-thumb-elbow-rotate-left").toggle();
            $(".pattern-thumb-elbow-rotate-right").toggle();
            currentSleeveLength = sleeveShort;
        } else if (
            $(".sleeve-right-narrow-short").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-narrow-short").toggle();
            $(".sleeve-left-narrow-short-rotate").toggle();
            $(".sleeve-right-narrow-short-rotate").toggle();
            $(".pattern-thumb-elbow-rotate-left").toggle();
            $(".pattern-thumb-elbow-rotate-right").toggle();
        } else if (
            $(".sleeve-right-narrow-short-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-narrow-short-rotate").toggle();
            $(".sleeve-left-narrow-long").toggle();
            $(".sleeve-right-narrow-long").toggle();
            $(".pattern-thumb-elbow-rotate-left").toggle();
            $(".pattern-thumb-elbow-rotate-right").toggle();
            currentSleeveLength = sleeveLong;
        }
        $("#garment-circum").text(`${currentSleeveLength * 2}cm`);
        $("#fabric-required").text(`${currentSleeveLength * 2}cm wide x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm long`);
    });
});