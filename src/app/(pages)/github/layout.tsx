interface GitHubLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Projects",
};

const GitHubLayout = ({ children }: GitHubLayoutProps) => {
  return <div>{children}</div>;
};

export default GitHubLayout;
