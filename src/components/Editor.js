import { useState } from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import "../Styles.css";
import "react-mde/lib/styles/css/react-mde-all.css";


const Editor = ({ currentNote, updateNote }) => {
    const [selectedTab, setSelectedTab] = useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        taskLists: true,
    })

    return (
        <section className="pane editor">
            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}

export default Editor;