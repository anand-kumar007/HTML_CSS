
// window object is always present 

function windowOperations()
{
    var nextWinodow = window.open("http://www.google.com","newWindow","height=300,width=400");
    nextWinodow.moveTo(250,200);
    nextWinodow.close();
    window.close();
}

// windowOperations();

// screen property of BOM

function screenOperations()
{
    alert("screen height : " + screen.height + "\nscreen width : "+ screen.width +
    "\ncolor depth : "+ screen.colorDepth + "\nWindow width : "+ window.innerWidth + 
    "\nwindow height : "+window.innerHeight);
}

// screenOperations();

// navigator object
function navigatorOperations()
{
    //gives info about browser and sites etc.
    alert("app Name : " + navigator.appName + "\nappcode Name : " + navigator.appCodeName +
        "\nPlatform : " + navigator.platform + "\nCoolkies Enabled : " + navigator.cookieEnabled+
        "\nProduct Name of Browser : "+ navigator.product);
}
// navigatorOperations();


//location object
// used for getting the URL of current page address and Redirect the browser to newPage

function locationOperations()
{
    alert("Url : " + location.href + "\ndomain Name : " + location.hostname +
        "\npath and filename of currentPage : " + location.pathname + "\nprotocol used : " + location.protocol);
}

// locationOperations();


// lastly history.back() and history.forward()  -- for histroy track