import "./App.css";
import CohortDetails from "./components/CohortDetails";

function App() {
  const cohorts = [
    {
      code: "INTADMDF10 -.NET FSD",
      startedOn: "22-Feb-2022",
      currentStatus: "Scheduled",
      coach: "Aathma",
      trainer: "Jojo Jose",
    },
    {
      code: "ADM21JF014 -Java FSD",
      startedOn: "10-Sep-2021",
      currentStatus: "Ongoing",
      coach: "Apoorv",
      trainer: "Elisa Smith",
    },
    {
      code: "CDBJF21025 -Java FSD",
      startedOn: "24-Dec-2021",
      currentStatus: "Ongoing",
      coach: "Aathma",
      trainer: "John Doe",
    },
  ];

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "35px",
        padding: "15px",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          marginBottom: "25px",
          fontFamily: "Calibri, Arial, sans-serif",
        }}
      >
        Cohorts Details
      </h1>

      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;