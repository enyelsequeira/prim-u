import { GlobalWrapper } from "../styles/global-components/global-components";

export default function BaseLayout({ children }) {
  return (
    <>
      <GlobalWrapper>{children}</GlobalWrapper>
    </>
  );
}
