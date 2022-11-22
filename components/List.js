import ItemCard from "./ItemCard"

export default function List() {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-2 mx-auto">
                <div class="flex flex-wrap -m-4">
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
            </div>
        </section>
    )
}