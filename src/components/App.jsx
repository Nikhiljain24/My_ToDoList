import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";

function App(){
    const [noteList, setNoteList] = useState([]);
    function addNote(note){
        setNoteList((prevNote)=>{
            return [...prevNote, note];
        })
    }
    function deleteNote(id){
        setNoteList((prevNoteList)=> {
            return prevNoteList.filter((noteItem, index) =>{
                return index !== id;
            });
        });
    }
    return(
        <div>
            <Header />
            <CreateArea 
            onAdd = {addNote}
            />
            {noteList.map((note, index) => {
                <Note 
            key = {index}
            id = {index}
            title ={note.title}
            content = {note.content}
            onDelete = {deleteNote}

                />
            })}
            
            <Footer />
        </div>
    );

}