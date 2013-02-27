var oauth = ChromeExOAuth.initBackgroundPage({
  'request_url': 'https://www.google.com/accounts/OAuthGetRequestToken',
  'authorize_url': 'https://www.google.com/accounts/OAuthAuthorizeToken',
  'access_url': 'https://www.google.com/accounts/OAuthGetAccessToken',
  'consumer_key': 'anonymous',
  'consumer_secret': 'anonymous',
  'scope': 'https://docs.google.com/feeds/',
  'app_name': 'My Google Docs Extension'
});

function fetch()
{
	oauth.authorize(function() {
	  // ... Ready to fetch private data ...
	});
}

chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		fetch();
		
		if (request.type == "inbox")
		{
			sendResponse({farewell: "goodbye"});
		}
    }
);