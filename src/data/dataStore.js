export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
  icon: 'paw',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

export const infoContents = {
  title: 'Informations about this page',
  description: 'App "To do" is the first page I\'ve created using React and Redux. It may be quite an easy task, but surely it\'s a realy good job for a begginer. ;) ',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
};

export const faqContents = {
  title: 'frequently asked questions',
  description: 'Here You can find som answers on how does this page works',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
};

const lists = [
  {
    id: 'list-1',
    title: '<sup>Things to do</sup> soon!',
    description: 'Really important things!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: '<sup>Things to do</sup> later!',
    description: 'Thing that doesn\'t need rush.',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-3',
    title: '<sup>Things to do</sup> this year!',
    description: 'Plans & goals for this year.',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
    listId: 'list-1',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
    listId: 'list-1',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
    listId: 'list-1',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
    listId: 'list-1',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
    listId: 'list-1',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
    listId: 'list-1',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
