import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CheckboxGroup, { CheckboxGroupValue } from './components/checkbox/CheckboxGroup.component';

function App() {

  const [selected, setSelected] = useState<CheckboxGroupValue[]>([])

  const onChangeCheckbox = (values:CheckboxGroupValue[]) => {
    setSelected(values)
  }

  const list:CheckboxGroupValue[] = [
    {
      value: 'india',
      label: 'India'
    },
    {
      value: 'usa',
      label: 'USA'
    },
    {
      value: 'france',
      label: 'France'
    }
  ]

  return (
    <div className='container'>
      <div className='px-4 py-5 my-5'>
        <div className='row'>
        <CheckboxGroup
          list={list}
          onChange={onChangeCheckbox}
        />
        </div>
        <div className='row'>
          <pre>
            {JSON.stringify(selected, undefined, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
