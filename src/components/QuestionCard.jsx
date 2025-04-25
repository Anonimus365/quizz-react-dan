import { motion } from "framer-motion";

export function QuestionCard({ questionData, handleAnswer }) {
  return (
    <motion.div
      className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {questionData.question}
      </h2>
      <div className="space-y-3">
        {questionData.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(option)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
