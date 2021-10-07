var applicationid;
var clienttoken;
var site;
var env;
var service;
var version;

chrome.storage.sync.get({
    appid:'xxx',
    clitoken:'xxx',
    site: 'datadoghq.com',
    env: 'demo',
    service: 'rumdemo',
    version: '1.0.0'
    },function(items){
    //console.log("appid is:" + items.appid + " and clienttoken is: " + items.clitoken);
    applicationid=items.appid;
    clienttoken=items.clitoken;
    site=items.site;
    env=items.env;
    service=items.service;
    version=items.version;
    //console.log("get method appid is:" + applicationid + " and clienttoken is: " + clienttoken1);
    ddruminit();
});

function ddruminit(){
window.DD_RUM && window.DD_RUM.init({
    applicationId: applicationid,
    clientToken: clienttoken,
    site: site,
    service: service,
    env: env,
    version: version,
    sampleRate: 100,
    trackInteractions: true,
    trackSessionAcrossSubdomains: true
});

window.DD_RUM && window.DD_RUM.setUser({
    id: '12345abc001',
    name: 'John Doe',
    email: 'john.doe@example.com',
    membership: 'gold'
});

// Uncomment the following two lines to enable Session Replay
// document.body.setAttribute("data-dd-privacy", "mask-user-input");
// window.DD_RUM.startSessionReplayRecording();

}

