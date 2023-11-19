import Header from "./Header.jsx";
import SkillsContainer from "./SkillsContainer.jsx";
import HomeNavBar from "./HomeNavBar.jsx";

export default function AppContainer(){
    return <div style={{height: '90vh'}} className="w-11/12 bg-white mx-auto rounded-md" >
        <Header/>
        <HomeNavBar/>
    </div>
}