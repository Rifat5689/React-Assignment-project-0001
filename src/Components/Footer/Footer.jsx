
const Footer = () => {
    return (
        <div className="bg-black md:px-15 md:py-5 sm:p-3 mt-20 ">
            <img className=" mx-auto mb-[50px]" src="assets/logo.png" alt="" />
            <div className="flex space-x-5">
 <div className="about w-1/3 space-y-2">
  <h1 className="text-white font-semibold text-[18px]">About Us</h1>
  <p className="text-[#C7C7C7]">We are a passionate team dedicated to providing the best services to our customers.</p>
           </div>
           <div className="links w-1/3 space-y-2">
<h1 className="text-white font-semibold text-[18px]">Quick Links</h1>
<ol className="text-[#C7C7C7] space-y-2">
    <li>Home</li>
    <li>Services</li>
    <li>About</li>
    <li>Contact</li>
</ol>
           </div>
           <div className="subscribe w-1/3 space-y-2">
 <h1 className="text-white font-semibold text-[18px]">
Subscribe
 </h1>
 <p className="relative text-[#C7C7C7] text-[#C7C7C7">Subscribe to our newsletter for the latest updates.</p>
 <input className=" border-1 border-white p-2 bg-white rounded-[7px] rounded-r-none " type="email" placeholder="Enter your Email" /> <input className=" rounded-l-none bg-amber-300 p-2 border-1 font-bold text-[16px] border-gray-400 rounded-[7px] ml-0" type="submit" value="Subscribe" />

           </div>
         
            </div>
              <hr className=" text-gray-200 my-20" />
              <p className="text-white  text-center text-[16px]">&copy; 2024 Your Company All Rights Reserved.</p>
          
        </div>
    );
};

export default Footer;