// popup.js

function getUTCString() {
  const now = new Date();
  const y = now.getUTCFullYear();
  const mo = String(now.getUTCMonth() + 1).padStart(2, '0');
  const d = String(now.getUTCDate()).padStart(2, '0');
  const h = String(now.getUTCHours()).padStart(2, '0');
  const mi = String(now.getUTCMinutes()).padStart(2, '0');
  const s = String(now.getUTCSeconds()).padStart(2, '0');
  return `${y}-${mo}-${d} ${h}:${mi}:${s} UTC`;
}

const tsInput = document.getElementById('tsInput');
const resetBtn = document.getElementById('resetBtn');
const saveBtn = document.getElementById('saveBtn');
const status = document.getElementById('status');

// Load saved value
chrome.storage.local.get(['vt_timestamp_value'], function (result) {
  let savedVal = result.vt_timestamp_value;
  if (savedVal && savedVal.includes('Timestamp:')) {
    savedVal = getUTCString();
  }
  tsInput.value = savedVal || getUTCString();
});

function updateTabInput(val) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs[0]) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: (value) => {
          const el = document.getElementById('vt-clean-footer-input');
          if (el) el.value = value;
        },
        args: [val],
      });
    }
  });
}

resetBtn.addEventListener('click', function () {
  const val = getUTCString();
  tsInput.value = val;
  chrome.storage.local.set({ vt_timestamp_value: val });
  status.textContent = 'Reset to current UTC.';
  setTimeout(() => { status.textContent = ''; }, 2000);
  updateTabInput(val);
});

saveBtn.addEventListener('click', function () {
  const val = tsInput.value;
  chrome.storage.local.set({ vt_timestamp_value: val });
  status.textContent = 'Saved!';
  setTimeout(() => { status.textContent = ''; }, 2000);
  updateTabInput(val);
});