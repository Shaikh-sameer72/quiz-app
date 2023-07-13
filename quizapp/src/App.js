import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Who is the best technician?",
      answers: [
        {
          text: "sala",
          correct: true,
        },
        {
          text: "maryam",
          correct: false,
        },
        {
          text: "fatma",
          correct: false,
        },
        {
          text: "nuha",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Among this who Came first in DCRC?",
      answers: [
        {
          text: "Khalid",
          correct: true,
        },
        {
          text: "Amel",
          correct: false,
        },
        {
          text: "Mayasah",
          correct: false,
        },
        {
          text: "Zulaikha",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "who is the most courageous Staff in DCRC?",
      answers: [
        {
          text: "Intesar",
          correct: false,
        },
        {
          text: "Sala/Hessa",
          correct: true,
        },
        {
          text: "Hara",
          correct: false,
        },
        {
          text: "Tammam",
          correct: false,
        },
      ]
    },
        {
          id: 4,
          question: "who is the best Director of DCRC?",
          answers: [
            {
              text: "DR.Fatma",
              correct: false,
            },
            {
              text: "DR.Theofanis",
              correct: false,
            },
            {
              text: "DR.Maha",
              correct: false,
            },
            {
              text: "DR.Hatim",
              correct: true,
            },
          ]
        },
            {
              id: 5,
              question: "who is the best reception staff in DCRC?",
              answers: [
                {
                  text: "Amel/Mayasah/Zulaikha",
                  correct: true,
                },
                {
                  text: "Eman",
                  correct: false,
                },
                {
                  text: "Nadia",
                  correct: false,
                },
                {
                  text: "Moza",
                  correct: false,
                },
              ]
            },
                {
                  id: 6,
                  question: "What is the full form of DCRC?",
                  answers: [
                    {
                      text: "Document Control Research Centre",
                      correct: false,
                    },
                    {
                      text: "Dental Centre Research Centre?",
                      correct: false,
                    },
                    {
                      text: "Dubai Cord Blood and research Centre?",
                      correct: true,
                    },
                
                    {
                      text: "Digital Centre and research Centre?",
                      correct: false,
                    },
                  ]
                },
                    {
                      id: 7,
                      question: "who is the best Staff in DCRC?",
                      answers: [
                        {
                          text: "Intesar",
                          correct: false,
                        },
                        {
                          text: "sala",
                          correct: true,
                        },
                        {
                          text: "Hara",
                          correct: false,
                        },
                        {
                          text: "Tammam",
                          correct: false,
                        },
                      ]
                    },
                        {
                          id: 8,
                          question: "which is the best department in DCRC?",
                          answers: [
                            {
                              text: "HLA Lab",
                              correct: false,
                            },
                            {
                              text: "Processing Lab",
                              correct: false,
                            },
                            {
                              text: "Cryogenic Lab",
                              correct: true,
                            },
                            {
                              text: "Reception",
                              correct: true,
                            },
                          ]
                        },
                            {
                              id: 9,
                              question: "Among this which staff came first in DCRC lab?",
                              answers: [
                                {
                                  text: "Nuha",
                                  correct: true,
                                },
                                {
                                  text: "Maryam",
                                  correct: false,
                                },
                                {
                                  text: "Nora",
                                  correct: false,
                                },
                                {
                                  text: "Fatma",
                                  correct: false,
                                },
                              ]
                            },
                                {
                                  id: 10,
                                  question: "who is the youngest laboratory Attendant?",
                                  answers: [
                                    {
                                      text: "Mohammed Sameer",
                                      correct: true,
                                    },
                                    {
                                      text: "Lijil",
                                      correct: false,
                                    },
                                    {
                                      text: "Khalid",
                                      correct: false,
                                    },
                                    {
                                      text: "Ibrahim",
                                      correct: true,
                                    },
                                  ]
                                },
                                    {
                                      id: 11,
                                      question: "who is the Best Reception Manager?",
                                      answers: [
                                        {
                                          text: "DR.Fatma",
                                          correct: false,
                                        },
                                        {
                                          text: "DR.Rehab",
                                          correct: false,
                                        },
                                        {
                                          text: "Mr. Ahmed Talib",
                                          correct: true,
                                        },
                                        {
                                          text: "DR.Khalid",
                                          correct: false,
                                        },
                                      ]
                                    },
                                        {
                                          id: 12,
                                          question: "In which Year DCRC started?",
                                          answers: [
                                            {
                                              text: "2007",
                                              correct: false,
                                            },
                                            {
                                              text: "2006",
                                              correct: true,
                                            },
                                            {
                                              text: "2004",
                                              correct: false,
                                            },
                                            {
                                              text: "2005",
                                              correct: false,
                                            },
                                          ]
                                        },
                                            {
                                              id: 13,
                                              question: "who listen Quran every morning in DCRC?",
                                              answers: [
                                                {
                                                  text: "Eman",
                                                  correct: false,
                                                },
                                                {
                                                  text: "Moza",
                                                  correct: false,
                                                },
                                                {
                                                  text: "Nadia",
                                                  correct: true,
                                                },
                                                {
                                                  text: "hara",
                                                  correct: false,
                                                },
                                              ]
                                            },
                                                {
                                                  id: 14,
                                                  question: "who is the youngest technician in DCRC?",
                                                  answers: [
                                                    {
                                                      text: "Hessa",
                                                      correct: true,
                                                    },
                                                    {
                                                      text: "Sala",
                                                      correct: false,
                                                    },
                                                    {
                                                      text: "Maryam",
                                                      correct: false,
                                                    },
                                                    {
                                                      text: "Fatma",
                                                      correct: false,
                                                    },
                                                  ]
                                                },
                                                    {
                                                      id: 15,
                                                      question: "which trio has the best friendship in DCRC?",
                                                      answers: [
                                                        {
                                                          text: "Nuha/Nora/Maryam",
                                                          correct: false,
                                                        },
                                                        {
                                                          text: "Khalid/Lijil/Sameer",
                                                          correct: false,
                                                        },
                                                        {
                                                          text: "Hessa/Sala/Hara",
                                                          correct: false,
                                                        },
                                                        {
                                                          text: "Amel/Mayasah/Zulaikha",
                                                          correct: true,
                                                        }                                 
      ],
    },

  ]

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ],
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;