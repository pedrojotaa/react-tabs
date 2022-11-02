import "./App.css";
import { useState, useEffect } from "react";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <main>
      <section>
        <div>
          {jobs.map((item, index) => {
            return (
              <button key={item.id} onClick={()=>setValue(index)}>
                {item.company}
              </button>
            );
          })}
        </div>

        <h3>{title}</h3>
        <h4>{company}</h4>
        <h4>{dates}</h4>

        {duties.map((dutie, index) => {
          return <p key={index}>{dutie}</p>;
        })}
      </section>
    </main>
  );
}

export default App;
