import React from 'react'
import {Route,Link, Redirect, Switch, Router} from 'react-router-dom'
import './App.css';
import Colors from './components/Colors';
import Color from './components/Color'
import NewColor from './components/NewColor'

 class  App extends React.Component {
  state ={
    colors :[
      {
        name:"red",
        value : "#FF0000"

      }
      ,
      {
        name:"green",
        value : "#00FF00"

      }
      ,
      {
        name:"blue",
        value : "#0000FF"

      }
    ]
  }
  addNewColor=(newColor)=>{
    this.setState({colors:[newColor,...this.state.colors]})
  }

 
  render=()=> {
    const {colors}=this.state;
    const ColorsList = ()=>{
    
     return(
       <Colors colors={colors} />
       )
    }
    const ColorComp=(props)=>{
      const name = props.match.params.color;
      const colour = colors.find(color=>{ return color.name === name})
      return colour ? <Color {...props} color={colour}/> :<Redirect to="/"/>
    }
      const NewColorComp=(props)=>{
       return <NewColor addColor={this.addNewColor} {...props} />
      }
    return(
      <Switch>
      <Route path="/colors/new" component={NewColorComp}/>
      <Route path="/colors/:color" component={ColorComp}/>
      <Route exact path="/" component={ColorsList}/>
      <Route path="/colors" component={ColorsList}/>
      <Redirect to="/colors" />
      
    </Switch>
     );
  }
    
    

}

export default App;
