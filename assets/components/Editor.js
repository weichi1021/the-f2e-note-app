import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'element-react';
import _find from 'lodash/find';

import Quill from 'quill';

function NoteApp() {
  const [titleEditor, setTitleEditor] = useState('')
  const [quillEditor, setQuillEditor] = useState({});
  const [currentEditor, setCurrentEditor] = useState({})
  const menuActive = useSelector(state => state.menuActive)
  const subMenuActive = useSelector(state => state.subMenuActive)
  const filterSubMenuList = useSelector(state => state.filterSubMenuList)
  // computed
  const isTrash = useSelector(state => state.menuActive == 'delete')
  const initDom = ()=>{
    if(filterSubMenuList.length == 0){
      document.querySelector('.note-app-editor').style.display = 'none';
    }else{
      document.querySelector('.note-app-editor').style.display = 'block';
    }
    if(menuActive == 'delete'){
      document.querySelector('#editor').style.display = 'none';
      document.querySelector('.ql-toolbar').style.display = 'none';
      document.querySelector('#editor-trash').style.display = 'block';
    }else{
      document.querySelector('#editor').style.display = 'block';
      document.querySelector('.ql-toolbar').style.display = 'block';
      document.querySelector('#editor-trash').style.display = 'none';
    }
  }
  // mounted
  useEffect(() => {
    var container = document.getElementById('editor');
    var editor = new Quill(container, {
      theme: 'snow',
      placeholder: 'Start writing...',
    });
    setQuillEditor(editor)
    editor.on('selection-change', range => {
      if(!range){ // editor blur
        console.log(editor)
        setQuillEditor(editor)
      }
    })
  }, []);

  // watch
  useEffect(() => {
    // console.log(currentEditor)
    updateEditor(currentEditor)
  }, [currentEditor]);
  useEffect(() => {
    // init
    const findEditor = _find(filterSubMenuList, item => item.id == subMenuActive)
    if(findEditor){
      setCurrentEditor(findEditor)
      setTitleEditor((findEditor.title == 'Untitled')? '': findEditor.title)
      quillEditor.setContents(findEditor.editor_content);
    }
    return
  }, [menuActive, subMenuActive]);
  useEffect(() => {
    initDom()
  }, [filterSubMenuList.length, menuActive]);
  // dispatch
  const dispatch = useDispatch();
  const updateEditor = (payload = {}) => {
    const newEditor = {
      ...currentEditor,
      ...payload
    }
    // console.log(newEditor)
    dispatch({
      type: 'UPDATE_SUB_MENU_LIST',
      payload: newEditor,
    });
  };
  const setAction = (val) => {
    switch(val){
      case 'share_note':
        const { title, editor_html, modify_time } = currentEditor
        const strShareEditor = JSON.stringify({ title, editor_html, modify_time })
        window.open(`/share-note?${encodeURI(strShareEditor)}`, '_blank')
        break;
      case 'delete_note':
        setCurrentEditor({...currentEditor, is_delete: true})
        break;
      case 'restore_note':
        setCurrentEditor({...currentEditor, is_delete: false})
        break;
      case 'add_to_shortcut':
        setCurrentEditor({...currentEditor, is_shortcut: !currentEditor.is_shortcut})
        break;
      case 'update_note':
        setCurrentEditor({
          ...currentEditor,
          editor_text: quillEditor.getText(),
          editor_content: quillEditor.getContents(),
          editor_html: quillEditor.root.innerHTML,
          title: (titleEditor)? titleEditor: 'Untitled'
        })
        break;
      default:
        break;
    }
  }
  return (
    <div name="note-app-editor" className="note-app-editor">
      <div id="editor-title" className="d-flex align-items-center">
        <input type="text" placeholder="Title" readOnly={isTrash} value={titleEditor}
          onChange={e => setTitleEditor(e.target.value)}
          onBlur={() => setAction('update_note')} />
        <div className="btn-group d-flex align-items-center">
          { (!isTrash)? (
            <FontAwesomeIcon icon={[(currentEditor.is_shortcut)? 'fa': 'far', 'star']}
              onClick={()=>setAction('add_to_shortcut')} />
          ) : ''}
          <Dropdown className="sub-menu-sort" trigger="click"
            onCommand={(val)=>setAction(val)} menu={(isTrash)? (
              <Dropdown.Menu>
                <Dropdown.Item command={'restore_note'}>
                  <span>Restore note</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            ):(
              <Dropdown.Menu>
                <Dropdown.Item command={'share_note'}>
                  <span>Share note</span>
                </Dropdown.Item>
                <Dropdown.Item command={'delete_note'}>
                  <span>Delete note</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            )}>
            <span className="el-dropdown-link">
              <FontAwesomeIcon icon={'ellipsis-v'}/>
            </span>
          </Dropdown>
        </div>
      </div>
      <div id="editor"></div>
      <div id="editor-trash" dangerouslySetInnerHTML={{ __html: currentEditor.editor_html }}></div>
    </div>
  )
}

export default NoteApp
