import { useContext } from "react"
import { UiTriggersContext } from "../context/UiTriggerContext";

export const useModal = () => {
  const {displayModal, hideModal, toggleModal, showModal} = useContext(UiTriggersContext)
  return {displayModal, hideModal, toggleModal, showModal}
};