// Your main page file, e.g., Page.tsx

"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import SidebarContent from "@/components/SidebarContent";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const modules = [
  {
    title: "Foundations of Blockchain Technology and Its Applications",
    description:
      "This module introduces the fundamental concepts of blockchain technology, including its architecture, consensus mechanisms, and real-world applications in various industries.",
    sections: [
      { title: "Reading Materials", href: "/module1/reading" },
      { title: "Video Lectures", href: "/module1/videos" },
      { title: "Practice Exercises", href: "/module1/exercises" },
      { title: "References", href: "/module1/references" },
    ],
  },
  {
    title: "Comprehensive Guide to Cryptocurrency and Digital Assets",
    description:
      "Dive into the world of cryptocurrencies, covering their history, types, and how to invest safely in digital assets.",
    sections: [
      { title: "Reading Materials", href: "/module2/reading" },
      { title: "Video Lectures", href: "/module2/videos" },
      { title: "Case Studies", href: "/module2/case-studies" },
      { title: "References", href: "/module2/references" },
    ],
  },
  {
    title: "In-Depth Market Analysis Techniques and Trading Strategies",
    description:
      "Learn advanced techniques for analyzing cryptocurrency markets and develop strategies to trade effectively.",
    sections: [
      { title: "Reading Materials", href: "/module3/reading" },
      { title: "Video Lectures", href: "/module3/videos" },
      { title: "Trading Simulations", href: "/module3/simulations" },
      { title: "Market Analysis Tools", href: "/module3/tools" },
      { title: "References", href: "/module3/references" },
    ],
  },
  {
    title: "Exploring Current Trends and Future Innovations in Cryptocurrency",
    description:
      "Stay updated on the latest trends in the crypto space and explore future innovations that could shape the industry.",
    sections: [
      { title: "Reading Materials", href: "/module4/reading" },
      { title: "Video Lectures", href: "/module4/videos" },
      { title: "Research Papers", href: "/module4/research" },
    ],
  },
];

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Main content */}
      <main
        className={`flex-1 p-6 transition-all duration-300 ease-in-out ${
          !isSidebarOpen ? "md:mr-0" : "md:mr-[300px]"
        }`}
      >
        <div className="md:hidden flex justify-end mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <div className="hidden md:flex justify-end mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="fixed right-4 top-4 z-20"
          >
            {isSidebarOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Hero Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to the Cryptocurrency Learning Platform
          </h1>
          <p className="text-lg mb-4">
            This platform is designed to provide comprehensive learning
            resources about cryptocurrency, blockchain technology, and trading
            strategies. Explore various modules tailored to enhance your
            knowledge and skills in the rapidly evolving digital asset
            landscape.
          </p>
        </section>

        {/* Module Descriptions */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Modules Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((module, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-white"
              >
                <h3 className="text-xl font-semibold">{module.title}</h3>
                <p className="text-sm mt-2">{module.description}</p>
                <div className="mt-4">
                  {module.sections.map((section, sectionIndex) => (
                    <a
                      key={sectionIndex}
                      href={section.href}
                      className="block text-sm text-yellow-200 hover:underline"
                    >
                      {section.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">
                Introduction to Blockchain Technology
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  Blockchain technology represents a revolutionary approach to
                  storing and tracking data that emphasizes security,
                  transparency, and decentralization. At its core, a blockchain
                  is a distributed ledger that records transactions across a
                  network of computers.
                </p>
                <h4 className="text-xl font-semibold mb-3">Key Concepts</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      <strong>Decentralization:</strong> No single entity
                      controls the network
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      <strong>Immutability:</strong> Once recorded, data cannot
                      be altered
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      <strong>Consensus:</strong> Network participants must
                      agree on the state of the ledger
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Video Lecture</h3>
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/SSo_EIwHSd4"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Understanding Blockchain Fundamentals
              </h4>
              <p className="text-gray-600">
                A comprehensive introduction to blockchain technology and its
                core concepts.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">
                Case Study: Bitcoin
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  Bitcoin represents the first and most successful
                  implementation of blockchain technology, serving as the
                  pioneering case study for decentralized digital currencies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>Created in 2008 by Satoshi Nakamoto</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>Solved the double-spending problem</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>First successful decentralized digital currency</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">
                References & Additional Resources
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    Academic Papers
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Bitcoin: A Peer-to-Peer Electronic Cash System
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Blockchain: A New Framework
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Books</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Mastering Bitcoin by A. Antonopoulos
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Blockchain Revolution by Don Tapscott
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">
                Comprehensive Guide to Cryptocurrency and Digital Assets
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  Cryptocurrency represents a transformative shift in how value
                  is exchanged and stored digitally. These digital assets
                  utilize blockchain technology to secure transactions, create
                  new units, and verify asset transfers without the need for a
                  central authority.
                </p>
                <h4 className="text-xl font-semibold mb-3">Key Concepts</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      <strong>Decentralization:</strong> Cryptocurrencies
                      operate on a decentralized network, eliminating the need
                      for intermediaries.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      <strong>Cryptography:</strong> Advanced encryption
                      techniques ensure secure transactions and control the
                      creation of new units.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      <strong>Tokenomics:</strong> The study of how
                      cryptocurrencies operate within their ecosystems,
                      including supply, demand, and utility.
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Video Lecture</h3>
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/VYWc9dFqROI?si=cXk9KGw37bB_9llB"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Understanding Cryptocurrency Fundamentals
              </h4>
              <p className="text-gray-600">
                A detailed overview of cryptocurrencies, their mechanisms, and
                their impact on the financial landscape.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">
                Case Study: Ethereum
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  Ethereum stands as a prominent case study in the
                  cryptocurrency realm, enabling smart contracts and
                  decentralized applications (dApps).
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>Launched in 2015 by Vitalik Buterin</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>Introduced the concept of smart contracts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      Facilitates decentralized applications on its platform
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">
                References & Additional Resources
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    Academic Papers
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        A Next-Generation Smart Contract and Decentralized
                        Application Platform
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        The Genesis of Ethereum: A Case Study
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Books</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Ethereum: Blockchains, Digital Assets, and Smart
                        Contracts by Daniel Drescher
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Mastering Ethereum by Andreas M. Antonopoulos and Gavin
                        Wood
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">
                In-Depth Market Analysis Techniques and Trading Strategies
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  Understanding market analysis techniques is essential for
                  making informed trading decisions in the cryptocurrency space.
                  This section covers both technical and fundamental analysis
                  methods, providing insights into market trends and trading
                  strategies.
                </p>
                <h4 className="text-xl font-semibold mb-3">Key Concepts</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      <strong>Technical Analysis:</strong> Analyzing price
                      charts and patterns to forecast future price movements.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      <strong>Fundamental Analysis:</strong> Evaluating the
                      intrinsic value of a cryptocurrency based on its
                      technology, team, and market demand.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      <strong>Risk Management:</strong> Strategies to minimize
                      potential losses while maximizing gains in trading.
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Video Lecture</h3>
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/lW3eWIj3Q04?si=U4qz3e5a2aAW_aCq"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Mastering Market Analysis and Trading Strategies
              </h4>
              <p className="text-gray-600">
                An in-depth exploration of market analysis techniques and
                effective trading strategies in the cryptocurrency market.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">
                Case Study: Trading Strategies
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  This case study examines successful trading strategies used by
                  experienced cryptocurrency traders, highlighting their
                  techniques and outcomes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      Scalping: A short-term trading strategy focused on small
                      price movements.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      Day Trading: Buying and selling assets within the same
                      trading day.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      Swing Trading: Holding positions for several days to
                      capture short-term market moves.
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">
                References & Additional Resources
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    Academic Papers
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Technical Analysis: A Comprehensive Guide
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Fundamentals of Cryptocurrency Trading
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Books</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Trading in the Zone by Mark Douglas
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        The New Trading for a Living by Dr. Alexander Elder
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">
                Exploring Current Trends and Future Innovations in
                Cryptocurrency
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  The cryptocurrency landscape is constantly evolving, driven by
                  technological advancements and shifting market dynamics. This
                  section explores the latest trends and potential future
                  innovations shaping the cryptocurrency ecosystem.
                </p>
                <h4 className="text-xl font-semibold mb-3">Key Trends</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      <strong>Decentralized Finance (DeFi):</strong> The rise of
                      financial services using smart contracts on blockchains.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      <strong>Non-Fungible Tokens (NFTs):</strong> Unique
                      digital assets representing ownership of specific items or
                      content.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      <strong>Layer 2 Solutions:</strong> Technologies designed
                      to improve scalability and transaction speed on blockchain
                      networks.
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Video Lecture</h3>
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/21b5QF-b0rE?si=XP7voT6li6LS2yXx"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Trends and Innovations in Cryptocurrency
              </h4>
              <p className="text-gray-600">
                An insightful look into the current trends and emerging
                innovations within the cryptocurrency market.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">
                Research Paper: The Future of Cryptocurrency
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  This research paper delves into the future trajectory of
                  cryptocurrency, examining the implications of new technologies
                  and regulatory frameworks on market development.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      Exploration of quantum computing and its potential impact
                      on cryptocurrency security.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      The role of central bank digital currencies (CBDCs) in the
                      future financial landscape.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                    <span>
                      Innovations in privacy and scalability solutions for
                      blockchain networks.
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">
                References & Additional Resources
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    Research Papers
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        The Future of Cryptocurrency: Opportunities and
                        Challenges
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Blockchain Technology: Current Trends and Future
                        Directions
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Books</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        The Basics of Bitcoins and Blockchains by Antony Lewis
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:underline">
                        Cryptoassets: The Innovative Investor's Guide to Bitcoin
                        and Beyond by Chris Burniske and Jack Tatar
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Desktop sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full hidden md:block transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } bg-background border-l w-[300px]`}
      >
        <SidebarContent
          modules={modules}
          onClose={() => setIsSidebarOpen(false)}
        />
      </aside>
    </div>
  );
}

export default Page;
