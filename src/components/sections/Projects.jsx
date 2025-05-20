import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-lime-400 to-orange-300 bg-clip-text text-transparent leading-right">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-500/30 hover:shadow-[0_2px_8px_rgba(255, 215, 0, 1)] transition">
              <h3 className="text-xl font-bold mb-2"> Task App</h3>
              <p className="text-gray-400 mb-4">
                A group project where we used the LAMP stack to create a website
                where you could manage tasks or goals for the day.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Linux", "Node.js", "MySQLite", "MySQL", "Apache", "PHP"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-lime-100 py-1 px-3 rounded-full text-sm hover:bg-lime-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] hover:text-lime-300 transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/bmoore639/laravel-task-app3"
                  className="bg-gradient-to-r from-lime-400 to-orange-300 bg-clip-text text-transparent leading-right"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-lime-500/30
              hover:shadow-[0_4px_20px_rgba(255, 215, 0, 1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">MECAZON</h3>
              <p className="text-gray-400 mb-4">
                A project that had multiple groups working together to work on
                one website to get experience working in a company environment.
                The website used the MERN stack and I was the leader of my team
                managing the frontend functionality.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["|MongoDB | ", "Express.js | ", "React | ", "Node.js|"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-lime-100 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-lime-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                      hover:text-lime-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/BrockRMoore/12pm-MECAZON-client-production"
                  className="bg-gradient-to-r from-lime-400 to-orange-300 bg-clip-text text-transparent leading-right"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2"></h3>
              <p className="text-gray-400 mb-4">

              </p> */}
              {/* <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div> */}
              {/* <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div> */}

            {/* <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2"></h3>
              <p className="text-gray-400 mb-4">
                
              </p> */}
              {/* <div className="flex flex-wrap gap-2 mb-4">
                {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
