
import ItemCard from "./ItemCard"
import { useEffect, useState } from "react";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
    },
};

export default function List() {
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://edamam-recipe-search.p.rapidapi.com/search?q=soup', options)
                .then((response) => response.json())
                .then((response) => setData(response.hits))
                .catch((err) => console.error(err));
        }, 250)
    }, []);

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-2 mx-auto">
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {
                        data === null ?
                            (<p class="mx-auto text-center font-bold mt-4">Loading...</p>) :
                            data.map((item, index) => (<ItemCard key={index} data={item.recipe} />)
                            )
                    }
                </div>
            </div>
        </section>
    )
}