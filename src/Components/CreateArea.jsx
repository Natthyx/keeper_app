import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props){
    const [zoomIn,setZoomIn] = useState(false)
    const [note , setNote] = useState(
        {

            title: "",
            content: ""
        }
    );
    
    function handleZoom(){
        setZoomIn(true)
    }

    function handleChange(event){
        const {name , value} = event.target;

        setNote(prevNote=>{
            return{
                ...prevNote,
                [name]:value
            }
            })
    }

    function submitNote(event){
    props.onAdd(note);
    event.preventDefault();
    setNote({
        title:"",
        content: ""
    })
    }
    return (
        <div>
            <form className='create-note'>
               { zoomIn && <input 
                name='title'  
                value={note.title} 
                placeholder='Title'
                onChange={handleChange} />}
                
                <textarea 
                onClick={handleZoom}
                onChange={handleChange}  
                name='content' 
                value={note.content}  
                placeholder='Take a note...' 
                row = {zoomIn ? "3" : "1"}></textarea>
                <Zoom in={zoomIn}>
                <Fab onClick={submitNote}>
                <AddIcon /></Fab>
                </Zoom>
                
            </form>
        </div>
    )
}

export default CreateArea;