var Mail = {
	getMail: function(type) {
		chrome.extension.sendMessage({type: "inbox"}, function(response) {
			alert(response.farewell);
		});
	}
};

function RequestEmails()
{
	Mail.getMail("inbox");
}

function CreateOverlay()
{
	var div = document.createElement("div");
	div.style.zIndex = "100000" 
	div.style.position = "fixed";
	div.style.top = "50%";
	div.style.left = "50%";
	div.style.height = "300px";
	div.style.width = "500px";
	div.style.marginTop = "-150px";
	div.style.marginLeft = "-250px";

	div.style.background = "red";
	
	var buttonnode= document.createElement('input');
	buttonnode.type = "button";
	buttonnode.name = "clicky";
	buttonnode.value = "clicky";
	
	buttonnode.addEventListener("click", RequestEmails, true);
	
	div.appendChild(buttonnode);

	document.body.appendChild(div);
}

CreateOverlay();
//buttonnode.removeEventListener("click", RequestEmails, true);