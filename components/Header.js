import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <header class="sticky top-0 z-50 text-gray-600 body-font bg-pink-100">
            <div class="container justify-center mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" class="flex title-font font-medium items-center text-gray-900 mb-1 md:mb-0">
                    <Image src={'/assets/icon.png'} width="30" height="30" />
                    <span class="ml-3 text-xl font-bold">Food Recipe</span>
                </Link>
            </div>
        </header>
    );
}