export default function BookingForm() {
    return (
        <>
            <div className="card bg-base-100 shadow-xl w-full max-w-md mx-auto p-6">
                <form action="" method="post" className="space-y-4">
                    <h1 className="text-3xl font-semibold text-center mb-4">RESERVE A SPOT</h1>

                    <div className="form-control">
                        <label htmlFor="firstname" className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" id="firstname" required className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label htmlFor="lastname" className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" id="lastname" required className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label htmlFor="phonenumber" className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="number" id="phonenumber" required className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label htmlFor="email" className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" id="email" required className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label htmlFor="date" className="label">
                            <span className="label-text">Preferred Date</span>
                        </label>
                        <input type="date" id="date" required className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label htmlFor="anything" className="label">
                            <span className="label-text">Anything you want to tell us?</span>
                        </label>
                        <textarea id="anything" className="textarea textarea-bordered w-full" placeholder="Your message here..." />
                    </div>

                    <div className="form-control mt-6">
                        <button 
                            type="submit" 
                            className="btn w-full bg-[#2b2a65] text-white hover:bg-[#414073] focus:ring focus:ring-[#2b2a65] transition-colors duration-300">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
