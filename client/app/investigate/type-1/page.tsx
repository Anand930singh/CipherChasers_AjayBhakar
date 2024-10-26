// "use client";

// import React, { useState, useEffect } from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   AlertTriangle,
//   TrendingUp,
//   Shield,
//   ArrowUpRight,
//   Info,
//   BookOpen,
// } from "lucide-react";
// import Test from "@/components/investigate/test";

// const Page = () => {
//   // Add client-side only rendering
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Sample data - in real application, this would come from your backend
//   const transactionData = [
//     {
//       date: "2024-01",
//       normalVolume: 1000,
//       suspiciousVolume: 50,
//       totalWallets: 120,
//     },
//     {
//       date: "2024-02",
//       normalVolume: 1200,
//       suspiciousVolume: 150,
//       totalWallets: 145,
//     },
//     {
//       date: "2024-03",
//       normalVolume: 900,
//       suspiciousVolume: 300,
//       totalWallets: 180,
//     },
//     {
//       date: "2024-04",
//       normalVolume: 800,
//       suspiciousVolume: 450,
//       totalWallets: 220,
//     },
//   ];

//   const threatIndicators = [
//     { indicator: "Large Transfers", count: 45, risk: "High" },
//     { indicator: "New Wallets", count: 28, risk: "Medium" },
//     { indicator: "Unusual Timing", count: 15, risk: "High" },
//     { indicator: "Network Anomalies", count: 32, risk: "Medium" },
//   ];

//   return (
//     <div className="w-full max-w-6xl mx-auto px-4 pt-10 space-y-4">
//       <h1 className="text-2xl font-bold mb-4">
//         Crypto Tool Investigation Dashboard
//       </h1>

//       <Tabs
//         defaultValue="introduction"
//         className="w-full flex max-md:flex-col gap-4"
//       >
//         <TabsList className="grid w-fit max-md:w-full h-fit grid-cols-3">
//           <TabsTrigger value="introduction">
//             <Info size={14} className="mr-2" />
//             Introduction
//           </TabsTrigger>
//           <TabsTrigger value="scam-analysis">
//             <TrendingUp size={14} className="mr-2" />
//             Scam Analysis
//           </TabsTrigger>
//           <TabsTrigger value="threat-breakdown">
//             <AlertTriangle size={14} className="mr-2" />
//             Threat Breakdown
//           </TabsTrigger>
//           <TabsTrigger value="prevention">
//             <Shield size={14} className="mr-2" />
//             Prevention Insights
//           </TabsTrigger>
//           <TabsTrigger value="compare">
//             <BookOpen size={14} className="mr-2" />
//             Compare
//           </TabsTrigger>
//           <TabsTrigger value="quiz">
//             <BookOpen size={14} className="mr-2" />
//             Quiz
//           </TabsTrigger>
//         </TabsList>

//         <TabsContent value="introduction" className="space-y-4">
//           <Card className="relative">
//             <CardHeader>
//               <CardTitle className="flex items-center text-xl gap-2">
//                 <Info className="h-5 w-5" />
//                 DeFi Scam
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               A DeFi scam is when a scammer programs a crypto token&apos;s
//               underlying smart contract to pull the rug out from under
//               investors. DeFi scammers may modify their token’s smart contract
//               to make it impossible to sell the token, to allow the scammer to
//               mint unlimited new ones, or to charge exorbitant trading fees, for
//               example.
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="scam-analysis" className="space-y-4">
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <TrendingUp className="h-5 w-5" />
//                 Transaction Volume Analysis
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               {isClient && (
//                 <div className="h-[300px] w-full">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <LineChart data={transactionData}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="date" />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Line
//                         type="monotone"
//                         dataKey="normalVolume"
//                         stroke="#8884d8"
//                         name="Normal Volume"
//                       />
//                       <Line
//                         type="monotone"
//                         dataKey="suspiciousVolume"
//                         stroke="#ff7300"
//                         name="Suspicious Volume"
//                       />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </div>
//               )}
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Wallet Activity Metrics</CardTitle>
//             </CardHeader>
//             <CardContent>
//               {isClient && (
//                 <div className="h-[300px] w-full">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={transactionData}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="date" />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Bar
//                         dataKey="totalWallets"
//                         fill="#82ca9d"
//                         name="Active Wallets"
//                       />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="threat-breakdown" className="space-y-4">
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <AlertTriangle className="h-5 w-5" />
//                 Key Threat Indicators
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {threatIndicators.map((indicator, index) => (
//                   <Alert
//                     key={index}
//                     className={`border-l-4 ${
//                       indicator.risk === "High"
//                         ? "border-l-red-500"
//                         : "border-l-yellow-500"
//                     }`}
//                   >
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <h3 className="font-medium">{indicator.indicator}</h3>
//                         <AlertDescription>
//                           Count: {indicator.count} | Risk Level:{" "}
//                           {indicator.risk}
//                         </AlertDescription>
//                       </div>
//                       <ArrowUpRight className="h-5 w-5" />
//                     </div>
//                   </Alert>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="prevention" className="space-y-4">
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Shield className="h-5 w-5" />
//                 Prevention Guidelines
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 <Alert>
//                   <AlertDescription>
//                     <h3 className="font-bold text-primary-text mb-2">
//                       1. Verify Transaction Patterns
//                     </h3>
//                     <ul className="list-disc text-text pl-4">
//                       <li>Monitor for sudden large volume changes</li>
//                       <li>Check for unusual timing patterns</li>
//                       <li>Verify recipient wallet history</li>
//                     </ul>
//                   </AlertDescription>
//                 </Alert>

//                 <Alert>
//                   <AlertDescription>
//                     <h3 className="font-bold text-primary-text mb-2">
//                       2. Wallet Security
//                     </h3>
//                     <ul className="list-disc text-text pl-4">
//                       <li>Enable multi-factor authentication</li>
//                       <li>Use hardware wallets for large holdings</li>
//                       <li>Regular security audits</li>
//                     </ul>
//                   </AlertDescription>
//                 </Alert>

//                 <Alert>
//                   <AlertDescription>
//                     <h3 className="font-bold text-primary-text mb-2">
//                       3. Red Flags
//                     </h3>
//                     <ul className="list-disc text-text pl-4">
//                       <li>Promises of guaranteed returns</li>
//                       <li>Pressure to act quickly</li>
//                       <li>Unsolicited investment opportunities</li>
//                     </ul>
//                   </AlertDescription>
//                 </Alert>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="compare" className="space-y-4">
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Shield className="h-5 w-5" />
//                 Prevention Guidelines
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 <Alert>
//                   <AlertDescription>
//                     <h3 className="font-bold text-primary-text mb-2">
//                       1. Verify Transaction Patterns
//                     </h3>
//                     <ul className="list-disc text-text pl-4">
//                       <li>Monitor for sudden large volume changes</li>
//                       <li>Check for unusual timing patterns</li>
//                       <li>Verify recipient wallet history</li>
//                     </ul>
//                   </AlertDescription>
//                 </Alert>

//                 <Alert>
//                   <AlertDescription>
//                     <h3 className="font-bold text-primary-text mb-2">
//                       2. Wallet Security
//                     </h3>
//                     <ul className="list-disc text-text pl-4">
//                       <li>Enable multi-factor authentication</li>
//                       <li>Use hardware wallets for large holdings</li>
//                       <li>Regular security audits</li>
//                     </ul>
//                   </AlertDescription>
//                 </Alert>

//                 <Alert>
//                   <AlertDescription>
//                     <h3 className="font-bold text-primary-text mb-2">
//                       3. Red Flags
//                     </h3>
//                     <ul className="list-disc text-text pl-4">
//                       <li>Promises of guaranteed returns</li>
//                       <li>Pressure to act quickly</li>
//                       <li>Unsolicited investment opportunities</li>
//                     </ul>
//                   </AlertDescription>
//                 </Alert>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="quiz" className="space-y-4 h-full">
//           <Test />
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default Page;

import GuideLine from "@/components/GuideLine/GuideLine";
import React from "react";

export default function Page() {
  return (
    <div className="">
      <GuideLine />
    </div>
  );
}
