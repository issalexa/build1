import React, {Component, useRef} from 'react';
import './Project.css';
import useProject from './useProject';
import {Link } from "react-router-dom";
import Tabs, { Tab } from 'react-awesome-tabs';
import 'react-awesome-tabs/dist/react-awesome-tabs.css';

export class AwesomeTabs extends Component {
    handleTabSwitch(active) {
        this.setState({ activeTab: active });
    }

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    render() {
        return (
            <Tabs
                color="#1e1e1e"
                active={ this.state.activeTab }
                onTabSwitch={ this.handleTabSwitch.bind(this) }
            >
                <Tab title="Tab1">very firsttab</Tab>
                <Tab title="Tab2">secondtab</Tab>
            </Tabs>
        );
    }
}

const Project = ({collapse_expand}) => {
    /*
    const {collapse_expand} 
    = useProject(collapse_expand);*/

    return (
    <div className="form-container">
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
                <div className="left">
                    <div className="top-left">
                        <div className="level">
                            <div className="level_menu">
                                <img className='imgColExp' title="Expand" id="exp1" src="images/expand.jpg" /*onClick={(e) => collapse_expand(e)} */style={{display:'none'}}/>
                                <img className='imgColExp' title="Collapse" id="col1" src="images/collapse.jpg" /*onClick={(e) => collapse_expand(e)} *//>
                                <span className="spn1">CAR</span>
                                <label className="lblLevel">Carbon</label>
                            </div>
                            <div id="files_1" className='file_container'>
                            </div>
                        </div>
                        <div className="level">
                        <div className="level_menu">
                                <img className='imgColExp' title="Expand" id="exp1" src="images/expand.jpg" /*onClick={(e) => collapse_expand(e)} */style={{display:'none'}}/>
                                <img className='imgColExp' title="Collapse" id="col1" src="images/collapse.jpg" /*onClick={(e) => collapse_expand(e)} *//>
                                <span className="spn2">BER</span>
                                <label className="lblLevel">Berylium</label>
                            </div>
                            <div id="files_2" className='file_container'>
                            </div>
                        </div> 
                        <div className="level">
                        <div className="level_menu">
                                <img className='imgColExp' title="Expand" id="exp1" src="images/expand.jpg" /*onClick={(e) => collapse_expand(e)} */style={{display:'none'}}/>
                                <img className='imgColExp' title="Collapse" id="col1" src="images/collapse.jpg" /*onClick={(e) => collapse_expand(e)} *//>
                                <span className="spn3">HEL</span>
                                <label className="lblLevel">Helium</label>
                            </div>
                            <div id="files_3" className='file_container'>
                            </div>
                        </div> 
                        <div className="level">
                        <div className="level_menu">
                                <img className='imgColExp' title="Expand" id="exp1" src="images/expand.jpg" /*onClick={(e) => collapse_expand(e)} */style={{display:'none'}}/>
                                <img className='imgColExp' title="Collapse" id="col1" src="images/collapse.jpg" /*onClick={(e) => collapse_expand(e)} *//>
                                <span className="spn4">HYD</span>
                                <label className="lblLevel">Hydrogen</label>
                            </div>
                            <div id="files_4" className='file_container'>
                            </div>
                        </div> 
                        <div className="level">
                            <div className="level_menu">
                                <img className='imgColExp' title="Expand" id="exp1" src="images/expand.jpg" /*onClick={(e) => collapse_expand(e)} */style={{display:'none'}}/>
                                <img className='imgColExp' title="Collapse" id="col1" src="images/collapse.jpg" /*onClick={(e) => collapse_expand(e)} *//>
                                <span className="spn5">HAR</span>
                                <label className="lblLevel">Hardware</label>
                            </div>
                            <div id="files_5" className='file_container'>
                            </div>
                        </div>  
                    </div> 
                    <div className="bottom-left">
                        <label className="lblCompileTo">Compile to</label>
                        <select name = "dropdown" className="selectLevel">
                            <option value = "level2">Berylium</option>
                            <option value = "level3">Helium</option>
                            <option value = "level4">Hydrogen</option>
                            <option value = "level5">Hardware</option>
                        </select>
                        <button className="btnCompile" type="button"><span className="spnCompile">Compile</span></button>
                        <button className="btnDeploy" type="button"><span className="spnDeploy">Deploy</span></button>
                    </div>  
                </div>  
                <div className="right">
                    <div className="top-right">
                        <AwesomeTabs></AwesomeTabs>
                    </div> 
                    <div className="bottom-right">
                    </div> 
                </div> 
            </div>

            </div>
        </div>
    </div>
    )
}

export default Project
