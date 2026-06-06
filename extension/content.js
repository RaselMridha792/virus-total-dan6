// content.js - Timestamp Overlay Extension

(function () {
  // Avoid duplicate injection
  if (document.getElementById('vt-timestamp-overlay')) return;

  function getUTCString() {
    const now = new Date();
    const y = now.getUTCFullYear();
    const mo = String(now.getUTCMonth() + 1).padStart(2, '0');
    const d = String(now.getUTCDate()).padStart(2, '0');
    const h = String(now.getUTCHours()).padStart(2, '0');
    const mi = String(now.getUTCMinutes()).padStart(2, '0');
    const s = String(now.getUTCSeconds()).padStart(2, '0');
    return `Timestamp: ${y}-${mo}-${d}T${h}:${mi}:${s}Z`;
  }

  // Create overlay container
  const overlay = document.createElement('div');
  overlay.id = 'vt-timestamp-overlay';

  // Create editable input
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'vt-timestamp-input';
  input.spellcheck = false;

  // Load saved value or use current UTC
  chrome.storage.local.get(['vt_timestamp_value', 'vt_timestamp_x', 'vt_timestamp_y'], function (result) {
    input.value = result.vt_timestamp_value || getUTCString();

    if (result.vt_timestamp_x !== undefined && result.vt_timestamp_y !== undefined) {
      overlay.style.left = result.vt_timestamp_x + 'px';
      overlay.style.top = result.vt_timestamp_y + 'px';
      overlay.style.bottom = 'auto';
    }
  });

  // Save on change
  input.addEventListener('input', function () {
    chrome.storage.local.set({ vt_timestamp_value: input.value });
  });

  // Dragging logic
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;

  overlay.addEventListener('mousedown', function (e) {
    if (e.target === input) return; // don't drag when clicking input text
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    const rect = overlay.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;
    overlay.style.cursor = 'grabbing';
    e.preventDefault();
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const newLeft = startLeft + dx;
    const newTop = startTop + dy;
    overlay.style.left = newLeft + 'px';
    overlay.style.top = newTop + 'px';
    overlay.style.bottom = 'auto';
    overlay.style.right = 'auto';
  });

  document.addEventListener('mouseup', function () {
    if (!isDragging) return;
    isDragging = false;
    overlay.style.cursor = 'grab';
    const rect = overlay.getBoundingClientRect();
    chrome.storage.local.set({ vt_timestamp_x: rect.left, vt_timestamp_y: rect.top });
  });

  overlay.appendChild(input);
  document.body.appendChild(overlay);
})();
