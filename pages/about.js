import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Head from "next/head";
import { FaLaptop, FaTwitter } from "react-icons/fa";
import { getAllTopics } from "../Lib/Data";

export const getStaticProps = () => {
  const allTopics = getAllTopics();
  return {
    props: {
      topics: allTopics,
    },
  };
};

function about({ topics }) {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className="min-h-screen relative bg-white dark:bg-gray-900">
        <Navbar topics={topics} />
        <div className="max-w-2xl pt-20 pb-32 px-6 text-center mx-auto">
          <div className="h-64 w-full justify-center flex">
            <img src="/pp.png" className="h-64" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-700 py-4 dark:text-gray-200">
            Hello,{" "}
            <span className="bg-cyan-400 text-white rounded px-1 dark:bg-cyan-500">
              Ishan
            </span>{" "}
            Here. Nice to meet you.
          </h2>
          <p className="text-gray-600 mt-4 dark:text-cyan-200">
            I am a Software developer currently pursuing Btech in Computer
            Science in Vellore Institute of Technology, Vellore.
          </p>

          <div className="text-center pt-8">
            <button className="bg-cyan-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded dark:bg-cyan-600">
              <FaLaptop />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://ishanaudichya.netlify.app/projects"
              >
                See My Works
              </a>
            </button>

            <button className="bg-cyan-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded ml-3 dark:bg-cyan-600">
              <FaTwitter />
              <a
                className="twitter-follow-button"
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/ishan_audichya"
              >
                Follow Me
              </a>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default about;
