import Navbar from "./layout/Navbar"

const HeroSection = () => {
  return (
    <section className="bg-center bg-no-repeat bg-[url('/background/background-three.jpg')] bg-gray-700 bg-blend-multiply">
        <Navbar />
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">A World of Luxury Awaits You </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Discover a New Look of Luxury Resorts.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-2xl text-white rounded-lg bg-black hover:bg-black focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Discover More
                </a>  
            </div>
        </div>
    </section>

  )
}

export default HeroSection