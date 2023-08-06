import getEnv from '../getEnv';

const currentEnvironment = getEnv();

const environmentConfig = (environment = 'sandbox') => ({
  apiUrl: {
    production: 'https://api.concerto.co.uk',
    sandbox: 'https://sandbox-api.concerto.co.uk',
  }[environment],
  apiScopes: {
    production: ['api://d6194c1e-a51f-43e5-be60-63065f85d162/api.full-access'],
    sandbox: ['api://804cd205-da7b-41a3-9ef1-71680bb7d635/api.full-access'],
  }[environment],
});

const getConfig = () => ({
  environment: currentEnvironment,
  ...environmentConfig(currentEnvironment),
  msGraphApiUrl: 'https://graph.microsoft.com/v1.0/me',
  msGraphApiScopes: ['User.Read'], // MSAL adds OIDC scopes by deafult (openid, profile, email), no need to request here
});

export default getConfig;
