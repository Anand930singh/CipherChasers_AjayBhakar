"use client";

import React, { useState } from "react";
// import { useRouter } from "next/router";
import { questions } from "@/data/tempQuiz";
import { CircleX } from "lucide-react";
import { FaCheck } from "react-icons/fa6";

export default function Page() {
  //   const router = useRouter();
  // const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
  //   Array(questions.length).fill("")
  // );
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (questionIndex: number, option: string) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = option;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const quizData = {
    title: "Cloud Forensics Assessment",
    description:
      "Test your knowledge of cloud-based investigation techniques and methodologies",
    duration: 30, // minutes
    totalQuestions: 20,
    passingScore: 70,
    questions: [
      {
        id: 1,
        question:
          "Which AWS service is primarily used for logging API activities across AWS services?",
        options: [
          "AWS CloudTrail",
          "AWS CloudWatch",
          "AWS Config",
          "AWS GuardDuty",
        ],
        correctAnswer: 0,
        explanation:
          "AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account.",
      },
      {
        id: 2,
        question: "What is the primary purpose of AWS GuardDuty?",
        options: [
          "Load Balancing",
          "Threat Detection",
          "Database Management",
          "Content Delivery",
        ],
        correctAnswer: 1,
        explanation:
          "AWS GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior.",
      },
      // Add more questions as needed
    ],
  };

  const [selectedAnswers, setSelectedAnswers] = useState({});

  return (
    // <div className="py-20 px-2 max-w-3xl w-full text-slate-300 mx-auto">
    //   <h1 className="text-2xl font-bold mb-8">Quiz</h1>
    //   {questions.map((question, index) => (
    //     <div key={index} className="mb-6">
    //       <div className="font-semibold items-center flex gap-2 mb-2">
    //         <>
    //           {submitted && (
    //             <div className="text-sm">
    //               {selectedAnswers[index] === question.answer ? (
    //                 <FaCheck className="text-green-500" />
    //               ) : (
    //                 <CircleX className="text-red-500" />
    //               )}
    //             </div>
    //           )}
    //         </>
    //         <>
    //           {index + 1}. {question.question}
    //         </>
    //       </div>
    //       <div className="space-y-2 pl-10">
    //         {question.options.map((option, optionIndex) => (
    //           <label key={optionIndex} className="flex items-center space-x-2">
    //             <input
    //               type="radio"
    //               name={`question-${index}`}
    //               value={option}
    //               checked={selectedAnswers[index] === option}
    //               onChange={() => handleOptionChange(index, option)}
    //               className="mr-2"
    //             />
    //             <span>{option}</span>
    //           </label>
    //         ))}
    //       </div>
    //       {submitted && (
    //         <div className="mt-2 text-sm ml-10 w-full">
    //           {selectedAnswers[index] === question.answer ? (
    //             <div className="text-green-100 w-full rounded px-2 py-1 bg-green-500">
    //               Correct!
    //             </div>
    //           ) : (
    //             <div className="text-red-100 w-full rounded px-2 py-1 bg-red-500">
    //               Incorrect, correct answer: {question.answer}
    //             </div>
    //           )}
    //         </div>
    //       )}
    //     </div>
    //   ))}
    //   <button
    //     onClick={handleSubmit}
    //     className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    //   >
    //     Submit
    //   </button>
    // </div>

    <div className="w-full space-y-6">
      <div className="space-y-6 mx-4 py-10">
        {quizData.questions.map((question, questionIndex) => (
          <div key={questionIndex} className="bg-card shadow-main p-6 rounded">
            <div className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1">{questionIndex + 1}</div>
                  <div className="text-lg font-medium text-primary-text flex-1">
                    {question.question}
                  </div>
                </div>

                <div className="space-y-3 text-text pl-12">
                  {question.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() =>
                        setSelectedAnswers({
                          ...selectedAnswers,
                          [questionIndex]: optionIndex,
                        })
                      }
                      className={`w-full text-left p-4 rounded text-sm hover:bg-card-hover border transition-all ${
                        selectedAnswers[questionIndex] === optionIndex
                          ? "bg-card-hover border-border-card"
                          : "hover:border-border-card"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                            selectedAnswers[questionIndex] === optionIndex
                              ? "border-blue-600 bg-blue-400 text-white"
                              : "border-gray-300"
                          }`}
                        >
                          {String.fromCharCode(65 + optionIndex)}
                        </div>
                        {option}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 bg-[#08060e]/90 backdrop-blur border-t z-[60] p-4 shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Test</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-slate-200 rounded text-black hover:bg-slate-100"
            >
              Submit Quiz
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {quizData.questions.map((_, index) => (
            <div
              key={index}
              className="w-8 h-8 flex border rounded items-center justify-center"
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
