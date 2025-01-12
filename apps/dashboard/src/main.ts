import { setRemoteDefinitions } from '@nx/angular/mf';

/**
 * Fetch the module federation manifest and set the remote definitions
 */
fetch('/module-federation.manifest.json')
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));