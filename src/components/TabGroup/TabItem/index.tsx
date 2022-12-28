import { ITabItem } from "..";
import { Container } from "./styles";

interface TabItemProps {
  tab: ITabItem;
  onClickTab: (tab: ITabItem) => void;
}

export default function TabItem({ tab, onClickTab }: TabItemProps) {
  if (!tab || !onClickTab) return null;

  return (
    <Container
      className={tab.active ? "active" : ""}
      onClick={() => onClickTab(tab)}
    >
      {tab.label}
    </Container>
  );
}
