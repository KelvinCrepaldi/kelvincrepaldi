import { Github, Linkedin } from "lucide-react";

const social = [
  { icon: <Github size={20} />, label: "LinkedIn", url: "" },
  { icon: <Linkedin size={20} />, label: "Github", url: "" },
];

export default function useSocial() {
  return { social };
}
