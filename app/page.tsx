import Image from "next/image";
import TeamCard from "./components/teamcard";
import teams from "./components/teams";

export const metadata = {
  title: 'Hani Dental Clinic | Quality Dental Care in Addis Ababa',
  description: 'Welcome to Hani Dental Clinic, your trusted dental care provider in Addis Ababa. Explore our wide range of services including orthodontics, cosmetic dentistry, and more.',
  keywords: 'Hani Dental Clinic, orthodontics, cosmetic dentistry, teeth whitening, restorative dentistry, general dentistry, dental care Addis Ababa',
  robots: 'index, follow', // Telling search engines to index and follow the page's links
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="tinted-image body flex flex-col justify-center items-center lg:items-start min-h-screen p-6 lg:p-16 w-full text-center lg:text-left text-white">
  <div className="w-full max-w-lg">
    <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">
      Expand Your <span className="text-cyan-300">Smile</span>
    </h1>
    <h2 className="text-cyan-300 text-2xl sm:text-3xl mt-2">
      Hani Dental Clinic
    </h2>
    <ul className="mt-6 text-lg sm:text-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
  <li className="flex items-center space-x-3">
    <img src="icons/general.svg" alt="Orthodontics" className="w-15 h-15" />
    <span>Orthodontics</span>
  </li>
  <li className="flex items-center space-x-3">
    <img src="icons/hygien.svg" alt="Cosmetic Dentistry" className="w-15 h-15" />
    <span>Cosmetic Dentistry</span>
  </li>
  <li className="flex items-center space-x-3">
    <img src="icons/orthodontics.svg" alt="Teeth Whitening" className="w-15 h-15" />
    <span>Teeth Whitening</span>
  </li>
  <li className="flex items-center space-x-3">
    <img src="icons/restorative.svg" alt="Restorative Dentistry" className="w-15 h-15" />
    <span>Restorative Dentistry</span>
  </li>
  <li className="flex items-center space-x-3">
    <img src="icons/teethh.svg" alt="General Dentistry" className="w-15 h-15" />
    <span>General Dentistry</span>
  </li>
</ul>



          <div className="mt-8">
            <button className="px-6 py-3 text-lg rounded-lg bg-[#414073] text-white hover:bg-[#353062] button-hover transition">
              Book Appointment
            </button>
          </div>
  </div>
</div>




      {/* Meet Our Team Section */}
      <div className="team flex flex-col justify-center items-center text-center py-16 px-4 w-full bg-gray-50">
        <h1 className="text-3xl md:text-5xl font-bold">
          Meet Our <span className="text-[#414073]">Specialized Team</span>
        </h1>
        <p className="mt-6 text-base md:text-lg max-w-3xl">
          Our team of dental professionals is dedicated to providing you with the highest quality care. Each specialist brings years of expertise in various fields of dentistry, from cosmetic to restorative treatments. We're committed to making your dental experience comfortable, efficient, and effective.
        </p>
        <div className="flex flex-col md:flex-row gap-8 mt-10">
        {teams.map((team) => (
          <TeamCard key={team.id} name={team.name} p={team.p} img={team.img}/>
        ))}
        </div>
      </div>

      {/* Book Your Visit Section */}
      <div className="team flex flex-col lg:flex-row justify-center items-center text-center lg:text-left min-h-screen px-4 py-8 w-full bg-white">
        <div className="lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1F2F16] mb-4">
            Book Your <span className="text-[#414073]">Visit</span>
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-lg mb-8">
            Ready to schedule your visit? Our simple online booking process ensures that you can secure your appointment with ease. Whether it's a routine check-up or a cosmetic procedure, we're here to help you smile brighter. Let’s make your appointment today!
          </p>
          <div className="mt-4">
          <button style={{ color: 'white' }} className="px-6 py-3 text-lg rounded-lg bg-[#414073]  hover:bg-[#353062] transition">
            Book Appointment
          </button>
        </div>
        </div>

        <div className="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0 w-full px-4">
        <Image
          src="/image/book.jpg"
          alt="Book Visit Image"
          width={200}  
          height={100}
          layout="responsive" 
          objectFit="cover" 
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
      </div>
    </>
  );
}
