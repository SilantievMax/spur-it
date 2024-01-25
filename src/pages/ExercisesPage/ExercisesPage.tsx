import { Panel } from "@vkontakte/vkui";
import { FC, MouseEventHandler } from "react";
import BaseLayout from "../../layouts/BaseLayout";
import Exercises from "../../components/Exercises/Exercises";

interface ExercisesPageProps {
  id: string;
  onNavigator: MouseEventHandler<HTMLElement>;
}

const ExercisesPage: FC<ExercisesPageProps> = (props) => {
  const { id, onNavigator } = props;

  return (
    <Panel id={id}>
      <BaseLayout>
        <Exercises />

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

export default ExercisesPage;
