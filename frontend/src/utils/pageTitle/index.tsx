interface PageTitleProps {
  text: string;
}

const PageTitle = ({ text }: PageTitleProps) => {
  return (
    <h1 className="scroll-m-20 text-4xl my-4 font-extrabold tracking-tight lg:text-5xl">
      {text}
    </h1>
  );
};

export default PageTitle;
