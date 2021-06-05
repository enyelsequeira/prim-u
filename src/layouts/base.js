import { GlobalWrapper } from "../styles/global-components/global-wrapper";

export default function BaseLayout({ children }) {
  return (
    <>
      <GlobalWrapper>{children}</GlobalWrapper>
    </>
  );
}
