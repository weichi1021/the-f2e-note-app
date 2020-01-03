export default [
  {
    display_name: 'Date created: Most to least recent',
    divide: false,
    sort: '-create_time',
  },
  {
    display_name: 'Date created: Least to most recent',
    divide: false,
    sort: '+create_time',
  },
  {
    display_name: 'Date updated: Most to least recent',
    divide: false,
    sort: '-modify_time',
  },
  {
    display_name: 'Date updated: Least to most recent',
    divide: false,
    sort: '+modify_time',
  },
  {
    display_name: 'Title: A to Z',
    divide: true,
    sort: '+title',
  },
  {
    display_name: 'Title: Z to A',
    divide: false,
    sort: '-title',
  },
]
