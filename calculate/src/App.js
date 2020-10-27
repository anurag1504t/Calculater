import React from 'react';
import {useEffect,createContext,useReducer,useContext} from 'react';
import About from './components/About';

import secForm from './components/secform';
import aboutus from './components/aboutus';

import {BrowserRouter,useHistory} from 'react-router-dom'
import Certificates, { certification } from './components/certification';
import Calculator from './components/Calculator';

import NavBar from './components/navbar';
import {initialstate,reducer} from './userreducer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import secform from './components/secform';

export const usercontext=createContext()
const Routing=()=>{
  const history=useHistory() 
  const {state,dispatch}=useContext(usercontext)
  useEffect(()=>{
      const user=JSON.parse(localStorage.getItem("user"))
      const tdt=localStorage.getItem("tokendate")
      if(user&&tdt){
          let dt=new Date();
          let tdate=Date.parse(tdt)
          if(tdate<=dt){
              localStorage.clear();
              history.push('/')
          }else{
              dispatch({type:"USER",payload:user})
          }
      }
      else{
          history.push('/')
      }
  },[])

  return (
      <Switch>
          <Route exact path='/calculator'>
              <Calculator/>
          </Route>
          <Route path='/secLogin'>
              <secForm />
          </Route>
          <Route path='/Certificates'>
              <Certificates />
          </Route>
          <Route path='/aboutus'>
              <aboutus />
          </Route>
          
      </Switch>
  )
}

function App() {
  const [state,dispatch]=useReducer(reducer,initialstate)
  return (
    <usercontext.Provider value={{state,dispatch}}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={About}></Route>
          <Route exact path="/about" component={About}></Route>
          
          <Route exact path="/secLogin" component={secForm}></Route>
          <Route exact path="/calculator" component={Calculator}></Route>
          <Route exact path="/certificates" component={Certificates}></Route>
          <Route exact path="/aboutus" component={aboutus}></Route>
         
        </Switch>
      </div>
    </Router>
    </usercontext.Provider>
  );
}

export default App;



