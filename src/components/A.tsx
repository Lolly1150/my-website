import * as React from "react";
interface Props {
  href: string;
  children: React.ReactNode;
}
export default function A({ href, children }: Props) {
  return (
    <>
      <a href={href} target="_blank">
        {children}
      </a>
    </>
  );
}
