const Banner = () => {
    return (
        <div className="rounded-[10px]  bg-[url('assets/bg-shadow.png')]  bg-no-repeat bg-black flex flex-col items-center text-center space-y-6"  >
          <div>
            <img src="assets/banner-main.png" alt="" />
          </div>
          <div className="text-white space-y-6 "> 
<h3 className="font-bold text-[40px]">Assemble Your Ultimate Dream 11 Cricket Team</h3>
<p className="inter font-medium text-[20px]">Beyond Boundaries Beyond Limits</p>
<button className="rounded-[12px] p-1 border-1 border-yellow-400 bg-black">
    <p className="px-5 py-3 bg-[#E7FE29] text-black font-bold rounded-[12px]" >Claim Free Credit</p>
</button>
          </div>
        </div>
    );
};

export default Banner;