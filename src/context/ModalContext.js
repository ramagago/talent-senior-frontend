import { createContext, useState, useContext } from "react";

export const ModalContext = createContext(null);

export const useModalContextManager = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");

  const showModal = (title, info) => {
    setIsVisible(true);
    setTitle(title);
    setInfo(info);
  };

  return { isVisible, title, info, setIsVisible, setTitle, setInfo, showModal };
};

export const useModalContextConsumer = () => useContext(ModalContext);
