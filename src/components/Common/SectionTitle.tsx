import React from "react";

type Props = {
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

const SectionTitle: React.FC<Props> = (props) => {
  const {
    title,
    paragraph,
    width = "600px",
    center,
    mb = "100px",
    children,
    ...rest
  } = props;

  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
      {...rest}
    >
      <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
        {title}
      </h2>
      <p className="text-base !leading-relaxed text-body-color md:text-lg">
        {paragraph}
      </p>
      {children}
    </div>
  );
};

export default SectionTitle;
