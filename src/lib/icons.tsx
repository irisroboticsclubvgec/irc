import {
  BrainCircuit,
  Cpu,
  Cog,
  Bot,
  CircuitBoard,
  Radio,
  Instagram,
  Linkedin,
  Github,
  Youtube,
  Twitter,
  Facebook,
  type LucideIcon,
} from "lucide-react";

/* Maps the string names used in src/data/site.ts to real icon components,
 * so the data file stays free of imports and easy to edit. */
export const iconMap: Record<string, LucideIcon> = {
  // domains
  BrainCircuit,
  Cpu,
  Cog,
  Bot,
  CircuitBoard,
  Radio,
  // socials
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
  youtube: Youtube,
  twitter: Twitter,
  facebook: Facebook,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = iconMap[name] ?? Bot;
  return <Cmp className={className} />;
}
