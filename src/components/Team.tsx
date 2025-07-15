import { motion } from "framer-motion";
import Joao from "../assets/people/joao.png";
import Higor from "../assets/people/higor.png";
import Vini from "../assets/people/vini.png";

const Team = () => {
  const team = [
    {
      name: "Jn (João)",
      role: "Developer and Designer",
      bio: "Passionate about brand design and front-end development, helping create beautiful user experiences with all sorts of technologies. More at jn-dev.com",
      image: "https://github.com/jnzinho.png",
    },
    {
      name: "Higor",
      role: "Developer and Designer",
      bio: "Skilled in multiple languages, specializing in creating complex algorithms and systems for our projects. More at higor.dev",
      image: "https://github.com/higorwilvert.png",
    },
    {
      name: "Vini",
      role: "Developer and Designer",
      bio: "Passionate about creating impactful projects that help people, bringing ideas to life using Next.js and modern web technologies.",
      image: "https://github.com/lemesvini.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="team" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 heading-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet The Team
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The friends behind Devine, building innovative open source solutions
            together.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden bg-background border group"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="h-64 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary/80 mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
