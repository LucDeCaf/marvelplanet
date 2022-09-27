const Title = ({ children }: { children: string }): JSX.Element => {
  return (
    <h1 className="mt-4 text-center text-5xl font-itim">{children}</h1>
  );
};

export default Title;
