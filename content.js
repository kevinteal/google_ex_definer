// JavaScript Document
//alert("Hello from your Chrome extension!")

function getSelectionText(e) {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
	if(text!=""){
	  // alert( text );
		$("#_kt_definer_of_words_100").css({
		   "display" : "block",
		   "top" : e.pageY+"px",
		   "left" : e.pageX+"px"
		});
		$("#_kt_definer_of_words_100").text(text);
		
	}else{
		//alert("pageX: "+e.pageX+"\nPageY: "+e.pageY);
	}
}
function CloseMe(){
	$("#_kt_definer_of_words_100").css("display" , "none");
}

var div = document.createElement("div");
		div.style.position="absolute";
		div.id="_kt_definer_of_words_100";
		div.style.width = "100px";
		div.style.height = "100px";
		div.style.background = "red";
		div.style.color = "white";
		div.innerHTML = "Hello";
		div.style.display = "none";
		div.style.zIndex = 999;
		div.onclick=CloseMe;
		document.body.appendChild(div);

document.addEventListener("mouseup", getSelectionText);