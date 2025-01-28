import Image from "next/image";
import Navbar from "./components/navbar";
import TeamCard from "./components/teamcard";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      
      {/* Hero Section */}
      <div className="body flex flex-col justify-center items-center text-center h-screen p-4 w-screen overflow-hidden">
        <h1 className="font-bold text-4xl md:text-6xl">Expand Your Smile</h1>
        <h2 className="text-cyan-300 text-2xl md:text-3xl mt-2">Hani Dental Clinic</h2>
        <ul className="mt-6 space-y-3 text-lg md:text-xl">
          <li>Orthodontic</li>
          <li>Orthodontic</li>
          <li>Orthodontic</li>
          <li>Orthodontic</li>
          <li>Orthodontic</li>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, earum alias! Exercitationem impedit, deleniti omnis ullam ea accusantium commodi illum in aspernatur nihil corporis animi facilis sapiente dicta, blanditiis non?
        </p>
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>

      {/* Book Your Visit Section */}
      <div className="team flex flex-col lg:flex-row justify-center items-center text-center lg:text-left h-screen px-4 py-8 w-screen max-w-screen bg-white overflow-hidden">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <Image
            src="/path/to/image.jpg"
            alt="Book Visit Image"
            width={500}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold">
            Book Your <span className="text-[#414073]">Visit</span>
          </h1>
          <p className="mt-6 text-base md:text-lg max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, earum alias! Exercitationem impedit, deleniti omnis ullam ea accusantium commodi illum in aspernatur nihil corporis animi facilis sapiente dicta, blanditiis non?
          </p>
          <div className="mt-8">
            <button className="px-6 py-3 text-lg rounded-lg bg-[#414073] text-[#9CEAFC] hover:bg-[#353062] transition">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
}
