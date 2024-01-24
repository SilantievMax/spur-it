import { Panel } from "@vkontakte/vkui";
import { FC, MouseEventHandler } from "react";
import BaseLayout from "../../layouts/BaseLayout";
import LessonItem from "../../components/LessonItem/LessonItem";

interface LessonItemPageProps {
  id: string;
  onNavigator: MouseEventHandler<HTMLElement>;
}

const LessonItemPage: FC<LessonItemPageProps> = (props) => {
  const { id, onNavigator } = props;

  return (
    <Panel id={id}>
      <BaseLayout>
        <LessonItem />

        <button onClick={onNavigator} data-to="home">
          back
        </button>
        <br />

        <button onClick={onNavigator} data-to="lesson">
          lesson
        </button>
      </BaseLayout>
    </Panel>
  );
};

export default LessonItemPage;
