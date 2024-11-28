import React, { useState } from 'react';

function App() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const handleInputChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleSubmit = () => {
    if (gameOver) return;

    const guess = parseInt(userGuess, 10);

    if (guess === randomNumber) {
      setMessage("Ura! Siz topdingiz, yutdingiz!");
      setGameOver(true);
    } else if (guess > randomNumber) {
      setMessage("Topomadiz, men o'ylagan son siz aytgan sondan kattaroq.");
    } else if (guess < randomNumber) {
      setMessage("Topomadiz, men o'ylagan son siz aytgan sondan kichik.");
    }
  };

  const restartGame = () => {
    setUserGuess('');
    setMessage('');
    setGameOver(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>son kiriting</h1>
      <input
        type="number"
        value={userGuess}
        onChange={handleInputChange}
        disabled={gameOver}
        style={styles.input}
        min="1"
        max="10"
      />
      <button onClick={handleSubmit} style={styles.button} disabled={gameOver}>bosing</button>

      {message && <p style={styles.message}>{message}</p>}

      {gameOver && (
        <button onClick={restartGame} style={styles.restartButton}>qayta son kiritish</button>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#4CAF50',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '200px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  message: {
    fontSize: '1.2rem',
    color: '#FF6347',
    marginTop: '20px',
  },
  restartButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#FF6347',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default App;
