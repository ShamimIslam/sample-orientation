
/*
 * This function runs once the page is loaded, but the JavaScript bridge library is not yet active.
 */
var init = function () {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
};

window.addEventListener("load", init, false);  

 //  Prevent Default Scrolling  
preventDefaultScroll = function(event) 
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
function onDeviceReady()
{
    //lock orientation
    intel.xdk.device.setRotateOrientation("any");
    intel.xdk.device.setAutoRotate(true);
        
    //manage power
    intel.xdk.device.managePower(true,false);

    //hide splash screen
    intel.xdk.device.hideSplashScreen();        
}
    
document.addEventListener("intel.xdk.device.ready",onDeviceReady,false); 
document.addEventListener("intel.xdk.device.orientation.change",orientationchange,false);      

function orientationchange(value)
{
    //Portrait orientation
    if(value.orientation == 0 || value.orientation == 180)
    {
        document.getElementById("imagesid").className="portrait";
        document.getElementById("imagesid").src="./images/Icon-Phone-V.png";
        document.getElementById("headlineid").className="headline";
        document.getElementById("bottomid").className="bottom";
        document.getElementById("endingid").className="ending"; 
    }
    //Landscape orientation
    else
    {
        document.getElementById("imagesid").src="./images/Icon-Phone-H.png";
        document.getElementById("imagesid").className="imglandscape";
        document.getElementById("headlineid").className="headline headlinelandscape";     
        document.getElementById("bottomid").className="bottom bottomlandscape";
        document.getElementById("endingid").className="ending endinglandscape";
    }  
}



