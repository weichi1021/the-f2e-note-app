import _orderBy from 'lodash/orderBy';
import _find from 'lodash/find';

// function
const formatDate = (date) => {
  var d = (date)? new Date(date): new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2)
      month = '0' + month;
  if (day.length < 2)
      day = '0' + day;

  return [year, month, day].join('/');
}
const orderBySubMenu = (list, sort) => {
  const order = (sort.slice(0, 1)  ==  '+')? 'desc' : 'asc';
  const orderKey = sort.slice(1)
  console.log(order, orderKey)
  return _orderBy(list, [orderKey], [order])
}
const filterSubMenuList = (list, value) => {
  return list.filter(item => {
    switch(value){
      case 'fav':
        return (!item.is_delete && item.is_shortcut)
      case 'all':
        return (!item.is_delete)
      case 'delete':
        return (item.is_delete)
      default:
        return true
    }
  })
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MENU': {
      const filterList = filterSubMenuList(state.subMenuList, action.payload)
      state = {
        ...state,
        menuActive: action.payload,
        subMenuActive: (filterList.length)? filterList[0].id: '',
        filterSubMenuList: filterList
      }
      break;
    }
    case 'SET_SUB_MENU': {
      state = {
        ...state,
        subMenuActive: action.payload,
      }
      break;
    }
    case 'UPDATE_SUB_MENU_LIST': {
      const mapSubMenuList = state.subMenuList.map(item => {
        if(item.id == action.payload.id){
          return {...item, ...action.payload, modify_time: formatDate()}
        }else{
          return item
        }
      })
      const filterList = filterSubMenuList(mapSubMenuList, state.menuActive)
      state = {
        ...state,
        subMenuList: mapSubMenuList,
        filterSubMenuList: filterList,
      }
      break;
    }
    case 'ADD_NEW_EDITOR': {
      const newEditorId = `note-${state.subMenuList.length+1}`;
      const newEditor = {
        ...state.initEditor,
        id: newEditorId,
        modify_time: formatDate()
      }
      const filterList = filterSubMenuList([newEditor, ...state.subMenuList], state.menuActive)
      state = {
        ...state,
        subMenuList: [newEditor, ...state.subMenuList],
        filterSubMenuList: filterList,
        menuActive: 'all',
        subMenuActive: newEditorId,
      }
      break;
    }
    case 'SET_SUB_MENU_SORT': {
      state = {
        ...state,
        filterSubMenuList: orderBySubMenu(state.filterSubMenuList, action.payload),
        subMenuSort: action.payload
      }
      break;
    }
  }
  return state
}

export default reducer;
