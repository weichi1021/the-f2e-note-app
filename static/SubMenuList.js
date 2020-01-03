export default [
  {
    id: 'note-1',
    title: 'Untitled',
    editor_text: "\n",
    editor_content: {"ops":[{"insert":"\n"}]},
    editor_html: "<p><br></p>",
    is_shortcut: false,
    is_delete: false,
    create_time: '2019/11/21',
    modify_time: '2019/12/12',
  },
  {
    id: 'note-2',
    title: 'Quill Test',
    editor_text: "Quickstart\n\nThe best way to get started is try a simple example. Quill is initialized with a DOM element to contain the editor. The contents of that element will become the initial contents of Quill.\n",
    editor_content: {"ops":[{"insert":"Quickstart"},{"attributes":{"header":1},"insert":"\n"},{"insert":"\nThe best way to get started is try a simple example. Quill is initialized with a DOM element to contain the editor. The contents of that element will become the initial contents of Quill.\n"}]},
    editor_html: "<h1>Quickstart</h1><p><br></p><p>The best way to get started is try a simple example. Quill is initialized with a DOM element to contain the editor. The contents of that element will become the initial contents of Quill.</p>",
    is_shortcut: true,
    is_delete: true,
    create_time: '2019/12/12',
    modify_time: '2019/12/11',
  },
  {
    id: 'note-3',
    title: 'React Hook Test',
    editor_text: "Hook 是 React 16.8 中增加的新功能。它讓你不必寫 class 就能使用 state 以及其他 React 的功能。\n\n介紹影片\n\n\n在我們繼續之前，請注意 Hook 是：\n\n完全自由選擇使用。你可以在幾個 component 中試用 Hook 而不用重寫任何既有的程式碼。不過如果你不想要，並不需要現在學習或使用 Hook。\n100% 向下相容。Hook 沒有任何 breaking change。\n現在即可使用。隨著 v16.8.0 發佈，現在即可使用 Hook。\n\n\n",
    editor_content: {"ops":[{"attributes":{"color":"#6d6d6d","italic":true},"insert":"Hook"},{"attributes":{"color":"#6d6d6d"},"insert":" 是 React 16.8 中增加的新功能。它讓你不必寫 class 就能使用 state 以及其他 React 的功能。"},{"insert":"\n\n"},{"attributes":{"link":"https://www.youtube.com/watch?v=dpw9EHDh2bM&feature=emb_logo"},"insert":"介紹影片"},{"insert":"\n\n\n在我們繼續之前，請注意 Hook 是：\n\n"},{"attributes":{"bold":true},"insert":"完全自由選擇使用。"},{"insert":"你可以在幾個 component 中試用 Hook 而不用重寫任何既有的程式碼。不過如果你不想要，並不需要現在學習或使用 Hook。"},{"attributes":{"list":"bullet"},"insert":"\n"},{"attributes":{"bold":true},"insert":"100% 向下相容。"},{"insert":"Hook 沒有任何 breaking change。"},{"attributes":{"list":"bullet"},"insert":"\n"},{"attributes":{"bold":true},"insert":"現在即可使用。"},{"insert":"隨著 v16.8.0 發佈，現在即可使用 Hook。"},{"attributes":{"list":"bullet"},"insert":"\n"},{"insert":"\n\n"}]},
    editor_html: "<p><em style=\"color: rgb(109, 109, 109);\">Hook</em><span style=\"color: rgb(109, 109, 109);\"> 是 React 16.8 中增加的新功能。它讓你不必寫 class 就能使用 state 以及其他 React 的功能。</span></p><p><br></p><p><a href=\"https://www.youtube.com/watch?v=dpw9EHDh2bM&feature=emb_logo\" target=\"_blank\">介紹影片</a></p><p><br></p><p><br></p><p>在我們繼續之前，請注意 Hook 是：</p><p><br></p><ul><li><strong>完全自由選擇使用。</strong>你可以在幾個 component 中試用 Hook 而不用重寫任何既有的程式碼。不過如果你不想要，並不需要現在學習或使用 Hook。</li><li><strong>100% 向下相容。</strong>Hook 沒有任何 breaking change。</li><li><strong>現在即可使用。</strong>隨著 v16.8.0 發佈，現在即可使用 Hook。</li></ul><p><br></p><p><br></p>",
    is_shortcut: true,
    is_delete: false,
    create_time: '2019/12/01',
    modify_time: '2019/12/09',
  },
]
