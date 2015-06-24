/*jslint browser:true, devel:true, white:true, vars:true, eqeq:true */
/*global $:false, intel:false*/
/*
 * This function runs once the page is loaded, but the JavaScript bridge library is not yet active.
 */
var init = function () {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
};

window.addEventListener("load", init, false);  

 //  Prevent Default Scrolling  
var preventDefaultScroll = function(event) 
{
    // Prevent scrolling on this element
    event.preventDefault();
    window.scroll(0,0);
    return false;
};
    
window.document.addEventListener("touchmove", preventDefaultScroll, false);
/*
 * Device Ready Code 
 * This event handler is fired once the JavaScript bridge library is ready
 */



function orientationChange(e)
{
    
    
    var currentOrientation = "";

    if (window.orientation === 0 || window.orientation === 180) {
//                    currentOrientation = "portrait";
        document.getElementById("imagesid").className="portrait";
        document.getElementById("imagesid").src="./images/Icon-Phone-V.png";
        document.getElementById("headlineid").className="headline";
        document.getElementById("bottomid").className="bottom";
        document.getElementById("endingid").className="ending"; 
    } else (window.orientation === 90 || window.orientation === -90) {
//                    currentOrientation = "landscape";
        document.getElementById("imagesid").src="./images/Icon-Phone-H.png";
        document.getElementById("imagesid").className="imglandscape";
        document.getElementById("headlineid").className="headline headlinelandscape";     
        document.getElementById("bottomid").className="bottom bottomlandscape";
        document.getElementById("endingid").className="ending endinglandscape";
    } 

}

window.onorientationchange = orientationChange;
document.addEventListener("deviceready",onDeviceReady,false); 

function onDeviceReady()
{
    
    //manage power
    intel.xdk.device.managePower(true,false);

    //hide splash screen
    navigator.splashscreen.hide();
}

orientationChange();

