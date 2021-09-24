# Chrome extension for Datadog RUM demo

### I'm going to keep the previous menuless extension in another repository [here](https://github.com/shigeya-dd/rum-chrome-extension-minimal) as the minimalist version.

## What is this?
- Chrome extension for single function to inject JavaScript snipet for Datadog RUM.
- You can demo/trial Datadog RUM with any live web sites.
- Please check the [document](https://docs.datadoghq.com/real_user_monitoring/) for Datadog RUM.

## How to setup
- Clone or download this repository to your PC.
- `contents.js`
  - `applicationId`: Your applicaton ID
  - `clientToken`: Your client token
  - `site`: Datadog site to send RUM
  - `service`: _service_ tag
  - `env`: _env_ tag
  - `setUser()`: Sample code for adding custom attributes
- `manifest.json`
  - `matches`: Site URL for RUM demo
    - Refer [doc](https://developer.chrome.com/docs/extensions/mv2/match_patterns/) for match patterns.
  - `js`: replace `datadog-rum-v3.js` with `datadog-rum-recorder.js` for RUM session replay.
- Download Datadog RUM javascript file
  - You can use `rum_download.sh` file.
- Load extension to your Chrome
  - Open extentions page. `chrome://extensions`
  - Turn on _Developer mode_ switch.
  - Click _Load unpacked_ button and load this folder.
  - _RUM Demo_ will appear in the extensions page and the extensions menu.
- When you modified files in this folder, they will be reloaded in Chrome automatically.
  - It's done by hot-reload.js. [Author's repo](https://github.com/xpl/crx-hotreload)

- Options: You can also set datadog tags from options page.
  - Pin it on extension bar  
  ![pin](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/12uvmjJQ/2751a271-24b0-4636-a3f2-3c0d2ac91b86.jpg?v=5afd8b46c5b1eceafc64f145c94ce6cc)
  - Right click the icon and click `option` to open the option windows 
  ![options](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/JruxYZoj/a03c09d3-24ce-4326-88e0-d46560ec5c38.jpg?v=aed64f22c7e534e933a096e5734b0f8a) 
  ![options page](https://p-qkfgo2.t2.n0.cdn.getcloudapp.com/items/12uvmjz6/8c9690d9-c4be-4cf6-809a-e21dd8a04bc0.jpg?v=687f52aec612eb6c47c91683335fe230)
