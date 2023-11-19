import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div className="w-full h-full dark:text-white dark:bg-gray-900 overflow-y-scroll">
        <div className="max-w-5xl mx-auto px-7  w-full pb-auto flex flex-col h-full">
            <Navbar/>
                {children}
            <Footer/>
        </div> 
        </div>
     );
}
 
export default Layout;