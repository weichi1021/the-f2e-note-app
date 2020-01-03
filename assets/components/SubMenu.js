import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Dropdown } from 'element-react';
import _find from 'lodash/find';

function NoteAppSubMenu() {
  const subMenuSort = useSelector(state => state.subMenuSort)
  const SubMenuSortList = useSelector(state => state.SubMenuSortList)
  const subMenuActive = useSelector(state => state.subMenuActive)
  const filterSubMenuList = useSelector(state => state.filterSubMenuList)
  // computed
  const findMenu = useSelector(state => {
    return _find(state.MenuList, item => item.id == state.menuActive)
  })
  // mounted
  useEffect(() => {
    document.title = `${findMenu.display_name} - Note App`
  }, [findMenu])
  // dispatch
  const dispatch = useDispatch();
  const setSubMenu = (id) => {
    dispatch({
      type: 'SET_SUB_MENU',
      payload: id,
    });
  };
  const setSubMenuSort = (val) => {
    dispatch({
      type: 'SET_SUB_MENU_SORT',
      payload: val,
    });
  };

  return (
    <div className="note-app-sub-menu">
      <div className="sub-menu-header">
        <div className="title">{ findMenu.display_name }</div>
        <div className="summary d-flex justify-content-between">
          <div>{filterSubMenuList.length} notes</div>
          <div>
            <Dropdown className="sub-menu-sort" trigger="click"
              onCommand={(val)=>setSubMenuSort(val)} menu={(
                <Dropdown.Menu>
                  {
                    SubMenuSortList.map((item, index) => {
                      return (
                        <Dropdown.Item key={`sort-list-${index}`}
                          className={(item.sort == subMenuSort)? 'is-active': ''}
                          command={item.sort}
                          divided={item.divided}>
                          <span>{item.display_name}</span>
                        </Dropdown.Item>
                      )
                    })
                  }
                </Dropdown.Menu>
              )}>
              <span className="el-dropdown-link">
                <FontAwesomeIcon icon={'sort-amount-down-alt'} />
              </span>
            </Dropdown>
          </div>
        </div>
      </div>
      <Menu className="sub-menu-content"
        defaultActive={subMenuActive}
        onSelect={(id)=>setSubMenu(id)}>
        {
          filterSubMenuList.map((item, index) => {
            return (
              <Menu.Item className="summary-note"
                index={item.id}
                key={`sub-menu-item-${index}`}>
                <div className="summary-title">{item.title}</div>
                <div className="summary-content">{item.editor_text}</div>
                <div className="summary-date">{item.modify_time}</div>
              </Menu.Item>
            )
          })
        }
      </Menu>
    </div>
  )
}

export default NoteAppSubMenu;
