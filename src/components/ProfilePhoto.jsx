import React from "react";
import { motion } from "framer-motion";

const ProfilePhoto = () => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-20"
    >
      <div
        className="
          w-64 h-64
          rounded-full
          overflow-hidden
          border-2 border-blue-500/30
          shadow-[0_0_60px_rgba(59,130,246,0.35)]
        "
      >
        <img
          src="/your-photo.png"   // 🔴 put image in public/
          alt="Unnati Tripathi"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </motion.div>
  );
};

export default ProfilePhoto;
