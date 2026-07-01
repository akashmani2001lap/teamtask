import jsImage from '../assets/js.jpeg'
const Home = () => {

  const topics = [
  {
    id: 1,
    icon: "📘",
    title: "JavaScript Variables",
    description: "Learn about var, let, const and how variables work in JavaScript.",
  },
  {
    id: 2,
    icon: "⚡",
    title: "Functions",
    description: "Understand function declaration, expression and arrow functions.",
  },
  {
    id: 3,
    icon: "🔁",
    title: "Loops",
    description: "Master for, while, do-while and forEach loops with examples.",
  },
  {
    id: 4,
    icon: "📦",
    title: "Arrays",
    description: "Learn array methods like map, filter, reduce, find and more.",
  },
  {
    id: 5,
    icon: "🎯",
    title: "Objects",
    description: "Understand objects, properties, methods and destructuring.",
  },
  {
    id: 6,
    icon: "🚀",
    title: "Promises",
    description: "Learn asynchronous JavaScript using Promises and async/await.",
  },
  {
    id: 7,
    icon: "⚛️",
    title: "React Basics",
    description: "Understand components, props and JSX in React.",
  },
  {
    id: 8,
    icon: "💻",
    title: "useState Hook",
    description: "Learn how to manage state using the useState hook.",
  },
];
  
  return (

   
    <div className="min-h-screen bg-gray-100">
      {/* ================= Navbar ================= */}
      <nav className="bg-indigo-600 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">
            Team 3 Task 
          </h1>

          <div className="flex gap-8 text-white font-medium text-lg">
            <a
              href="#"
              className="hover:text-yellow-300 transition duration-300"
            >
              Home
            </a>

            <a
              href="#topics"
              className="hover:text-yellow-300 transition duration-300"
            >
              Topics
            </a>
          </div>
        </div>
      </nav>

      {/* ================= Hero Section ================= */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          
          {/* Left Side */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Learn JavaScript <br /> & React
            </h2>

            <p className="text-lg text-gray-200 mb-8">
              Master JavaScript and React from beginner to advanced level with
              easy explanations, practical examples, projects, and interview
              questions.
            </p>

            <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition">
              Get Started
            </button>
          </div>

          {/* Right Side Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src= {jsImage}
              alt="JavaScript"
              className="w-72 md:w-[450px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= Topics ================= */}
      <section id="topics" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Explore Topics
          </h2>

          <p className="text-center text-gray-600 mb-12">
            Choose a topic and start learning.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="text-5xl mb-4">{topic.icon}</div>

                <h3 className="text-xl font-bold mb-3">{topic.title}</h3>

                <p className="text-gray-600 mb-6">
                  {topic.description}
                </p>

                <button
                  onClick={() => handleReadMore(topic.id)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full transition"
                >
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="bg-indigo-900 text-white py-6 text-center">
        <p>© All Rights Reserved.</p>
      </footer>
    </div>
  );
}
    
  


export default Home