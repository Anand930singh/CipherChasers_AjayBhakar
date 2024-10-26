import { QuizCard } from "@/components/modules/QuizCard";
import { moduleSpecific } from "@/types/quizzes";
import React from "react";

export default function Page() {
  const moduleQuizzes: moduleSpecific[] = [
    {
      title: "Cloud Forensics Assessment",
      description:
        "Test your knowledge of cloud-based investigation techniques",
      topics: [
        "AWS CloudTrail Analysis",
        "Azure AD Logs",
        "Cloud Storage Forensics",
      ],
      questions: 25,
      timeLimit: 45,
      difficulty: "Intermediate",
      completed: true,
      score: 92,
      link: "cloud-forensics-assessment",
    },
    {
      title: "Cryptocurrency Investigation Quiz",
      description: "Evaluate your crypto transaction tracing skills",
      topics: [
        "Wallet Analysis",
        "Transaction Tracking",
        "Exchange Interactions",
      ],
      questions: 30,
      timeLimit: 60,
      difficulty: "Advanced",
      completed: false,
      link: "cryptocurrency-investigation-quiz",
    },
    {
      title: "Blockchain Forensics Examination",
      description: "Test your blockchain analysis capabilities",
      topics: [
        "Smart Contract Analysis",
        "DeFi Protocol Investigation",
        "Cross-chain Tracking",
      ],
      questions: 20,
      timeLimit: 40,
      difficulty: "Expert",
      completed: false,
      link: "blockchain-forensics-examination",
    },
  ];
  return (
    <div className="flex flex-col gap-4 p-4">
      {moduleQuizzes?.map((quiz, index) => (
        <QuizCard quiz={quiz} key={index} />
      ))}
    </div>
  );
}
