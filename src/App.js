import logo from "./logo.svg";
import "./App.css";
import ClassComponents from "./components/ClassComponents";
import FunctionComponent from "./components/FunctionComponent";
import Count from "./components/Count";
import Parent from "./components/Parent";
import Mounting from "./components/mounting ";
import Unmounting from "./components/Unmounting";
import React, { useContext } from "react";
import UseReducer from "./components/UseReducer";
import If from "./components/If";
import Ternanry from "./components/Ternanry";
import Logical from "./components/logical";
import ConditionRendering from "./components/ConditionalRendering ";
import Switch from "./components/Switch";
import ParentComponent from "./components/ParentComponent";
import UseMemo from "./UseMemo";
import FocusInput from "./components/FocusInput";
import RefTimer from "./RefTimer";
import Users from "./components/Users";
import User from "./components/User";
import Forms from "./components/Forms";
import UseStateCount from "./components/ppractiseUsestate";
import NewToDoList from "./components/NewToDoList";

export const myContext = React.createContext();
export const myContext1 = React.createContext();

function App() {
  const value = "Hello useContext";
  const value1 = "Hello react";

  return (
    <>
      <ClassComponents />
      <FunctionComponent />
      <Count />

      <myContext1.Provider value={value1}>
        <myContext.Provider value={value}>
          <Parent />
        </myContext.Provider>
      </myContext1.Provider>

      {/* <Mounting /> */}
      <Unmounting />
      <UseReducer />

      <If />
      <Ternanry />
      <Logical />
      <ConditionRendering />
      {/* <Switch /> */}

      <ParentComponent />
      {/* <UseMemo /> */}
      <FocusInput />
      <RefTimer />

      <Users />
      <Forms />
      <UseStateCount />
      <NewToDoList />
    </>
  );
}

export default App;
