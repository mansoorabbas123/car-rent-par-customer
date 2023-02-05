import React from "react";

function About() {
  return (
    <section className="bg-clip-content p-4 border-4 border-dashed border-orange-500 bg-gray-300 mt-10">
      <div className="grid grid-cols-2 gap-4 mx-20 my-20 ">
        <div>
          <h2 className="text-5xl font-bold text-center text-orange-500 pt-6 ">
            ABOUT US
          </h2>
          <p className="px-10 py-6 text-lg">
            HMS limo service in pakistan is the premier private car service in
            pakistan. Our expert drivers offer the highest quality of
            professionalism, comfort, and safety. When you reserve a ride with
            us, have the peace of mind that your driver will be prompt and will
            meet all of your transportation needs. We specialize in corporate,
            special event, and airport car service. HMS Limo Service has a large
            fleet of luxury vehicles to select from.
          </p>
          <p className="px-10 py-6 text-lg">
            HMS limo service in pakistan is the premier private car service in
            pakistan. Our expert drivers offer the highest quality of
            professionalism, comfort, and safety. When you reserve a ride with
            us, have the peace of mind that your driver will be prompt and will
            meet all of your transportation needs. We specialize in corporate,
            special event, and airport car service. HMS Limo Service has a large
            fleet of luxury vehicles to select from.
          </p>
        </div>
        <div
          className=" bg-cover bg-no-repeat bg-center "
          style={{
            backgroundImage: `url("/images/hamza.webp")`,
          }}
        ></div>
      </div>
    </section>
  );
}

export { About };
