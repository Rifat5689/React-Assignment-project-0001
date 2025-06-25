
const Subscribe = () => {
    return (
       <div className="absolute   top-[102%] left-[10%]  space-y-2 border-1 border-white   rounded-[10px]   mx-auto text-center p-6 ">
         <div className="px-[200px] py-[50px]  bg-white rounded-[7px]  bg-[url('assets/bg-shadow.png')] bg-cover space-y-2">
            <h1 className="font-bold text-[32px]">Subscribe to our Newsletter</h1>
            <p className="font-medium text-xl ">Get the latest updates and news right in your inbox!</p>
             <input className="  border-1 border-gray-300 p-2 bg-white rounded-[7px] rounded-r-none " type="email" placeholder="Enter your Email" /> <input className=" rounded-l-none bg-amber-300 p-2 border-1 font-bold text-[16px] border-gray-400 rounded-[7px] ml-0" type="submit" value="Subscribe" />

        </div>
       </div>
    );
};

export default Subscribe;