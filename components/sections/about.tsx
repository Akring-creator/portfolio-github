import { RevealOnScroll } from "../revealonscroll";
export const About = () => {
  const webProgrammingSkills = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
    "Prisma",
    "PHP",
  ];

  const deepLearningSkills = [
    "Python",
    "Google Cloud Platform",
    "Hugging Face",
    "PyTorch",
    "TensorFlow",
    "Pinecone",
  ];

  const gisSkills = ["QGIS", "ArcGIS", "Qt Creator", "Google Earth Engine"];

  const curriculumDevelopmentSkills = [
    "K-13",
    "Pearson",
    "IGCSE",
    "Merdeka Curriculum",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">GIS </h3>
                <div className="flex flex-wrap gap-2">
                  {gisSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Web Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {webProgrammingSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Deep Learning</h3>
                <div className="flex flex-wrap gap-2">
                  {deepLearningSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Curriculum Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {curriculumDevelopmentSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Ed. in Geography Education</strong> - Indonesia
                  University of Education (2019-2024)
                </li>
                <li>
                  <strong> Machine Learning Specialization </strong> - Bangkit
                  Academy (2022)
                </li>
                <li>
                  <strong> Tensorflow Developer Certification </strong> - Google
                  (2022)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Research Assistant at Indonesia University of Education
                    (2023 - 2024){" "}
                  </h4>
                  <p>
                    Developed deep learning model and QGIS plugin for land
                    segmentation
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Curriculum and Development Intern at Early Engineer (2022 -
                    2023 ){" "}
                  </h4>
                  <p>
                    Oversaw curriculum and content development in the production
                    division.{" "}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Geospatial Engineer Intern at Berau Coal (2022 - 2023 ){" "}
                  </h4>
                  <p>
                    I undertook the development of a user-friendly geoportal
                    accessible to the general public.{" "}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Teaching Assistant at Indonesia University of Education
                    (2022 - 2023 ){" "}
                  </h4>
                  <p>
                    Assisted lecturers in teaching the Leaflet.js framework and
                    CodeIgniter as part of the WebGIS Development course.{" "}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Project-Based Intern at Home Credit (2022){" "}
                  </h4>
                  <p>
                    Develop machine learning algorithms to predict credit
                    scores.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Geospatial intern at Berau Coal (2022){" "}
                  </h4>
                  <p>
                    Develop a GIS website for monitoring and evaluating program
                    in CSR Department
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
