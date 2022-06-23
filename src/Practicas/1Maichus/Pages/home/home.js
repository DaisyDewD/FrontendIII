import React from 'react';
import Header from "../../Components/Header"
import PersonalInformation from "../../Components/PersonalInformation";
import Avatar from "../../Components/Avatar";
import { Info } from "../../Components/Info";

const Home = () => {
    return (
        
    <div >
          <Header/>
          <div className="sectionContainer">
          <Avatar
          avatar={Info.avatar.avatar}/>

        <div className="infor">
        <PersonalInformation 
            name={Info.personalData.name}
            lastName={Info.personalData.lastname}
            age={Info.personalData.age}
            nationality={Info.personalData.nationality}/>
        </div>
        </div>
        
</div>   
)}
export default Home;