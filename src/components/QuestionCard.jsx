// Importamos 'motion' desde Framer Motion para darle animaciones al componente
import { motion } from "framer-motion";

// Este componente recibe los datos de la pregunta actual y una función para manejar la respuesta seleccionada
export function QuestionCard({ questionData, handleAnswer }) {
  return (
    // Usamos motion.div en lugar de div normal para animar la entrada/salida del componente
    <motion.div
      className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-xl mx-auto"
      
      // Estado inicial antes de montarse: opaco y desplazado hacia abajo
      initial={{ opacity: 0, y: 20 }}

      // Estado al mostrarse: completamente visible y en posición normal
      animate={{ opacity: 1, y: 0 }}

      // Estado al desmontarse (cuando cambia la pregunta o termina el quiz): se desvanece y sube
      exit={{ opacity: 0, y: -20 }}

      // Tiempo de transición para que la animación se vea suave
      transition={{ duration: 0.5 }}
    >
      {/* Título de la pregunta */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {questionData.question}
      </h2>

      {/* Renderizamos cada opción como un botón */}
      <div className="space-y-3">
        {questionData.options.map((option, idx) => (
          <button
            key={idx} // Key única para cada botón
            onClick={() => handleAnswer(option)} // Al hacer clic, se envía la respuesta seleccionada al handler
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
