import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Banner from "../components/Banner";

function Landing() {
  const history = useHistory();

  useEffect(() => {
    window.location.href = "https://coding-hub-website.vercel.app/";
  }, [history]);

  return (
    <div className="bg-black h-full">
      <Banner message={"Join Us Now!"} link={"https://github.com/rajxsv/Coding-Hub"}/>
      <div className="container mx-auto py-8">
        <div className="text-center mb-8 flex flex-col gap-4">
          <h1 className="text-8xl font-bold text-white">Coding Hub</h1>
          <p className="tex text-gray-400">
            Your Ultimate Destination for Coding Practice and Skill Enhancement
          </p>
        </div>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">About Coding Hub</h2>
          <p className="text-gray-400">
            Coding Hub is an inclusive platform aimed at providing resources and tools for mastering various programming languages, development practices, and problem-solving techniques.
          </p>
        </section>
        <section className="bg-gray-900 text-white py-12 rounded-lg text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Coding Journey Today!
          </h2>
          <p className="text-lg">
            Join our community, solve problems, and elevate your coding skills.
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
                Code Practice
              </h3>
              <p className="text-gray-400">
                Sharpen your coding skills with a wide range of practice problems.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-md border-rainbow">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Language Learning
              </h3>
              <p className="text-gray-400">
                Learn new programming languages or enhance your proficiency in existing ones.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md border-rainbow">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Project Showcase
              </h3>
              <p className="text-gray-400">
                Showcase your projects, collaborate with others, and get feedback.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-10 mt-10">
            <div className="bg-gray-900 p-6 h-[11rem] rounded-lg w-[30rem] shadow-md border-rainbow">
              <h3 className="text-xl text-white font-semibold mb-2 text-gray">
                Interview Prep
              </h3>
              <p className="text-gray-400">
                Prepare for technical interviews with curated problem sets and interview tips.
              </p>
            </div>
            <div className="bg-gray-900 p-6 w-[30rem] h-[11rem] rounded-lg shadow-md border-rainbow">
              <h3 className="text-xl text-white font-semibold mb-2 text-gray">
                Community Collaboration
              </h3>
              <p className="text-gray-400">
                Collaborate with fellow developers, share knowledge, and grow together.
              </p>
            </div>
          </div>
        </section>
        <footer className="text-center text-gray-600">
          <p>Made with ❤️ by Rajpreet Singh</p>
          <div className="flex justify-center gap-3 " >
          <p>Contribute Here {"->"} </p>{" "}
          <a className="text-blue-900" href="https://github.com/rajxsv/Coding-Hub">
            Github
          </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Landing;
