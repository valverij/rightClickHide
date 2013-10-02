// background script

chrome.contextMenus.create({
	"title" : "Hide selected element",
	"contexts" : ["all"],
	"onclick" : function (info, tab) {		
		chrome.tabs.sendMessage(tab.id, "hideElement", function(clickedElement) {
			console.log("success!");
		});		
	}
});

chrome.contextMenus.create({
	"title" : "Reset hidden elements",
	"contexts" : ["all"],
	"onclick" : function (info, tab) {		
		chrome.tabs.sendMessage(tab.id, "resetAllElements", function(clickedElement) {
			console.log("success!");
		});		
	}
});

