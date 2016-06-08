
function refreshAll() {

	chrome.tabs.query({}, function(array) {
		array.forEach(function(tab) {
			if(!tab)
			{
				return;
			}
			else
			{
				chrome.tabs.reload(tab.id);
			}
			
		});
	});
};

chrome.browserAction.onClicked.addListener(refreshAll);