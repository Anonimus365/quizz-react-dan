import { useState } from 'react'
import { QuestionCard } from './components/QuestionCard';
import { Score } from './components/Score';
import { questions } from './data/questions';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selected) => {
    // Verificar si la respuesta es correcta
    if (selected === questions[currentIndex].answer) {
      setScore(score + 5); // Sumar 5 puntos por respuesta correcta
    }

    // Avanzar a la siguiente pregunta o finalizar el quiz
    const next = currentIndex + 1;
    if (next < questions.length) {
      setCurrentIndex(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-200 via-white to-green-100 flex items-center justify-center p-4">
      {!showScore ? (
        <QuestionCard
          questionData={questions[currentIndex]}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Score score={score} total={questions.length * 5} />
      )}
    </div>
  );
}

export default App;