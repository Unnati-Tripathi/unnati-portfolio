// import React from 'react';
// import { motion } from 'framer-motion';
// import { Mail, MessageSquare, Linkedin, Github } from 'lucide-react';

// const socialLinks = [
//   { 
//     icon: <Mail size={32} />, 
//     href: "mailto:unnatitripathi670@gmail.com", //
//     label: "Email"
//   },
//   { 
//     icon: <MessageSquare size={32} />, 
//     href: "https://wa.me/917355530805", //
//     label: "WhatsApp"
//   },
//   { 
//     icon: <Linkedin size={32} />, 
//     href: "https://linkedin.com", //
//     label: "LinkedIn"
//   },
//   { 
//     icon: <Github size={32} />, 
//     href: "https://github.com", //
//     label: "GitHub"
//   }
// ];

// const Connect = () => {
//   return (
//     <section id="connect" className="py-32 text-center bg-[#0d1117] rounded-[3rem] border border-gray-800 mb-20">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//       >
//         <h3 className="text-5xl font-black text-white uppercase mb-4 tracking-tighter">Let's Build Together</h3>
//         <p className="text-gray-400 mb-12 max-w-md mx-auto">
//           Currently open to <span className="text-blue-500">Full-Stack Developer</span> roles and technical collaborations.
//         </p>

//         <div className="flex justify-center gap-6 md:gap-10">
//           {socialLinks.map((link, index) => (
//             <motion.a
//               key={link.label}
//               href={link.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, scale: 0.5 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ scale: 1.2, rotate: 5 }}
//               className="p-5 md:p-6 bg-blue-600 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all"
//             >
//               {link.icon}
//             </motion.a>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Connect;




































import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Linkedin, Github } from 'lucide-react';

const socialLinks = [
  {
    icon: <Mail size={32} />,
    href: "mailto:unnatitripathi670@gmail.com",
    label: "Email"
  },
  {
    icon: <MessageSquare size={32} />,
    href: "https://wa.me/917355530805",
    label: "WhatsApp"
  },
  {
    icon: <Linkedin size={32} />,
    href: "https://www.linkedin.com/in/unnati-tripathi-3b66ab25b/",
    label: "LinkedIn"
  },
  {
    icon: <Github size={32} />,
    href: "https://github.com/Unnati-Tripathi",
    label: "GitHub"
  }
];

const Connect = () => {
  return (
    <section
      id="connect"
      className="py-32 text-center bg-[#0d1117] rounded-[3rem] border border-gray-800 mb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-5xl font-black text-white uppercase mb-4 tracking-tighter">
          Let's Build Together
        </h3>

        <p className="text-gray-400 mb-12 max-w-md mx-auto">
          Currently open to{" "}
          <span className="text-blue-500">Full-Stack Developer</span> roles and
          technical collaborations.
        </p>

        <div className="flex justify-center gap-6 md:gap-10">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-5 md:p-6 bg-blue-600 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Connect;
