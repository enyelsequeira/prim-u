/* eslint-disable import/no-extraneous-dependencies */
import { BLOCKS } from "@contentful/rich-text-types";
import { Text } from "../components/global-components/global-card/globalcard.styles";

export const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text hasSubtitle>{children}</Text>,
  },
};
export const eventsOption = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
};
export const provideServices = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text services>{children}</Text>,
  },
};
