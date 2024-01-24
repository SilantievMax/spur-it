import { MouseEventHandler, useState } from "react";
import { View } from "@vkontakte/vkui";

import LessonListPage from "./pages/LessonListPage/LessonListPage";
import LessonItemPage from "./pages/LessonItemPage/LessonItemPage";
import LessonPage from "./pages/LessonPage/LessonPage";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");

  const handleNavigator: MouseEventHandler<HTMLElement> = (e) => {
    setActivePanel(e.currentTarget.dataset.to ?? "home");
  };

  return (
    <View activePanel={activePanel}>
      <LessonListPage id="home" onNavigator={handleNavigator} />

      <LessonItemPage id="item" onNavigator={handleNavigator} />

      <LessonPage id="lesson" onNavigator={handleNavigator} />
    </View>
  );
};

export default App;
