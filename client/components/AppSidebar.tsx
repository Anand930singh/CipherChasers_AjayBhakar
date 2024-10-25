"use client";
import {
  LayoutDashboard,
  ChevronDown,
  Package,
  FlaskConical,
  //   Settings,
} from "lucide-react";
import { MdAssignmentAdd } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { GrResources } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { usePathname } from "next/navigation";
import { Collapsible } from "@radix-ui/react-collapsible";
import { CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
    active: false, // Will update this based on current route
  },
  {
    title: "Modules",
    url: "/modules",
    icon: Package,
    active: false, // Will update this based on current route
    subGroups: [
      {
        width: 250,
        items: [
          { text: "Cloud Forensics", href: "/modules/cloud-forensics" },
          {
            text: "Cryptocurrency Analysis",
            href: "/modules/cryptocurrency-analysis",
          },
          {
            text: "Blockchain Forensics",
            href: "/modules/blockchain-forensics",
          },
        ],
      },
    ],
  },
  {
    title: "Lab Environment",
    url: "/lab-environment",
    icon: FlaskConical,
    active: false, // Will update this based on current route
    subGroups: [
      {
        width: 250,
        items: [
          {
            text: "VM Configuration",
            href: "/lab-environment/vm-configuration",
          },
          { text: "Docker Setup", href: "/lab-environment/docker-setup" },
          { text: "AMI Instances", href: "/lab-environment/ami-instances" },
          {
            text: "Custom Configurations",
            href: "/lab-environment/custom-configurations",
          },
        ],
      },
    ],
  },
  {
    title: "Quizzes",
    url: "/quizzes",
    icon: MdAssignmentAdd,
    active: false, // Will update this based on current route
    subGroups: [
      {
        width: 250,
        items: [
          { text: "Module-Specific Quizzes", href: "/quizzes/module-specific" },
          {
            text: "General Knowledge Quiz",
            href: "/quizzes/general-knowledge",
          },
        ],
      },
    ],
  },
  {
    title: "Reports",
    url: "/reports",
    icon: BiSolidReport,
    active: false, // Will update this based on current route
    subGroups: [
      {
        width: 250,
        items: [
          { text: "Generate Report", href: "/reports/generate" },
          { text: "View Past Reports", href: "/reports/past" },
          { text: "Export Options", href: "/reports/export" },
        ],
      },
    ],
  },
  {
    title: "Resources",
    url: "/resources",
    icon: GrResources,
    active: false, // Will update this based on current route
    subGroups: [
      {
        width: 250,
        items: [
          { text: "Documentation", href: "/resources/documentation" },
          { text: "Guides & Tutorials", href: "/resources/guides" },
          { text: "Useful Tools", href: "/resources/tools" },
        ],
      },
    ],
  },
  {
    title: "Profile",
    url: "/profile",
    icon: FaUserCircle,
    active: false, // Will update this based on current route
    subGroups: [
      {
        width: 250,
        items: [
          { text: "Account Settings", href: "/profile/settings" },
          { text: "Progress Tracking", href: "/profile/progress" },
          { text: "Achievements", href: "/profile/achievements" },
        ],
      },
    ],
  },
  {
    title: "Support",
    url: "/support",
    icon: FcSupport,
    active: false, // Will update this based on current route
    subGroups: [
      {
        width: 250,
        items: [
          { text: "FAQs", href: "/support/faqs" },
          { text: "Contact Support", href: "/support/contact" },
          { text: "Feedback", href: "/support/feedback" },
        ],
      },
    ],
  },
];

export function AppSidebar() {
  const currentPage = usePathname();

  const updatedItems = items.map((item) => ({
    ...item,
    active: currentPage === item.url,
  }));

  return (
    <Sidebar className="" collapsible="icon">
      <SidebarContent className="">
        <SidebarGroup>
          <SidebarGroupContent className="">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  className="data-[active=true]:bg-card hover:data-[active=false]:bg-[#1c1c1c]/50 rounded py-5 text-[#7c7c7c]  group-data-[collapsible=icon]:!py-5"
                  asChild
                >
                  <div className="flex justify-between">
                    <SidebarTrigger />
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent className="">
            <SidebarMenu>
              {updatedItems.map((group, index) =>
                !group?.subGroups ? (
                  <SidebarMenuItem key={group.title}>
                    <SidebarMenuButton
                      isActive={group?.active}
                      className="data-[active=true]:bg-card hover:data-[active=false]:bg-[#1c1c1c]/50 rounded py-5 text-[#7c7c7c] group-data-[collapsible=icon]:!py-5"
                      asChild
                    >
                      <Link href={group.url}>
                        <group.icon />
                        <span>{group.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ) : (
                  <Collapsible
                    key={index}
                    defaultOpen
                    className="group/collapsible"
                  >
                    <SidebarGroup>
                      <SidebarGroupLabel asChild>
                        <CollapsibleTrigger className="flex gap-4">
                          <group.icon />
                          {group?.title}
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </CollapsibleTrigger>
                      </SidebarGroupLabel>
                      <CollapsibleContent>
                        <SidebarGroupContent className="">
                          <SidebarMenu className="gap-0">
                            {group?.subGroups[0]?.items?.map((item, index) => (
                              <SidebarMenuItem className="" key={index}>
                                <SidebarMenuButton
                                  // isActive={group?.active}
                                  className="data-[active=true]:bg-card hover:data-[active=false]:bg-[#1c1c1c]/50 py-5 text-[#7c7c7c]  group-data-[collapsible=icon]:!py-5"
                                  asChild
                                >
                                  <Link
                                    href={item?.href}
                                    className="ml-4 border-l"
                                  >
                                    <span>{item?.text}</span>
                                  </Link>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            ))}
                          </SidebarMenu>
                        </SidebarGroupContent>
                      </CollapsibleContent>
                    </SidebarGroup>
                  </Collapsible>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
