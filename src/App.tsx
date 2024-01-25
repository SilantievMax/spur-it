import { MouseEventHandler, useState } from "react";
import { View } from "@vkontakte/vkui";

import ExercisesPage from "./pages/ExercisesPage/ExercisesPage";
import ContentPage from "./pages/ContentPage/ContentPage";
import ThemesPage from "./pages/ThemesPage/ThemesPage";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");

  const handleNavigator: MouseEventHandler<HTMLElement> = (e) => {
    setActivePanel(e.currentTarget.dataset.to ?? "home");
  };

  return (
    <View activePanel={activePanel}>
      <ThemesPage id="home" onNavigator={handleNavigator} />

      <ExercisesPage id="item" onNavigator={handleNavigator} />

      <ContentPage id="lesson" onNavigator={handleNavigator} />
    </View>
  );
};

export default App;
