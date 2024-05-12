self.registration.unregister().then(() => {
  self.clients.matchAll({ type: 'window' }).then(windowClients => {
    for (const windowClient of windowClients) {
      windowClient.navigate(windowClient.url);
    }
  });
});
