import Image from "next/image";
import Link from "next/link";
import "../animation.css";

export const metadata = {
  title: 'Dental Services at Hani Dental Clinic',
  description: 'Explore the wide range of dental services offered at Hani Dental Clinic, including orthodontics, cosmetic dentistry, teeth whitening, and more for a healthier and brighter smile.',
  keywords: 'Dental services, orthodontics, cosmetic dentistry, teeth whitening, restorative dentistry, general dentistry, dental wellness',
  robots: 'index, follow',
};

export default function Services() {
  return (
    <>
      <div className="services-page bg-gray-50 py-16 px-4 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1F2F16]">
            Our <span className="text-[#414073]">Services</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Explore the wide range of dental services we offer to make your smile brighter and healthier.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 - Dental Wellness */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg transition-all hover:scale-105">
            <div className="service-icon mb-6">
              <img
                src="icons/hygien.svg"
                alt="Dental Wellness"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h2 className="text-2xl font-semibold text-[#414073] mb-4">Dental Wellness</h2>
            <p className="text-sm md:text-base text-gray-600 mb-6">
              Regular check-ups, cleanings, and oral health tips to help you maintain a healthy, bright smile.
            </p>
           
              
                
              
          
          </div>

          {/* Service 2 - Orthodontics */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg transition-all hover:scale-105">
            <div className="service-icon mb-6">
              <img
                src="icons/orthodontics.svg"
                alt="Orthodontics"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h2 className="text-2xl font-semibold text-[#414073] mb-4">Orthodontics</h2>
            <p className="text-sm md:text-base text-gray-600 mb-6">
              Braces, aligners, and other orthodontic treatments to straighten your teeth and improve your smile.
            </p>
            
            
                
              
            
          </div>

          {/* Service 3 - Cosmetic Dentistry */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg transition-all hover:scale-105">
            <div className="service-icon mb-6">
              <img
                src="icons/cosmetic.svg"
                alt="Cosmetic Dentistry"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h2 className="text-2xl font-semibold text-[#414073] mb-4">Cosmetic Dentistry</h2>
            <p className="text-sm md:text-base text-gray-600 mb-6">
              Enhance the appearance of your smile with whitening, veneers, and other cosmetic procedures.
            </p>
            
           
                
              
           
          </div>

          {/* Service 4 - Restorative Dentistry */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg transition-all hover:scale-105">
            <div className="service-icon mb-6">
              <img
                src="icons/restorative.svg"
                alt="Restorative Dentistry"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h2 className="text-2xl font-semibold text-[#414073] mb-4">Restorative Dentistry</h2>
            <p className="text-sm md:text-base text-gray-600 mb-6">
              Fillings, crowns, and bridges to restore your teeth and help maintain oral functionality.
            </p>
            
              
                
              
          
          </div>

          {/* Service 5 - Teeth Whitening */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg transition-all hover:scale-105">
            <div className="service-icon mb-6">
              <img
                src="icons/white.svg"
                alt="Teeth Whitening"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h2 className="text-2xl font-semibold text-[#414073] mb-4">Teeth Whitening</h2>
            <p className="text-sm md:text-base text-gray-600 mb-6">
              Brighten your smile with our professional teeth whitening services to remove stains and discoloration.
            </p>
            
             
                
             
           
          </div>

          {/* Service 6 - General Dentistry */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg transition-all hover:scale-105">
            <div className="service-icon mb-6">
              <img
                src="icons/general.svg"
                alt="General Dentistry"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h2 className="text-2xl font-semibold text-[#414073] mb-4">General Dentistry</h2>
            <p className="text-sm md:text-base text-gray-600 mb-6">
              Comprehensive dental care, including exams, fillings, and preventative treatments for overall health.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}
