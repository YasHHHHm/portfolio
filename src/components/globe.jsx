import IconCloud from "./ui/icon-cloud";

const slugs = [
  "java",
  "react",
  "flutter",
  "android",
  "express",
  "firebase",
  "jira",
  "figma",
  "react",
  "reactnative",
  "tailwindcss",
  "html5",
  "css3",
  "javascript",
  "python",
  "django",
  "mongodb",
  "prisma",
  "aws",
  "git",
  "github",
  "firebase",
  "vercel",
  "visualstudiocode",
  "c",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
