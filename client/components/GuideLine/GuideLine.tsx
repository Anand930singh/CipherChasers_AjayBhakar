"use client";
import React, { useEffect, useState } from "react";
import GuideLineComponent from "./GuideLineComponent";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  AlertTriangle,
  ArrowUpRight,
  Info,
  Shield,
  TrendingUp,
} from "lucide-react";
// import ScrollReveal from "../ScrollReveal";
// import Header from "../Header";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Alert, AlertDescription } from "../ui/alert";
import Test from "../investigate/test";
import DiffViewer from "./DiffViewer";

export default function GuideLine() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Sample data - in real application, this would come from your backend
  const transactionData = [
    {
      date: "2024-01",
      normalVolume: 1000,
      suspiciousVolume: 50,
      totalWallets: 120,
    },
    {
      date: "2024-02",
      normalVolume: 1200,
      suspiciousVolume: 150,
      totalWallets: 145,
    },
    {
      date: "2024-03",
      normalVolume: 900,
      suspiciousVolume: 300,
      totalWallets: 180,
    },
    {
      date: "2024-04",
      normalVolume: 800,
      suspiciousVolume: 450,
      totalWallets: 220,
    },
  ];

  const threatIndicators = [
    { indicator: "Large Transfers", count: 45, risk: "High" },
    { indicator: "New Wallets", count: 28, risk: "Medium" },
    { indicator: "Unusual Timing", count: 15, risk: "High" },
    { indicator: "Network Anomalies", count: 32, risk: "Medium" },
  ];
  return (
    <section className="w-full px-2 relative sm:px-4 text-slate-100 items-center pb-20 bg-transparent flex flex-col">
      <div className="bg-transparent text-2xl px-4 py-20 w-full text-center flex items-center gap-2 flex-col">
        <div className="">
          <span className="">Explore deceptive tactics in DeFi scams </span>
          <span className="leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            their impact, and strategies
          </span>
        </div>

        <div className="">for safeguarding digital assets.</div>
      </div>
      <div className=""></div>

      <div className="relative flex flex-col items-left z-[10] justify-center w-full">
        <div className="absolute z-[-2] w-[3px] left-[40px] md:left-[50px] [mask:linear-gradient(0deg,transparent,white_20%,white_80%,transparent)] h-full bg-[_theme(colors.slate.900/.88)]">
          <div className="fixed left-auto top-0 right-auto bottom-[50vh] z-[-1] w-[3px] h-[50vh] bg-white bg-[linear-gradient(180deg,_theme(colors.indigo.500)_50%,_theme(colors.blue.300),_theme(colors.indigo.500))]"></div>
        </div>

        <GuideLineComponent
          time="Introduction"
          heading="Introduction"
          content={
            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center text-xl gap-2">
                  <Info className="h-5 w-5" />
                  DeFi Scam
                </CardTitle>
              </CardHeader>
              <CardContent>
                A DeFi scam is when a scammer programs a crypto token&apos;s
                underlying smart contract to pull the rug out from under
                investors. DeFi scammers may modify their token’s smart contract
                to make it impossible to sell the token, to allow the scammer to
                mint unlimited new ones, or to charge exorbitant trading fees,
                for example.
              </CardContent>
            </Card>
          }
        />

        <GuideLineComponent
          time="Introduction"
          heading="Scam Analysis"
          content={
            <div className="flex flex-col gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Transaction Volume Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isClient && (
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={transactionData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="normalVolume"
                            stroke="#8884d8"
                            name="Normal Volume"
                          />
                          <Line
                            type="monotone"
                            dataKey="suspiciousVolume"
                            stroke="#ff7300"
                            name="Suspicious Volume"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Wallet Activity Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  {isClient && (
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={transactionData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar
                            dataKey="totalWallets"
                            fill="#82ca9d"
                            name="Active Wallets"
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          }
        />

        <GuideLineComponent
          time="Introduction"
          heading="Threat Breakdown"
          content={
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Key Threat Indicators
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {threatIndicators.map((indicator, index) => (
                    <Alert
                      key={index}
                      className={`border-l-4 ${
                        indicator.risk === "High"
                          ? "border-l-red-500"
                          : "border-l-yellow-500"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{indicator.indicator}</h3>
                          <AlertDescription>
                            Count: {indicator.count} | Risk Level:{" "}
                            {indicator.risk}
                          </AlertDescription>
                        </div>
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </Alert>
                  ))}
                </div>
              </CardContent>
            </Card>
          }
        />

        <GuideLineComponent
          time="Introduction"
          heading="Prevention Guidelines"
          content={
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Prevention Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Alert>
                    <AlertDescription>
                      <h3 className="font-bold text-primary-text mb-2">
                        1. Verify Transaction Patterns
                      </h3>
                      <ul className="list-disc text-text pl-4">
                        <li>Monitor for sudden large volume changes</li>
                        <li>Check for unusual timing patterns</li>
                        <li>Verify recipient wallet history</li>
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <Alert>
                    <AlertDescription>
                      <h3 className="font-bold text-primary-text mb-2">
                        2. Wallet Security
                      </h3>
                      <ul className="list-disc text-text pl-4">
                        <li>Enable multi-factor authentication</li>
                        <li>Use hardware wallets for large holdings</li>
                        <li>Regular security audits</li>
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <Alert>
                    <AlertDescription>
                      <h3 className="font-bold text-primary-text mb-2">
                        3. Red Flags
                      </h3>
                      <ul className="list-disc text-text pl-4">
                        <li>Promises of guaranteed returns</li>
                        <li>Pressure to act quickly</li>
                        <li>Unsolicited investment opportunities</li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          }
        />

        <GuideLineComponent
          time="Introduction"
          heading="Quiz"
          content={<Test />}
        />

        <GuideLineComponent
          time="Introduction"
          heading="Quiz"
          content={<DiffViewer />}
        />
      </div>
    </section>
  );
}
