const state = {
  isLoading: {
    user: false,
    messages: true,
    authors: false,
    // ...
  },
  isError: {
    userEdit: false,
    authorsFetch: false,
    // ...
  },
  nextHref: {
    messages: '/api/messages?offset=200&size=100',
    authors: '/api/authors?offset=50&size=25',
    // ...
  },
  user: {
    // ...
    entity: { /*...*/ },
  },
  messages: {
    // ...
    entities: { /*...*/ },
  },
  authors: {
    // ...
    entities: { /*...*/ },
  },
};
