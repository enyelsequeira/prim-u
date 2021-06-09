import { GlobalWrapper } from "../components/global-components/global-components";

export default function BaseLayout({ children }) {
  return (
    <>
      <GlobalWrapper>{children}</GlobalWrapper>
    </>
  );
}
