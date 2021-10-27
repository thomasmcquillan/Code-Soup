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

let currentBodyLength = 50;
let currentSleeveWidth = 50;
let currentSleeveLength = 55;

// Setting variable to calculate body circumference of currently selected style.

let bodyCircumference = currentSleeveLength * 2;

// Declaring variables for custom input values.  

// let customInputSleeveCircum;
// let customInputBodylength;
// let customInputBodyCircum;

// Declaring variables for displaying the fabric width
// and length required to make currently selected style.

var fabricWidth = (currentSleeveLength * 2);
var fabricLength = (currentSleeveWidth * 0.5) + currentBodyLength;

// To calculate fabric size required for currently selected style.
// $(".tiles").children().click(function() {
$(".garment-grid").children().click(function () {
    $("#fabricrequired").text(`${currentSleeveLength * 2}cm x ${(currentSleeveWidth * 0.5) + currentBodyLength}cm`);
    if ($("#grid-intro").is(":visible")) {
        $("#grid-intro").toggle();
    } else {
        return;
    }
});

// Function that calculates fabric size required to make 
// garment based on the custom values input by user.
// Triggered by Enter/Tab keys in custom body length input.

$("#customInputbodylength").keydown(function (event) {
    if (
        (event.key === "Enter" || event.key == "Tab")) {
        if ($("#customInputbodylength").val() > 0) {
            let customBodyLength = parseInt($("#customInputbodylength").val(), 10);
            $("#fabricrequired").html(`${currentSleeveLength * 2}cm x ${(currentSleeveWidth * 0.5) + customBodyLength}cm`);
        } else {
            $(".fabricsize").text('Custom values will update fabric size required, but will not be updated in the illustration.');
            $("#bodytile img").css('filter', 'blur(3px) invert(8)');
        }
    }
});

$("#custominputbodycircum").keydown(function (event) {
    if (
        (event.key === "Enter" || event.key == "Tab")) {
        let customBodyCircum = parseInt($("#custominputbodycircum").val(), 10);
        $("#fabricrequired").html(`${currentSleeveLength * 2}cm x ${(currentSleeveWidth * 0.5) + customBodyLength}cm`);
    }
});

$("#custominputsleevecircum").keydown(function (event) {
    if (
        (event.key === "Enter" || event.key == "Tab")) {
        let customBodyCircum = parseInt($("#custominputbodycircum").val(), 10);
        $("#fabricrequired").html(`${currentSleeveLength * 2}cm x ${(currentSleeveWidth * 0.5) + customBodyLength}cm`);
    }
});

// Following functions, when clicked, cycle to next image of their type
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

$("#sleeve-left-wide-short").click(function () {
    $("#sleeve-left-wide-short").toggle();
    $("#sleeve-left-wide-long").toggle();
    $("#rightsleevewideshort").toggle();
    $("#rightsleevewidelong").toggle();
    currentSleeveLength = sleeveLong;
    $("#dimensionbodycircumference").html(`${currentSleeveLength * 2}cm`);
});

$("#leftsleevewidelong").click(function () {
    $("#leftsleevewidelong").toggle();
    $("#leftsleevenarrowshort").toggle();
    $("#rightsleevewidelong").toggle();
    $("#rightsleevenarrowshort").toggle();
    currentSleeveWidth = sleeveNarrow;
    currentSleeveLength = sleeveShort;
    $("#dimensionbodycircumference").html(`${currentSleeveLength * 2}cm`);
    $("#dimensionsleevecircumference").html(`${sleeveNarrow}cm`);
});

$("#leftsleevenarrowshort").click(function () {
    $("#leftsleevenarrowshort").toggle();
    $("#leftsleevenarrowlong").toggle();
    $("#rightsleevenarrowshort").toggle();
    $("#rightsleevenarrowlong").toggle();
    currentSleeveLength = sleeveLong;
    $("#dimensionbodycircumference").html(`${currentSleeveLength * 2}cm`);
});

$("#leftsleevenarrowlong").click(function () {
    $("#leftsleevenarrowlong").toggle();
    $("#leftsleevewideshort").toggle();
    $("#rightsleevenarrowlong").toggle();
    $("#rightsleevewideshort").toggle();
    currentSleeveWidth = sleeveWide;
    currentSleeveLength = sleeveShort;
    $("#dimensionbodycircumference").html(`${currentSleeveLength * 2}cm`);
    $("#dimensionsleevecircumference").html(`${sleeveWide}cm`);
});

$("#rightsleevewideshort").click(function () {
    $("#leftsleevewideshort").toggle();
    $("#leftsleevewidelong").toggle();
    $("#rightsleevewideshort").toggle();
    $("#rightsleevewidelong").toggle();
    currentSleeveLength = sleeveLong;
    $("#dimensionbodycircumference").html(`${currentSleeveLength * 2}cm`);
});

$("#rightsleevewidelong").click(function () {
    $("#leftsleevewidelong").toggle();
    $("#leftsleevenarrowshort").toggle();
    $("#rightsleevewidelong").toggle();
    $("#rightsleevenarrowshort").toggle();
    currentSleeveWidth = sleeveNarrow;
    currentSleeveLength = sleeveShort;
    $("#dimensionbodycircumference").html(`${currentSleeveLength * 2}cm`);
    $("#dimensionsleevecircumference").html(`${sleeveNarrow}cm`);
});

$("#rightsleevenarrowshort").click(function () {
    $("#leftsleevenarrowshort").toggle();
    $("#leftsleevenarrowlong").toggle();
    $("#rightsleevenarrowshort").toggle();
    $("#rightsleevenarrowlong").toggle();
    currentSleeveWidth = sleeveNarrow;
    currentSleeveLength = sleeveLong;
    $("#dimensionbodycircumference").html(`${currentSleeveLength * 2}cm`);
});

$("#rightsleevenarrowlong").click(function () {
    $("#leftsleevenarrowlong").toggle();
    $("#leftsleevewideshort").toggle();
    $("#rightsleevenarrowlong").toggle();
    $("#rightsleevewideshort").toggle();
    currentSleeveWidth = sleeveWide;
    currentSleeveLength = sleeveShort;
    $("#dimensionbodycircumference").html(`${currentSleeveLength * 2}cm`);
    $("#dimensionsleevecircumference").html(`${sleeveWide}cm`);
});

// ----------  Hover functions ------------- //

$(document).ready(function () {
    $("#neckline-coat").hover(function () {
        $("#neck-collar").css("background-color", "#ffb3009d");
    }, function () {
        $("#neck-collar").css("background-color", "#b7b3a7");
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

// --------- Long Tshirt tile swap function --------------


$(document).ready(function () {
    $("#body-long-tshirt").click(function () {
        if (
            $("#tshirt-body-wide-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-hip").toggle();
            currentBodyLength = bodyLong;
            $("#length").html(fabricLength);
            $("#width").html(fabricWidth);
            $("#dimensionbodylength").html(`${currentBodyLength}cm`);
        } else if (
            $("#tshirt-body-wide-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-long").toggle();
        } else if (
            $("#tshirt-body-wide-long").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-long-rotate").toggle();
        } else if (
            $("#tshirt-body-wide-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-hip").toggle();
        } else if (
            $("#tshirt-body-narrow-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-hip-rotate").toggle();
        } else if (
            $("#tshirt-body-narrow-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-long").toggle();
        } else if (
            $("#tshirt-body-narrow-long").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-long-rotate").toggle();
        } else if (
            $("#tshirt-body-narrow-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-hip-rotate").toggle();
        } 
    });
});

// --------- Coat body tile swap function --------------

$(document).ready(function () {
    $("#body-long-coat").click(function () {
        if (
            $("#coat-body-wide-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-long").toggle();
        } else if (
            $("#coat-body-wide-long").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-hip").toggle();
        } else if (
            $("#coat-body-wide-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-hip-rotate").toggle();
        } else if (
            $("#coat-body-wide-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-crop").toggle();
        } else if (
            $("#coat-body-wide-crop").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-crop-rotate").toggle();
        } else if (
            $("#coat-body-wide-crop-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-crop").toggle();
        } else if (
            $("#coat-body-narrow-crop").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-crop-rotate").toggle();
        } else if (
            $("#coat-body-narrow-crop-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-hip").toggle();
        } else if (
            $("#coat-body-narrow-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-hip-rotate").toggle();
        } else if (
            $("#coat-body-narrow-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-long").toggle();
        } else if (
            $("#coat-body-narrow-long").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-narrow-long-rotate").toggle();
        } else if (
            $("#coat-body-narrow-long-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#coat-body-wide-long-rotate").toggle();
        }
    });
});

// ---------------  Cropped Tshirt tile swap function

$(document).ready(function() {
    $("#body-crop-tshirt").click(function() {
        if (
            $("#tshirt-body-wide-crop-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-crop").toggle();
        } else if (
            $("#tshirt-body-wide-crop").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-hip-rotate").toggle();
        } else if (
            $("#tshirt-body-wide-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-hip").toggle();
        } else if (
            $("#tshirt-body-wide-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-crop-rotate").toggle();
        } else if (
            $("#tshirt-body-narrow-crop-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-crop").toggle();
        } else if (
            $("#tshirt-body-narrow-crop").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-hip-rotate").toggle();
        } else if (
            $("#tshirt-body-narrow-hip-rotate").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-narrow-hip").toggle();
        } else if (
            $("#tshirt-body-narrow-hip").is(":visible")) {
            $("img:visible", this).toggle();
            $("#tshirt-body-wide-crop-rotate").toggle();
        }
        else return;
    });
});

// $(document).ready(function () {
//     $("#body-crop-tshirt").click(function () {
//         if (
//             $("#tshirt-body-wide-crop-rotate").is(":visible")) {
//             $("img:visible", this).toggle();
//             $("#tshirt-body-wide-crop").toggle();
//         } else if (
//             $("#tshirt-body-wide-crop").is(":visible")) {
//             $("img:visible", this).toggle();
//             $("#tshirt-body-wide-hip-rotate").toggle();
//         } else if (
//             $("#tshirt-body-wide-hip-rotate").is(":visible")) {
//             $("img:visible", this).toggle();
//             $("#tshirt-body-wide-hip").toggle();
//         } else if (
//             $("#tshirt-body-wide-hip").is(":visible")) {
//             $("img:visible", this).toggle();
//             $("#tshirt-body-narrow-crop-rotate").toggle();
//         } else if (
//             $("#tshirt-body-narrow-crop-rotate").is(":visible")) {
//             $("img:visible", this).toggle();
//             $("#tshirt-body-narrow-crop").toggle();
//         } else if (
//             $("#tshirt-body-narrow-crop").is(":visible")) {
//             $("img:visible", this).toggle();
//             $("#tshirt-body-narrow-hip-rotate").toggle();
//         } else if (
//             $("#tshirt-body-narrow-hip-rotate").is(":visible")) {
//             $("img:visible", this).toggle();
//             $("#tshirt-body-narrow-hip").toggle();
//         } else if (
//             $("#tshirt-body-narrow-hip").is(":visible")) {
//             $("img:visible", this).toggle();
//             $("#tshirt-body-wide-crop-rotate").toggle();
//         }; 
//     });
// });