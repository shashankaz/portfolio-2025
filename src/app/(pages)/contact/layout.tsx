interface ContactLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Contact",
};

const ContactLayout = ({ children }: ContactLayoutProps) => {
  return <div>{children}</div>;
};

export default ContactLayout;
