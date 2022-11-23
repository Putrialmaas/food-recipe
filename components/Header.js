import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src={'/assets/icon.png'} width="30" height="30" />
                    <span class="ml-3 text-xl">Food Recipe</span>
                </Link>
                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <Link href="/" class="mr-5 hover:text-gray-900">Recipe</Link>
                    <Link href="/reference" class="mr-5 hover:text-gray-900">Reference</Link>
                    <Link href="/faq" class="mr-5 hover:text-gray-900">FAQ</Link>
                    <Link href="/about" class="mr-5 hover:text-gray-900">About</Link>
                </nav>
            </div>
        </header>
    );
}