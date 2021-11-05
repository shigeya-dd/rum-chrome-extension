# Chrome extension for Datadog RUM demo

## What is this?
- Chrome extension for single function to inject JavaScript snipet for Datadog RUM.
- You can demo/trial Datadog RUM with any live web sites.
- Please check the [document](https://docs.datadoghq.com/real_user_monitoring/) for Datadog RUM.

## Contributions
- This is the original version and the *minimalist* version.
- Chrome web store version has been developed by wangzz2019. See the [repo](https://github.com/wangzz2019/rum-chrome-extension)

## How to setup
- Clone or download this repository to your PC.
- `contents.js`
  - `applicationId`: Your applicaton ID
  - `clientToken`: Your client token
  - `site`: Datadog site to send RUM
  - `service`: _service_ tag
  - `env`: _env_ tag
  - `setUser()`: Sample code for adding custom attributes
  - To connect APM,
    - Set the domain names to [`allowedTracingOrigins`](https://docs.datadoghq.com/real_user_monitoring/connect_rum_and_traces?tab=browserrum#rum-set-up)
    - You may also need to configure CORS. See [docs](https://docs.datadoghq.com/real_user_monitoring/connect_rum_and_traces/?tab=browserrum#how-are-rum-resources-linked-to-traces)
  - To enable session replay,
    - Set the [`defaultPrivacyLevel`](https://docs.datadoghq.com/real_user_monitoring/session_replay/privacy_options/?tab=maskuserinput#configuration)
    - Uncomment the line including `startSessionReplayRecording()`
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
