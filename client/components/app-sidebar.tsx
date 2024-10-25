"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
// import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { BiSolidReport } from "react-icons/bi";
import { GrResources } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Modules",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: "Cloud Forensics", url: "/modules/cloud-forensics" },
        {
          title: "Cryptocurrency Analysis",
          url: "/modules/cryptocurrency-analysis",
        },
        {
          title: "Blockchain Forensics",
          url: "/modules/blockchain-forensics",
        },
      ],
    },
    {
      title: "Lab Environment",
      url: "/lab-environment",
      icon: Bot,
      items: [
        {
          title: "VM Configuration",
          url: "/lab-environment/vm-configuration",
        },
        { title: "Docker Setup", url: "/lab-environment/docker-setup" },
        { title: "AMI Instances", url: "/lab-environment/ami-instances" },
        {
          title: "Custom Configurations",
          url: "/lab-environment/custom-configurations",
        },
      ],
    },
    {
      title: "Quizzes",
      url: "/quizzes",
      icon: BookOpen,
      items: [
        { title: "Module-Specific Quizzes", url: "/quizzes/module-specific" },
        {
          title: "General Knowledge Quiz",
          url: "/quizzes/general-knowledge",
        },
      ],
    },
    {
      title: "Reports",
      url: "/reports",
      icon: BiSolidReport,
      items: [
        { title: "Generate Report", url: "/reports/generate" },
        { title: "View Past Reports", url: "/reports/past" },
        { title: "Export Options", url: "/reports/export" },
      ],
    },
    {
      title: "Resources",
      url: "/resources",
      icon: GrResources,
      items: [
        { title: "Documentation", url: "/resources/documentation" },
        { title: "Guides & Tutorials", url: "/resources/guides" },
        { title: "Useful Tools", url: "/resources/tools" },
      ],
    },
    {
      title: "Profile",
      url: "/profile",
      icon: FaUserCircle,
      items: [
        { title: "Account Settings", url: "/profile/settings" },
        { title: "Progress Tracking", url: "/profile/progress" },
        { title: "Achievements", url: "/profile/achievements" },
      ],
    },
    {
      title: "Support",
      url: "/support",
      icon: FcSupport,
      items: [
        { title: "FAQs", url: "/support/faqs" },
        { title: "Contact Support", url: "/support/contact" },
        { title: "Feedback", url: "/support/feedback" },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>{/* <TeamSwitcher teams={data.teams} /> */}</SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
