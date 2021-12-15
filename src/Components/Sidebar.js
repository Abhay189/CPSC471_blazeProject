import React from 'react';
import '../CSS/Sidebar.css';
import {SidebarData} from './SidebarData';

function sidebar() {
    return (
        <div className ="Sidebar">
            <p id="top">Dashboard</p>
            
            <ul className="SidebarList">
            {SidebarData.map((val,key)=>{
                return (
                    <li 
                    key={key} 
                    className="row"
                    
                    id={window.location.pathname === val.link ? "active" : ""}
                    onClick={()=> {
                        window.location.pathname = val.link;
                    }}
                    >
                        {" "}
                    <div id ="iconID">{val.icon} </div>{" "}
                    <div id = "titleID">{val.title}</div>
                    </li>
                );
                
            })}
            </ul>
        </div>
    )
}

export default sidebar;
