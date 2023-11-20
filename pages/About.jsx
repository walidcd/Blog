import Image from "next/image";
import SocialMedia from "./components/SocialMedia";
const About = () => {
    const backgroundStyle = {
        backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      };
    return (
      <div className=" flex flex-col justify-center  flex-grow p-4">
          <div className=" flex flex-row justify-center ">
          <img
          src="/walid.jpg"
          className="w-32 rounded-full align-middle"
          alt="Avatar" />
          </div>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-center mt-5 text-2xl font-semibold">{"I'm walid Boutahar"}</h1>
            <h2 className="text-center mt-5 text-xl">Software Engineering student with a strong passion for Machine Learning and Competitive programming.</h2>
            <h3 className="text-center mt-5 text-lg mb-4">Get in touch :</h3>
          </div>
          <SocialMedia />
      </div>
      );
}

export default About;