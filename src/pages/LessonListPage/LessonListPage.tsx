import { Panel } from "@vkontakte/vkui";
import LessonList from "../../components/LessonList/LessonList";
import { FC, MouseEventHandler } from "react";
import BaseLayout from "../../layouts/BaseLayout";

interface LessonListPageProps {
  id: string;
  onNavigator: MouseEventHandler<HTMLElement>;
}

const LessonListPage: FC<LessonListPageProps> = (props) => {
  const { id, onNavigator } = props;

  return (
    <Panel id={id}>
      <BaseLayout>
        <LessonList />

        <button onClick={onNavigator} data-to="item">
          click
        </button>
      </BaseLayout>
    </Panel>
  );
};

export default LessonListPage;
