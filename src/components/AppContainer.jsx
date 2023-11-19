import Header from "./Header.jsx";
import SkillsContainer from "./SkillsContainer.jsx";
import HomeNavBar from "./HomeNavBar.jsx";

export default function AppContainer(){
    return <div style={{height: "100%"}} className={"flex items-center justify-center flex-col"} >
        <Header/>
        <HomeNavBar/>
    </div>
}