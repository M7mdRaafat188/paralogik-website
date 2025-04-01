"use client";

import React from "react";
import Link from "next/link";

type Props = {
  label: string;
  link?: boolean;
  url?: string;
  action?: (_: any) => void;
};

const Button: React.FC<Props> = (props) => {
  const { label, link = false, url, action } = props;

  return (
    <>
      { link ? (
        <Link
          href={url}
          className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
        >{label}</Link>
      ) : (
        <button
          className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
          onClick={(e) => { action?.(e); }}
        >{label}</button>
      ) }
    </>
  );
}

export default Button;
