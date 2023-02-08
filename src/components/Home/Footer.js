import React from "react";

function Footer() {
  return (
    <section className=" grid grid-cols-3 gap-4 my-5 px-32 py-10 bg-neutral-700 ">
      <div className="flex place-content-center">
        <img src="/images/logo.png" className="w-60 " />
      </div>

      <div className="border-x-2">
        <div className="flex place-content-center">
          <h4 className=" text-2xl font-bold text-center text-orange-500 ">
            SITEMAP
          </h4>
        </div>
        <center>
          <ul className="none my-5  ">
            <li className="text-white font-bold"> HOME</li>
            <li className="text-white font-bold">ABOUT US</li>
            <li className="text-white font-bold"> SERVICES</li>
            <li className="text-white font-bold"> OUR FLEET</li>
            <li className="text-white font-bold"> CONTACT US</li>
          </ul>
        </center>
      </div>
      <div>
        <div className="flex place-content-center">
          <h4 className=" text-2xl font-bold text-center text-orange-500 ">
            CONTACT DETAILS
          </h4>
        </div>
        <center>
          <ul className="none my-5  ">
            <li className="text-white font-bold"> 123456778</li>
            <li className="text-white font-bold">abc@gmail.com</li>
            <li className="text-white font-bold"> address</li>
          </ul>
        </center>
      </div>
    </section>
  );
}

export { Footer };
