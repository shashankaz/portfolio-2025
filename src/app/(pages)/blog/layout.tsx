interface BlogLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Blog",
};

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return <div>{children}</div>;
};

export default BlogLayout;
