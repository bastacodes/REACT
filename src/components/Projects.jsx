import Carousel from './Carousel'
import Project_card from './Project_card'

function Projects() {
  return (
    <section className="text-white border-b-3 py-24 bg-[#19191b] mx-auto px-4 sm:px-8 lg:px-[20%]">
      <h2 className="text-3xl font-poppins font-semibold mb-12 text-center">Projekty</h2>
      <div className="flex-none md:flex items-center min-h-[400px]">
        <div>
          <Project_card
            title="DrivePlan"
            description="Webová aplikace pro realtime správu jízd v autoškolách."
            techStack="PHP / JavaScript / Firebase/ HTML / CSS "
            features={[
              "Realtime synchronizace dat přes Firebase",
              "Autentizace a autorizace uživatelů",
              "OneSignal push notifikace",
              "Chatovací aplikace",
            ]}
          />
          <Project_card
            title="API pro ekonomické subjekty"
            description="WordPress plugin pro změnu fontů s integrací Google Fonts."
            techStack="PHP / Jquery / HTML / CSS"
            features={[
              "REST API pro poskytování dat o firmách",
              "Autorizace pomocí Bearer tokenu",
              "Frontend s jQuery pro zobrazení dat",
              "Google login pro autentizaci uživatelů",
            ]}
          />
          <Project_card
            title="WordPress Font Styler Plugin"
            description="WordPress plugin pro změnu fontů s integrací Google Fonts."
            techStack="PHP / JavaScript / WordPress API / Google Fonts API"
            features={[
              "Interaktivní výběr textu pomocí kurzoru",
              "Dynamická změna fontu a barev přímo na stránce",
              "Integrace Google Fonts API pro výběr fontů",
              "Real-time aplikace stylů bez reloadu stránky",
            ]}
          />
          <Project_card
            title="Content management system"
            description="Redakční systém s administračním rozhraním pro správu článků a uživatelů."
            techStack="PHP / HTML / CSS"
            features={[
              "Backendové API pro správu obsahu a uživatelů",
              "Role-based přístup pro různé uživatele",
              "CRUD operace pro články a uživatele",
              "Jednoduché rozdělení admin a front-end části",
            ]}
          />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center px-4 lg:px-0">
          <Carousel />
        </div>

      </div>
    </section>
  )
}

export default Projects
