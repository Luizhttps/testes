import { Main, TabContainer, TabContent } from "./styles";
import { useCallback, useEffect, useMemo, useState } from "react";
import TabGroup, { ITabItem } from "./components/TabGroup";

interface ITabProps extends ITabItem {
  component?(): JSX.Element;
}

const Tabs: ITabProps[] = [
  {
    label: "TAB 1",
    id: 1,
    active: true,
    component: Tab1,
  },
  {
    label: "TAB 2",
    id: 2,
    active: false,
    component: Tab2,
  },
];

function App() {
  const [tabs, setTabs] = useState<ITabProps[]>(Tabs);

  const tabActive = useMemo(() => tabs.find((tab) => tab.active), [tabs]);

  const onChangeTab = useCallback(async () => {
    //AQUI VC COLOCA SUA LOGICA DA CHAMADA DE API PRA EXECUTAR QUANDO MUDAR DE ABA
    console.info(tabActive?.id);
  }, [tabActive]);

  useEffect(() => {
    onChangeTab();
  }, [onChangeTab]);

  return (
    <Main>
      <TabContainer>
        <TabGroup tabList={tabs} setTabList={setTabs} />
      </TabContainer>

      {tabActive?.component && (
        <TabContent>
          <tabActive.component />
        </TabContent>
      )}
    </Main>
  );
}

export default App;

function Tab1() {
  return <section>Tab 1</section>;
}

function Tab2() {
  return <section>Tab 2</section>;
}
