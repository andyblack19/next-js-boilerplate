// import { InteractionType } from '@azure/msal-browser';

// // Browser check variables
// // If you support IE, our recommendation is that you sign-in using Redirect APIs
// // If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
// const ua = window.navigator.userAgent;
// const msie = ua.indexOf('MSIE ');
// const msie11 = ua.indexOf('Trident/');
// const msedge = ua.indexOf('Edge/');
// const firefox = ua.indexOf('Firefox');
// const isIE = msie > 0 || msie11 > 0;
// const isEdge = msedge > 0;
// const isFirefox = firefox > 0; // Only needed if you need to support the redirect flow in Firefox incognito

// export const interactionType = InteractionType.Redirect;

// export const authenticationRequest = {
// 	scopes: ['User.Read']
// };

// export const getMsalConfig = (env = 'sand') => ({
// 	auth: {
// 		clientId: {
// 			prod: 'd6194c1e-a51f-43e5-be60-63065f85d162',
// 			sand: '804cd205-da7b-41a3-9ef1-71680bb7d635'
// 		}[env],
// 		authority: 'https://login.microsoftonline.com/common', // Multiplexer that supports any azure ad tenant
// 		redirectUri: '/', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
// 		postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
// 		navigateToLoginRequestUrl: false // If "true", will navigate back to the original request location before processing the auth code response.
// 	},
// 	cache: {
// 		cacheLocation: 'localStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
// 		storeAuthStateInCookie: isIE || isEdge || isFirefox // Set this to "true" if you are having issues on IE11 or Edge
// 	},
// 	system: {
// 		loggerOptions: {
// 			loggerCallback: () => {}
// 		}
// 	}
// });
