import React from 'react'
import './Start.css';
import {Link } from "react-router-dom";

const StartEmpty = () => {
    return (
        <div className="form-content">
            <div className="form-content-top">
                <button className="button-menu">HQC</button>
                <button className="button-menu">File</button>
                <button className="button-menu">Edit</button>
                <button className="button-menu">Selection</button>
                <button className="button-menu">View</button>
                <button className="button-menu">Output</button>
                <button className="button-menu">Help</button>

                <span className="spnUserName">Issa Burlacu</span>
                <img className="button-menu-user"></img>
                <img className="button-menu-notif" src="images/bell.svg"></img>
                
                
                
            </div>
            <div className="form-content-board">
                <div className="form-content-board-left">
                    <img src="images/left1.svg" className="icongrid"></img>
                    <img src="images/left2.svg" className="icongrid"></img>
                    <img src="images/left3.svg" className="icongrid"></img>
                    <img src="images/settings.svg" className="icongrid"></img>       
               </div>
               <div className="form-content-board-right">
                    <div className="form-content-welcome">
                    <span className="spnWelcome">Welcome, Issa Burlacu ! </span>
                        <div className="form-content-createnewproject">
                            <img src="images/grid.svg" className="iconwelcome"></img>
                            <div className="form-content-info">
                                <span className="spnTitleWelcome"><Link to="/project">Create a new project</Link> </span>
                                <div className="form-content-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut</div>
                            </div>
                        </div>
                        <div className="form-content-exploredocumentation">
                            <img src="images/book.svg" className="iconwelcome"></img>
                            <div className="form-content-info">
                                <span className="spnTitleWelcome">Explore documentation </span>
                                <div className="form-content-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut</div>
                            </div>
                        </div>
                    </div>
               </div>

            </div>
        </div>
        
    )
}

export default StartEmpty
