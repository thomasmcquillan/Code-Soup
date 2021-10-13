// Declaring constants - targets divs for pattern download thumbnails.

const neckRound = document.getElementById("patternThumbRound");
const neckCollar = document.getElementById("patternThumbCollar");
const neckWide = document.getElementById("patternThumbWide");

// Declaring constants - fixed values for provided styles of garment length / sleeve width / sleeve length.

const bodyCrop = 50;
const bodyHip = 75;
const bodyLong = 100;

const sleeveWide = 50;
const sleeveNarrow = 35;

const sleeveShort = 55;
const sleeveLong = 75;

// Declaring variables for currently displayed style, 
// and setting the initial values to match the default 
// garment style, as shown at page-load. 
// These values will change when user clicks the tiles.

let currentBodyLength = 50;
let currentSleeveWidth = 50;
let currentSleeveLength = 55;

// Declaring variable used to display body circumference
// of currently selected style.

let bodyCircumference = currentSleeveLength * 2;

// Declaring variables for custom input values.  
// These will be used to calculate fabric needs
// when visitors enter custom measurements values.

let customInputSleeveCircum;
let customInputBodyLength;
let customInputBodyCircum;

// Declaring variables for displaying the fabric width
// and length required to make selected style.

var fabricWidth = (currentSleeveLength * 2);
var fabricLength = (currentSleeveWidth * 0.5) + currentBodyLength;

// Function that calculates fabric size required to make 
// currently selected garment.

$(document).ready(function() {
    $( "#fabricRequired" ).html(`${currentSleeveLength * 2}cm wide x ${(currentSleeveWidth * 0.5) + currentBodyLength}cm long`);
});

// Function that calculates fabric size required to make 
// garment based on the custom values input by user. 
// This key-listener event will run when user presses
// either the "Enter" or "Tab" key while the custom body
// length input field is selected.

// - Note: I still need to write the equivalent function for
// the custom body circumference and sleeve circumference cells.

$("#customInputBodyLength").keydown(function(event) {
    if (
        (event.key === "Enter" || event.key == "Tab")) {
            let customBodyLength = parseInt($( "#customInputBodyLength" ).val(), 10);
            $( "#fabricRequired" ).html(`${currentSleeveLength * 2}cm wide x ${(currentSleeveWidth * 0.5) + customBodyLength}cm long`);
        }
});

// $("#tablewrapper").click(function() {
//     $("#garmentgrid").toggle();
// })

// $(document).ready(function() {
//     $("#neckroundHover").click(function() {
//     $( "#neckroundHover" ).toggle();
//     $( "#neckcollarHover" ).toggle();
//     $( "#patternNecklineRound" ).toggle();
//     $( "#patternNecklineCollar" ).toggle();
//    });
// });

// $( "#neckcollarHover" ).click(function() {
//         $( "#neckcollarHover" ).toggle();
//         $( "#neckwideHover" ).toggle();
//         $( "#patternNecklineCollar" ).toggle();
//         $( "#patternNecklineWide" ).toggle();
// });

// $( "#neckwideHover" ).click(function() {
//     $( "#neckwideHover" ).toggle();
//     $( "#neckroundHover" ).toggle();
//     $( "#patternNecklineWide" ).toggle();
//     $( "#patternNecklineRound" ).toggle();
// });

$(document).ready(function() {
    $( "#neckroundHover" ).click(function() {
    $( "#neckroundHover" ).toggle();
    $( "#neckcollarHover" ).toggle();
    // $( "#patternNecklineRound" ).toggle();
    // $( "#patternNecklineCollar" ).toggle();
    $(neckRound).toggle();
    $(neckCollar).toggle();
    $("#tablewrapper").css("background-color", "#FFB100");
   });
});

$( "#neckcollarHover" ).click(function() {
        $( "#neckcollarHover" ).toggle();
        $( "#neckwideHover" ).toggle();
        // $( "#patternNecklineCollar" ).toggle();
        // $( "#patternNecklineWide" ).toggle();
        $(neckCollar).toggle();
        $(neckWide).toggle();
        $("#tablewrapper").css("background-color", "#d47f34");
});

$( "#neckwideHover" ).click(function() {
    $( "#neckwideHover" ).toggle();
    $( "#neckroundHover" ).toggle();
    // $( "#patternNecklineWide" ).toggle();
    // $( "#patternNecklineRound" ).toggle();
    $(neckWide).toggle();
    $(neckRound).toggle();
    $("#tablewrapper").css("background-color", "#d46300");
    $("#patternThumbRound a").css("background-color", "#d46300");
});

$( "#bodycropped" ).click(function() {
    $( "#bodycropped" ).toggle();
    $( "#bodyhip" ).toggle();
    currentBodyLength = bodyHip;
    $( "#length" ).html(fabricLength);
    $( "#width" ).html(fabricWidth);
    $( "#dimensionBodyLength" ).html(`${currentBodyLength}cm`);
});

$( "#bodyhip" ).click(function() {
    $( "#bodyhip" ).toggle();
    $( "#bodylong" ).toggle();
    currentBodyLength = bodyLong;
    $( "#length" ).html(fabricLength);
    $( "#width" ).html(fabricWidth);
    $( "#dimensionBodyLength" ).html(`${currentBodyLength}cm`);
});

$( "#bodylong" ).click(function() {
    $( "#bodylong" ).toggle();
    $( "#bodycropped" ).toggle();
    currentBodyLength = bodyCrop;
    $( "#length" ).html(fabricLength);
    $( "#width" ).html(fabricWidth);
    $( "#dimensionBodyLength" ).html(`${currentBodyLength}cm`);
});

$( "#leftsleevewideshort" ).click(function() {
    $( "#leftsleevewideshort" ).toggle();
    $( "#leftsleevewidelong" ).toggle();
    $( "#rightsleevewideshort" ).toggle();
    $( "#rightsleevewidelong" ).toggle();
    currentSleeveLength = sleeveLong;
    $( "#dimensionBodyCircumference" ).html(`${currentSleeveLength * 2}cm`);
});

$( "#leftsleevewidelong" ).click(function() {
    $( "#leftsleevewidelong" ).toggle();
    $( "#leftsleevenarrowshort" ).toggle();
    $( "#rightsleevewidelong" ).toggle();
    $( "#rightsleevenarrowshort" ).toggle();
    currentSleeveWidth = sleeveNarrow;
    currentSleeveLength = sleeveShort;
    $( "#dimensionBodyCircumference" ).html(`${currentSleeveLength * 2}cm`);
    $( "#dimensionSleeveCircumference" ).html(`${sleeveNarrow}cm`);
});

$( "#leftsleevenarrowshort" ).click(function() {
    $( "#leftsleevenarrowshort" ).toggle();
    $( "#leftsleevenarrowlong" ).toggle();
    $( "#rightsleevenarrowshort" ).toggle();
    $( "#rightsleevenarrowlong" ).toggle();
    currentSleeveLength = sleeveLong;
    $( "#dimensionBodyCircumference" ).html(`${currentSleeveLength * 2}cm`);
});

$( "#leftsleevenarrowlong" ).click(function() {
    $( "#leftsleevenarrowlong" ).toggle();
    $( "#leftsleevewideshort" ).toggle();
    $( "#rightsleevenarrowlong" ).toggle();
    $( "#rightsleevewideshort" ).toggle();
    currentSleeveWidth = sleeveWide;
    currentSleeveLength = sleeveShort;
    $( "#dimensionBodyCircumference" ).html(`${currentSleeveLength * 2}cm`);
    $( "#dimensionSleeveCircumference" ).html(`${sleeveWide}cm`);
});

$( "#rightsleevewideshort" ).click(function() {
    $( "#leftsleevewideshort" ).toggle();
    $( "#leftsleevewidelong" ).toggle();
    $( "#rightsleevewideshort" ).toggle();
    $( "#rightsleevewidelong" ).toggle();
    currentSleeveLength = sleeveLong;
    $( "#dimensionBodyCircumference" ).html(`${currentSleeveLength * 2}cm`);
});

$( "#rightsleevewidelong" ).click(function() {
    $( "#leftsleevewidelong" ).toggle();
    $( "#leftsleevenarrowshort" ).toggle();
    $( "#rightsleevewidelong" ).toggle();
    $( "#rightsleevenarrowshort" ).toggle();
    currentSleeveWidth = sleeveNarrow;
    currentSleeveLength = sleeveShort;
    $( "#dimensionBodyCircumference" ).html(`${currentSleeveLength * 2}cm`);
    $( "#dimensionSleeveCircumference" ).html(`${sleeveNarrow}cm`);
});

$( "#rightsleevenarrowshort" ).click(function() {
    $( "#leftsleevenarrowshort" ).toggle();
    $( "#leftsleevenarrowlong" ).toggle();
    $( "#rightsleevenarrowshort" ).toggle();
    $( "#rightsleevenarrowlong" ).toggle();
    currentSleeveWidth = sleeveNarrow;
    currentSleeveLength = sleeveLong;
    $( "#dimensionBodyCircumference" ).html(`${currentSleeveLength * 2}cm`);
});

$( "#rightsleevenarrowlong" ).click(function() {
    $( "#leftsleevenarrowlong" ).toggle();
    $( "#leftsleevewideshort" ).toggle();
    $( "#rightsleevenarrowlong" ).toggle();
    $( "#rightsleevewideshort" ).toggle();
    currentSleeveWidth = sleeveWide;
    currentSleeveLength = sleeveShort;
    $( "#dimensionBodyCircumference" ).html(`${currentSleeveLength * 2}cm`);
    $( "#dimensionSleeveCircumference" ).html(`${sleeveWide}cm`);
});

$( "#necktile" ).mouseenter(function() {
    if($("#neckround").is(":visible")){
        $( "#neckround" ).toggle();
        $( "#neckroundHover" ).toggle();
    } else if (
        ($("#neckcollar").is(":visible"))){
            $( "#neckcollar" ).toggle();
            $( "#neckcollarHover" ).toggle();
    } else if (
        ($("#neckwide").is(":visible"))){
            $( "#neckwide" ).toggle();
            $( "#neckwideHover" ).toggle();
    } else {
        return;
    };
});

$( "#necktile" ).mouseleave(function() {
    if($("#neckroundHover").is(":visible")){
        $( "#neckround" ).toggle();
        $( "#neckroundHover" ).toggle();
    } else if (
        ($("#neckround").is(":visible"))){
            $( "#neckround" ).toggle();
            $( "#neckroundHover" ).toggle();
    } else if (
        ($("#neckcollarHover").is(":visible"))){
            $( "#neckcollar" ).toggle();
            $( "#neckcollarHover" ).toggle();
    }
    else if (
        ($("#neckcollar").is(":visible"))){
            $( "#neckcollar" ).toggle();
            $( "#neckcollarHover" ).toggle();
    } 
    else if (
        ($("#neckwideHover").is(":visible"))){
            $( "#neckwide" ).toggle();
            $( "#neckwideHover" ).toggle();
    } 
    else if (
        ($("#neckwide").is(":visible"))){
            $( "#neckwide" ).toggle();
            $( "#neckwideHover" ).toggle();
    }
    else {
        return;
    };
});

$(".tiles").click(function() {
    $( "#fabricRequired" ).text(`${currentSleeveLength * 2}cm wide x ${(currentSleeveWidth * 0.5) + currentBodyLength}cm long`);
});