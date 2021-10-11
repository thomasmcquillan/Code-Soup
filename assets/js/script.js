// const neckCollar = `<a href="assets/downloads/print-temp-round-neck.pdf">Pattern for Collar Neckline</a>`;
// const neckRound = '<a href="assets/downloads/print-temp-round-neck.pdf">Pattern for Round Neckline</a>';
// const neckWide = '<a href="assets/downloads/print-temp-wide-neck.pdf">Pattern for Wide Neckline</a>';

const neckRound = document.getElementById(patternNecklineRound);
const neckCollar = document.getElementById(patternNecklineCollar);
const neckWide = document.getElementById(patternNecklineWide);

// const neckRound = document.getElementById(neckRoundPattern);
// const neckCollar = document.getElementById(neckCollarPattern);
// const neckWide = document.getElementById(neckWidePattern);

const sleeveWide = 50;
const sleeveNarrow = 35;
// let sleeveWidthCustom;

let sleeveWidth = 50;

const bodyCrop = 50;
const bodyHip = 75;
const bodyLong = 100;
// let bodyCustom;

let bodyLength = 50;

const sleeveShort = 55;
const sleeveLong = 75;
// let sleevelengthCustom;

let sleeveLength = 55;

let bodyCircumference = sleeveLength * 2;

var fabricLength = (sleeveWidth * 0.5) + bodyLength;

var fabricWidth = (sleeveLength * 2);




let customInputBodyLength;
let customInputBodyCircum;
let customInputSleeveCircum;



// need to show following values:

// body length; shoulder to hem;
// sleeve Circumference;
// body Circumference;

$(document).ready(function() {
    $( "#fabricRequired" ).html(`${sleeveLength * 2}cm wide x ${(sleeveWidth * 0.5) + bodyLength}cm long`);
});

$("#customInputBodyLength").keydown(function(event) {
    if (
        (event.key === "Enter" || event.key == "Tab")) {
            let customBodyLength = parseInt($( "#customInputBodyLength" ).val(), 10);
            $( "#fabricRequired" ).html(`${sleeveLength * 2}cm wide x ${(sleeveWidth * 0.5) + customBodyLength}cm long`);
        }
});

$(document).ready(function() {
    $("#neckroundHover").click(function() {
    $( "#neckroundHover" ).toggle();
    $( "#neckcollarHover" ).toggle();
    $( "#patternNecklineRound" ).toggle();
    $( "#patternNecklineCollar" ).toggle();
   });
});

$( "#neckcollarHover" ).click(function() {
        $( "#neckcollarHover" ).toggle();
        $( "#neckwideHover" ).toggle();
        $( "#patternNecklineCollar" ).toggle();
        $( "#patternNecklineWide" ).toggle();
});

$( "#neckwideHover" ).click(function() {
    $( "#neckwideHover" ).toggle();
    $( "#neckroundHover" ).toggle();
    $( "#patternNecklineWide" ).toggle();
    $( "#patternNecklineRound" ).toggle();
});

$( "#bodycropped" ).click(function() {
    $( "#bodycropped" ).toggle();
    $( "#bodyhip" ).toggle();
    bodyLength = bodyHip;
    $( "#length" ).html(fabricLength);
    $( "#width" ).html(fabricWidth);
    $( "#dimensionBodyLength" ).html(`${bodyLength}cm`);
});

$( "#bodyhip" ).click(function() {
    $( "#bodyhip" ).toggle();
    $( "#bodylong" ).toggle();
    bodyLength = bodyLong;
    $( "#length" ).html(fabricLength);
    $( "#width" ).html(fabricWidth);
    $( "#dimensionBodyLength" ).html(`${bodyLength}cm`);
});

$( "#bodylong" ).click(function() {
    $( "#bodylong" ).toggle();
    $( "#bodycropped" ).toggle();
    bodyLength = bodyCrop;
    $( "#length" ).html(fabricLength);
    $( "#width" ).html(fabricWidth);
    $( "#dimensionBodyLength" ).html(`${bodyLength}cm`);
});

$( "#leftsleevewideshort" ).click(function() {
    $( "#leftsleevewideshort" ).toggle();
    $( "#leftsleevewidelong" ).toggle();
    $( "#rightsleevewideshort" ).toggle();
    $( "#rightsleevewidelong" ).toggle();
    sleeveLength = sleeveLong;
    $( "#dimensionBodyCircumference" ).html(`${sleeveLength * 2}cm`);
});

$( "#leftsleevewidelong" ).click(function() {
    $( "#leftsleevewidelong" ).toggle();
    $( "#leftsleevenarrowshort" ).toggle();
    $( "#rightsleevewidelong" ).toggle();
    $( "#rightsleevenarrowshort" ).toggle();
    console.log(sleeveWidth);
    console.log(sleeveLength);
    sleeveWidth = sleeveNarrow;
    sleeveLength = sleeveShort;
    console.log(sleeveWidth);
    console.log(sleeveLength);
    $( "#dimensionBodyCircumference" ).html(`${sleeveLength * 2}cm`);
    $( "#dimensionSleeveCircumference" ).html(`${sleeveNarrow}cm`);
});

$( "#leftsleevenarrowshort" ).click(function() {
    $( "#leftsleevenarrowshort" ).toggle();
    $( "#leftsleevenarrowlong" ).toggle();
    $( "#rightsleevenarrowshort" ).toggle();
    $( "#rightsleevenarrowlong" ).toggle();
    sleeveLength = sleeveLong;
    $( "#dimensionBodyCircumference" ).html(`${sleeveLength * 2}cm`);
});

$( "#leftsleevenarrowlong" ).click(function() {
    $( "#leftsleevenarrowlong" ).toggle();
    $( "#leftsleevewideshort" ).toggle();
    $( "#rightsleevenarrowlong" ).toggle();
    $( "#rightsleevewideshort" ).toggle();
    sleeveWidth = sleeveWide;
    sleeveLength = sleeveShort;
    $( "#dimensionBodyCircumference" ).html(`${sleeveLength * 2}cm`);
    $( "#dimensionSleeveCircumference" ).html(`${sleeveWide}cm`);
});

$( "#rightsleevewideshort" ).click(function() {
    $( "#leftsleevewideshort" ).toggle();
    $( "#leftsleevewidelong" ).toggle();
    $( "#rightsleevewideshort" ).toggle();
    $( "#rightsleevewidelong" ).toggle();
    sleeveLength = sleeveLong;
    $( "#dimensionBodyCircumference" ).html(`${sleeveLength * 2}cm`);
});

$( "#rightsleevewidelong" ).click(function() {
    $( "#leftsleevewidelong" ).toggle();
    $( "#leftsleevenarrowshort" ).toggle();
    $( "#rightsleevewidelong" ).toggle();
    $( "#rightsleevenarrowshort" ).toggle();
    sleeveWidth = sleeveNarrow;
    sleeveLength = sleeveShort;
    $( "#dimensionBodyCircumference" ).html(`${sleeveLength * 2}cm`);
    $( "#dimensionSleeveCircumference" ).html(`${sleeveNarrow}cm`);
});

$( "#rightsleevenarrowshort" ).click(function() {
    $( "#leftsleevenarrowshort" ).toggle();
    $( "#leftsleevenarrowlong" ).toggle();
    $( "#rightsleevenarrowshort" ).toggle();
    $( "#rightsleevenarrowlong" ).toggle();
    sleeveWidth = sleeveNarrow;
    sleeveLength = sleeveLong;
    $( "#dimensionBodyCircumference" ).html(`${sleeveLength * 2}cm`);
});

$( "#rightsleevenarrowlong" ).click(function() {
    $( "#leftsleevenarrowlong" ).toggle();
    $( "#leftsleevewideshort" ).toggle();
    $( "#rightsleevenarrowlong" ).toggle();
    $( "#rightsleevewideshort" ).toggle();
    sleeveWidth = sleeveWide;
    sleeveLength = sleeveShort;
    $( "#dimensionBodyCircumference" ).html(`${sleeveLength * 2}cm`);
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
    $( "#fabricRequired" ).text(`${sleeveLength * 2}cm wide x ${(sleeveWidth * 0.5) + bodyLength}cm long`);
});


// $( "#formInfoVessel" )

