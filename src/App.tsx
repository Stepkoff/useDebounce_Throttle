import {useState} from "react";
import {SaveableTextInput} from "./components/SaveableTextInput.tsx";
import {IncreaseElement} from "./components/IncreaseElement.tsx";

const examplesMap = {
  input: SaveableTextInput,
  zoom: IncreaseElement,
};

type Example = keyof typeof examplesMap;

export const App = () => {
  const [example, setExample] = useState<Example>("zoom");

  const Component = examplesMap[example];
  return (
    <>
      <div>
        <div style={{ marginBottom: 20 }}>
          {Object.keys(examplesMap).map((example) => (
            <button key={example} onClick={() => setExample(example as Example)}>
              {example}
            </button>
          ))}
        </div>

        <Component />
      </div>
    </>
  )
}













