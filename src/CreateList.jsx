import React from 'react';
import './CreateList.css';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const CreateList=()=>{
    return(

        <>
            <div className="main_title">
                <form>
                    <input type="text" placeholder="Title"/><br/>
                    <textarea placeholder="Write a note"></textarea>
                    <Fab> <AddIcon/></Fab>
                </form>
            </div>
        </>
    );
}

export default CreateList;