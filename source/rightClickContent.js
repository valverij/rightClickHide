$(document).ready(function () {	
	window.addEventListener("mousedown", clickEvent, false);	
	chrome.extension.onMessage.addListener(messageListener);
});

var clickedElement = null;
var hiddenElements = new Array();

var clickEvent = function(e) {		
	if(event.button == 2) { 		
		clickedElement = e.target;
	}	
	else if(e.button == 0 && e.ctrlKey && e.altKey)
	{
		clickedElement = e.target;
		hideElement(clickedElement);
	}
};

var messageListener = function(request, sender, sendResponse) {	
	switch(request.toLowerCase()) {
		case "hideelement":
			hideElement(clickedElement);
			break;
		case "resetallelements":
			resetAllElements();
			break;
		default: 
			console.log("Right-Click Hide: No action processed.");
			break;
	}	
};

function hideElement(element) {
	$(element).hide();
	addToHiddenElements(clickedElement);
}

function resetAllElements() {
	$(hiddenElements).each(function(){
		$(this).show();
	});
	hiddenElements = new Array();
}

function addToHiddenElements(element) {
	if(typeof(element) != "undefined") {
		hiddenElements[hiddenElements.length] = element;
	}
}