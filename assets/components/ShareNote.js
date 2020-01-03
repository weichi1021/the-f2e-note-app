import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import _find from 'lodash/find';

function isJSON(str) {
  try {
    return JSON.parse(str);
  } catch(e) {
    return undefined;
  }
}

function ShareNote() {
  const getUrlParam = isJSON(decodeURI(location.search.slice(1)))
  const [currentEditor] = useState(getUrlParam);
  useEffect(() => {
    if(currentEditor){
      document.title = currentEditor.title
    }else if(!currentEditor && location.search){
      location.replace(location.pathname)
    }
  }, []);
  return (
    <div name="note-app-share" className="note-app-share">
      { (currentEditor)? (
        <div className="container">
          <div className="date-time">Last updated: { currentEditor.modify_time }</div>
          <div className="title">{ currentEditor.title }</div>
          <div dangerouslySetInnerHTML={{ __html: currentEditor.editor_html }}></div>
        </div>
      ) : (
        <div className="container">
          <div className="title">Something error...</div>
        </div>
      ) }
    </div>
  )
}

export default ShareNote
