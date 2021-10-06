const neckCollar = '<a href="assets/downloads/print-temp-round-neck.pdf">Pattern for Collar Neckline. (PDF download)</a>';
const neckRound = '<a href="assets/downloads/print-temp-round-neck.pdf">Pattern for Round Neckline. (PDF download)</a>';
const neckWide = '<a href="assets/downloads/print-temp-wide-neck.pdf">Pattern for Wide Neckline. (PDF download)</a>';

const sleeveWide = 50;
const sleeveNarrow = 35;
let sleeveWidthCustom;

let sleeveWidth = sleeveWide;

console.log(sleeveWidth);

const bodyCropped = 50;
const bodyHip = 75;
const bodyLong = 100;
let bodyCustom;

let bodyLength = bodyCropped;

console.log(bodyLength);

const sleeveShort = 55;
const sleeveLong = 75;
let sleevelengthCustom;

let sleeveLength = sleeveShort;
let bodyCircumference = sleeveLength * 2;

console.log(bodyCircumference);

var fabricLength = (sleeveWidth * 0.5) + bodyLength;

console.log(fabricLength);

var fabricWidth = bodyCircumference;

console.log(fabricWidth);


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
    $( "#bodyhip" ).toggle();
});

$( "#bodyhip" ).click(function() {
    $( "#bodyhip" ).toggle(),
    $( "#bodylong" ).toggle();
});

$( "#bodylong" ).click(function() {
    $( "#bodylong" ).toggle(),
    $( "#bodycropped" ).toggle();
});

$( "#leftsleevewideshort" ).click(function() {
    $( "#leftsleevewideshort" ).toggle(),
    $( "#leftsleevewidelong" ).toggle(),
    $( "#rightsleevewideshort" ).toggle(),
    $( "#rightsleevewidelong" ).toggle()();
});

$( "#leftsleevewidelong" ).click(function() {
    $( "#leftsleevewidelong" ).toggle(),
    $( "#leftsleevenarrowshort" ).toggle(),
    $( "#rightsleevewidelong" ).toggle(),
    $( "#rightsleevenarrowshort" ).toggle();
});

$( "#leftsleevenarrowshort" ).click(function() {
    $( "#leftsleevenarrowshort" ).toggle(),
    $( "#leftsleevenarrowlong" ).toggle(),
    $( "#rightsleevenarrowshort" ).toggle(),
    $( "#rightsleevenarrowlong" ).toggle();
});

$( "#leftsleevenarrowlong" ).click(function() {
    $( "#leftsleevenarrowlong" ).toggle(),
    $( "#leftsleevewideshort" ).toggle(),
    $( "#rightsleevenarrowlong" ).toggle(),
    $( "#rightsleevewideshort" ).toggle();
});

$( "#rightsleevewideshort" ).click(function() {
    $( "#leftsleevewideshort" ).toggle(),
    $( "#leftsleevewidelong" ).toggle(),
    $( "#rightsleevewideshort" ).toggle(),
    $( "#rightsleevewidelong" ).toggle()();
});

$( "#rightsleevewidelong" ).click(function() {
    $( "#leftsleevewidelong" ).toggle(),
    $( "#leftsleevenarrowshort" ).toggle(),
    $( "#rightsleevewidelong" ).toggle(),
    $( "#rightsleevenarrowshort" ).toggle();
});

$( "#rightsleevenarrowshort" ).click(function() {
    $( "#leftsleevenarrowshort" ).toggle(),
    $( "#leftsleevenarrowlong" ).toggle(),
    $( "#rightsleevenarrowshort" ).toggle(),
    $( "#rightsleevenarrowlong" ).toggle();
});

$( "#rightsleevenarrowlong" ).click(function() {
    $( "#leftsleevenarrowlong" ).toggle(),
    $( "#leftsleevewideshort" ).toggle(),
    $( "#rightsleevenarrowlong" ).toggle(),
    $( "#rightsleevewideshort" ).toggle();
});




// $( "#rightsleevenarrowlong" ).click(function() {
//     $( "#rightsleevenarrowlong" ).toggle(),
//     $( "#rightsleevenarrowshort" ).toggle(),
//     $( "#leftsleevenarrowlong" ).toggle(),
//     $( "#leftsleevenarrowshort" ).toggle();
// });

// $( "#rightsleevenarrowshort" ).click(function() {
//     $( "#rightsleevenarrowshort" ).toggle(),
//     $( "#rightsleevewidelong" ).toggle(),
//     $( "#leftsleevenarrowshort" ).toggle(),
//     $( "#leftsleevewidelong" ).toggle();
// });

// $( "#rightsleevewidelong" ).click(function() {
//     $( "#rightsleevewidelong" ).toggle(),
//     $( "#rightsleevewideshort" ).toggle(),
//     $( "#leftsleevewidelong" ).toggle(),
//     $( "#leftsleevewideshort" ).toggle();
// });

// $( "#rightsleevewideshort" ).click(function() {
//     $( "#rightsleevewideshort" ).toggle(),
//     $( "#rightsleevenarrowlong" ).toggle(),
//     $( "#leftsleevewideshort" ).toggle(),
//     $( "#leftsleevenarrowlong" ).toggle();
// });