// Declaring constants - targets divs for pattern download thumbnails.

const neckRound = document.getElementById("patternThumbRound");
const neckCollar = document.getElementById("patternThumbCollar");
const neckWide = document.getElementById("patternThumbWide");

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

let customInputSleeveCircum;
let customInputBodyLength;
let customInputBodyCircum;

// Declaring variables for displaying the fabric width
// and length required to make currently selected style.

var fabricWidth = (currentSleeveLength * 2);
var fabricLength = (currentSleeveWidth * 0.5) + currentBodyLength;

// To calculate fabric size required for currently selected style.
// $(".tiles").children().click(function() {
$("#garmentgrid").children().click(function() {
    $( "#fabricRequired" ).text(`Fabric required: ${currentSleeveLength * 2}cm wide x ${(currentSleeveWidth * 0.5) + currentBodyLength}cm long`);
});

// Function that calculates fabric size required to make 
// garment based on the custom values input by user.
// Triggered by Enter/Tab keys in custom body length input.

$("#customInputBodyLength").keydown(function(event) {
    if (
        (event.key === "Enter" || event.key == "Tab")) {
            if ($( "#customInputBodyLength" ).val() > 0) {
            let customBodyLength = parseInt($( "#customInputBodyLength" ).val(), 10);
            $( "#fabricRequired" ).html(`${currentSleeveLength * 2}cm wide x ${(currentSleeveWidth * 0.5) + customBodyLength}cm long`);
        } else { 
            $(".fabricsize").text('Custom values will update fabric size required, but will not be updated in the illustration.');
            $("#bodytile img").css('filter', 'blur(3px) invert(8)');
            }
        }
    });





$("#customInputBodyCircum").keydown(function(event) {
    if (
        (event.key === "Enter" || event.key == "Tab")) {

            let customBodyCircum = parseInt($( "#customInputBodyCircum" ).val(), 10);

            $( "#fabricRequired" ).html(`${currentSleeveLength * 2}cm wide x ${(currentSleeveWidth * 0.5) + customBodyLength}cm long`);
        }
});

$("#customInputBodyCircum").keydown(function(event) {
    if (
        (event.key === "Enter" || event.key == "Tab")) {
            let customBodyCircum = parseInt($( "#customInputBodyCircum" ).val(), 10);
            $( "#fabricRequired" ).html(`${currentSleeveLength * 2}cm wide x ${(currentSleeveWidth * 0.5) + customBodyLength}cm long`);
        }
});

$("#customInputSleeveCircum").keydown(function(event) {
    if (
        (event.key === "Enter" || event.key == "Tab")) {
            let customBodyCircum = parseInt($( "#customInputBodyCircum" ).val(), 10);
            $( "#fabricRequired" ).html(`${currentSleeveLength * 2}cm wide x ${(currentSleeveWidth * 0.5) + customBodyLength}cm long`);
        }
});


// Click event to run when user clicks
// the neckline-tile of garment.

$(document).ready(function() {
    $( "#neckroundHover" ).click(function() {
    $( "#neckroundHover" ).toggle();    // Toggles off current neckline tile.
    $( "#neckcollarHover" ).toggle();   // Toggles on next available neckline tile.
    $(neckRound).toggle();    // Toggles off div containing download for current neckline. 
    $(neckCollar).toggle();   // Toggles on div containing download for next style of neckline.
    $("#patternThumbCollar a").css("background-color", "#ffb100");
   });
});

$( "#neckcollarHover" ).click(function() {
        $( "#neckcollarHover" ).toggle();
        $( "#neckwideHover" ).toggle();
        $(neckCollar).toggle();
        $(neckWide).toggle();
        $("#patternThumbWide a").css("background-color", "#ffd066");
});

$( "#neckwideHover" ).click(function() {
    $( "#neckwideHover" ).toggle();
    $( "#neckroundHover" ).toggle();
    $(neckWide).toggle();
    $(neckRound).toggle();
    $("#patternThumbRound a").css("background-color", "#d46300");
});

// Triggered when 'crop' body tile is clicked. 

$( "#bodycropped" ).click(function() {
    $( "#bodycropped" ).toggle();
    $( "#bodyhip" ).toggle();
    currentBodyLength = bodyHip;    // Updates variable for current body-length with value assigned to bodyHip constant.
    $( "#length" ).html(fabricLength);    // Replaces fabric length requirement displayed on the page with 'fabricLength' variable.
    $( "#width" ).html(fabricWidth);    // Replaces fabric width requirement displayed on the page with 'fabricWidth' variable.
    $( "#dimensionBodyLength" ).html(`${currentBodyLength}cm`);  // Targets table data cell with ID "#dimensionBodyLength", replacing the contents of cell with value for currentBodyLength.
});

// Triggered when 'hip' body tile is clicked. 

$( "#bodyhip" ).click(function() {
    $( "#bodyhip" ).toggle();
    $( "#bodylong" ).toggle();
    currentBodyLength = bodyLong;
    $( "#length" ).html(fabricLength);
    $( "#width" ).html(fabricWidth);
    $( "#dimensionBodyLength" ).html(`${currentBodyLength}cm`);
});

// Triggered when 'long' body tile is clicked. 

$( "#bodylong" ).click(function() {
    $( "#bodylong" ).toggle();
    $( "#bodycropped" ).toggle();
    currentBodyLength = bodyCrop;
    $( "#length" ).html(fabricLength);
    $( "#width" ).html(fabricWidth);
    $( "#dimensionBodyLength" ).html(`${currentBodyLength}cm`);
});

// Triggered when 'wide and short' left sleeve tile is clicked. 

$( "#leftsleevewideshort" ).click(function() {
    $( "#leftsleevewideshort" ).toggle();
    $( "#leftsleevewidelong" ).toggle();
    $( "#rightsleevewideshort" ).toggle();    // right sleeve tiles also toggled,
    $( "#rightsleevewidelong" ).toggle();     // so that both sleeves matches.
    currentSleeveLength = sleeveLong;
    $( "#dimensionBodyCircumference" ).html(`${currentSleeveLength * 2}cm`);
});

// Triggered when 'wide and long' left sleeve tile is clicked. 

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

// Triggered when 'narrow and short' left sleeve tile is clicked. 

$( "#leftsleevenarrowshort" ).click(function() {
    $( "#leftsleevenarrowshort" ).toggle();
    $( "#leftsleevenarrowlong" ).toggle();
    $( "#rightsleevenarrowshort" ).toggle();
    $( "#rightsleevenarrowlong" ).toggle();
    currentSleeveLength = sleeveLong;
    $( "#dimensionBodyCircumference" ).html(`${currentSleeveLength * 2}cm`);
});

// Triggered when 'narrow and long' left sleeve tile is clicked.

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

// Triggered when 'wide and short' right sleeve tile is clicked.

$( "#rightsleevewideshort" ).click(function() {
    $( "#leftsleevewideshort" ).toggle();
    $( "#leftsleevewidelong" ).toggle();
    $( "#rightsleevewideshort" ).toggle();
    $( "#rightsleevewidelong" ).toggle();
    currentSleeveLength = sleeveLong;
    $( "#dimensionBodyCircumference" ).html(`${currentSleeveLength * 2}cm`);
});

// Triggered when 'wide and long' right sleeve tile is clicked.

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

// Triggered when 'narrow and short' right sleeve tile is clicked.

$( "#rightsleevenarrowshort" ).click(function() {
    $( "#leftsleevenarrowshort" ).toggle();
    $( "#leftsleevenarrowlong" ).toggle();
    $( "#rightsleevenarrowshort" ).toggle();
    $( "#rightsleevenarrowlong" ).toggle();
    currentSleeveWidth = sleeveNarrow;
    currentSleeveLength = sleeveLong;
    $( "#dimensionBodyCircumference" ).html(`${currentSleeveLength * 2}cm`);
});

// Triggered when 'narrow and long' right sleeve tile is clicked.

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

// Listener function to trigger else/if conditional statement.

$( "#necktile" ).mouseenter(function() {
    if($("#neckround").is(":visible")){
        $( "#neckround" ).toggle();            // Toggles off 'round' neck tile if displayed,
        $( "#neckroundHover" ).toggle();       // Toggles on colored version of 'round' neck tile.
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

// Else if mouse-leave function to restore neck-tile to unhovered state.

$( "#necktile" ).mouseleave(function() {
    if($("#neckroundHover").is(":visible")){        // Checks if current neckline is 'round' style,
        $( "#neckround" ).toggle();                 // toggling off 'hover' image -
        $( "#neckroundHover" ).toggle();            // and toggling back on original.
    } else if (                                     // "else if" to check other possible options.
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

// Site-logo hover the jquery way.

$(document).ready(function() {
    $( "#makeuse-logo" ).mouseenter(function() {
    $( "#makeuse-logo" ).toggle();
    $( "#logo-hover" ).toggle();
   });
});

// And to return to unhovered state.

    $( "#makeuse-logo" ).mouseleave(function() {
    $( "#makeuse-logo" ).toggle();
    $( "#logo-hover" ).toggle();
});

// Snippet to avoid hover effects on touch devices borrowed from stackoverflow user "Blade" here:
// https://stackoverflow.com/questions/23885255/how-to-remove-ignore-hover-css-style-on-touch-devices

function watchForHover() {
   
    let lastTouchTime = 0
  
    function enableHover() {
      if (new Date() - lastTouchTime < 500) return
      document.body.classList.add('hasHover')
    }
  
    function disableHover() {
      document.body.classList.remove('hasHover')
    }
  
    function updateLastTouchTime() {
      lastTouchTime = new Date()
    }
  
    document.addEventListener('touchstart', updateLastTouchTime, true)
    document.addEventListener('touchstart', disableHover, true)
    document.addEventListener('mousemove', enableHover, true)
  
    enableHover()
  }
  
  watchForHover()