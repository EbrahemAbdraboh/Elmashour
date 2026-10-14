const SCRIPT_TIMEOUT_MS = 20000;
let runtimePromise;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = [...document.scripts].find((script) => script.dataset.runtimeSrc === src);
    if (existing?.dataset.loaded === "true") return resolve();
    if (existing) {
      existing.addEventListener("load", resolve, { once: true });
      existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.dataset.runtimeSrc = src;
    script.async = false;
    const timeout = window.setTimeout(() => {
      script.remove();
      reject(new Error(`Timed out loading ${src}`));
    }, SCRIPT_TIMEOUT_MS);
    script.addEventListener("load", () => {
      window.clearTimeout(timeout);
      script.dataset.loaded = "true";
      resolve();
    }, { once: true });
    script.addEventListener("error", () => {
      window.clearTimeout(timeout);
      reject(new Error(`Failed to load ${src}`));
    }, { once: true });
    document.body.appendChild(script);
  });
}

export function loadLegacyRuntime() {
  if (!runtimePromise) {
    runtimePromise = loadScript("/legacy-app.js")
      .then(() => loadScript("/legacy-enhancements.js"))
      .catch((error) => { runtimePromise = undefined; throw error; });
  }
  return runtimePromise;
}
