import React,{useState} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateList from './CreateList';
import {KeepList} from './KeepList';


function App() {
  const [list,setList]=useState([]);
  
  const onCreateNote=(title)=>{
    setList((pre)=>{
            return(
                [...pre,title]
            );
        });    
}

const onDelete=(id)=>{

  setList((preVal)=>{
   return preVal.filter((val,index)=>{
      return index!==id;
    })
  });
}

  return (
    <>
      <Header></Header>
      <CreateList onClick={onCreateNote}/>
      <div className="list-container">
      {
        list.map((val,index)=>{
        return <KeepList id={index} key={index} title={val.title} msg={val.msg} onDel={onDelete}/>
      })
      }
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
