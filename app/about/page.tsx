import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 m-5 h-screen overflow-x-hidden">
        {/* Images */}
        <img
          src="image/dentall.jpg"
          alt="Book Image"
          className="bookcard ml-0 lg:ml-48 mt-6 w-full lg:w-[300px] h-auto object-cover rounded-lg shadow-md"
        />
        <img
          src="image/book.jpg"
          alt="Book Image"
          className="bookcard w-full lg:w-[300px] h-auto object-cover rounded-lg shadow-md"
        />

        {/* Text Content */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0">
          <p className="text-blue-400 text-lg">About Us</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#1F2F16] mb-4">
            Holistic Heaven for Your Health, Every Day
          </h1>
          <p className="text-base md:text-lg mb-6">
            Hani Dental Clinic is one of the top-notch dental clinics located in Addis Ababa, Ethiopia. Our mission is to provide high-quality, comprehensive dental care with a focus on patient satisfaction.
          </p>

          {/* Service Sections */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Dental Wellness Section */}
            <div className="flex items-center gap-4">
              <img src="icons/hygien.svg" alt="Dental Wellness" className="w-12 h-12" />
              <div className="text flex flex-col">
                <h1 className="text-xl font-semibold text-[#414073]">Dental Wellness</h1>
                <p className="text-sm md:text-base">
                  Our dental wellness services include preventive care, cleanings, and oral health maintenance. We help you achieve a healthier smile through regular check-ups and expert advice.
                </p>
              </div>
            </div>

            {/* Orthodontic Wellness Section */}
            <div className="flex items-center gap-4">
              <img src="icons/teethh.svg" alt="Orthodontic Wellness" className="w-12 h-12" />
              <div className="text flex flex-col">
                <h1 className="text-xl font-semibold text-[#414073]">Orthodontic Wellness</h1>
                <p className="text-sm md:text-base">
                  Our orthodontic services are designed to align your smile and teeth with precision. Whether you need braces, clear aligners, or other orthodontic treatments, we ensure your smile stays straight and healthy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Your Visit Section */}
      <div className="team flex flex-col lg:flex-row justify-center items-center text-center lg:text-left h-screen px-4 py-8 w-full max-w-full bg-white overflow-x-hidden">
        <div className="lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1F2F16] mb-4">
            Book Your <span className="text-[#414073]">Visit</span>
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-lg mb-8">
            Ready to take the next step? Booking your visit is a breeze with our seamless online process. Whether you're here for a routine check-up or a special treatment, we're dedicated to making your experience as smooth as possible. Let's make your visit unforgettable—book now and start your journey to a brighter smile!
          </p>
          <div className="mt-4">
          <button style={{ color: 'white' }} className="px-6 py-3 text-lg rounded-lg bg-[#414073]  hover:bg-[#353062] transition">
            Book Appointment
          </button>
        </div>
        </div>

        <div className="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
          <Image
            src="/image/book.jpg"
            alt="Book Visit Image"
            width={500}
            height={400}
            className="rounded-lg shadow-lg mx-auto w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}
