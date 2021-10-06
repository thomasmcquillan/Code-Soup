const neckCollar = '<a href="assets/downloads/print-temp-collar-neck.pdf">Pattern for Collar Neckline. (PDF download)</a>';
const neckRound = '<a href="assets/downloads/print-temp-round-neck.pdf">Pattern for Round Neckline. (PDF download)</a>';
const neckWide = '<a href="assets/downloads/print-temp-wide-neck.pdf">Pattern for Wide Neckline. (PDF download)</a>';

const bodyCropped = '<a href="assets/downloads/print-temp-collar-neck.pdf">Pattern for Collar Neckline. (PDF download)</a>';
const bodyHip = 
const bodyLong = 








// var neckLine = neckCollar;

// $(document).ready(function() {
//     $( "#neckcollar" ).click(function() {
//         $( "#neckround" ).toggle(),
//         $( "#neckcollar" ).toggle();
//     });
// });

// $(document).ready(function() {
//     console.log("ready");
// });



// $(document).ready(function() {
// $("#neckcollar").click(function() {
//         $( "#neckcollar" ).toggle(),
//         $( "#neckround" ).toggle(),
//         $( "#patternNeckCollar").toggle(),
//         $( "#patternNeckRound").toggle();
//     });
// });

$(document).ready(function() {
    $("#neckcollar").click(function() {
        $( "#neckcollar" ).toggle(),
        $( "#neckround" ).toggle(),
        $( "#neckline" ).html(neckRound);
        });
    });


$( "#neckround" ).click(function() {
        $( "#neckwide" ).toggle(),
        $( "#neckround" ).toggle(),
        $( "#neckline" ).html(neckWide);
});

$( "#neckwide" ).click(function() {
        $( "#neckcollar" ).toggle(),
        $( "#neckwide" ).toggle(),
        $( "#neckline" ).html(neckCollar);
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

//  testing code for selecting required pattern files

// var patternNeck;

// var patternNeckCollar;
// var patternNeckLong;
// var patternNeckWide = 

// $(document).ready(function () {
  

//     $("#neckcollar").click(function () {
//         patternNeck = document.getElementById('patternNeckCollar');
//         console.log(patternNeck);
//     });
//     document.getElementById("#patternfiles").append(patternNeck);
// });

// var myLink = document.getElementById("yourLinkId"); 
// myLink.href = "some_url"

// $(document).ready(function () {
  
//     // On button click, get value
//     // of input control Show alert
//     // message box
//     $("#getValBtnID").click(function () {
//         var inputString = $("#userInputID").val();
//         alert(inputString);
//     });
// });

// $("#neckcollar").click(function(e){
// 	$('#patterNeckCollar').toggle();
//   e.preventDefault();
// });





// $(document).ready(function() {
//     $( "#neckcollar" ).click(function() {
//         $( "#neckround" ).toggle(),
//         $( "#neckcollar" ).toggle();
//     });
// });

// $( "#neckround" ).click(function() {
//         $( "#neckwide" ).toggle(),
//         $( "#neckround" ).toggle();
// });

// $( "#neckwide" ).click(function() {
//         $( "#neckcollar" ).show(),
//         $( "#neckwide" ).toggle();
// });


{/* <ul id="patterndownloads">
        <li id=patternNeckCollar><a href="assets/downloads/print-temp-collar-neck.pdf">Pattern for Collar Neckline. (PDF download)</a></li>
        <li id=patternNeckRound><a href="assets/downloads/print-temp-round-neck.pdf">Pattern for Round Neckline. (PDF download)</a></li>
        <li id=patternNeckWide><a href="assets/downloads/print-temp-wide-neck.pdf">Pattern for Wide Neckline. (PDF download)</a></li>
    </ul> */}