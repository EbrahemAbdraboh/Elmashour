
import { useLayoutEffect, useState } from 'react';
import { loadLegacyRuntime } from './legacy/loadLegacyRuntime.js';
import ModularPreview from './ModularPreview.jsx';

export default function App() {
  const [status, setStatus] = useState('loading');

  const isMigrationPreview =
    new URLSearchParams(window.location.search).get('migrationPreview') === '1';

  useLayoutEffect(() => {
    if (isMigrationPreview) return undefined;

    let cancelled = false;

    loadLegacyRuntime()
      .then(() => {
        if (!cancelled) setStatus('ready');
      })
      .catch((error) => {
        console.error('El Mashour legacy runtime failed to load', error);
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [isMigrationPreview]);

  if (isMigrationPreview) return <ModularPreview />;

  return (
    <div className="app-host" data-runtime-status={status}>
      {status === 'loading' && (
        <div
          className="runtime-fallback"
          role="status"
          aria-label="Loading El Mashour website"
        >
          <span className="runtime-fallback-mark" aria-hidden="true">
            EM
          </span>
          <span>El Mashour</span>
        </div>
      )}

      {/* Dedicated mount point: only legacy-app.js manages its children */}
      <div id="legacy-app-root" aria-live="polite" />

      {status === 'error' && (
        <div className="runtime-error" role="alert">
          تعذّر تحميل الموقع. يُرجى تحديث الصفحة أو التواصل مع الدعم الفني.
        </div>
      )}
    </div>
  );
}
