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

$(".tiles").click(function() {
    $( "#fabricRequired" ).text(`${currentSleeveLength * 2}cm wide x ${(currentSleeveWidth * 0.5) + currentBodyLength}cm long`);
});

// Function that calculates fabric size required to make 
// garment based on the custom values input by user. 
// This key-listener event will run when user presses
// either the "Enter" or "Tab" key while the custom body
// length input field is selected.

// - Note: I am yet to write the equivalent function for
// the custom body circumference and sleeve circumference cells.

$("#customInputBodyLength").keydown(function(event) {
    if (
        (event.key === "Enter" || event.key == "Tab")) {
            let customBodyLength = parseInt($( "#customInputBodyLength" ).val(), 10);
            $( "#fabricRequired" ).html(`${currentSleeveLength * 2}cm wide x ${(currentSleeveWidth * 0.5) + customBodyLength}cm long`);
        }
});

// Mouse-click event listener to run when user clicks
// in the neckline-tile of garment. The function was
// initially written to hide current tile and display
// the next tile using the toggle()function.
// It has since had further arguments added to toggle
// displayed download items and update variables used
// to calculate fabric requirements.

$(document).ready(function() {
    $( "#neckroundHover" ).click(function() {
    $( "#neckroundHover" ).toggle();    // current neckline tile is toggled off.
    $( "#neckcollarHover" ).toggle();   // next available neckline tile is toggled on.
    $(neckRound).toggle();    // div containing pattern download for current neckline is toggled off. 
    $(neckCollar).toggle();   // div containing pattern download for next neckline tile is toggled on.
   });
});

$( "#neckcollarHover" ).click(function() {
        $( "#neckcollarHover" ).toggle();
        $( "#neckwideHover" ).toggle();
        $(neckCollar).toggle();
        $(neckWide).toggle();
});

$( "#neckwideHover" ).click(function() {
    $( "#neckwideHover" ).toggle();
    $( "#neckroundHover" ).toggle();
    $(neckWide).toggle();
    $(neckRound).toggle();
    $("#patternThumbRound a").css("background-color", "#d46300");
});

// Mouse-click event listener to run when user clicks
// in the body-tile of garment. 

$( "#bodycropped" ).click(function() {
    $( "#bodycropped" ).toggle();
    $( "#bodyhip" ).toggle();
    currentBodyLength = bodyHip;    // Updates currentBodyLength variable with value assigned to bodyHip constant.
    $( "#length" ).html(fabricLength);    // Replaces fabric length requirement displayed on the page with 'fabricLength' variable.
    $( "#width" ).html(fabricWidth);    // Replaces fabric width requirement displayed on the page with 'fabricWidth' variable.
    $( "#dimensionBodyLength" ).html(`${currentBodyLength}cm`);  // Targets table data cell with ID "#dimensionBodyLength", replacing the contents of cell with value for currentBodyLength.
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

// Mouse-enter listener to detect when user hovers
// over the neckline-tile. When the mouse enters the
// div it triggers an else/if conditional statement.
// If neckround is visible then show the neckroundhover
// image, while hiding the neckround image. If not visible,
// check if neckcollar is visible and run applicable code etc.
// Obvious parallels to CSS :hover states but more powerful.

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

// Essentially the same as the mouse-enter function
// described above, but this time for reversing the
// hovered state - returning the tile to it's original
// image.

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