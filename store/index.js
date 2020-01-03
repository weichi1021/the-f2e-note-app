import { createStore } from 'redux';
import reducer from './reducer';
import subMenuList from '../static/SubMenuList';
import MenuList from '../static/MenuList';
import SubMenuSortList from '../static/SubMenuSortList';

export default createStore(reducer, {
  // menu
  menuActive: 'all',
  MenuList: MenuList,
  // subMenu
  subMenuActive: '',
  subMenuSort: '-modify_time',
  subMenuList: subMenuList,
  filterSubMenuList: [],
  SubMenuSortList: SubMenuSortList,
  // editor
  currentEditor: {},
  initEditor: {
    title: 'Untitled',
    editor_text: "\n",
    editor_content: {"ops":[{"insert":"\n"}]},
    editor_html: "<p><br></p>",
    is_shortcut: false,
    is_delete: false,
    modify_time: '',
    create_time: '',
  }
})
