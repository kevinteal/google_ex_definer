var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.browserAction.setIcon({path: "icon.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {file:"user_definer_script.js"});
  }
  else{
    chrome.browserAction.setIcon({path: "off.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {code:"document.removeEventListener('mouseup', getSelectionText);"});
  }
});


