import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    const router = useRouter();
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!router.query.data) return;
        setData(JSON.parse(router.query.data));
    }, []);

    return (
        <div>

            <Meta title="Food Recipe" />

            <Header />

            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-8 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest uppercase">{data ? data.cuisineType[0] : ''}</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-8">{data ? data.label : ''}</h1>
                            <div class="flex border-t border-gray-200 py-2">
                                <span class="text-gray-500">Calories</span>
                                <span class="ml-auto text-gray-900">{data ? data.calories : ''} <span className="font-bold">J</span></span>
                            </div>
                            <div class="flex border-t border-gray-200 py-2">
                                <span class="text-gray-500">Total Weight</span>
                                <span class="ml-auto text-gray-900">{data ? data.totalWeight : ''} <span className="font-bold">Gr</span></span>
                            </div>
                            <div class="flex border-t border-gray-200 py-2">
                                <span class="text-gray-500">Total Energy</span>
                                <span class="ml-auto text-gray-900">{data ? data.totalNutrients.ENERC_KCAL.quantity : ''} <span className="font-bold">KCal</span></span>
                            </div>
                            <div class="flex border-t border-gray-200 py-2">
                                <span class="text-gray-500">Total Fat</span>
                                <span class="ml-auto text-gray-900">{data ? data.totalNutrients.FAT.quantity : ''} <span className="font-bold">Gr</span></span>
                            </div>
                            <div class="flex border-t border-b mb-8 border-gray-200 py-2">
                                <span class="text-gray-500">Cook Time</span>
                                <span class="ml-auto text-gray-900">{data ? (data.totalTime == '0' ? 15 : data.totalTime) : ''} <span className="font-bold">Minutes</span></span>
                            </div>
                            <div class="flex">
                                <Link href={data ? data.url : ''} class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Read Detail</Link>
                            </div>
                        </div>
                        <Image alt="cover" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" width="400" height="400" src={data ? data.image : ''} />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}