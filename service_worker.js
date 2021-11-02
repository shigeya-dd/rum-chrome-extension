// var match_reg='[a-zA-z]+://[a-zA-Z]+\.wikipedia\.org/[^\s]*'

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    console.log(tab.url);
    var match_reg;
    chrome.storage.sync.get({
        match:'xxx'
        },function(items){
        //console.log("appid is:" + items.appid + " and clienttoken is: " + items.clitoken);
        match_reg=items.match;
        console.log(match_reg);
        if (tab.url.match(match_reg)){
            //v3
            chrome.scripting.executeScript({
                target: {tabId:tab.id},
                // files: ["content.js","datadog-rum-v3.js"]
                files: ["datadog-rum-v3.js","content.js"]
            },() => { });
            // for v2 source
            // chrome.tabs.executeScript(tabId,{file:"content.js"},function(){
            //     chrome.tabs.executeScript(tabId,{file:"datadog-rum-v3.js"});
            // });
        }
    });

});

// chrome.tabs.onUpdated.addListener((tab)=>{
//     console.log("backgroundjs running...");
//     chrome.tabs.executeScript({
//         target:{tabId:tab.id},
//         files:['content.js']
//     });
// });
