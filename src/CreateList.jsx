import React,{useState} from 'react';
import './CreateList.css';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


const CreateList=(props)=>{
    const [title,setTitle]=useState({title:'',msg:''});

    const onInputTyped=(e)=>{
            let name=e.target.name;
            let value=e.target.value;
            setTitle((pre)=>{    
                return(
                    {
                        ...pre,
                        [name]:value
                    }
                );
            })
    }
    
    const onButtonClicked=()=>
    {
        props.onClick(title);
        setTitle(
            {title:"",
            msg:""
        }
        );
    }

    return(
        <>
         <div className="main_title">
                <div className="createlist">
                    <input type="text" placeholder="Title" className="title" name="title" value={title.title} onChange={onInputTyped}/><br/>
                    <textarea placeholder="Write a note" rows="2" className="title" name="msg" value={title.msg} onChange={onInputTyped}></textarea>
                    <Fab id="btn-add" onClick={onButtonClicked}><AddIcon/></Fab>
                </div>
            </div>
        </>
    );
}

export default CreateList;