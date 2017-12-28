import { InjectionToken } from '@angular/core';
export interface AppConfig {
    clientID: string;
    scope: string[];
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const OcAppConfig: AppConfig = {
    clientID: '75730178-E424-4C49-B3D7-17385784B191',
    scope: [
        'FullAccess'
    ]
};
