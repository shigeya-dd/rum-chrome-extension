// const filesInDirectory = dir => new Promise (resolve =>
//     dir.createReader ().readEntries (entries =>
//         Promise.all (entries.filter (e => e.name[0] !== '.').map (e =>
//             e.isDirectory
//                 ? filesInDirectory (e)
//                 : new Promise (resolve => e.file (resolve))
//         ))
//         .then (files => [].concat (...files))
//         .then (resolve)
//     )
// )

// const timestampForFilesInDirectory = dir =>
//         filesInDirectory (dir).then (files =>
//             files.map (f => f.name + f.lastModifiedDate).join ())

// const watchChanges = (dir, lastTimestamp) => {
//     timestampForFilesInDirectory (dir).then (timestamp => {
//         if (!lastTimestamp || (lastTimestamp === timestamp)) {
//             setTimeout (() => watchChanges (dir, timestamp), 1000) // retry after 1s
//         } else {
//             chrome.runtime.reload ()
//         }
//     })
// }

// chrome.management.getSelf (self => {
//     if (self.installType === 'development') {
//         chrome.runtime.getPackageDirectoryEntry (dir => watchChanges (dir))
//         chrome.tabs.query ({ active: true, lastFocusedWindow: true }, tabs => { // NB: see https://github.com/xpl/crx-hotreload/issues/5
//             if (tabs[0]) {
//                 chrome.tabs.reload (tabs[0].id)
//             }
//         })
//     }
// })

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


