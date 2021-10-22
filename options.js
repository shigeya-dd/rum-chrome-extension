// Saves options to chrome.storage
function save_options() {
    var match=document.getElementById('match').value;
    var applicationid = document.getElementById('appid').value;
    var clienttoken = document.getElementById('clienttoken').value;
    var version=document.getElementById('version').value;
    var site=document.getElementById('site').value;
    var service=document.getElementById('service').value;
    var env=document.getElementById('env').value;

    chrome.storage.sync.set({
      match: match,
      appid: applicationid,
      clitoken: clienttoken,
      version: version,
      site: site,
      service: service,
      env: env
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
      match: 'xxx',
      appid: 'xxx',
      clitoken: 'xxx',
      site: 'datadoghq.com',
      service: 'rumdemo',
      version: '1.0.0',
      env: 'demo'
    }, function(items) {
      document.getElementById('match').value = items.match;
      document.getElementById('appid').value = items.appid;
      document.getElementById('clienttoken').value = items.clitoken;
      document.getElementById('site').value = items.site;
      document.getElementById('service').value = items.service;
      document.getElementById('version').value = items.version;
      document.getElementById('env').value = items.env;
    });
  }
  function cleardata(){
    document.getElementById('match').value='';
      document.getElementById('appid').value='';
      document.getElementById('clienttoken').value='';
      document.getElementById('env').value='demo';
      document.getElementById('service').value='rumdemo';
      document.getElementById('site').value='datadoghq.com';
      document.getElementById('version').value='1.0.0';
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',save_options);
  document.getElementById('clear').addEventListener('click',cleardata);
