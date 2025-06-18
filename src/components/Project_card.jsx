import Carousel from "./Carousel";

function Project_card({ title, description, techStack, features = [] }) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-7xl mx-auto px-4 sm:px-8 py-8">
      <div className="w-full lg:w-2/3 text-center lg:text-left px-4 lg:px-0">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-base mb-3">{description}</p>
        <p className="text-gray-400 text-sm mb-3">{techStack}</p>

        {features.length > 0 && (
          <ul className="list-disc list-inside text-left text-gray-300 text-sm space-y-0">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Project_card;
