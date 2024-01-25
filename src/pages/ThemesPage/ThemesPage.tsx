import { Panel } from "@vkontakte/vkui";
import Themes from "../../components/Themes/Themes";
import { FC, MouseEventHandler } from "react";
import BaseLayout from "../../layouts/BaseLayout";

interface ThemesPageProps {
  id: string;
  onNavigator: MouseEventHandler<HTMLElement>;
}

const ThemesPage: FC<ThemesPageProps> = (props) => {
  const { id, onNavigator } = props;

  return (
    <Panel id={id}>
      <BaseLayout>
        <Themes />

        <button onClick={onNavigator} data-to="item">
          click
        </button>
      </BaseLayout>
    </Panel>
  );
};

export default ThemesPage;
