import { useNavigate, useParams } from "react-router-dom";
import topics from "../data/topics";

const TopicPage = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const topic = topics.find((item) => item.id === Number(id));

  if (!topic) {
    return (
      <h1 className="text-center text-3xl mt-20">
        Topic Not Found
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-5xl mx-auto py-12">

        <button
          onClick={() => navigate(-1)}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg mb-10"
        >
          ← Back
        </button>

        <div className="bg-white rounded-xl shadow-xl p-10">

          <div className="text-7xl">
            {topic.icon}
          </div>

          <h1 className="text-5xl font-bold mt-5">
            {topic.title}
          </h1>

          <p className="text-gray-500 mt-3">
            {topic.description}
          </p>

          <hr className="my-8"/>

          <pre className="whitespace-pre-wrap leading-8 text-lg">
            {topic.content}
          </pre>

        </div>

      </div>

    </div>
  );
};

export default TopicPage;