// components
import Header from "@/components/header";
// types
import type { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

export default function BaseLayout({ children }: Props): JSX.Element {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto px-3">{children}</main>
    </>
  );
}
