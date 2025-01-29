import Image from "next/image";
import Navbar from "./components/navbar";
import TeamCard from "./components/teamcard";
import Footer from "./components/footer";
import { Link } from "lucide-react";
import teams from "./components/teams";


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="body flex flex-col justify-center items-center text-center h-screen p-4 w-screen overflow-hidden">
        <h1 className="font-bold text-4xl md:text-6xl text-[#1F2F16]">Expand Your <span className="text-[#414073]">Smile</span></h1>
        <h2 className="text-cyan-300 text-2xl md:text-3xl mt-2">Hani Dental Clinic</h2>
        <ul className="mt-6 space-y-3 text-lg md:text-xl">
          <li>Orthodontics</li>
          <li>Cosmetic Dentistry</li>
          <li>Teeth Whitening</li>
          <li>Restorative Dentistry</li>
          <li>General Dentistry</li>
        </ul>
        <div className="mt-8">
          <button className="px-6 py-3 text-lg rounded-lg bg-[#414073] text-[#9CEAFC] hover:bg-[#353062] transition">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="team flex flex-col justify-center items-center text-center py-16 px-4 w-screen max-w-screen bg-gray-50">
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
<div className="team flex flex-col lg:flex-row justify-center items-center text-center lg:text-left h-screen px-4 py-8 w-screen max-w-screen bg-white overflow-hidden">
  <div className="lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1 flex flex-col justify-center items-center">
    <h1 className="text-3xl md:text-5xl font-bold text-[#1F2F16] mb-4">
      Book Your <span className="text-[#414073]">Visit</span>
    </h1>
    <p className="mt-4 text-base md:text-lg max-w-lg mb-8">
      Ready to schedule your visit? Our simple online booking process ensures that you can secure your appointment with ease. Whether it's a routine check-up or a cosmetic procedure, we're here to help you smile brighter. Let’s make your appointment today!
    </p>
    <div className="mt-4">
      <button className="px-6 py-3 text-lg rounded-lg bg-[#414073] text-[#9CEAFC] hover:bg-[#353062] transition">
        <Link href="/book">
          <a>Book Appointment</a>
        </Link>
      </button>
    </div>
  </div>

  <div className="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
    <Image
      src="/image/book.jpg"
      alt="Book Visit Image"
      width={500}
      height={400}
      className="rounded-lg shadow-lg mx-auto"
    />
  </div>
</div>

    </>
  );
}
