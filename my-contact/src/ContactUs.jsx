
import React from 'react';

const Contact = () => {
  return (
    <div className='flex items-center justify-center h-screen px-3'>
    <div className="flex items-center justify-center h-fit lg:w-[60vw] xl:w-[30vw] md:w-[50vw]  bg-[#44B7BC] md:px-12 py-8  rounded-xl">
      <form className="p-8 rounded-lg space-y-4 w-full ">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2"
        />
        <input
          type="text"
          placeholder="Contact"
          className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 "
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2"
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 "
        />
        {/* <button
          type="submit"
          className=" flex items-center justify-center bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Submit
        </button> */}
        <div className='w-full flex justify-start'>
        <button type="submit" className=" text-center font-poppins border-solid border-2 border-white   font-semibold text-white px-6 py-1 rounded-full mt-9">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Contact;
