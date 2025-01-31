import BookingForm from "../components/bookForm";
import "../animation.css";


// SEO Metadata
export const metadata = {
  title: 'Book an Appointment | Hani Dental Clinic',
  description: 'Reserve your seat for a dental consultation at Hani Dental Clinic. Easy and quick online appointment booking.',
  keywords: 'dental appointment, book dental visit, dental care, book online dental appointment, Hani Dental Clinic',
  robots: 'index, follow', // Telling search engines to index the page and follow links
};

export default function Book() {
  return (
    <>
      {/* Hero Section for Book Appointment */}
      <div className="container mx-auto px-4 py-6 fade-in">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          {/* Left Section: Content */}
          <div className="w-full lg:w-1/2 slide-left">
            <h1 className="text-4xl font-semibold text-center mb-6 text-[#414073]">
              Book Your Visit at Hani Dental Clinic
            </h1>

            {/* Image with SEO-friendly alt text */}
            <img
              src="./image/form.png"
              alt="Dental appointment booking form at Hani Dental Clinic"
              className="w-full max-w-[350px] mx-auto mb-6 scale-up"
            />
            <p className="text-lg text-center lg:text-left">
              Ready for the best dental care?{" "}
              <span className="font-bold text-[#414073]">Book your appointment</span> now, from
              wherever you are. <br />
              Simply fill out the form below, and we’ll schedule your visit accordingly. It’s quick and
              easy to secure your spot with our online booking system!
            </p>
          </div>

          {/* Right Section: Booking Form */}
          <div className="w-full lg:w-1/2 slide-right">
            <BookingForm />
          </div>
        </div>
      </div>
    </>
  );
}
