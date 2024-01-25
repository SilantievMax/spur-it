import _ from "underscore";
import { spurs } from "../../data/data";
import Card from "../../ui/Card/Card";
import Text from "../../ui/Text/Text";

const Themes = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      {_.map(spurs, (data) => {
        return (
          <Card>
            <Text>{data.title}</Text>

            <Text>{data.countTheme} Тем</Text>
          </Card>
        );
      })}
    </div>
  );
};

export default Themes;
