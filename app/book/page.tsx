import BookingForm from "../components/bookForm";
import Head from "next/head";

export default function Book() {
    return (
        <>
            <Head>
                {/* Page Title */}
                <title>Book Your Dental Appointment | Hani Dental Clinic</title>

                {/* Meta Description for SEO */}
                <meta
                    name="description"
                    content="Book your dental appointment online at Hani Dental Clinic. Get the best care with a quick and easy reservation system. Schedule your visit from anywhere!"
                />

                {/* Open Graph Meta Tags for Social Media */}
                <meta property="og:title" content="Book Your Dental Appointment | Best Dental Care" />
                <meta
                    property="og:description"
                    content="Reserve your dental appointment easily online at Hani Dental Clinic. Quick, simple, and convenient booking for your dental care."
                />
                <meta property="og:image" content="/images/form-image.jpg" />
                <meta property="og:url" content="https://www.hanidentalclinic.com/book" />
                <meta name="robots" content="index, follow" />
            </Head>

            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-4xl font-semibold text-center mb-6 text-[#414073]">
                            Book Your Visit
                        </h1>
                        <img
                            src="./image/form.png"
                            alt="Dental Appointment"
                            className="w-full max-w-[350px] mx-auto mb-6"
                        />
                        <p className="text-lg text-center lg:text-left">
                            Ready for the best dental care?{" "}
                            <span className="font-bold text-[#414073]">Book your appointment</span> now, from
                            wherever you are. <br />
                            Simply fill out the form below, and we’ll schedule your visit accordingly. It’s quick and
                            easy!
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <BookingForm />
                    </div>
                </div>
            </div>
        </>
    );
}
