// Declaring constants - targets divs for pattern download thumbnails.
const neckRound = document.getElementsByClassName("pattern-thumb-neck-round");
const neckCollar = document.getElementsByClassName("pattern-thumb-neck-collar");
const neckWide = document.getElementsByClassName("pattern-thumb-neck-wide");
const bodyRotateLeft = document.getElementsByClassName("pattern-thumb-body-rotate-left");
const bodyRotateRight = document.getElementsByClassName("pattern-thumb-body-rotate-right");
const elbowRotateLeft = document.getElementsByClassName("pattern-thumb-elbow-rotate-left");
const elbowRotateRight = document.getElementsByClassName("pattern-thumb-elbow-rotate-left");

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

// Setting variable to calculate body circumference of currently selected style.

let bodyCircumference = currentSleeveLength * 2;

// Declaring variables for displaying the fabric width and length required to make currently selected style.

var fabricWidth = (currentSleeveLength * 2);
var fabricLength = (currentSleeveCircum * 0.5) + currentGarmentLength;

// To calculate fabric size required for currently selected style.

$(".garment-grid").children().click(function () {
    $("#fabric-required").text(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm`);
});

// Function that calculates fabric size required to make garment based on the custom values input by user.
// Triggered by Enter/Tab keys in custom body length input.

$("#custom-garment-length").keydown(function (event) {
    if (
        (event.key === "Enter" || event.key == "Tab")) {
        if ($("#custom-garment-length").val() > 0) {
            currentGarmentLength = parseInt($("#custom-garment-length").val(), 10);
            // $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + currentGarmentCircum}cm`);
            $("#fabric-required").text(`${currentSleeveLength * 2}cm wide x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm long`);
            $("#custom-garment-length").val('');
        } else {
            // $("#grid-intro").text('Custom values will update fabric size required, but will not be updated in the illustration.');
            // $(".garment-grid").css('filter', 'blur(3px) opacity(44%)');
            alertMsg();
            $("#custom-garment-length").val('');
        }
    }
});

// Custom values will update fabric size required, but will not be updated in the illustration.

$("#custom-garment-circum").keydown(function (event) {
    if (
        (event.key === "Enter" || event.key == "Tab")) {
        if ($("#custom-garment-circum").val() > 0) {
            currentGarmentCircum = parseInt($("#custom-garment-circum").val(), 10);
            $("#fabric-required").text(`${currentGarmentCircum}cm x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm`);
            $("#custom-garment-circum").val('');
        } else {
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
            alertMsg();
            $("#custom-sleeve-circum").val('');
        }
    }
});

// Function to alert user if they enter a negative number value. 
// Code Snippet courtesy of Arpit Anand @ https:www.tutorialspoint.com/How-to-create-and-apply-CSS-to-JavaScript-Alert-box
// Modified and styled for the projects' needs.

function alertMsg(alertMessage, okay) {
    let alertBox = $("#alert-input-error");
    alertBox.find("#alert-user").text(alertMessage);
    alertBox.find(".okay").unbind().click(function() {
        alertBox.hide();
    });
    alertBox.find(".okay").click(okay);
    alertBox.show();
}

// Following functions cycle to next image of their type
// (neckline/body/sleeves), and update variables required for displaying 
// key fabric measurements and pattern downloads for users.

$(document).ready(function () {
    $("#neckline-round").click(function () {
        $("#neckline-round").toggle(); // Toggles off current neckline tile.
        $("#neckline-collar").toggle(); // Toggles on next available neckline tile.
        $(neckRound).toggle(); // Toggles off div containing download for current neckline. 
        $(neckCollar).toggle(); // Toggles on div containing download for next style of neckline.
        // $("#pattern-thumb-collar a").css("background-color", "#ffb100");
    });
});

$("#neckline-collar").click(function () {
    $("#neckline-collar").toggle();
    $("#neckline-wide").toggle();
    $(neckCollar).toggle();
    $(neckWide).toggle();
    // $("#pattern-thumb-wide a").css("background-color", "#ffd066");
});

$("#neckline-wide").click(function () {
    $("#neckline-wide").toggle();
    $("#neckline-round").toggle();
    $(neckWide).toggle();
    $(neckRound).toggle();
    // $("#pattern-thumb-round a").css("background-color", "#d46300");
});

// left sleeve tile function for WIDE sleeves

$(document).ready(function () {
    $(".sleeve-left").click(function () {
        if (
            $(".sleeve-left-wide-long").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-wide-long").toggle();
            $(".sleeve-left-wide-long-rotate").toggle();
            $(".sleeve-right-wide-long-rotate").toggle();
        } else if (
            $(".sleeve-left-wide-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-wide-long-rotate").toggle();
            $(".sleeve-left-wide-short").toggle();
            $(".sleeve-right-wide-short").toggle();
        } else if (
            $(".sleeve-left-wide-short").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-wide-short").toggle();
            $(".sleeve-left-wide-short-rotate").toggle();
            $(".sleeve-right-wide-short-rotate").toggle();
        } else if (
            $(".sleeve-left-wide-short-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-wide-short-rotate").toggle();
            $(".sleeve-left-wide-long").toggle();
            $(".sleeve-right-wide-long").toggle();
        }
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
        } else if (
            $(".sleeve-right-wide-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-wide-long-rotate").toggle();
            $(".sleeve-left-wide-short").toggle();
            $(".sleeve-right-wide-short").toggle();
        } else if (
            $(".sleeve-right-wide-short").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-wide-short").toggle();
            $(".sleeve-left-wide-short-rotate").toggle();
            $(".sleeve-right-wide-short-rotate").toggle();
        } else if (
            $(".sleeve-right-wide-short-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-wide-short-rotate").toggle();
            $(".sleeve-left-wide-long").toggle();
            $(".sleeve-right-wide-long").toggle();
        }
    });
});


$(document).ready(function () {
    $("#neck-long-coat").hover(function () {
        $("#neck-collar").css("background-color", "#ffb3009d");
    }, function () {
        $("#neck-collar").css("background-color", "#b7b3a7");
    });
});

$(document).ready(function () {
    $("#body-long-coat").hover(function () {
        $("#body-rotate-right").css("background-color", "#ffb3009d");
        $("#body-rotate-left").css("background-color", "#ffb3009d");
    }, function () {
        $("#body-rotate-right").css("background-color", "#b7b3a7");
        $("#body-rotate-left").css("background-color", "#b7b3a7");
    });
});




// Make/Use site logo hover state

$(document).ready(function () {
    $("#makeuse-logo").hover(function () {
        $(this).toggle();
        $("#logo-hover").toggle();
    }, function () {
        $("#logo-hover").toggle();
        $(this).toggle();
    });
});

// --------- Long Tshirt body tile sequencing function -------------- //

// `${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm`);

// $("#garment-circum").html(`${currentSleeveLength * 2}cm`);
// $("#garment-circum").html(`${sleeveWide}cm`);

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

            currentSleeveLength = sleeveShort;
            $("#garment-circum").text(`${currentSleeveLength * 2}cm`);
            $("#fabric-required").text(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm`);
        } else if (
            $("#tshirt-body-wide-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-long").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            currentGarmentLength = bodyLong;

            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);
        } else if (
            $("#tshirt-body-wide-long").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-long-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();

            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);
        } else if (
            $("#tshirt-body-wide-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-hip").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            currentGarmentLength = bodyHip;


            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);
        } else if (
            $("#tshirt-body-narrow-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-hip-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();

            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);
        } else if (
            $("#tshirt-body-narrow-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-long").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            currentGarmentLength = bodyLong;

            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);
        } else if (
            $("#tshirt-body-narrow-long").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-long-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();

            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);
        } else if (
            $("#tshirt-body-narrow-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-hip-rotate").toggle();
            currentGarmentLength = bodyHip;

            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);
        }
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
            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);
        } else if (
            $("#coat-body-wide-long").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-hip").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            currentGarmentLength = bodyHip;
            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);

        } else if (
            $("#coat-body-wide-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-hip-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);
        } else if (
            $("#coat-body-wide-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-crop").toggle();
            currentGarmentLength = bodyCrop;
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);
        } else if (
            $("#coat-body-wide-crop").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-crop-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);
        } else if (
            $("#coat-body-wide-crop-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-crop").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);
        } else if (
            $("#coat-body-narrow-crop").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-crop-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);
        } else if (
            $("#coat-body-narrow-crop-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-hip").toggle();
            currentGarmentLength = bodyHip;
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);
        } else if (
            $("#coat-body-narrow-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-hip-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);
        } else if (
            $("#coat-body-narrow-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-long").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            currentGarmentLength = bodyLong;
            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm`);
        } else if (
            $("#coat-body-narrow-long").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-long-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);
        } else if (
            $("#coat-body-narrow-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-long-rotate").toggle();
            $("#fabric-required").html(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + customBodyLength}cm`);
        }
    });
});

// 

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
        } else if (
            $("#tshirt-body-wide-crop").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-hip-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            currentGarmentLength = bodyHip;
        } else if (
            $("#tshirt-body-wide-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-hip").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
        } else if (
            $("#tshirt-body-wide-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-crop-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            currentGarmentLength = bodyCrop;
        } else if (
            $("#tshirt-body-narrow-crop-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-crop").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
        } else if (
            $("#tshirt-body-narrow-crop").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-hip-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            currentGarmentLength = bodyHip;
        } else if (
            $("#tshirt-body-narrow-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-hip").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
        } else if (
            $("#tshirt-body-narrow-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-crop-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            currentGarmentLength = bodyCrop;
        }
    });
});
