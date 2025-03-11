import { ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { API_BASE_URL, Client } from './api-client';
import { environment } from '../environments/environment';
import { MAT_ICON_DEFAULT_OPTIONS } from '@angular/material/icon';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(), 
    provideAnimationsAsync(), 
    Client,
    {provide: API_BASE_URL, useValue: environment.apiBaseUrl},
    {provide: MAT_ICON_DEFAULT_OPTIONS,
    useValue: { fontSet: 'material-icons-outlined' } } // Set default to outlined

  ]
};
