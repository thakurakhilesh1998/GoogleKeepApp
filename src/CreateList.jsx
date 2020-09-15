import React from 'react';
import './CreateList.css';

const CreateList=()=>{
    return(

        <>
            <div className="main_title">
                <form>
                    <input type="text" placeholder="Title"/><br/>
                    <textarea placeholder="Write a note"></textarea>
                </form>
            </div>
        </>
    );
}

export default CreateList;