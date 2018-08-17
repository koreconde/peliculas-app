let storage = {
  apiKey: '4868ac768281e98abe38130beb64cc43',
  pageTitlePostfix: ' — ' + document.title,
  listTypes: [
    {
      title: 'Últimos Estrenos',
      shortTitle: 'Estrenos',
      query: 'popular',
      type: 'collection',
      isCategory: true
    },
    {
      title: 'Las más valoradas',
      shortTitle: 'Más valoradas',
      query: 'top_rated',
      type: 'collection',
      isCategory: true
    },
   
    {
      title: 'Search Results',
      query: 'search',
      isCategory: false
    }
  
  ],
  categories: {},
  // For Browser History
  backTitle: '',
  moviePath: '',
  createMoviePopup: false,
  moviePopupOnHistory: false
};

// Create categories titles
storage.listTypes.forEach(function(listType){
  storage.categories[listType.query] = listType.title;
});

export default storage;
