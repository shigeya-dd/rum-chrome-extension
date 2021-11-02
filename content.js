var applicationid;
var clienttoken;
var site;
var env;
var service;
var version;

console.log("contentjs run...")

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
    // if (window.DD_RUM && window.DD_RUM.) {ddruminit();}
    ddruminit();
    // ddruminitasync();
});

function ddruminitasync(){
    window.DD_RUM.onReady(function() {
        window.DD_RUM.init({
          clientToken: clienttoken,
          applicationId: applicationid,
          site: site,
          service: service,
            env: env,
            version: version,
            sampleRate: 100,
            trackInteractions: true,
            trackSessionAcrossSubdomains: true
        })
    })
}

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
        silentMultipleInit: true,
        trackSessionAcrossSubdomains: true
    });

    window.DD_RUM && window.DD_RUM.setUser({
        id: '12345abc001',
        name: 'John Doe',
        email: 'john.doe@example.com',
        membership: 'gold'
    });
}

