function Project_card({ title, description, techStack, features = [] }) {
  return (
    <div className="bg-[#252529] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-3xl mx-auto px-6 py-8">
      <div className="flex flex-col lg:flex-row lg:items-start gap-8">
        {/* Text block */}
        <div className="lg:w-2/3 text-center lg:text-left">
          <h3 className="text-3xl font-semibold mb-3  font-poppins">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <p className="text-gray-400 italic mb-5">{techStack}</p>

          {features.length > 0 && (
            <ul className="list-disc list-inside text-left text-gray-300 text-sm space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="hover:text-[#a68bfb] transition-colors duration-200 cursor-default">
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Optional: zde může být obrázek / carousel nebo místo na další info */}
        {/* <div className="lg:w-1/3">
          ... případný obrázek nebo Carousel ...
        </div> */}
      </div>
    </div>
  );
}

export default Project_card;
