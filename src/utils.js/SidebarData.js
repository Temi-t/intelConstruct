import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
export const SidebarData = [
  {
    title: "Home",
    path: "/intelConstruct",
    icon: <FontAwesomeIcon icon={solid("house")} size="2x" color="white" />,
  },
  {
    title: "Project",
    path: "/project",
    icon: <FontAwesomeIcon icon={solid("briefcase")} size="2x" color="grey" />,
  },
  {
    title: "Customer",
    path: "/customer",
    icon: <FontAwesomeIcon icon={solid("user")} size="2x" color="grey" />,
  },
  {
    title: "Office",
    path: "/office",
    icon: <FontAwesomeIcon icon={solid("building")} size="2x" color="grey" />,
  },
  {
    title: "Location",
    path: "/location",
    icon: (
      <FontAwesomeIcon icon={solid("location-dot")} size="2x" color="grey" />
    ),
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FontAwesomeIcon icon={solid("envelope")} size="2x" color="grey" />,
  },
];
