import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name="Madhavi"
        School="Vidyanjali"
        total={284}
        goal={3}
      />
    </div>
  );
}

export default App;