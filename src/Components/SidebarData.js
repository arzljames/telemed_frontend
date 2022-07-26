import {
  IoHomeOutline,
  IoHome,
  IoMedkitOutline,
  IoMedkit,
  IoChatbubbleEllipsesOutline,
  IoChatbubbleEllipsesSharp,
  IoDocumentTextOutline,
  IoDocumentText,
} from "react-icons/io5";

export const SidebarData = [
  {
    name: "Dashboard",
    link: "/",
    icon: <IoHomeOutline />,
    activeIcon: <IoHome />,
  },
  {
    name: "Consult",
    link: "/consultation",
    link2: "/consultation/patients",
    link3: "/consultation/outgoing",
    link4: "/consultation/incoming",
    link5: "/consultation/case",
    icon: <IoMedkitOutline />,
    activeIcon: <IoMedkit />,
  },
  {
    name: "Chat",
    link: "/chat",
    link2: "chat",
    icon: <IoChatbubbleEllipsesOutline />,
    activeIcon: <IoChatbubbleEllipsesSharp />,
  },

  {
    name: "Report",
    link: "/reports",
    link2: "reports",
    icon: <IoDocumentTextOutline />,
    activeIcon: <IoDocumentText />,
  },
];
