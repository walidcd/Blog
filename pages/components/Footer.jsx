import Link from "next/link";

const Footer = () => {
    return ( 
        <div className="footer mb-5 sticky top-[100vh]">
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-dark-500 text-center dark:text-gray-400 ">© 2023 <Link href="/" className="hover:underline">WALID BOUTAHAR</Link></span>
        </div>
     );
}
 
export default Footer;