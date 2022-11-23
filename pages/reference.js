import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import Image from "next/image";
import pic1 from "../public/assets/1.png";
import pic2 from "../public/assets/2.png";
import pic3 from "../public/assets/3.png";
import pic4 from "../public/assets/4.png";
import pic5 from "../public/assets/5.png";
import pic6 from "../public/assets/6.png";

export default function Reference() {
  return (
    <div>
      <Meta title="Reference" />
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-5 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Reference Food Recipe
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Some of the references used in making Food Recipes
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <Image
                  alt="icon"
                  src={pic1}
                  className="rounded-full bg-white"
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3">
                  Github
                </h2>
                <p class="leading-relaxed text-base">
                  Stores source code for a project and tracks a complete history of all changes to that code. This allows users to collaborate on projects more effectively by providing tools for managing changes that may vary from developer to developer.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="bg-white bg-none w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <Image
                  alt="icon"
                  src={pic2}
                  className="rounded-full bg-white"
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3">
                  Rapid API
                </h2>
                <p class="leading-relaxed text-base">
                  The world's largest API hub, is used by over three million developers to find, test, and connect to thousands of APIs — all with a single API key and dashboard.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="bg-white w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <Image
                  alt="icon"
                  src={pic3}
                  className="rounded-full bg-white"
                />
              </div>
              <div class="flex-grow">
                <h2 class="bg-white text-gray-900 text-lg text-center title-font font-medium mb-3">
                  Edamam API
                </h2>
                <p class="leading-relaxed text-base">
                  API developer portal for Nutrition Analysis, Food Database Lookup, Recipe Search API and others. 
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="bg-white w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <Image
                  alt="icon"
                  src={pic4}
                  className="rounded-full bg-white"
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3">
                  Node JS
                </h2>
                <p class="leading-relaxed text-base">
                  Open-source JavaScript runtime environment that can be used across platforms. Its function is to develop network and server-side applications, which can be tailored to the needs.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="bg-white w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <Image
                  alt="icon"
                  src={pic5}
                  className="rounded-full bg-white"
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3">
                  Flaticon
                </h2>
                <p class="leading-relaxed text-base">
                  One of the free icon provider sites that has lots of stock icons.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-justify items-center">
              <div class="bg-white w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 bg-none flex-shrink-0">
                <Image
                  alt="icon"
                  src={pic6}
                  className="rounded-full bg-white"
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg text-center title-font font-medium mb-3">
                  Tailblocks
                </h2>
                <p class="leading-relaxed text-base">
                  Tailblocks is a Next js app to provide best web design components for free. It uses React, NextJs, Tailwind CSS and deployed on Digital Ocean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}