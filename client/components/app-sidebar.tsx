"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  PieChart,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
// import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { BiSolidReport } from "react-icons/bi";
import { GrResources } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      isActive: false,
      items: [
        {
          title: "Cryptocurrency Analysis",
          url: "/modules/cryptocurrency-analysis",
        },
      ],
    },
    {
      title: "Lab Environment",
      url: "/lab-environment",
      icon: Bot,
      isActive: false,
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
      isActive: false,
      items: [
        { title: "Module-Specific Quizzes", url: "/quizzes/module-specific" },
        {
          title: "General Knowledge Quiz",
          url: "/quizzes/general-knowledge",
        },
      ],
    },
    {
      title: "Crypto Tool Investigation",
      url: "/investigate",
      icon: BiSolidReport,
      isActive: false,
      items: [
        { title: "Type 1", url: "/investigate/type-1" },
        { title: "Type 2", url: "/investigate/type-1" },
        { title: "Type 3", url: "/investigate/type-1" },
      ],
    },
    {
      title: "Reports",
      url: "/reports",
      icon: BiSolidReport,
      isActive: false,
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
      isActive: false,
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
      isActive: false,
      items: [
        { title: "Account Settings", url: "/profile/settings" },
        { title: "Progress Tracking", url: "/profile/progress" },
        { title: "Achievements", url: "/profile/achievements" },
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
  const currentPage = usePathname();

  const Data = {
    ...data,
    navMain: data.navMain.map((item) => ({
      ...item,
      isActive: currentPage.includes(item?.url || ""),
      items: item.items?.map((subItem) => ({
        ...subItem,
        isActive: currentPage === subItem.url,
      })),
    })),
  };
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>{/* <TeamSwitcher teams={data.teams} /> */}</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  className="data-[active=true]:bg-card hover:data-[active=false]:text-gray-900 text-primary-text hover:text-text rounded py-5 group-data-[collapsible=icon]:!py-5"
                  asChild
                >
                  <Link href={"/"}>
                    <LayoutDashboard />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <NavMain items={Data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}
