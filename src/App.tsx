import { useRef } from "react";
import Editor from "react-email-editor";
import "./App.css";

import { tempSave, loadDesignFromDatabase } from "./actions";

function App() {
  const editorRef = useRef<Editor | null>();

  const handleLoadDesign = () => {
    const des = loadDesignFromDatabase();
    if (des && editorRef && editorRef.current) {
      editorRef.current.loadDesign(des);
    }
  };

  const handleSaveDesign = () => {
    if (editorRef && editorRef.current)
      editorRef.current.saveDesign((data) => {
        console.log({ save: data });
        tempSave(data);
        alert("Design Saved as JSON");
      });
  };

  const handleExportDesign = () => {
    if (editorRef && editorRef.current) {
      editorRef.current.exportHtml((data) => {
        console.log({ export: data });
        alert("Design Exported to HTML and JSON");
      });
    }
  };

  return (
    <div className="App">
      <header className="navbar">
        <span>
          <p>WAmessages</p>
          <p>Assignment</p>
        </span>
        <div className="actions">
          <button onClick={handleLoadDesign}>Load Design</button>
          <button onClick={handleSaveDesign}>Save Design</button>
          <button onClick={handleExportDesign}>Export Design</button>
        </div>
      </header>
      <Editor ref={(editor) => (editorRef.current = editor)} />
    </div>
  );
}

export default App;
