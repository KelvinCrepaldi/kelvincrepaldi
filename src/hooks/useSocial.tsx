import { Github, Linkedin } from "lucide-react";

const social = [
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/kelvincrepaldi/",
  },
  {
    icon: <Github size={20} />,
    label: "Github",
    url: "https://github.com/KelvinCrepaldi",
  },
];

export default function useSocial() {
  return { social };
}
