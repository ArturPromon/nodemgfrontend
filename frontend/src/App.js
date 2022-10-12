import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const[data, setData] = useState();

  useEffect(()=>{
    fetch("http://localhost:8000/")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error)=>{

        }
      )
  });

  return (
<table border="1px solid black">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro  comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
  );
}

export default App;
