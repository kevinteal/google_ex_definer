// JavaScript Document
//alert("Hello from your Chrome extension!")

function getSelectionText(e) {
	$("#_kt_definer_of_words_100").empty();
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
	if(text!=""){
	  // alert( text );	
	  	text=text.trim();
		var your_word = encodeURIComponent(text);
		
		$.getJSON( "http://api.wolfstudioapps.co.uk/apps/definer_of_words/word_connect_api.php",{word:your_word}, function( data ) {
		  var items = [];
			console.log("here");
			//console.log(data.length);
			var len = 5;
			if(data.length<5){
				len = data.length;
			}
			
			
			for(var i = 0; i < len; i++){
				var text = data[i]; 
				console.log(text);
				if (typeof text === 'object' ){
					text = data[i][0];
				}
				 $("#_kt_definer_of_words_100").append("<li>" + text + "</li>" );
			}
			
			if(len>0){
				$("#_kt_definer_of_words_100").css({
			   "display" : "block",
			   "top" : e.pageY+"px",
			   "left" : e.pageX+"px"
			   });
		   	}else{
			$("#_kt_definer_of_words_100").css({
			   "display" : "none"  
			   });
			}
			
		});
		
		
	}else{
		$("#_kt_definer_of_words_100").css({
			   "display" : "none"  
			   });
	}
}
function CloseMe(){
	$("#_kt_definer_of_words_100").css("display" , "none");
}

var div = document.createElement("div");
		div.style.position="absolute";
		div.id="_kt_definer_of_words_100";
		div.style.width = "350px";
//		div.style.height = "200px";
		div.style.background = "#339966";
		div.style.color = "white";
		div.style.display = "none";
		div.style.zIndex = 999;
		div.style.fontFamily = "Arial, 'Helvetica Neue', Helvetica, sans-serif";
		div.style.border = "outset grey 2px";
		div.style.overflow= "auto";
		div.style.padding = "5px";
		div.onclick=CloseMe;
		document.body.appendChild(div);


document.addEventListener("mouseup", getSelectionText);