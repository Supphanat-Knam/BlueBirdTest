import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import React, { useState } from "react";


const Contact = () => {

    // State storage for form data
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    // function to get form data
    const formDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // send mail function(Go file)
    const sendMail = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(formData)

        try {
            const response = await fetch("http://localhost:8080/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const message = await response.text();
                alert(message);
            } else {
                alert("Failed to send data");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error occurred while sending data");
        }
    };

    return (

        <>
            {/* top contact */}
            <div className="bg-[#0F1557] h-full">
                <div className="container justify-between px-6 py-20 mx-auto lg:flex lg:px-16">
                    <div className="lg:my-auto">
                        <a className="text-5xl font-black text-white shadow-inner h-fit ">Contact</a>
                    </div>
                    <div className="flex lg:my-auto ">
                        <h1 className="font-semibold text-[#9CA4A9] h-fit hover:text-white" >HOME</h1>
                        <p className="mx-1 text-[#43BAFF] my-auto"><AiFillCaretRight /></p>
                        <h1 className="font-bold text-white">CONTACT</h1>
                    </div>
                </div>
            </div>

            {/* contact body */}
            <div className="container flex-row justify-between px-6 py-10 mx-auto lg:flex lg:px-16 " >

                {/* contact detail */}
                <div className=" basis-1/2 lg:pe-32">
                    <h3 className="text-[#5167C6]">//CONTACT DETAIL</h3>
                    <h1 className="text-4xl font-extrabold" >Contact us</h1>
                    <h4 className="mt-2 text-[#9CA4A9]">Give us a call , we endeavour to answer all inquiries within 24 hours on business days.</h4>
                    <div className="mt-4 lg:mt-12 lg:ms-14 ms-4">
                        <div className="flex p-5 transition-shadow duration-500 ease-in-out hover:shadow-xl">
                            <div className="me-2">
                                <i className="text-4xl text-[#43BAFF] "><AiOutlineGlobal /></i>

                            </div>
                            <div>
                                <h1 className="text-xl font-bold">Our  Address:</h1>
                                <p className="text-[#9CA4A9]">No. 139, The Street Ratchada Shopping Center Building, Room No. 301-304, Ratchadaphisek Road, Din Daeng Subdistrict, Din Daeng District, Bangkok 10400</p>
                            </div>

                        </div>
                        <div className="flex p-5 mt-6 transition-shadow duration-500 ease-in-out hover:shadow-xl">
                            <div className="me-2">
                                <i className="text-4xl text-[#43BAFF]"><FiMail /></i>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">Our Mailbox:</h1>
                                <p className="text-[#9CA4A9]">tanapong@bluebirdsconsult.com</p>

                            </div>

                        </div>
                        <div className="flex p-5 mt-6 transition-shadow duration-500 ease-in-out hover:shadow-xl">
                            <div className="me-2">
                                <i className="text-4xl text-[#43BAFF]"><FiPhoneCall /></i>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">Our Phone:</h1>
                                <p className="text-[#9CA4A9]">092-545-2446</p>

                            </div>
                        </div>
                    </div>
                </div>

                {/* contact us */}
                <div className="mt-5 lg:mt-0 lg:ps-10 basis-1/2">
                    <div className="bg-[#4960C3]  lg:p-14 p-5 shadow-lg">
                        <h1 className="text-4xl font-extrabold text-white ">Ready to Get Started?</h1>
                        <p className="mt-1 text-white">Your email address will not be published.</p>

                    {/* form data */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name*"
                            className="w-full mt-5 input input-lg !rounded-none !placeholder-white bg-opacity-35 !text-white " value={formData.name} onChange={formDataChange} />
                        <input
                            type="text"
                            name="email"
                            placeholder="Your Email*"
                            className="w-full mt-5 input input-lg input-bordered  !rounded-none bg-opacity-35 !placeholder-white !text-white" value={formData.email} onChange={formDataChange} />
                        <textarea
                            placeholder="Message..."
                            name="message"
                            className="w-full mt-5 textarea textarea-lg !rounded-none !placeholder-white bg-opacity-35 !text-white" value={formData.message} onChange={formDataChange} />

                        <button className="px-4 mt-5 py-3 font-semibold bg-white shadow-md hover:bg-[#0F1557] hover:text-white transition duration-500 ease-in-out " onClick={sendMail}>SEND MESSAGE</button>

                    </div></div>
            </div>
        </>
    )


}


export default Contact