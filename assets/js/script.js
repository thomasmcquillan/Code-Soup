// const neckCollar = '<a href="assets/downloads/print-temp-round-neck.pdf">Pattern for Collar Neckline. (PDF download)</a>';
// const neckRound = '<a href="assets/downloads/print-temp-round-neck.pdf">Pattern for Round Neckline. (PDF download)</a>';
// const neckWide = '<a href="assets/downloads/print-temp-wide-neck.pdf">Pattern for Wide Neckline. (PDF download)</a>';

const sleeveWide = 50;
const sleeveNarrow = 35;
let sleeveWidthCustom;

let sleeveWidth = 50;

const bodyCrop = 50;
const bodyHip = 75;
const bodyLong = 100;
// let bodyCustom;

let bodyLength = bodyCrop;

const sleeveShort = 55;
const sleeveLong = 75;
// let sleevelengthCustom;

let sleeveLength = sleeveShort;

let bodyCircumference = sleeveLength * 2;

var fabricLength = (sleeveWidth * 0.5) + bodyLength;

var fabricWidth = bodyCircumference;

// $(document).ready(function() {
//     $("#neckround").click(function() {
//         $( "#neckround" ).toggle(),
//         $( "#neckcollar" ).toggle(),
//         $( "#neckline" ).html(neckCollar);
//         });
//     });

$(document).ready(function() {
    $("#width").text(fabricWidth + "cm."),
    $("#length").text(fabricLength + "cm.");
});

function getFabric() {
    $("#bodylong").click(function() {
        $("#length").text(fabricLength + "cm."),
        $("#width").text(fabricWidth + "cm.");
    });
};

$(document).ready(function() {
    $("#neckround").click(function() {
    $( "#neckround" ).toggle(),
    $( "#neckcollar" ).toggle(),
    $( "#neckline" ).html(neckCollar);
   });
});

$( "#neckcollar" ).click(function() {
        $( "#neckcollar" ).toggle(),
        $( "#neckwide" ).toggle(),
        $( "#neckline" ).html(neckWide);
});

$( "#neckwide" ).click(function() {
        $( "#neckwide" ).toggle(),
        $( "#neckround" ).toggle(),
        $( "#neckline" ).html(neckRound);
});

$( "#bodycropped" ).click(function() {
    $( "#bodycropped" ).toggle(),
    $( "#bodyhip" ).toggle(),
    bodyLength = bodyHip,
    getFabric();
});

$( "#bodyhip" ).click(function() {
    $( "#bodyhip" ).toggle(),
    $( "#bodylong" ).toggle(),
    bodyLength = bodyLong,
    getFabricDimensions();
});

$( "#bodylong" ).click(function() {
    $( "#bodylong" ).toggle(),
    $( "#bodycropped" ).toggle(),
    bodyLength = bodyCrop,
    getFabricDimensions();
});

$( "#leftsleevewideshort" ).click(function() {
    $( "#leftsleevewideshort" ).toggle(),
    $( "#leftsleevewidelong" ).toggle(),
    $( "#rightsleevewideshort" ).toggle(),
    $( "#rightsleevewidelong" ).toggle(),
    sleeveLength = sleeveLong,
    getFabricDimensions();
});

$( "#leftsleevewidelong" ).click(function() {
    $( "#leftsleevewidelong" ).toggle(),
    $( "#leftsleevenarrowshort" ).toggle(),
    $( "#rightsleevewidelong" ).toggle(),
    $( "#rightsleevenarrowshort" ).toggle(),
    sleeveWidth = sleeveNarrow,
    sleeveLength = sleeveShort,
    getFabricDimensions();
});

$( "#leftsleevenarrowshort" ).click(function() {
    $( "#leftsleevenarrowshort" ).toggle(),
    $( "#leftsleevenarrowlong" ).toggle(),
    $( "#rightsleevenarrowshort" ).toggle(),
    $( "#rightsleevenarrowlong" ).toggle(),
    sleeveWidth = sleeveNarrow,
    sleeveLength = sleeveLong,
    getFabricDimensions();
});

$( "#leftsleevenarrowlong" ).click(function() {
    $( "#leftsleevenarrowlong" ).toggle(),
    $( "#leftsleevewideshort" ).toggle(),
    $( "#rightsleevenarrowlong" ).toggle(),
    $( "#rightsleevewideshort" ).toggle(),
    sleeveWidth = sleeveWide,
    sleeveLength = sleeveShort,
    getFabricDimensions();
});

$( "#rightsleevewideshort" ).click(function() {
    $( "#leftsleevewideshort" ).toggle(),
    $( "#leftsleevewidelong" ).toggle(),
    $( "#rightsleevewideshort" ).toggle(),
    $( "#rightsleevewidelong" ).toggle(),
    sleeveLength = sleeveLong,
    getFabricDimensions();
});

$( "#rightsleevewidelong" ).click(function() {
    $( "#leftsleevewidelong" ).toggle(),
    $( "#leftsleevenarrowshort" ).toggle(),
    $( "#rightsleevewidelong" ).toggle(),
    $( "#rightsleevenarrowshort" ).toggle(),
    sleeveWidth = sleeveNarrow,
    sleeveLength = sleeveShort,
    getFabricDimensions();
});

$( "#rightsleevenarrowshort" ).click(function() {
    $( "#leftsleevenarrowshort" ).toggle(),
    $( "#leftsleevenarrowlong" ).toggle(),
    $( "#rightsleevenarrowshort" ).toggle(),
    $( "#rightsleevenarrowlong" ).toggle(),
    sleeveWidth = sleeveNarrow,
    sleeveLength = sleeveLong,
    getFabricDimensions();
});

$( "#rightsleevenarrowlong" ).click(function() {
    $( "#leftsleevenarrowlong" ).toggle(),
    $( "#leftsleevewideshort" ).toggle(),
    $( "#rightsleevenarrowlong" ).toggle(),
    $( "#rightsleevewideshort" ).toggle(),
    sleeveWidth = sleeveWide,
    sleeveLength = sleeveShort,
    getFabricDimensions();
});