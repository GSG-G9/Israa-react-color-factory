import React from 'react';
import {Link} from 'react-router-dom'


const Colors = (props)=>{
  const {colors} = props;
return (
    <div div className="App">
       <header className="App-header">
       <h2>Welcome to the color factory</h2>
    <h1>
        <Link to="/colors/new">
        Add a color
        </Link>
      </h1>

      <p>Please select a color</p>
      <ul>
       { colors.map((color)=>{
         return(
          <li key={color.value}>
          <Link to={`/colors/${color.name}`}>
          {color.name}
          </Link>
        </li>
         )
      
       })}
      </ul>
      </header>
   
   </div>
)
}

export default Colors;