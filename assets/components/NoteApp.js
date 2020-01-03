import React from 'react';
import Menu from './Menu';
import SubMenu from './SubMenu';
import Editor from './Editor';

function NoteApp () {
  return (
    <div className="d-flex">
      <Menu/>
      <SubMenu/>
      <Editor/>
    </div>
  )
}

export default NoteApp;
