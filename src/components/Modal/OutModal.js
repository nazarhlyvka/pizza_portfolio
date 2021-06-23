import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { closeCallBackModal, closeOutModal, closeSuccessModal } from "../../store/Modal";
import "./OutModal.scss";

const OutModal = () => {
  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeOutModal());
    dispatch(closeCallBackModal());
    dispatch(closeSuccessModal())
  };

  return <div onClick={close} className="back_modal"></div>;
};

export default memo(OutModal)
