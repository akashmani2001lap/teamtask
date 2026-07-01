import { useNavigate } from "react-router-dom";
import jsImage from "../assets/js.jpeg";
import topics from "../data/topics";

const Home = () => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/topics/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}

      <nav className="bg-indigo-600 p-5 text-white flex justify-between">

        <h1 className="text-3xl font-bold">
          Team 3 Task
        </h1>

        <button
          onClick={() =>
            document.getElementById("topics").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Topics
        </button>

      </nav>

      {/* Hero */}

      <section className="grid md:grid-cols-2 items-center px-10 py-20 bg-gradient-to-r from-indigo-700 to-purple-700 text-white">

        <div>

          <h1 className="text-5xl font-bold mb-5">
            Learn JavaScript & React
          </h1>

          <p className="mb-8">
            Learn complete JavaScript and React with practical examples.
          </p>

          <button
            onClick={() =>
              document.getElementById("topics").scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-white text-indigo-700 px-6 py-3 rounded-full"
          >
            Get Started
          </button>

        </div>

        <img
          src={jsImage}
          className="mx-auto w-96"
        />

      </section>

      {/* Topics */}

      <section id="topics" className="py-20 px-10">

        <h1 className="text-4xl font-bold text-center mb-10">
          Topics
        </h1>

        <div className="grid md:grid-cols-4 gap-8">

          {topics.map((topic) => (

            <div
              key={topic.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >

              <div className="text-5xl">
                {topic.icon}
              </div>

              <h2 className="font-bold text-xl mt-4">
                {topic.title}
              </h2>

              <p className="text-gray-600 my-4">
                {topic.description}
              </p>

              <button
                onClick={() => handleReadMore(topic.id)}
                className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
              >
                Read More
              </button>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Home;