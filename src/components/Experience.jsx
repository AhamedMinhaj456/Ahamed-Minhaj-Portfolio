import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>
        

        <h2 className="text-4x1 sm:text-5xl font-bold text-white">
            Document Specialist 
          <br/>                  
            </h2>

            <h4 className="text-4xl sm:text-2xl font-bold text-white">
            <br/> <a style={{ color: 'blue',textDecoration: 'underline' }} href="https://www.rrd.com/locations/rrd-go-colombo">RR Donnelley Outsource (Pvt) Ltd</a>

            <br/>2019 Dec - 2020 May 
            
          </h4>
        
       
        <br />
        <p className="text-xl">
           <br />
          
           Team Member for Responsible for creating, editing, and formatting of documents primarily in associated software of RRD and
        Microsoft Office, with a focus on MS-PowerPoint. Ensure timely delivery of the product that is defect-free and has consistency in
        formatting and layout
        </p>
      </div>
    </div>
  );
};

export default Experience;
