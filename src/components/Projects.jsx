import Project_card from './Project_card'

function Projects() {
  return (
    <section className="text-white py-24 bg-[#19191b] mx-auto px-4 sm:px-8 lg:px-[20%] flex flex-col items-center gap-12 border-b-3">
      <h2 className="text-3xl font-poppins font-semibold mb-12 text-center">Projekty</h2>
      
      <div className="w-full max-w-3xl text-center">
        <Project_card
          title="DrivePlan"
          description="Webová aplikace pro realtime správu jízd v autoškolách."
          techStack="PHP / JavaScript / Firebase / HTML / CSS"
          features={[
            "Realtime synchronizace dat přes Firebase",
            "Autentizace a autorizace uživatelů",
            "OneSignal push notifikace",
            "Chatovací aplikace",
          ]}
        />
      </div>
      
      <div className="w-full max-w-3xl text-center">
        <Project_card
          title="API pro ekonomické subjekty"
          description="Vlastní API pro poskytování dat o firmách."
          techStack="PHP / jQuery / HTML / CSS"
          features={[
            "Autorizace pomocí Bearer tokenu",
            "Frontend s jQuery pro zobrazení dat",
            "Google login pro autentizaci uživatelů",
          ]}
        />
      </div>
      
      <div className="w-full max-w-3xl text-center">
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
      </div>
      
      <div className="w-full max-w-3xl text-center">
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
    </section>
  )
}

export default Projects
