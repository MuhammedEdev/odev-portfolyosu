import './App.css'

function App() {
  const pc = {
    marka: "Apple",
    model: "MacBook Pro",
    yil: 2024
  };

  const { marka, model, yil } = pc;

  const mesaj = `Modern JS ile ${marka} ${model} (${yil}) cihazımı React üzerinde çalıştırıyorum.`;

  return (
    <div className="container">
      <span className="badge">JS Frameworks - Hafta 1</span>
      <h1>Merhaba React!</h1>
      <p className="output">{mesaj}</p>
    </div>
  )
}

export default App