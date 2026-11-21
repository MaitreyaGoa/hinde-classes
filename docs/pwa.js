/* Hinde Classes PWA helper: registers the service worker and shows an "Install app" pill.
   <script src="/pwa.js" defer></script>
   data-noprompt  -> register only, never show the pill (game pages)
   data-offset="96" -> lift the pill above a bottom nav (px)            */
(function () {
  var me = document.currentScript || document.querySelector('script[src$="/pwa.js"]');
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("/sw.js", {scope: "/"}).catch(function () {}); });
  }
  if (!me || me.hasAttribute("data-noprompt")) return;
  var standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone;
  if (standalone) return;
  var KEY = "hc_install_dismissed", off = +(me.getAttribute("data-offset") || 0);
  try { if (Date.now() - (+localStorage.getItem(KEY) || 0) < 7 * 864e5) return; } catch (e) {}
  var css = ".hc-ip{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(" + (16 + off) + "px + env(safe-area-inset-bottom));z-index:99999;display:flex;align-items:center;gap:10px;padding:8px 8px 8px 10px;border-radius:999px;background:rgba(0,66,88,.96);color:#fff;font:600 14px/1.2 -apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif;box-shadow:0 12px 34px -10px rgba(0,0,0,.45);width:max-content;white-space:nowrap;max-width:calc(100vw - 24px);animation:hcip .35s ease-out}"
    + ".hc-ip img{width:30px;height:30px;border-radius:9px;flex:none}.hc-ip span{flex:1;min-width:0}"
    + ".hc-ip button{font:inherit;border:0;cursor:pointer;border-radius:999px}.hc-ip .go{padding:9px 16px;background:#fff;color:#004258;font-weight:700}.hc-ip .x{width:30px;height:30px;background:transparent;color:#cfe3ea;font-size:18px;line-height:1}"
    + "@keyframes hcip{from{opacity:0;transform:translate(-50%,12px)}}";
  function pill(html, onGo) {
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    var d = document.createElement("div"); d.className = "hc-ip"; d.setAttribute("role", "dialog"); d.setAttribute("aria-label", "Install Hinde Classes");
    d.innerHTML = '<img src="/icons/icon-192.png" alt=""><span>' + html + "</span>" + (onGo ? '<button class="go" type="button">Install</button>' : "") + '<button class="x" type="button" aria-label="Close">✕</button>';
    document.body.appendChild(d);
    d.querySelector(".x").onclick = function () { try { localStorage.setItem(KEY, Date.now()); } catch (e) {} d.remove(); };
    if (onGo) d.querySelector(".go").onclick = function () { onGo(); d.remove(); };
    return d;
  }
  window.addEventListener("beforeinstallprompt", function (ev) {
    ev.preventDefault();
    pill("Get the Hinde Classes app", function () { ev.prompt(); });
  });
  var ios = /iphone|ipad|ipod/i.test(navigator.userAgent) && /safari/i.test(navigator.userAgent) && !/crios|fxios/i.test(navigator.userAgent);
  if (ios) window.addEventListener("load", function () {
    setTimeout(function () { pill('Install: tap <b>Share</b> <svg width="13" height="15" viewBox="0 0 13 15" style="vertical-align:-2px" fill="none" stroke="#fff" stroke-width="1.6"><path d="M6.5 1v9M3 4.5 6.5 1 10 4.5M2 7H1v7h11V7h-1"/></svg> then <b>Add to Home Screen</b>'); }, 2500);
  });
})();
