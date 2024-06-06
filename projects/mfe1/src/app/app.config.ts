import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MFE1_ROUTES} from './mfe1.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(RouterModule.forRoot(MFE1_ROUTES))
  ]
};

// export const appConfig: ApplicationConfig = {
//   providers: [
//      provideRouter(MFE1_ROUTES)
//   ]
// };
