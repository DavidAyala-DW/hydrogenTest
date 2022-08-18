import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: () => ({
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain:
      // @ts-ignore
      Oxygen?.env?.SHOPIFY_STORE_DOMAIN || 'hydrogen-store-david.myshopify.com',
    storefrontToken:
      // @ts-ignore
      Oxygen?.env?.SHOPIFY_STOREFRONT_API_PUBLIC_TOKEN ||
      '0fd8e4082d5fec06d594056a7ebdc31e',
    storefrontApiVersion: '2022-07',
  }),
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
