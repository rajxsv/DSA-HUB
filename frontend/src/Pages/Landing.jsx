import React from "react";
import { Link } from "react-router-dom";
import Banner from "../componenets/Banner";

function Landing() {
  return (
    <div className="bg-black h-full">
      <Banner message={"Contribute Here !"} link={"https://github.com/rajxsv/DSA-HUB"}/>
      <div className="container mx-auto py-8">
        <div className="text-center mb-8 flex flex-col gap-4">
          <h1 className="text-8xl font-bold text-white">DSA HUB</h1>
          <p className="tex text-gray-400">
            Your Destination for Data Structure Problem Solving and Upskilling
          </p>
        </div>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">About DSA-HUB</h2>
          <p className="text-gray-400">
            DSA-HUB is an open-source platform dedicated to providing resources
            and tools for learning and practicing data structures and
            algorithms.
          </p>
        </section>
        <section className="bg-gray-900 text-white py-12 rounded-lg text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Start Your DSA Journey Today!
          </h2>
          <p className="text-lg">
            Join our community, solve problems, and level up your coding skills.
          </p>
          <Link to={"/signup"}>
            <button className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Sign Up Now !
            </button>
          </Link>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md border-rainbow">
              <h3 className="text-xl text-white font-semibold mb-2 text-gray">
                Open Surce
              </h3>
              <p className="text-gray-400">
                No More Locked Problems and Premium Features.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-md border-rainbow">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Submit Solutions
              </h3>
              <p className="text-gray-400">
                Submit your solutions and contribute to the open-source
                community.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md border-rainbow">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Join Discussions
              </h3>
              <p className="text-gray-400">
                Engage in meaningful discussions with fellow developers about
                various algorithms and problem-solving techniques.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-10 mt-10">
            <div className="bg-gray-900 p-6 h-[11rem] rounded-lg w-[30rem] shadow-md border-rainbow">
              <h3 className="text-xl text-white font-semibold mb-2 text-gray">
                Explore Problems
              </h3>
              <p className="text-gray-400">
                Browse through a vast collection of problems to sharpen your
                skills.
              </p>
            </div>
            <div className="bg-gray-900 p-6 w-[30rem] h-[11rem] rounded-lg shadow-md border-rainbow">
              <h3 className="text-xl text-white font-semibold mb-2 text-gray">
                Made For The Community
              </h3>
              <p className="text-gray-400">
                Customise , Add , Edit as much as you like in any way you like.
              </p>
            </div>
          </div>
        </section>
        <footer className="text-center text-gray-600">
          <p>Made with ❤️ by Rajpreet Singh</p>
          <div className="flex justify-center gap-3 " >
          <p>Contribue Here {"->"} </p>{" "}
          <a className="text-blue-900" href="https://github.com/rajxsv/DSA-HUB">
            Github
          </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Landing;
