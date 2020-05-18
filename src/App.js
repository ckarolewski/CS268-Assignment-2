import React, {useEffect} from 'react';
import './App.css';
import {Memory} from './memory.js';
import {useSelector, useDispatch} from 'react-redux';
import {loadDay, startAddingBill} from './actions';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

function App() {

  const memories = useSelector(state => state.memories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDay(month));
  }, [dispatch]);

  const onAdd = () => {
    dispatch(startAddingBill(year, month, day));
  }

  return (
    <div className="memories-root">
      <button onClick={onAdd}>new bill</button>
      {memories.map(memory => <Memory key={memory.id} memory={memory} />)}
    </div>
  );
}

export default App;
