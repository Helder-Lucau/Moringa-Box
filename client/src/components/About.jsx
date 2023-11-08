import img from '../assets/about.png';
import Footer from "../components/Footer"
import Navbar from './Navbar';

function About() {
  return (
    <div>
    <Navbar />
      <div className="bg-[#1e232a] w-full py-32 flex flex-col justify-between">
        <div className="text-white grid md:grid-cols-2 max-w-[1240px] mx-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            <h2 className="text-red-600 font-semibold text-2xl md:text-3xl">
              ABOUT US
            </h2>
            <p className="py-3 text-5xl font-bold md:text-7xl tracking-wide">
              We believe that you and only you should control your data
            </p>
          </div>
          <div>
            <img className="w-full" src={img} alt="/"></img>
          </div>
        </div>
      </div>

      {/*OUR STORY SECTION*/}
      <div className="mx-auto max-w-[800px] py-20 sm:py-30 lg:py-20 text-black w-full ">
        <div className="text-center">
          <div className="max-w-2xl mx-auto tracking-widest">
            <h1 className="md:text-4xl text-2xl tracking-[.4em]">OUR STORY</h1>
            <p className="leading-8 text-lg mt-6 font-saira">
              Our story started in October 24th has part of a software
              engineering course project. Random groups of 5 students were
              tasked to complete a fullstack app in the course of three weeks.
              M-BOX is cloud storage platform for businesses and individuals
              alike, making work better for people meant designing a simpler way
              to store and retrieve data. This platform was built for learning
              purpose part of a end course final project.
            </p>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-600 mx-auto lg:max-w-[800px] max-w-[500px]"></div>

      {/*OUR TEAM SECTION*/}
      <div className="w-full py-[2rem]">
        <div className="py-8 px-4 text-center">
          <h1 className="md:text-4xl text-2xl tracking-[.4em] font-medium">
            MEET OUR TEAM
          </h1>
        </div>

        {/*Cards*/}
        <div className="w-full py-[2rem] px-4">
          <div className="mx-auto max-w-[800px] grid md:grid-cols-2 gap-8">
            <div className="w-full shadow-md border flex flex-col p-4 my-8 rounded-xl hover:scale-105 duration-300">
              <div className="mx-8 text-center py-4">
                <h2 className="md:text-4xl sm:text-3xl text-2xl font-medium py-2">
                  Helder Lucau
                </h2>
                <p className='text-xl my-3'>
                  Team Lead
                </p>
              </div>
            </div>
            <div className="w-full shadow-md border flex flex-col p-4 my-8 rounded-xl hover:scale-105 duration-300">
              <div className="mx-8 text-center py-4">
                <h2 className="md:text-4xl sm:text-3xl text-2xl font-medium py-2">
                  Faith Njuguna
                </h2>
                <p className='text-xl my-3'>
                  Backend Developer
                </p>
              </div>
            </div>
            <div className="w-full shadow-md border flex flex-col p-4 my-8 rounded-xl hover:scale-105 duration-300">
              <div className="mx-8 text-center py-4">
                <h2 className="md:text-4xl sm:text-3xl text-2xl font-medium py-2">
                  Noah Ntabo
                </h2>
                <p className='text-lg my-3'>
                  Frontend Developer
                </p>
              </div>
            </div>
            <div className="w-full shadow-md border flex flex-col p-4 my-8 rounded-xl hover:scale-105 duration-300">
              <div className="mx-8 text-center py-4">
                <h2 className="md:text-4xl sm:text-3xl text-2xl font-medium py-2">
                  Wayne Keya
                </h2>
                <p className='text-xl my-3'>
                  Backend Developer
                </p>
              </div>
            </div>
            <div className="w-full shadow-md border flex flex-col p-4 my-8 rounded-xl hover:scale-105 duration-300">
              <div className="mx-8 text-center py-4">
                <h2 className="md:text-4xl sm:text-3xl text-2xl font-medium py-2">
                  Abdihakim Hassan
                </h2>
                <p className='text-xl my-3'>
                  Backend Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About
