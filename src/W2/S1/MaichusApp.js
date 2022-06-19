
import {Info} from './Data.js';
import Header from './Header';
import PersonalInformation from './PersonalInformation';
import './Maichus.css';
import SectionInfo from './SectionInfo';


function MaichusApp() {
  return (
    <div className="App">
      <Header />
    <div class ="tarjeta"> 
      <SectionInfo avatar = {Info.personalData.avatar}/>
      <div class ="Info">
        <PersonalInformation
        name={Info.personalData.name}
        lastname={Info.personalData.name}
        nationality={Info.personalData.nationality}
        residence={Info.personalData.residence}
        age={Info.personalData.age}
        occupation={Info.personalData.occupation}
        avatar={Info.personalData.avatar}
        bio={Info.bio}
        />
        <SectionInfo education = {Info.education} 
            title = "Education:"

        />
        <SectionInfo experience = {Info.experience} 
            title = "Experience:"
            
        />
        <SectionInfo bio = {Info.bio} 
            title = "Biography"
        />
         
    </div>
    </div>
    </div>
  );
}

export default MaichusApp;
