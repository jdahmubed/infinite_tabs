//this file is index.js

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  alert('extension');
});

chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('clicked ' + tab.id);
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  	chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  		});
	});
	chrome.tabs.create({ url: message.url, selected: false });
	console.log('clicked');
	console.debug('clicked');
});