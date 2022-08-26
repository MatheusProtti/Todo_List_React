import React, { useState } from 'react';
import List from './components/List';
import TodoForm from './components/Form';
import Item from './components/Item';
import './App.css';
import Modal from './components/Modal';

function App() {
  
  const [showModal, setShowModal] = useState(false)
  const [items, setItems] = useState([]);

  function onAddItem(text) {

    let it = new Item(text)

    setItems([...items, it])
    
    onHideModal()
  }

  function onItemDeleted(item) {

    let filteredItems = items.filter(it => it.id !== item.id);

    setItems(filteredItems)
  }

  function onDone(item) {
    console.log("done")
    let updateItems = items.map(it => {
      if(it.id === item.id){
        it.done = !it.done;
      }
      return it;
    })

    setItems(updateItems);
  }
  
  function onHideModal(){
   setShowModal(false)
  }

  return (
    <div className='container'>
      <header className='header'><h1>Todo List</h1> <button onClick={() => {setShowModal(true)}} className='addButton'>+</button></header>

      <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
      <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
    </div>
  );
}

export default App;
