import { Panel } from "@vkontakte/vkui";
import React, { FC, MouseEventHandler } from "react";
import BaseLayout from "../../layouts/BaseLayout";

interface LessonPageProps {
  id: string;
  onNavigator: MouseEventHandler<HTMLElement>;
}

const LessonPage: FC<LessonPageProps> = (props) => {
  const { id, onNavigator } = props;

  return (
    <Panel id={id}>
      <BaseLayout>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
        accusantium voluptate nihil, facere, eos quibusdam vero quia et
        consectetur voluptatum nam repellendus iure!
        <button onClick={onNavigator} data-to="item">
          click
        </button>
      </BaseLayout>
    </Panel>
  );
};

export default LessonPage;