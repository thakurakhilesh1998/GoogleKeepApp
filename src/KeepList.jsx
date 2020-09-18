import React from 'react';
import './KeepList.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const KeepList=(props)=>{
    return(

        <>
            <div className="list">
                <div className="card-content">
                    <h3>{props.title}</h3>
                    <p> {props.msg}</p>
                </div>
                    <button className="del-btn" onClick={()=>{
                        props.onDel(props.id);
                    }}><DeleteForeverIcon id="icon"/></button>
            </div>
        </>
    );
}

export {KeepList}