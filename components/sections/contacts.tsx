import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi";
import { RevealOnScroll } from "../revealonscroll";

const Contacts = () => {
  return (
    <section id="contacts" className="py-12 px-4 sm:px-6 lg:px-8 ">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center  mb-12 "
          >
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </div>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-lg shadow-md border border-white/10 hover:border-blue-500/30 "
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
                  <FiMail className="text-blue-600 dark:text-blue-300 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
              </div>
              <a
                href="mailto:akmalimaanliari10@gmail.com"
                className="text-gray-500 dark:text-gray-100 hover:text-blue-400 transition-colors"
              >
                akmalimanliari10@gmail.com
              </a>
            </motion.div>

            {/* Social Links (Contoh tambahan) */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-lg shadow-md border border-white/10 hover:border-blue-500/30"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 mr-4">
                  <FiMapPin className="text-purple-600 dark:text-purple-300 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-white">Social</h3>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/muhammad-akmalul-iman-liari-1aa484231/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FiLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://github.com/Akring-creator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-white transition-colors"
                >
                  <FiGithub className="text-2xl" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contacts;
