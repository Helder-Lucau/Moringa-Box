import Navbar from "./Navbar"

function Contact() {
    return (
        <div>
            <Navbar />
            <div className="max-w-[1240px] w-full mx-auto p-10">
                <div className="lg:w-2/3 space-y-5 text-center mx-auto">
                    <h1 className="uppercase tracking-widest font-medium text-4xl">we’d love to hear from you</h1>
                    <div className="h-0.5 bg-red-500 w-48 mx-auto"></div>
                    <p className="text-base"
                    >Got a question about M-BOX? Please submit your questions via the contact form below and our colleagues will be in touch with you shortly.
                    </p>
                </div>
                <div className="flex justify-center w-full items-center p-10">
                    <form className="max-w-[800px] border w-full mx-auto p-8">
                        <h2 className="text-4xl font-semibold text-center py-4">Send us a message</h2>
                        <div className="flex flex-col mb-4">
                            <label className="font-medium">Name:</label>
                            <input type="text" className="rounded-t-sm rounded-r-none rounded-b-none rounded-l-sm outline-0 hover:border-primary-600 hover:shadow-none w-full py-2 px-2 border border-inherit  rounded h-10 outline-none bg-transparent" placeholder="First name/ Last name" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-medium">Email:</label>
                            <input type="text" className="rounded-t-sm rounded-r-none rounded-b-none rounded-l-sm outline-0 hover:border-primary-600 hover:shadow-none w-full py-2 px-2 border border-inherit  rounded h-10 outline-none bg-transparent" placeholder="Your email address" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-medium">Phone number:</label>
                            <input type="text" className="rounded-t-sm rounded-r-none rounded-b-none rounded-l-sm outline-0 hover:border-primary-600 hover:shadow-none w-full py-2 px-2 border border-inherit  rounded h-10 outline-none bg-transparent" placeholder="Your phone number" ></input>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="font-medium">Your message:</label>
                            <textarea type="" className="rounded-t-sm rounded-r-none rounded-b-none rounded-l-sm outline-0 hover:border-primary-600 hover:shadow-none w-full py-2 px-2 border border-inherit  rounded h-10 outline-none bg-transparent" placeholder="Describe your inquiry with all the relevant details" ></textarea>
                        </div>
                        <button className="w-full rounded-2xl py-2 mt-6 bg-[#ba324f] hover:bg-[#9eb3c2] text-white font-medium">Send now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact