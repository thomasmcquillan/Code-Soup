let neckline = ("boop de boop");

$(document).ready(function() {
    $( "#neckcollar" ).click(function() {
        $( "#neckround" ).toggle(),
        $( "#neckcollar" ).toggle();
    });
});

$( "#neckround" ).click(function() {
        $( "#neckwide" ).toggle(),
        $( "#neckround" ).toggle();
});

$( "#neckwide" ).click(function() {
        $( "#neckcollar" ).show(),
        $( "#neckwide" ).toggle();
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

$( "#leftsleevenarrowlong" ).click(function() {
    $( "#leftsleevenarrowlong" ).toggle(),
    $( "#leftsleevenarrowshort" ).toggle(),
    $( "#rightsleevenarrowlong" ).toggle(),
    $( "#rightsleevenarrowshort" ).toggle();
});

$( "#leftsleevenarrowshort" ).click(function() {
    $( "#leftsleevenarrowshort" ).toggle(),
    $( "#leftsleevewidelong" ).toggle(),
    $( "#rightsleevenarrowshort" ).toggle(),
    $( "#rightsleevewidelong" ).toggle();
});

$( "#leftsleevewidelong" ).click(function() {
    $( "#leftsleevewidelong" ).toggle(),
    $( "#leftsleevewideshort" ).toggle(),
    $( "#rightsleevewidelong" ).toggle(),
    $( "#rightsleevewideshort" ).toggle();
});

$( "#leftsleevewideshort" ).click(function() {
    $( "#leftsleevewideshort" ).toggle(),
    $( "#leftsleevenarrowlong" ).toggle(),
    $( "#rightsleevewideshort" ).toggle(),
    $( "#rightsleevenarrowlong" ).toggle();
});

$( "#rightsleevenarrowlong" ).click(function() {
    $( "#rightsleevenarrowlong" ).toggle(),
    $( "#rightsleevenarrowshort" ).toggle(),
    $( "#leftsleevenarrowlong" ).toggle(),
    $( "#leftsleevenarrowshort" ).toggle();
});

$( "#rightsleevenarrowshort" ).click(function() {
    $( "#rightsleevenarrowshort" ).toggle(),
    $( "#rightsleevewidelong" ).toggle(),
    $( "#leftsleevenarrowshort" ).toggle(),
    $( "#leftsleevewidelong" ).toggle();
});

$( "#rightsleevewidelong" ).click(function() {
    $( "#rightsleevewidelong" ).toggle(),
    $( "#rightsleevewideshort" ).toggle(),
    $( "#leftsleevewidelong" ).toggle(),
    $( "#leftsleevewideshort" ).toggle();
});

$( "#rightsleevewideshort" ).click(function() {
    $( "#rightsleevewideshort" ).toggle(),
    $( "#rightsleevenarrowlong" ).toggle(),
    $( "#leftsleevewideshort" ).toggle(),
    $( "#leftsleevenarrowlong" ).toggle();
});