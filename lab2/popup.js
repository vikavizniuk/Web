document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.getElementById('toggleSwitch');
  
  chrome.storage.local.get(['blockingEnabled'], function(result) {
      const isEnabled = result.blockingEnabled !== undefined ? result.blockingEnabled : true;
      toggleSwitch.checked = isEnabled;
      
      toggleSwitch.addEventListener('change', function() {
          const newState = toggleSwitch.checked;
          
          chrome.storage.local.set({ blockingEnabled: newState }, function() {
              if (newState) {
                  chrome.declarativeNetRequest.updateDynamicRules({
                      addRules: [{
                          "id": 1,
                          "priority": 1,
                          "action": { "type": "block" },
                          "condition": {
                              "urlFilter": "*://*.doubleclick.net/*",
                              "resourceTypes": ["script", "image", "xmlhttprequest"]
                          }
                      }]
                  }, function() {
                      console.log('Ad blocking enabled');
                  });
              } else {
                  chrome.declarativeNetRequest.updateDynamicRules({
                      removeRuleIds: [1]
                  }, function() {
                      console.log('Ad blocking disabled');
                  });
              }
          });
      });
  });
});
