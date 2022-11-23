import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pic1 from "../public/assets/man.png";
import pic2 from "../public/assets/woman.png";
import Image from "next/image";

export default function FAQ() {
  return (
    <div>

    <Meta title="Food Recipe: FAQ" />

      <Header />

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Frequently Asked Question</h1>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">Apa kegunaan dari aplikasi Food Recipe?</p>
                <p class="leading-relaxed mb-6"></p>
                <p class="leading-relaxed mb-6 text-justify">Aplikasi Food Recipe ini berfungsi untuk Menampilkan Resep beberapa masakan yang anda butuhkan. Aplikasi ini juga menampilkan beberapa informasi kandungan dari masakan tersebut. Jadi jangan khawatir apabila anda ingin memasak masakan namun khawatir mengenai komponen dan kandungannya. -Putri Almaas</p>
                <p class="leading-relaxed mb-6"></p>
                <div class="inline-flex items-center">
                  <div class="w-1 h-1 rounded-full flex-shrink-0 object-cover object-center" />
                  <Image
                  alt="icon"
                  width="40"
                  height="40"
                  src={pic1}
                  className="rounded-full bg-white"></Image>
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-gray-900">Lee Jeno</span>
                      <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                    </span>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">Fitur apa saja yang terdapat pada aplikasi food recipe ini?</p>
                <p class="leading-relaxed mb-6"></p>
                <p class="leading-relaxed mb-6 text-justify">Fitur yang terdapat pada aplikasi Food Recipe ini seperti Recipe, Details, Reference, dan FAQ. Setiap fitur memiliki fungsi yang berbeda-beda sesuai kegunaanya. Pada bagian Details terdapat fitur Read Detail untuk melihat ingridients dan langkah pembuatannya. -Putri Almaas</p>
                <p class="leading-relaxed mb-6"></p>
                <a class="inline-flex items-center">
                <div class="w-1 h-1 rounded-full flex-shrink-0 object-cover object-center" />
                  <Image
                  alt="icon"
                  width="40"
                  height="40"
                  src={pic2}
                  className="rounded-full bg-white"></Image>
                    <span class="flex-grow flex flex-col pl-4 px-5 py-5">
                      <span class="title-font font-medium text-gray-900">Shin Ryu-jin</span>
                      <span class="text-gray-500 text-sm">DESIGNER</span>
                    </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}