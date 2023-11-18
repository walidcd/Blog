import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div className="content max-w-2xl mx-auto">
            <Navbar/>
                {children}
            <Footer/>
        </div> 
     );
}
 
export default Layout;