// not sure yet if I need to keep these first 4

const serviceID = 'makeuse';
const coatTemplateID = 'coat-instructions';
const TemplateID = 'tshirt-instructions';
const btn = document.getElementById('form-button');

// Declaring constants for toggling pattern download thumbnails.

const neckRound = document.getElementById("pattern-neck-round");
const neckCollar = document.getElementById("pattern-neck-collar");
const neckWide = document.getElementById("pattern-neck-wide");
const sleeveCutLeft = document.getElementById("pattern-sleeve-cut-left");
const sleeveCutRight = document.getElementById("pattern-sleeve-cut-right");
const bodyRotateLeft = document.getElementById("pattern-body-rotate-left");
const bodyRotateRight = document.getElementById("pattern-body-rotate-right");
const elbowRotateLeft = document.getElementById("pattern-elbow-rotate-left");
const elbowRotateRight = document.getElementById("patternelbow-rotate-right");

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
            $(".alert-wrapper").toggle();
        if ($("#custom-garment-length").val() > 0) {
            currentGarmentLength = parseInt($("#custom-garment-length").val(), 10);
            // To calculate fabric size required for currently selected style.
            $("#fabric-required").text(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm`);
            $("#custom-garment-length").val('');
        } else {
            // $("#grid-intro").text('Custom values will update fabric size required, but will not be updated in the illustration.');
            alertMsg();
            $("#custom-garment-length").val('');
        }
    }
});

$("#custom-garment-circum").keydown(function (event) {
    if (
        (event.key === "Enter" || event.key == "Tab")) {
            $(".alert-wrapper").toggle();
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
            $(".alert-wrapper").toggle();
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
        } else if (
            $("#neckline-wide").is(":visible")) {
            $("img:visible", this).toggle();
            $("#neckline-round").toggle();
            $(neckWide).toggle();
            $(neckRound).toggle();
        } else if (
            $("#neckline-round").is(":visible")) {
            $("img:visible", this).toggle();
            $("#neckline-collar").toggle();
            $(neckRound).toggle();
            $(neckCollar).toggle();
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
        } else if (
            $(".sleeve-left-wide-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-wide-long-rotate").toggle();
            $(".sleeve-left-wide-short").toggle();
            $(".sleeve-right-wide-short").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            currentSleeveLength = sleeveShort;
        } else if (
            $(".sleeve-left-wide-short").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-right-wide-short").toggle();
            $(".sleeve-left-wide-short-rotate").toggle();
            $(".sleeve-right-wide-short-rotate").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            $(".pattern-elbow-rotation-right").toggle();
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
        } else if (
            $(".sleeve-right-wide-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-wide-long-rotate").toggle();
            $(".sleeve-right-wide-short").toggle();
            $(".sleeve-left-wide-short").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            $(".pattern-elbow-rotation-left").toggle();
            currentSleeveLength = sleeveShort;
        } else if (
            $(".sleeve-right-wide-short").is(":visible")) {
            $("img:visible", this).toggle();
            $(".sleeve-left-wide-short").toggle();
            $(".sleeve-right-wide-short-rotate").toggle();
            $(".sleeve-left-wide-short-rotate").toggle();
            $(".pattern-elbow-rotation-right").toggle();
            $(".pattern-elbow-rotation-left").toggle();
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
        $("#neck-round").css("background-color", "#ffb3009d");
    }, function () {
        $("#neck-round").css("background-color", "#b7b3a7");
    });
});

$(document).ready(function () {
    $(".neck-tile").hover(function () {
        $("#neck-collar").css("background-color", "#ffb3009d");
    }, function () {
        $("#neck-collar").css("background-color", "#b7b3a7");
    });
});

$(document).ready(function () {
    $(".neck-tile").hover(function () {
        $("#neck-wide").css("background-color", "#ffb3009d");
    }, function () {
        $("#neck-wide").css("background-color", "#b7b3a7");
    });
});

$(document).ready(function () {
    $("#neck-tile-coat").hover(function () {
        $("#neck-collar").css("background-color", "#ffb3009d");
    }, function () {
        $("#neck-collar").css("background-color", "#b7b3a7");
    });
});

$(document).ready(function () {
    $("#body-long-coat").hover(function () {
        $("#pattern-body-rotation-right").css("background-color", "#ffb3009d");
        $("#pattern-body-rotation-left").css("background-color", "#ffb3009d");
    }, function () {
        $("#pattern-body-rotation-right").css("background-color", "#b7b3a7");
        $("#pattern-body-rotation-left").css("background-color", "#b7b3a7");
    });
});

$(document).ready(function () {
    $("#body-long-coat").hover(function () {
        $("#elbow-rotate-right").css("background-color", "#ffb3009d");
        $("#pattern-elbow-rotation-left").css("background-color", "#ffb3009d");
    }, function () {
        $("#elbow-rotate-right").css("background-color", "#b7b3a7");
        $("#pattern-elbow-rotation-left").css("background-color", "#b7b3a7");
    });
});

$(document).ready(function () {
    $("#body-long-coat").hover(function () {
        $("#sleeve-cut-right").css("background-color", "#ffb3009d");
        $("#sleeve-cut-left").css("background-color", "#ffb3009d");
    }, function () {
        $("#sleeve-cut-right").css("background-color", "#b7b3a7");
        $("#sleeve-cut-left").css("background-color", "#b7b3a7");
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
        } else if (
            $("#coat-body-wide-long").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-hip").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            currentGarmentLength = bodyHip;
        } else if (
            $("#coat-body-wide-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-hip-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
        } else if (
            $("#coat-body-wide-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-crop").toggle();
            currentGarmentLength = bodyCrop;
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
        } else if (
            $("#coat-body-wide-crop").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-crop-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
        } else if (
            $("#coat-body-wide-crop-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-crop").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
        } else if (
            $("#coat-body-narrow-crop").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-crop-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
        } else if (
            $("#coat-body-narrow-crop-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-hip").toggle();
            currentGarmentLength = bodyHip;
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
        } else if (
            $("#coat-body-narrow-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-hip-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
        } else if (
            $("#coat-body-narrow-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-long").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
            currentGarmentLength = bodyLong;
        } else if (
            $("#coat-body-narrow-long").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-long-rotate").toggle();
            $(bodyRotateLeft).toggle();
            $(bodyRotateRight).toggle();
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
        $("#garment-length").text(`${currentGarmentLength}cm`);
        $("#fabric-required").text(`${currentSleeveLength * 2}cm x ${(currentSleeveCircum * 0.5) + currentGarmentLength}cm`);
    });
});

/* Code for fullscreen video with overlaid elements borrowed from Dudley Storey then modified, first 
read about at CSS Tricks, https://codepen.io/dudleystorey/pen/knqyK , https://css-tricks.com/full-page-background-video-styles/ */

// var vid = document.getElementById("bgvid");
// var pauseButton = document.querySelector("#polina button");
// var pauseButton = document.querySelector(".logo-landing");

// if (window.matchMedia('(prefers-reduced-motion)').matches) {
//     vid.removeAttribute("autoplay");
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
// }

// function vidFade() {
//   vid.classList.add("stopfade");
// }

// vid.addEventListener('ended', function()
// {

// vid.pause();

// vidFade();
// }); 


// pauseButton.addEventListener("click", function() {
//   vid.classList.toggle("stopfade");
//   if (vid.paused) {
//     vid.play();
//     pauseButton.innerHTML = "Pause";
//   } else {
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
//   }
// })

// function validateEmail(email) {
    //     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    // }