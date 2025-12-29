import { motion } from "framer-motion"

const Properties = ({property}) =>{
  return (
     <motion.div 
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0,y:30}}
      animate={{ opacity: 1, y:0}}
      transition={{ duration: 0.4 }}
      className="rounded-xl overflow-hidden shadow-lg"
     >
     </motion.div>
  );
};

export default Properties;