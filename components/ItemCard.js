import Image from "next/image";
import Link from "next/link";

export default function ItemCard(props) {

  return (
    <div class="p-4 md:w-1/4">
      <div class="h-full drop-shadow-md rounded-lg bg-pink-100 overflow-hidden">
        <Image class="lg:h-48 md:h-36 w-full object-cover object-center"
          src={props.data.image}
          alt="thumbnail"
          width="720"
          height="400"
        />
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 capitalize">{props.data.cuisineType[0]}</h2>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3 line-clamp-1">{props.data.label}</h1>
          <div class="flex items-center flex-wrap ">
            <Link href={{
              pathname: "/detail",
              query: {
                data: JSON.stringify(props.data)
              }
            }} class="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0">Detail
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">

            </span>
            <span class="text-gray-500 inline-flex items-center leading-none text-sm">
              {props.data.totalTime == '0' ? 15 : props.data.totalTime} Minutes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
