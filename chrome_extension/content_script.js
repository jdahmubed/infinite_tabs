chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.debug('content-script');
		$('body').html('Content script making Ajax request...');
		var jqxhr = $.ajax( "http://localhost:9099?text=bar" )
					  .done(function(data) {
					    console.log("success " + data.foo );
					    $('body').append('<b>success</b>:' + data.foo);
					  })
					  .fail(function() {
					    alert( "error" );
					  })
					  .always(function() {
					    console.log( "complete" );
					  });
		//alert('content-script ' + $('body').html());
	}
);
document.body.addEventListener('click', function(arg1, arg2) {
	console.debug("Element was clicked: " + arg1);
}, true);