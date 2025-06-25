import Banner from "./Banner";
import NavBar from "./NavBar";



const Header = ({credit,handleCredit}) => {
    return (
        <div>
        <NavBar credit={credit}></NavBar>
         <Banner handleCredit={handleCredit}></Banner>
        </div>

    );
};

export default Header;