import { TabList } from "./styles";
import TabItem from "./TabItem";

export interface ITabItem {
  active: boolean;
  label: string;
  id: number | string;
}

interface TabGroupProps {
  tabList: ITabItem[];
  setTabList: (value: React.SetStateAction<ITabItem[]>) => void;
}

export default function TabGroup({ tabList, setTabList }: TabGroupProps) {
  if (!tabList) return null;

  function toggleTabActive({ id }: ITabItem) {
    setTabList((prevValue) =>
      prevValue.map((tab) => ({
        ...tab,
        active: tab.id === id,
      }))
    );
  }

  return (
    <TabList>
      {tabList.map((tab) => (
        <TabItem key={tab.id} tab={tab} onClickTab={toggleTabActive} />
      ))}
    </TabList>
  );
}
