import React from "react";
import { InlineWidget } from "react-calendly";

function Contact() {
  return (
    <>
      <div className="pt-16 pb-16 h-auto min-h-screen font-primary">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full text-center lg:w-7/12 lg:text-left pl-0 lg:pl-20">
            <div className="w-full lg:w-2/3">
            <h2 className="mx-auto my-2 text-4xl font-semibold text-gray-700 leading-snugish">
              Contact
            </h2>
            <p className="mx-auto text-2xl font-regular text-gray-700 leading-snugish">
                Schedule a 15 minute call with me via Google meet.
              </p>
              <div className="flex flex-row justify-center lg:justify-start items-end"></div>
            </div>
          </div>
          <div className="ml-auto w-full px-10 lg:px-20 lg:w-5/12 h-auto">
            <InlineWidget
              styles={{
                height: "600px",
                width: "100%",
                margin: "auto",
                borderRadius: "50px",
              }}
              pageSettings={{ textColor: "text-gray-750", primaryColor: "" }}
              url="https://calendly.com/gregor-lk-nelson/30min"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
