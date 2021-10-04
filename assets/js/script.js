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