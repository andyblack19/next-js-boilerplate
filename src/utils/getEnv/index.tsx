const getEnv = () => {
  const prodEnvironments = ['app.concerto.co.uk', 'concerto-webapp.pages.dev'];
  return prodEnvironments.includes(window.location.hostname)
    ? 'production'
    : 'sandbox';
};

export default getEnv;
