import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'login', // name is the name that Webpack assigns to the remote application. It must match the name of the project
  exposes: {
    // exposes is the list of source files that the remote application exposes to consuming shell applications for their own use
    './Routes': 'apps/login/src/app/remote-entry/entry.routes.ts',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
