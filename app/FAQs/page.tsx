import React from "react";
import "/public/fonts/fonts.css";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <header className="w-full flex md:flex-row flex-col justify-stretch bg-smokeGrey p-12">
        <h2 className="w-full text-stoneMedium text-center text-7xl font-poppins font-bold">
          ABOUT{" "}
        </h2>
        <h1 className="text-stoneMedium text-xl p-2 md:flex hidden">RE-FORM</h1>
        <h2 className="w-full text-stoneMedium text-center text-7xl font-poppins font-bold">
          {" "}
          US
        </h2>
      </header>

      <section className="grid md:grid-cols-2 grid-cols-1 w-full md:h-full place-items-center text-center">
        <div className="flex md:flex-row flex-col items-center justify-center bg-mossGreen text-stoneDark p-16 md:h-screen w-full ">
          <Image
            src="/images/shirtTrans.svg"
            alt="About us"
            width={400}
            height={400}
          />
        </div>

        <div className="bg-stoneDark text-mossGreen w-full p-16 md:h-screen flex flex-col items-center justify-center">
          <p className=" leading-loose md:p-12 p-6 text-3xl font-poppins font-thin">
            Fashion is <b>Fun</b>. <br />
            Fashion is <b>Empowering</b>. <br />
            Fashion is <b>Art</b>. <br />
            Style is <b>Expressive</b>. <br />
            Style is <b>Personal</b>. <br />
          </p>
        </div>
        <div className="bg-stoneDark text-mossGreen w-full md:h-screen p-16 flex flex-col items-center justify-center">
          <h3 className="font-poppins font-bold text-center md:text-5xl text-4xl pb-3">
            WHO WE ARE
          </h3>
          <p className=" leading-loose py-4 md:px-16  px-2 font-poppins text-xl font-thin">
            We are a brand who love fashion and the planet! We are committed to
            creating a brand where the clothes are made with love and care for
            the environment. We believe that fashion should be accessible
            without compromising on style or quality. We focus on creating small
            collections of quality pieces that are made to last for a slower and
            more responsible fashion future.
          </p>
        </div>
        <div className="bg-darkPink w-full md:h-screen p-16 flex items-center justify-center">
          <Image
            src="/images/earringsTrans.svg"
            alt="About us"
            width={350}
            height={350}
          />
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center bg-smokeGrey text-stoneDark p-12 w-full ">
          <p className=" leading-loose py-4 md:px-16 px-2 font-poppins text-2xl font-thin">
            <span className="F">
              <i>F</i>
            </span>
            ashion is not just about looking good—it&#39;s about doing good.
            Together, we can redefine the future of fashion, one conscious
            choice at a time.
          </p>
        </div>
      </section>
      <section className="grid md:grid-cols-2 grid-cols-1 w-full md:h-full place-items-center text-center">
        <div className="flex  items-center justify-center bg-mossGreen text-stoneDark p-16 md:h-screen w-full ">
          <Image
            src="/images/tankTrans.svg"
            alt="About us"
            width={400}
            height={400}
          />
        </div>

        <div className="bg-stoneDark text-mossGreen w-full p-16 md:h-screen flex flex-col items-center justify-center">
          <h3 className="font-poppins font-bold text-center md:text-5xl text-4xl pb-3">
            SUSTAINABILITY
          </h3>
          <p className=" leading-loose py-4 md:px-16 px-2  text-xl font-poppins font-thin">
            Every piece we design is crafted with care, using sustainable
            materials and processes that minimize our ecological footprint. From
            organic fabrics to recycled packaging, we are dedicated to
            protecting our planet for future generations.
          </p>
        </div>
        <div className="bg-stoneDark text-mossGreen w-full md:h-screen p-16 flex flex-col items-center justify-center">
          <h3 className="font-poppins font-bold text-center md:text-5xl text-4xl pb-3">
            ETHICAL PRACTICES
          </h3>
          <p className=" leading-loose py-4 md:px-16 px-2 font-poppins text-xl font-thin">
            We value transparency and fairness in every step of our supply
            chain. Our commitment to ethical practices ensures that all
            individuals involved in the creation of our products are treated
            with dignity, paid fairly, and work in safe conditions.
          </p>
        </div>
        <div className="bg-darkPink w-full md:h-screen p-16 flex items-center justify-center">
          <Image
            src="/images/jacketTrans.svg"
            alt="About us"
            width={350}
            height={350}
          />
        </div>
        <div className="flex items-center justify-center bg-mossGreen text-stoneDark p-16 md:h-screen w-full ">
          <Image
            src="/images/hairclipTrans.svg"
            alt="About us"
            width={500}
            height={500}
          />
        </div>

        <div className="bg-stoneDark text-mossGreen w-full p-16 md:h-screen flex flex-col items-center justify-center">
          <h3 className="font-poppins font-bold text-center md:text-5xl text-4xl pb-3">
            TIMELESS STYLE
          </h3>
          <p className=" leading-loose py-4 md:px-16 px-2 text-xl font-poppins font-thin">
            We believe that true fashion transcends trends. Our designs are
            timeless, versatile, and made to last. By creating pieces that
            endure, we encourage mindful consumption and reduce waste.
          </p>
        </div>
        <div className="bg-stoneDark text-mossGreen w-full md:h-screen p-16 flex flex-col items-center justify-center">
          <h3 className="font-poppins font-bold text-center md:text-5xl text-4xl pb-3">
            INNOVATION
          </h3>
          <p className=" leading-loose py-4 md:px-16 px-2 font-poppins text-xl font-thin">
            We are constantly exploring new ways to improve our sustainability
            practices. Through innovative design and forward-thinking solutions,
            we strive to set new standards in the fashion industry.
          </p>
        </div>
        <div className="bg-darkPink w-full md:h-screen p-16 flex items-center justify-center">
          <Image
            src="/images/skirtTrans.svg"
            alt="About us"
            width={500}
            height={500}
          />
        </div>
      </section>
      <section>
        <div className="w-full bg-smokeGrey  flex flex-col items-center justify-center">
          <h3 className="font-poppins font-bold text-stoneDark md:pt-4 pt-8 text-center text-5xl">
            FASHION FOR A BETTER FUTURE
          </h3>
          <Image
            src="/images/ReformTrans.svg"
            alt="Reform"
            width={200}
            height={200}
          />
        </div>
      </section>
    </>
  );
};

export default Page;
