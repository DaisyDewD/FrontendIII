import React from 'react';
import { Info } from "../../Components/Info";
import SectionInfo from "../../Components/SectionInfo";
import Avatar from "../../Components/Avatar";
import Header from "../../Components/Header"

const About = () => {
    return ( 
        <div>
        <Header/>
        <div className="sectionContainer">
        <Avatar
        avatar={Info.avatar.avatar}/>

      <div className="infor">
      <SectionInfo
            bio={Info.bio}/>
      </div>
      </div>
      
</div> 
        
        
        
     )
}

export default About;