import { FaFileAlt } from "react-icons/fa";
import bastaImg from "../../img/bastafr.jpeg";

function Hero() {
  return (
    <section className="text-white font-poppins mx-auto px-4 sm:px-8 py-24 lg:px-[25%] border-b-3">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="hidden lg:block flex-shrink-0 mr-10">
          <img
            src={bastaImg}
            alt="František Bašta"
            className="w-56 md:w-64 lg:w-72 h-auto rounded-lg"
          />
        </div>
        <div className="text-center lg:text-left font-medium max-w-xl">
          <p className="text-sm mb-4">
            Jmenuji se František Bašta, a moje specializace je
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-10 leading-snug">
            Tvorba webových aplikací a stránek
          </h1>
          <p className="text-lg font-semibold mb-12">
            Junior Full-Stack Developer
          </p>
          <a
            href="/basta.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto block w-fit lg:mx-0"
            aria-label="Otevřít životopis PDF"
          >
            <FaFileAlt className="text-3xl md:text-6xl text-white hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
