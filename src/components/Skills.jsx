import { FaHtml5, FaCss3Alt, FaReact, FaWordpress, FaNodeJs, FaGit, FaGithub, FaPython, FaFigma, FaCode } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiJquery, SiExpress, SiPhp, SiFirebase, SiMysql, SiDotnet, SiUnity } from 'react-icons/si';
import { Tooltip } from "@material-tailwind/react";

function Skills() {
  return (
    <section className="py-24 mx-auto px-4 sm:px-8 lg:px-[25%]">
      <h2 className="text-3xl text-white font-semibold mb-12 text-center">
        Skills
      </h2>
      <div className="max-w-[300px] mx-auto md:max-w-none md:grid md:grid-cols-3 md:gap-8">
        <div className="bg-neutral/30 backdrop-blur-xs rounded-2xl shadow-md p-6 text-left border border-[#a68bfb] mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-2 text-white">Front-End</h3>
          <p className="text-gray-200 mb-4">
            Tvorba moderních, responzivních webových aplikací s důrazem na
            UX/UI.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Tooltip content="HTML5" className="bg-purple-900">
              <FaHtml5 className="text-3xl text-orange-600 hover:scale-110 transition-transform" />
            </Tooltip>
            <Tooltip content="CSS3" className="bg-purple-900">
              <FaCss3Alt className="text-3xl text-blue-600 hover:scale-110 transition-transform" />
            </Tooltip>
            <Tooltip content="JavaScript" className="bg-purple-900">
              <SiJavascript className="text-3xl text-yellow-400 hover:scale-110 transition-transform" />
            </Tooltip>
            <Tooltip content="React" className="bg-purple-900">
              <FaReact className="text-3xl text-cyan-400 hover:scale-110 transition-transform" />
            </Tooltip>
            <Tooltip content="Tailwind CSS" className="bg-purple-900">
              <SiTailwindcss className="text-3xl text-sky-400 hover:scale-110 transition-transform" />
            </Tooltip>
            <Tooltip content="jQuery" className="bg-purple-900">
              <SiJquery className="text-3xl text-blue-400 hover:scale-110 transition-transform" />
            </Tooltip>
            <Tooltip content="WordPress" className="bg-purple-900">
              <FaWordpress className="text-3xl text-blue-800 hover:scale-110 transition-transform" />
            </Tooltip>
          </div>
        </div>

        <div className="bg-neutral/30 backdrop-blur-xs rounded-2xl shadow-md p-6 text-left border border-[#a68bfb] mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-2 text-white">Back-End</h3>
          <p className="text-gray-200 mb-4">
            Návrhy a správa databází, účinná řešení backend převážně pomocí PHP.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Tooltip content="PHP" className="bg-purple-900">
              <SiPhp className="text-3xl text-purple-600 hover:scale-110 transition-transform" />
            </Tooltip>
            <Tooltip content="Node.js" className="bg-purple-900">
              <FaNodeJs className="text-3xl text-green-600 hover:scale-110 transition-transform" />
            </Tooltip>
            <Tooltip content="Firebase" className="bg-purple-900">
              <SiFirebase className="text-3xl text-yellow-500 hover:scale-110 transition-transform" />
            </Tooltip>
            <Tooltip content="MySQL" className="bg-purple-900">
              <SiMysql className="text-3xl text-blue-600 hover:scale-110 transition-transform" />
            </Tooltip>
          </div>
        </div>

        <div className="bg-neutral/30 backdrop-blur-xs rounded-2xl shadow-md p-6 text-left border border-[#a68bfb]">
          <h3 className="text-xl font-semibold mb-2 text-white">Ostatní</h3>
          <p className="text-gray-200 mb-4">
            Verzovací systémy, tvorba desktopových a herních aplikací v Python
            nebo C#.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Tooltip content="Git" className="bg-purple-900">
              <FaGit className="text-3xl text-orange-600 hover:scale-110 transition-transform" />
            </Tooltip>
            <Tooltip content="GitHub" className="bg-purple-900">
              <FaGithub className="text-3xl text-gray-800 hover:scale-110 transition-transform" />
            </Tooltip>
            <Tooltip content=".NET" className="bg-purple-900">
              <SiDotnet className="text-3xl text-blue-700 hover:scale-110 transition-transform" />
            </Tooltip>
            <Tooltip content="Unity" className="bg-purple-900">
              <SiUnity className="text-3xl text-cyan-700 hover:scale-110 transition-transform" />
            </Tooltip>
            <Tooltip content="Python" className="bg-purple-900">
              <FaPython className="text-3xl text-yellow-500 hover:scale-110 transition-transform" />
            </Tooltip>
            <Tooltip content="Figma" className="bg-purple-900">
              <FaFigma className="text-3xl text-pink-600 hover:scale-110 transition-transform" />
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
