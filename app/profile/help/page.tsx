import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const page = () => {
  return (
    <div className="font-poppins p-16 max-w-6xl mx-auto font-thin leading-loose">
      <h1 className="font-poppins mb-14 text-center font-semibold text-4xl">
        Help
      </h1>

      <div
        className="p-8 text-start grid grid-cols-1  place-items-center mx-auto shadow-md rounded-md mt-8"
        style={{
          backgroundImage: "url('/images/accountbg2.svg')",
          backgroundSize: "fill",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h3 className="text-center font-semibold text-xl pb-2">
          Returns Policy
        </h3>
        <p className="text-start">
          At Re-form, we want you to be completely satisfied with your purchase.
          If for any reason you are not, we are happy to offer a return within
          30 days of receipt of your order, subject to the following conditions:
        </p>
        <h4 className="font-semibold text-md">Eligibility for returns:</h4>
        <ol className="list-decimal text-center w-7/8">
          <li className="font-thin">
            <b>30-Day Return Window:</b> Items must be returned within 30 days
            from the date of delivery.
          </li>
          <li>
            <b>Resalable Condition:</b> To be eligible for a return, the item
            must be in its original, resalable condition. <br />
            This means:
            <ul className="list-disc w-1/2 mx-auto">
              <li>The item is unworn, unused, and unwashed.</li>
              <li>The item is free from any stains, marks, or odors.</li>
              <li>
                The item is in its original packaging, with all tags attached.
              </li>
            </ul>
          </li>
        </ol>
        <h4 className="font-semibold text-md">Non-eligibile returns:</h4>
        <p className="text-start">
          Unfortunately, we cannot accept returns on gift cards, custom items,
          or items past the 30-day return window.
        </p>
        <h4 className="font-semibold text-md">Returns Process:</h4>
        <ol className="list-decimal text-center w-7/8">
          <li className="text-start">
            <b>Request Return:</b> Request via the returns on your account
            dashboard.
          </li>
          <li className="text-start">
            <b>Choose Return Location:</b> Select the desired return location.
          </li>
          <li className="text-start">
            <b>Print or Download Return Label:</b> Print or download label and
            drop it off at your chosen location.
          </li>
        </ol>
        <h4 className="font-semibold text-md">Refunds:</h4>
        <p>
          {" "}
          Refunds will be issued to the original payment method used at the time
          of purchase. Please allow 14 business days for the refund to appear on
          your statement.
        </p>
        <h4 className="font-semibold text-md">Damaged or Incorrect Items:</h4>
        <p>
          If you received a damaged or incorrect item, please contact us within
          48 hours of receiving your order. We will arrange for a replacement or
          provide a full refund, including any shipping costs incurred.
        </p>
      </div>

      <div
        className="p-8 text-start grid grid-cols-1 place-items-center mx-auto shadow-md rounded-md mt-8"
        style={{
          backgroundImage: "url('/images/accountbg2.svg')",
          backgroundSize: "fill",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h3 className="text-center text-lg font-semibold">
          Brand Transparency
        </h3>
        <p>
          At Re-form, we believe in the power of transparency. From the
          materials we source to the way we treat our team, we're committed to
          operating with integrity and openness. We strive to provide you with
          clear information about our processes, so you can make informed
          choices that align with your values. Transparency isn't just a
          policy—it's a promise to you, our community, that we stand by every
          product we create, every decision we make, and every word we say.
        </p>
      </div>
      <div
        className="p-8 text-start grid grid-cols-1 place-items-center mx-auto shadow-md rounded-md mt-8"
        style={{
          backgroundImage: "url('/images/accountbg2.svg')",
          backgroundSize: "fill",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h3 className="text-center text-lg font-semibold">Contact Us</h3>
        <p>
          If you have any questions, concerns, or feedback, please don't
          hesitate to reach out to our customer service team. We're here to help
          and are committed to providing you with the best possible experience.
          You can contact us via phone or email.
          <br />
          <div className=" text-center ">
            <p>
              {" "}
              <b>Telephone:</b> 0800 123 4567
            </p>
            <p>
              {" "}
              <b>Email:</b> enquiries@reform.com{" "}
            </p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default page;
