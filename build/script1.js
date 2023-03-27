import blocked_sites_v2 from './blocked_sites'
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("I am going to block:", details.url)
        return {cancel: true}
    },
    {urls: blocked_sites_v2},
    ["blocking"]
)