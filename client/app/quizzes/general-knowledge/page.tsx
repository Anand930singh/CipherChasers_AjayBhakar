import { QuizCard } from "@/components/modules/QuizCard";
import { moduleSpecific } from "@/types/quizzes";
import React from "react";

export default function Page() {
  const generalKnowledge: moduleSpecific[] = [
    {
      title: "Cybersecurity Fundamentals",
      description: "Essential knowledge for digital forensics",
      topics: [
        "Security Principles",
        "Network Basics",
        "Digital Evidence Handling",
      ],
      questions: 40,
      timeLimit: 60,
      difficulty: "Beginner",
      completed: true,
      score: 88,
    },
    {
      title: "Investigation Methodologies",
      description: "Core investigation concepts and procedures",
      topics: ["Evidence Collection", "Chain of Custody", "Report Writing"],
      questions: 35,
      timeLimit: 50,
      difficulty: "Intermediate",
      completed: false,
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      {generalKnowledge?.map((quiz, index) => (
        <QuizCard quiz={quiz} key={index} />
      ))}
    </div>
  );
}
