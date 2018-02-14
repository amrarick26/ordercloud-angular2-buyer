import { InjectionToken } from '@angular/core';
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
export const OcAppConfig: AppConfig = {
    appname: 'Shopper',
    clientID: '6C086A9F-6252-40F6-8AD4-6234A099E49F',
    scope: [
        'BuyerReader',
        'MeAdmin',
        'MeXpAdmin',
        'MeAddressAdmin',
        'MeCreditCardAdmin',
        'Shopper',
        'PasswordReset',
        'BuyerImpersonation'
    ]
};

export interface AppConfig {
    /**
     * A short name for your app. It will be used as a
     * cookie prefix as well as general display throughout the app.
     */
    appname: string;

    /**
     * The identifier for the seller, buyer network or buyer application that
     * will be used for authentication. You can view client ids for apps
     * you own or are a contributor to on the [dashboard](https://dashboard.ordercloud.io)
     */
    clientID: string;

    /**
     * An array of security roles that will be requested upon login.
     * These roles allow access to specific endpoints in the OrderCloud.io API.
     * To learn more about these roles and the security profiles that comprise them
     * read [here](https://documentation.ordercloud.io/platform-guides/authentication/security-profiles)
     */
    scope: string[];
}

