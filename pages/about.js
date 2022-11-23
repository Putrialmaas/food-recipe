import Header from "../components/Header";
import Footer from "../components/Footer";
import pic1 from "../public/assets/food.webp";
import pic2 from "../public/assets/aku.png";
import Image from "next/image";

export default function About() {
  return (
    <div>


      <Header />

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <Image class="object-cover object-center h-full w-full"
                alt="icon"
                width="1200"
                height="500"
                src={pic1}
              ></Image>
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <Image alt="profile" className="rounded-full" src={pic2} />
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    
                  </svg>
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Putri Almaas Auliasari</h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">Teknik Komputer</p>
                  <p class="text-base">Fakultas Teknik</p>
                  <p class="text-base">Universitas Diponegoro</p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4 text-justify">Hai! saya Putri Almaas Auliasari, Mahasiswi Teknik Komputer Universitas Diponegoro yang mencoba memahami apa yang sedang dipelajari di bangku kuliah dengan dibarengi oleh hobi saya yg menyukai K-pop, karena dari situ saya bisa mengambil beberapa contoh positif yg seringkali mereka lakukan sehingga membuat saya terinfluens untuk melakukan banyak hal positif pula.</p>
                <p class="leading-relaxed text-lg mb-4 text-justify">Aplikasi Food Recipe merupakan menu resep makanan yang dibuat dalam aplikasi. Aplikasi ini berisikan menu masakan yang berisikan komposisi, langkah pembuatan serta informasi Nilai Gizinya. Pada setiap resep masakan juga terdapat keterangan asal negara makanan tersebut. Aplikasi ini dibuat dengan Cinta sehingga menciptakan aplikasi yang sesuai keinginan </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}