import Header from "./Header";
import PersonalInformation from "./PersonalInformation";
import SectionInfo from "./SectionInfo";
import { Info } from "./Info.jsx";
import Avatar from "./Avatar";


const CardApp = ()=>{
    return (
        <div className="App">
          <Header/>
          <Avatar
          avatar={Info.avatar.avatar}/>

          <div className="infor">
          <PersonalInformation 
            name={Info.personalData.name}
            lastName={Info.personalData.lastname}
            age={Info.personalData.age}
            nationality={Info.personalData.nationality}
            
          />
          <SectionInfo 
          career={Info.career}/>

          <SectionInfo 
          education={Info.education}/>

          <SectionInfo
          bio={Info.bio}/>
          </div>
        </div>
      );
}

export default CardApp;