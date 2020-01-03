import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, Button } from 'element-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NoteAppMenu() {
  // data
  const [collapseMenu, setCollapseMenu] = useState(false)
  const [isMenuLite, setMenuLite] = useState(false)
  // store
  const menuActive = useSelector(state => state.menuActive)
  const MenuList = useSelector(state => state.MenuList)
  // mounted
  useEffect(()=>{
    setMenu('all')
  }, [])
  // method
  const handleCollapse = () => {
    setMenuLite(!isMenuLite)
    if(collapseMenu){
      setTimeout(() => {
        setCollapseMenu(!collapseMenu)
      }, 150)
    }else{
      setCollapseMenu(!collapseMenu)
    }
  }
  // dispatch
  const dispatch = useDispatch();
  const setMenu = (id) => {
    dispatch({
      type: 'SET_MENU',
      payload: id,
    });
  };
  const addNewEditor = () => {
    dispatch({
      type: 'ADD_NEW_EDITOR',
    });
  }

  return (
    <div className={'note-app-menu' + ((isMenuLite)? ' menu-lite': '')}>
      <div className="menu-header">
        <div className="d-flex align-items-center">
          <div className="avatar mx-2">
            <FontAwesomeIcon icon={'user'} />
          </div>
          {(collapseMenu)? '' : (<div className="username">User</div>)}
        </div>
        <div className="mt-4">
          <Button type="success" onClick={()=>addNewEditor()}>
            <FontAwesomeIcon icon={'plus'} />
            {(collapseMenu)? '' : (<span> New Note</span>)}
          </Button>
        </div>
      </div>
      <Menu theme="dark" className="menu-body"
        defaultActive={menuActive}
        onSelect={(id)=>setMenu(id)}>
        {
          MenuList.map((item, index) => {
            return (
              <Menu.Item className="menu-item"
                index={item.id}
                key={`menu-item-${index}`}>
                <FontAwesomeIcon icon={item.icon} />
                {(collapseMenu)? '' : (<span> {item.display_name}</span>)}
              </Menu.Item>
            )
          })
        }
      </Menu>
      <div className="collapseMenu" onClick={()=>handleCollapse()}>
        <FontAwesomeIcon icon={((collapseMenu)? 'angle-double-right': 'angle-double-left')} />
      </div>
    </div>
  )
}

export default NoteAppMenu;
