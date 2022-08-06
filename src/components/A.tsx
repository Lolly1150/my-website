import * as React from "react";
interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}
export default function A({ href, children, className }: Props) {
  return (
    <>
      <a href={href} target="_blank" className={className}>
        {children}
      </a>
    </>
  );
}
