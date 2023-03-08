import React from "react";
import { TABS } from "../redux/actions/type";
import "../App.css";
import { useDispatch } from "react-redux";
import { toggletab } from "../redux/actions";

const Tab = ({currentTab}) => {

    const dispatch=useDispatch();
  return TABS.map((tab) => <button className={tab===currentTab ? "button selected":"button"} onClick={()=>dispatch(toggletab(tab))}>{tab}</button>);
};

export default Tab;
