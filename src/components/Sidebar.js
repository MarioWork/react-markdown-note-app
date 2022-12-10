

import React from "react";
import "../Styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const Sidebar = (props) => {

    const noteElements = props.notes.map((note) => (
        <div key={note.id} >
            <div
                className={`title ${note.id === props.currentNote.id ? "selected-note" : ""
                    }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
                <FontAwesomeIcon className="sidebar--trash--button" icon={faTrash} onClick={(e) => props.deleteNote(e, note.id)} ></FontAwesomeIcon>
            </div>
        </div>
    ));

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}

export default Sidebar;
