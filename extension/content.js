// content.js - Fixed Free-Text Timestamp Footer

(function () {
  // Avoid duplicate injection and remove old version if exists
  const oldOverlay = document.getElementById('vt-timestamp-overlay');
  if (oldOverlay) oldOverlay.remove();

  if (document.getElementById('vt-clean-footer-overlay')) return;

  // Clear old buggy positions from storage
  chrome.storage.local.remove(['vt_timestamp_x', 'vt_timestamp_y']);

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

  // Create overlay container
  const overlay = document.createElement('div');
  overlay.id = 'vt-clean-footer-overlay';

  // Create editable input
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'vt-clean-footer-input';
  input.spellcheck = false;

  // Load saved value or use current UTC
  chrome.storage.local.get(['vt_timestamp_value'], function (result) {
    let savedVal = result.vt_timestamp_value;
    // Overwrite if old "Timestamp:" format is saved in storage
    if (savedVal && savedVal.includes('Timestamp:')) {
      savedVal = getUTCString();
    }
    input.value = savedVal || getUTCString();
  });

  // Save on change freely
  input.addEventListener('input', function () {
    chrome.storage.local.set({ vt_timestamp_value: input.value });
  });

  overlay.appendChild(input);
  document.body.appendChild(overlay);
})();