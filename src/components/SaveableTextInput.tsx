import {useEffect, useRef, useState} from "react";
import { storageAPI } from "../api/storage";
import {useDebounce} from "../hooks/useDebounce.tsx";

export const SaveableTextInput = () => {
  const [text, setText] = useState("");
  const isTextEdited = useRef(false);

  const saveTextToStorage = useDebounce((text:string) => {
    storageAPI.save(text);
  }, 1000);

  const handleUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    isTextEdited.current = true;
    saveTextToStorage(e.target.value);
    setText(e.target.value);
  };

  useEffect(() => {
    storageAPI.read().then((text) => {
      if (isTextEdited.current) {
        return;
      }
      setText(text);
    });
  }, []);

  return (
    <div>
      <textarea value={text} onChange={handleUpdate} rows={30} cols={80} />
    </div>
  );
};