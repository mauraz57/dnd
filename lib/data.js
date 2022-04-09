const data = {
  name: 'Kitchen', // drag and drop context
  parent: '',
  areas: [
    // the index in the areas array will tell the column order
    {
      name: 'cleaning', // Column or category, these columns are horizontal, but for me will vertical
      parent: 'Kitchen',
      areas: [
        {
          name: 'Storage', // these elements might be an item or a column at the same time
          parent: 'cleaning',
          areas: [],
        },
        {
          name: 'Washing',
          parent: 'cleaning',
          areas: [],
        },
        {
          name: 'Waste Management',
          parent: 'cleaning',
          areas: [],
        },
      ],
    },
    {
      name: 'Processes',
      parent: 'Kitchen',
      areas: [
        {
          name: 'Grilling',
          parent: 'Processes',
          areas: [],
        },
        {
          name: 'Raw vegetables',
          parent: 'Processes',
          areas: [],
        },
        {
          name: 'Sauces',
          parent: 'Processes',
          areas: [],
        },
      ],
    },
  ],
}

export default data
