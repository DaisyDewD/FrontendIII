import React from 'react';
import { Info } from "../../Components/Info";
import SectionInfo from "../../Components/SectionInfo";
import Avatar from "../../Components/Avatar";
import Header from "../../Components/Header"

const Education = () => {
    return ( 
        <div>
        <Header/>
        <div className="sectionContainer">
        <Avatar
        avatar={Info.avatar.avatar}/>

      <div className="infor">
      <SectionInfo 
          education={Info.education}/>
      </div>
      </div>
      
</div> 
     )
}

export default Education;