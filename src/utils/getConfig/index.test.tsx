import getConfig from '.';

describe('getConfig', () => {
  it('returns a function to create config object', () => {
    const config = getConfig();

    expect(typeof config).toBe('object');
    expect(config.msGraphApiUrl).toBe('https://graph.microsoft.com/v1.0/me');
    expect(config.msGraphApiScopes.sort()).toEqual(['User.Read'].sort());
    expect(config.environment).toBe('sandbox');
    expect(config.apiUrl).toBe('https://sandbox-api.concerto.co.uk');
    expect(config.apiScopes).toEqual([
      'api://804cd205-da7b-41a3-9ef1-71680bb7d635/api.full-access',
    ]);
  });
});
