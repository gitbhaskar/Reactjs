import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import React, { useState } from 'react';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Whatwedo from './MyComponents/Whatwedo';
import News from './MyComponents/News';

function App() {
  const onDelete = (todo)=>{
    console.log("I am on delete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc)
    let sno;
    if(todos.length==0){
      sno = 1;
    }else{
      sno = todos[todos.length-1].sno + 1;
    }
    
    const myTodo ={
      sno: sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState([
    {
      sno:1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done1"
    },
    {
      sno:2,
      title: "Go to the mall",
      desc: "You need to go to the market to get this job done2"
    },
    {
      sno:3,
      title: "Go to the ghat",
      desc: "You need to go to the market to get this job done3"
    }
  ]);
  return (
    <>
      <Router>
      <Header title="My Todos List" searchBar={true}/>
      <Switch>
      <Route exact path="/" render={()=>{
          return(
            <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            </>
          )
        }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/whatwedo">
            <Whatwedo />
          </Route>
      <Footer />
      </Switch>
      </Router>
    </>
  );
}

export default App;
