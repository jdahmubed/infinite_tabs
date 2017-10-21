//this file is index.js

// NOTE: we cannot run "console.log" inside a background script - there is nowhere to print it

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  alert('extension');
});

chrome.browserAction.onClicked.addListener(function(tab) {
	
	chrome.tabs.getAllInWindow(null, function(tabs){
		 var urls = '';
		 for (var i = 0; i < tabs.length; i++) {
		 	urls += tabs[i].url + "\n";                         
	    }
	    chrome.tabs.sendMessage(tab.id, {greeting: urls}, function(response) {
   	 });
	    //alert(urls);
	});
/*	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  		chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
  		});
	});
	chrome.tabs.create({ url: message.url, selected: false });
	*/
});