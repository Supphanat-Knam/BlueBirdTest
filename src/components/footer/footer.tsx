import BlueBirdLogo from "../../assets/logoBlueBird.png"
import { AiOutlineGlobal } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";


const Footer = () => {
    return (
      <footer className="bg-[#1C1C47] text-white py-10">
        <div className="container mx-auto px-6 lg:px-16">

           {/* Logo */}
           <div className=" flex items-center justify-center space-x-2 mb-8">
           <div className="flex items-center w-[12rem] gap-3">
        <img src={BlueBirdLogo} alt="Logo" />
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            <span className="">BlueBird</span>
          </h1>
          <p className="text-sm font-semibold text-gray-500">IT Consult</p>
        </div>
      </div></div>

          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left place-items-center ">
            <div className="mt-2">
              <div className="flex justify-center  items-center md:justify-star text-blue-500 text-3xl mb-2 ">
              <i className="text-4xl text-[#43BAFF] "><AiOutlineGlobal /></i>

              </div>
              <p className="font-semibold text-center">No. 139, The Street Ratchada Shopping Center Building, Room No. 301-304, Ratchadaphisek Road, Din Daeng Subdistrict, Din Daeng District, Bangkok 10400</p>
              <p className="text-sm text-gray-400 mt-1 text-center">Our Address</p>
            </div>
            <div>
              <div className="flex justify-center  items-center md:justify-star text-blue-500 text-3xl mb-2">
              <i className="text-4xl text-[#43BAFF]"><FiMail /></i>
              </div>
              <p className="font-semibold text-center">tanapong@bluebirdsconsult.com</p>
              <p className="text-sm text-center text-gray-400 mt-1">Our Mailbox</p>
            </div>
            <div>
              <div className=" flex justify-center  items-center   text-blue-500 text-3xl mb-2 md:justify-star">
              <i className="text-4xl text-[#43BAFF]"><FiPhoneCall  /></i>

              </div>
              <p className="font-semibold text-center">092-545-2446</p>
              <p className="text-sm text-gray-400 mt-1 text-center">Our Phone</p>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t border-gray-600 my-8"></div>
  
          {/* Bottom Section */}
          <div className="text-center flex items-center justify-center md:text-left">
            <div className="flex justify-center md:justify-between items-center">
             
              {/* Navigation */}
              <div className="hidden md:flex space-x-6 text-sm font-medium ">
                <a href="#" className="hover:text-blue-400">Home</a> 
                <a href="#" className="hover:text-blue-400">Contacts</a>
                <a href="#" className="hover:text-blue-400">Projects</a>
              </div>
            </div>

            
            
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  