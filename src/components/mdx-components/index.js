import { Information, List, ListItem, PageTitle, Table } from "../global-components";

const MDXComponents = {
  h1: (props) => <PageTitle fontSize="2.5rem" {...props} />,
  h2: (props) => <h2 {...props} />,
  ul: (props) => <List {...props} />,
  li: (props) => <ListItem fontSize="1rem" {...props} />,
  p: (props) => <Information fontSize="1rem" {...props} />,
  table: (props) => <Table {...props} />,
};
export default MDXComponents;
