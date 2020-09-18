import React from 'react';
import './KeepList.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const KeepList=(props)=>{
    return(

        <>
            <Card className="list">
                <CardContent className="card-content">
                    <h3>{props.title}</h3>
                    <p> {props.msg}</p>
                </CardContent>
                    <button className="del-btn"><DeleteForeverIcon/></button>
            </Card>
        </>
    );
}

export {KeepList}