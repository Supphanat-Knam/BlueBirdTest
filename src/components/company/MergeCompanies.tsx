import mcom from "../../assets/workex_8/Mcom.png";
import "../../Animation.css"

const MergeCompanies = () => {
  return (
    
    <div className="py-10 ">
      <h2 className="mb-4 text-3xl font-bold text-center fade-in">Work Experience</h2>
      <p className="text-center text-[#9CA4A9] fade-in">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Omnis sapiente vero autem officia reiciendis ipsum?</p>
      <div className="flex items-center justify-center mt-3 fade-in ">
      <img src={mcom} 
      alt="Work Experiences"
      className="w-full h-auto sm:w-[30rem] md:w-[40rem] lg:w-[50rem] object-contain"/></div>
    </div>
  );
};

export default MergeCompanies;
