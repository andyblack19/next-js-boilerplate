import getEnv from '.';

let windowSpy: any;

beforeEach(() => {
  windowSpy = jest.spyOn(window, 'window', 'get');
});

afterEach(() => {
  windowSpy.mockRestore();
});

const setHostname = (hostname: String) => {
  const originalWindow = { ...window };

  windowSpy.mockImplementation(() => ({
    ...originalWindow,
    location: {
      ...originalWindow.location,
      hostname,
    },
  }));
};

describe('getEnv', () => {
  it.each`
    hostname                        | environment
    ${'app.concerto.co.uk'}         | ${'production'}
    ${'concerto-webapp.pages.dev'}  | ${'production'}
    ${'sandbox-app.concerto.co.uk'} | ${'sandbox'}
    ${'any.other.hostname'}         | ${'sandbox'}
  `(
    'sets the environment as $environment when hostname is $hostname',
    ({ hostname, environment }) => {
      setHostname(hostname);
      expect(getEnv()).toBe(environment);
    },
  );
});
