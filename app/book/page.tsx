import BookingForm from "../components/bookForm";

export default function Book() {
    return (
        <>
            <div className="container mx-auto px-4 py-6">
                
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-4xl font-semibold text-center mb-6 text-[#414073]">
                            Book Your Visit
                        </h1>
                        <img src="./image/form.png" alt="Dental Appointment" className="w-full max-w-[350px] mx-auto mb-6" />
                        
                        <p className="text-lg text-center lg:text-left">
                            Ready for the best dental care? <span className="font-bold text-[#414073]">Book your appointment</span> now, from wherever you are. <br />
                            Simply fill out the form below, and we’ll schedule your visit accordingly. It’s quick and easy!
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
