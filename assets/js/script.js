// Declaring constants for toggling pattern download thumbnails.

const tShirtGrid =document.getElementById("t-shirt-grid");
const coatGrid = document.getElementById("coat-grid"); 
const neckRound = document.getElementById("pattern-neck-round");
const neckCollar = document.getElementById("pattern-neck-collar");
const neckWide = document.getElementById("pattern-neck-wide");
const sleeveCutLeft = document.getElementById("pattern-sleeve-cut-left");
const sleeveCutRight = document.getElementById("pattern-sleeve-cut-right");
const bodyRotateLeft = document.getElementById("pattern-body-rotate-left");
const bodyRotateRight = document.getElementById("pattern-body-rotate-right");
const elbowRotateLeft = document.getElementById("pattern-elbow-rotate-left");
const elbowRotateRight = document.getElementById("patternelbow-rotate-right");

// Declaring template download anchor links.

const dlCoatGrid = document.getElementById("dl-coat-grid");
const dlTshirtGrid = document.getElementById("dl-coat-grid");
const dlSleeveSwapLeft = document.getElementById("dl-sleeve-swap-left");
const dlSleeveSwapRight = document.getElementById("dl-sleeve-swap-right");
const dlNeckRound = document.getElementById("dl-neck-round");
const dlNeckCollar = document.getElementById("dl-neck-collar");
const dlNeckWide = document.getElementById("dl-neck-wide");
const dlSleeveCutLeft = document.getElementById("dl-sleeve-cut-left");
const dlSleeveCutRight = document.getElementById("dl-sleeve-cut-right");
const dlElbowRotLeft = document.getElementById("dl-elb-rot-left");
const dlElbowRotRight = document.getElementById("dl-elb-rot-right");

// const dlSleeveSwapLeft = document.getElementById("dl-sleeve-swap-left");
// const dlSleeveSwapRight = document.getElementById("dl-sleeve-swap-right");

// Declaring constant values for body-length, sleeve-width and sleeve length of supplied pattern options.

const bodyCrop = 50;
const bodyHip = 75;
const bodyLong = 100;
const sleeveWide = 50;
const sleeveNarrow = 35;
const sleeveShort = 55;
const sleeveLong = 75;

// Declaring variables for current style.

let currentGarmentLength = 50;
let currentGarmentCircum = 110;
let currentSleeveLength = 55;
let currentSleeveCircum = 50;

// Function that calculates fabric size required to make garment based on the custom values input by user.
// Triggered by Enter/Tab keys in custom body length input.

$("#custom-garment-length").keydown(function (event) {
    if (
        (event.key === "Enter" || event.key == "Tab")) {
        if ($("#custom-garment-length").val() > 0) {
            currentGarmentLength = parseInt($("#custom-garment-length").val(), 10);
            $("#fabric-required").text(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm`);
            $("#custom-garment-length").val('');
        } else {
            $(".alert-wrapper").toggle();
            alertMsg();
            $("#custom-garment-length").val('');
        }
    }
});

$("#custom-garment-circum").keydown(function (event) {
    if (
        (event.key === "Enter" || event.key == "Tab")) {
        if ($("#custom-garment-circum").val() > 0) {
            currentGarmentCircum = parseInt($("#custom-garment-circum").val(), 10);
            $("#fabric-required").text(`${currentGarmentCircum}cm x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm`);
            $("#custom-garment-circum").val('');
        } else {
            $(".alert-wrapper").toggle();
            alertMsg();
            $("#custom-garment-circum").val('');
        }
    }
});

$("#custom-sleeve-circum").keydown(function (event) {
    if (
        (event.key === "Enter" || event.key == "Tab")) {
        if ($("#custom-sleeve-circum").val() > 0) {
            currentSleeveCircum = parseInt($("#custom-sleeve-circum").val(), 10);
            $("#fabric-required").text(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm`);
            $("#custom-sleeve-circum").val('');
        } else {
            $(".alert-wrapper").toggle();
            alertMsg();
            $("#custom-sleeve-circum").val('');
        }
    }
});

// Function to alert user if they enter a negative number value. 
// Code Snippet courtesy of Arpit Anand @ https:www.tutorialspoint.com/How-to-create-and-apply-CSS-to-JavaScript-Alert-box
// Modified and styled to suit the projects' needs and aesthetic.

function alertMsg(alertMessage, okay) {
    let alertBox = $("#alert-input-error");
    alertBox.find("#alert-user").text(alertMessage);
    alertBox.find(".okay").unbind().click(function () {
        alertBox.hide();
        $(".alert-wrapper").toggle();
    });
    alertBox.find(".okay").click(okay);
    alertBox.show();
}

// Next several functions use if/else to check which image tile is currently
// displayed in a specific grid area. Cycles to next image of their type, updating 
// variables used to display fabric size and pattern downloads required for given style.

$(document).ready(function () {
    $(".neck-tile").click(function () {
        if (
            $("#neckline-collar").is(":visible")) {
            $("img:visible", this).toggle(); // Toggle off current neckline tile.
            $("#neckline-wide").toggle(); // Toggle on next available neckline tile.
            $(neckCollar).toggle(); // Toggle off div with download for current neckline. 
            $(neckWide).toggle(); // Toggle on div with download for next neckline.
            $(dlNeckCollar).toggle();
            $(dlNeckWide).toggle();
        } else if (
            $("#neckline-wide").is(":visible")) {
            $("img:visible", this).toggle();
            $("#neckline-round").toggle();
            $(neckWide).toggle();
            $(neckRound).toggle();
            $(dlNeckWide).toggle();
            $(dlNeckRound).toggle();
        } else if (
            $("#neckline-round").is(":visible")) {
            $("img:visible", this).toggle();
            $("#neckline-collar").toggle();
            $(neckRound).toggle();
            $(neckCollar).toggle();
            $(dlNeckRound).toggle();
            $(dlNeckCollar).toggle();
        }
        $("#fabric-required").text(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm`);
    });
});

$(document).ready(function () {
    $(".sleeve-left").click(function () {
        if (
            $(".sleeve-left-wide-long").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-wide-long").toggle();
            $(".sleeve-left-wide-long-rotate").toggle();
            $(".sleeve-right-wide-long-rotate").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            $(dlElbowRotLeft).toggle();
            $(dlElbowRotRight).toggle();
        } else if (
            $(".sleeve-left-wide-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-wide-long-rotate").toggle();
            $(".sleeve-left-wide-short").toggle();
            $(".sleeve-right-wide-short").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            currentSleeveLength = sleeveShort;
            $(dlElbowRotLeft).toggle();
            $(dlElbowRotRight).toggle();
        } else if (
            $(".sleeve-left-wide-short").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-wide-short").toggle();
            $(".sleeve-left-wide-short-rotate").toggle();
            $(".sleeve-right-wide-short-rotate").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            $(dlElbowRotLeft).toggle();
            $(dlElbowRotRight).toggle();
        } else if (
            $(".sleeve-left-wide-short-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-wide-short-rotate").toggle();
            $(".sleeve-left-narrow-short-rotate").toggle();
            $(".sleeve-right-narrow-short-rotate").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            currentSleeveCircum = sleeveNarrow;
        } else if (
            $(".sleeve-left-narrow-short-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-narrow-short-rotate").toggle();
            $(".sleeve-left-narrow-long").toggle();
            $(".sleeve-right-narrow-long").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            currentSleeveLength = sleeveLong;
            $(dlElbowRotLeft).toggle();
            $(dlElbowRotRight).toggle();
        } else if (
            $(".sleeve-left-narrow-long").is(":visible")) {            
            $("img:visible", this).toggle();
            $(".sleeve-right-narrow-long").toggle();
            $(".sleeve-left-narrow-long-rotate").toggle();
            $(".sleeve-right-narrow-long-rotate").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            $(".pattern-elbow-rotation-right").toggle();
        } else if (
            $(".sleeve-left-narrow-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-narrow-long-rotate").toggle();
            $(".sleeve-left-narrow-short").toggle();
            $(".sleeve-right-narrow-short").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            currentSleeveLength = sleeveShort;
            $(dlElbowRotLeft).toggle();
            $(dlElbowRotRight).toggle();
        } else if (
            $(".sleeve-left-narrow-short").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-narrow-short").toggle();
            $(".sleeve-left-wide-long").toggle();
            $(".sleeve-right-wide-long").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            currentSleeveLength = sleeveLong;
            currentSleeveCircum = sleeveWide;
        }
        $("#sleeve-circum").text(`${currentSleeveCircum}cm`);
        $("#garment-circum").text(`${currentSleeveLength * 2}cm`);
        $("#fabric-required").text(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm`);
    });
});

$(document).ready(function () {
    $(".sleeve-right").click(function () {
        if (
            $(".sleeve-right-wide-long").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-wide-long").toggle();
            $(".sleeve-right-wide-long-rotate").toggle();
            $(".sleeve-left-wide-long-rotate").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            $(dlElbowRotLeft).toggle();
            $(dlElbowRotRight).toggle();
        } else if (
            $(".sleeve-right-wide-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-wide-long-rotate").toggle();
            $(".sleeve-right-wide-short").toggle();
            $(".sleeve-left-wide-short").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            currentSleeveLength = sleeveShort;
            $(dlElbowRotLeft).toggle();
            $(dlElbowRotRight).toggle();
        } else if (
            $(".sleeve-right-wide-short").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-wide-short").toggle();
            $(".sleeve-right-wide-short-rotate").toggle();
            $(".sleeve-left-wide-short-rotate").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            $(dlElbowRotLeft).toggle();
            $(dlElbowRotRight).toggle();
        } else if (
            $(".sleeve-right-wide-short-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-wide-short-rotate").toggle();
            $(".sleeve-right-narrow-short-rotate").toggle();
            $(".sleeve-left-narrow-short-rotate").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            currentSleeveCircum = sleeveNarrow;
        } else if (
            $(".sleeve-right-narrow-short-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-narrow-short-rotate").toggle();
            $(".sleeve-right-narrow-long").toggle();
            $(".sleeve-left-narrow-long").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            currentSleeveLength = sleeveLong;
            $(dlElbowRotLeft).toggle();
            $(dlElbowRotRight).toggle();
        } else if (
            $(".sleeve-right-narrow-long").is(":visible")) {            
            $("img:visible", this).toggle();
            $(".sleeve-left-narrow-long").toggle();
            $(".sleeve-right-narrow-long-rotate").toggle();
            $(".sleeve-left-narrow-long-rotate").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            $(".pattern-elbow-rotation-left").toggle();
        } else if (
            $(".sleeve-right-narrow-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-narrow-long-rotate").toggle();
            $(".sleeve-right-narrow-short").toggle();
            $(".sleeve-left-narrow-short").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            currentSleeveLength = sleeveShort;
            $(dlElbowRotLeft).toggle();
            $(dlElbowRotRight).toggle();
        } else if (
            $(".sleeve-right-narrow-short").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-narrow-short").toggle();
            $(".sleeve-right-wide-long").toggle();
            $(".sleeve-left-wide-long").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            currentSleeveLength = sleeveLong;
            currentSleeveCircum = sleeveWide;
        }
        $("#sleeve-circum").text(`${currentSleeveCircum}cm`);
        $("#garment-circum").text(`${currentSleeveLength * 2}cm`);
        $("#fabric-required").text(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm`);
    });
});

$(document).ready(function () {
    $(".neck-tile").hover(function () {
        $("#neck-round").css("background-color", "var(--mu-sand)");
    }, function () {
        $("#neck-round").css("background-color", "var(--mu-silver)");
    });
});

$(document).ready(function () {
    $(".neck-tile").hover(function () {
        $("#neck-collar").css("background-color", "var(--mu-sand)");
    }, function () {
        $("#neck-collar").css("background-color", "var(--mu-silver)");
    });
});

$(document).ready(function () {
    $(".neck-tile").hover(function () {
        $("#neck-wide").css("background-color", "var(--mu-sand)");
    }, function () {
        $("#neck-wide").css("background-color", "var(--mu-silver)");
    });
});

$(document).ready(function () {
    $("#neck-tile-coat").hover(function () {
        $("#neck-collar").css("background-color", "var(--mu-sand)");
    }, function () {
        $("#neck-collar").css("background-color", "var(--mu-silver)");
    });
});

$(document).ready(function () {
    $(".body-rotate").hover(function () {
        $("#tshirt-grid").css("background-color", "var(--mu-sand)");
        $("#coat-grid").css("background-color", "var(--mu-sand)");
        $("#body-rotate-right").css("background-color", "var(--mu-sand)");
        $("#body-rotate-left").css("background-color", "var(--mu-sand)");
    }, function () {
        $("#tshirt-grid").css("background-color", "var(--mu-silver)");
        $("#coat-grid").css("background-color", "var(--mu-silver)");
        $("#body-rotate-right").css("background-color", "var(--mu-silver)");
        $("#body-rotate-left").css("background-color", "var(--mu-silver)");
    });
});

$(document).ready(function () {
    $(".body-straight").hover(function () {
        $("#tshirt-grid").css("background-color", "var(--mu-sand)");
        $("#coat-grid").css("background-color", "var(--mu-sand)");
    }, function () {
        $("#tshirt-grid").css("background-color", "var(--mu-silver)");
        $("#coat-grid").css("background-color", "var(--mu-silver)");
    });
});

// $(document).ready(function () {
//     $("#body-crop-tshirt").hover(function () {
//         $("#t-shirt-grid").css("background-color", "var(--mu-sand)");
//         $("#coat-grid").css("background-color", "var(--mu-sand)");
//     }, function () {
//         $("#t-shirt-grid").css("background-color", "var(--mu-silver)");
//         $("#coat-grid").css("background-color", "var(--mu-silver)");
//     });
// });

$(document).ready(function () {
    $(".sleeve-regular").hover(function () {
        $("#sleeve-cut-right").css("background-color", "var(--mu-sand)");
        $("#sleeve-cut-left").css("background-color", "var(--mu-sand)");
    }, function () {
        $("#sleeve-cut-right").css("background-color", "var(--mu-silver)");
        $("#sleeve-cut-left").css("background-color", "var(--mu-silver)");
    });
});

$(document).ready(function () {
    $(".sleeve-rotate").hover(function () {
        $("#elbow-rotate-left").css("background-color", "var(--mu-sand)");
        $("#elbow-rotate-right").css("background-color", "var(--mu-sand)");
    }, function () {
        $("#elbow-rotate-left").css("background-color", "var(--mu-silver)");
        $("#elbow-rotate-right").css("background-color", "var(--mu-silver)");
    });
});

// --------- Long Tshirt body tile sequencing function -------------- //

$(document).ready(function () {
    $("#body-long-tshirt").click(function () {
        $("#custom-garment-length").val('');
        if (
            $("#tshirt-body-wide-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-hip").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            currentGarmentLength = bodyHip;
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
        } else if (
            $("#tshirt-body-wide-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-long").toggle();
            currentGarmentLength = bodyLong;
        } else if (
            $("#tshirt-body-wide-long").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-long-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
        } else if (
            $("#tshirt-body-wide-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-hip-rotate").toggle();
            currentGarmentLength = bodyHip;
        }
        $("#garment-length").text(`${currentGarmentLength}cm`);
        $("#fabric-required").text(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm`);
    });
});

// ---------------- Coat body tile sequencing function --------------- //

$(document).ready(function () {
    $("#body-long-coat").click(function () {
        $("#custom-garment-length").val('');
        if (
            $("#coat-body-wide-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-long").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
        } else if (
            $("#coat-body-wide-long").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-hip").toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
            currentGarmentLength = bodyHip;
        } else if (
            $("#coat-body-wide-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-hip-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
        } else if (
            $("#coat-body-wide-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-crop").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
            currentGarmentLength = bodyCrop;
        } else if (
            $("#coat-body-wide-crop").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-crop-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
        } else if (
            $("#coat-body-wide-crop-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-crop").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
        } else if (
            $("#coat-body-narrow-crop").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-crop-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
        } else if (
            $("#coat-body-narrow-crop-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-hip").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
            currentGarmentLength = bodyHip;
        } else if (
            $("#coat-body-narrow-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-hip-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
        } else if (
            $("#coat-body-narrow-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-long").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
            currentGarmentLength = bodyLong;
        } else if (
            $("#coat-body-narrow-long").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-long-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
        } else if (
            $("#coat-body-narrow-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-long-rotate").toggle();
        }
        $("#garment-length").text(`${currentGarmentLength}cm`);
        $("#fabric-required").text(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm`);
    });
});

// ------- Cropped Tshirt body tile sequencing function  --------//

$(document).ready(function () {
    $("#body-crop-tshirt").click(function () {
        $("#custom-garment-length").val('');

        if (
            $("#tshirt-body-wide-crop-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-crop").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
        } else if (
            $("#tshirt-body-wide-crop").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-hip-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
            currentGarmentLength = bodyHip;
        } else if (
            $("#tshirt-body-wide-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-hip").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
        } else if (
            $("#tshirt-body-wide-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-crop-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
            currentGarmentLength = bodyCrop;
        } else if (
            $("#tshirt-body-narrow-crop-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-crop").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
        } else if (
            $("#tshirt-body-narrow-crop").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-hip-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
            currentGarmentLength = bodyHip;
        } else if (
            $("#tshirt-body-narrow-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-hip").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
        } else if (
            $("#tshirt-body-narrow-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-crop-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $(dlSleeveSwapLeft).toggle();
            $(dlSleeveSwapRight).toggle();
            currentGarmentLength = bodyCrop;
        }
        $("#garment-length").text(`${currentGarmentLength}cm`);
        $("#fabric-required").text(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm`);
    });
});

$(document).ready(function () {
    $("#logo-span").hover(function () {
        $("#logo-hover").toggle();
    }, function () {
        $("#logo-hover").toggle();
    });
});