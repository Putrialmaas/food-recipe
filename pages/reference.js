import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import pic1 from "../public/assets/1.png";
import pic2 from "../public/assets/2.png";
import pic3 from "../public/assets/3.png";
import pic4 from "../public/assets/4.png";
import pic5 from "../public/assets/5.png";
import pic6 from "../public/assets/6.png";

export default function Reference() {
  return (
    <div>
      <Meta title="Food Recipe: Reference" />
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-semibold title-font text-gray-900 mb-4">
              Reference Food Recipe
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Some of the references used in making Food Recipes
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 w-full flex flex-col text-justify items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5 flex-shrink-0">
                <Image
                  alt="icon"
                  src={pic1}
                  className="rounded-full bg-white"
                />
              </div>
              <div class="flex-grow">
                <Link href="/reference/github">
                  <h2 class="text-gray-900 text-lg text-center title-font font-semibold mb-3">
                    Github
                  </h2>
                </Link>
              </div>
            </div>
            <div class="p-4 md:w-1/3 w-full flex flex-col text-justify items-center">
              <div class="bg-white bg-none w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5 flex-shrink-0">
                <Image
                  alt="icon"
                  src={pic2}
                  className="rounded-full bg-white"
                />
              </div>
              <div class="flex-grow">
                <Link href="/reference/rapid">
                  <h2 class="text-gray-900 text-lg text-center title-font font-semibold mb-3">
                    Rapid API
                  </h2>
                </Link>
              </div>
            </div>
            <div class="p-4 md:w-1/3 w-full flex flex-col text-justify items-center">
              <div class="bg-white w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5 flex-shrink-0">
                <Image
                  alt="icon"
                  src={pic3}
                  className="rounded-full bg-white"
                />
              </div>
              <div class="flex-grow">
                <Link href="/reference/edamam">
                  <h2 class="text-gray-900 text-lg text-center title-font font-semibold mb-3">
                    Edamam API
                  </h2>
                </Link>
              </div>
            </div>
            <div class="p-4 md:w-1/3 w-full flex flex-col text-justify items-center">
              <div class="bg-white w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5 flex-shrink-0">
                <Image
                  alt="icon"
                  src={pic4}
                  className="rounded-full bg-white"
                />
              </div>
              <div class="flex-grow">
                <Link href="/reference/node">
                  <h2 class="text-gray-900 text-lg text-center title-font font-semibold mb-3">
                    Node JS
                  </h2>
                </Link>
              </div>
            </div>
            <div class="p-4 md:w-1/3 w-full flex flex-col text-justify items-center">
              <div class="bg-white w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5 flex-shrink-0">
                <Image
                  alt="icon"
                  src={pic5}
                  className="rounded-full bg-white"
                />
              </div>
              <div class="flex-grow">
                <Link href="/reference/flaticon">
                  <h2 class="text-gray-900 text-lg text-center title-font font-semibold mb-3">
                    Flaticon
                  </h2>
                </Link>
              </div>
            </div>
            <div class="p-4 md:w-1/3 w-full flex flex-col text-justify items-center">
              <div class="bg-white w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5 bg-none flex-shrink-0">
                <Image
                  alt="icon"
                  src={pic6}
                  className="rounded-full bg-white"
                />
              </div>
              <div class="flex-grow">
                <Link href="/reference/tailblocks">
                  <h2 class="text-gray-900 text-lg text-center title-font font-semibold mb-3">
                    Tailblocks
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}