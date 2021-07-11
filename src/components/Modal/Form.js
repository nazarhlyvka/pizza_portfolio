import React from "react";
import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { refreshDrinks } from "../../store/reducers/Drinks";
import { closeCallBackModal, openSuccessModal } from "../../store/reducers/Modal";
import { closeOrderForm, openOrderSuccess } from "../../store/reducers/Order";
import { refreshPizza } from "../../store/reducers/Pizza";
import { refreshPromo } from "../../store/reducers/Promo";
import "./Form.scss";

const Form = ({btnName, makeOrder, order}) => {
  const dispatch = useDispatch();
  const openSuccess = () => {
    dispatch(closeCallBackModal())
    dispatch(openSuccessModal())
  }
  const {
    input: name,
    setInput: setName,
    setTouched: setNameTouched,
    inputClasses: nameClasses,
    inputValid: nameValid,
    inputInvalid: nameInvalid,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    input: phone,
    setInput: setPhone,
    setTouched: setPhoneTouched,
    inputClasses: phoneClasses,
    inputValid: phoneValid,
    inputInvalid: phoneInvalid,
    reset: resetPhone,
  } = useInput((value) => /[3][8][0][0-9]{9}/.test(value));

  let formValid = false;

  if (nameValid && phoneValid) {
    formValid = true;
  }

  const sendData = (e) => {
    e.preventDefault();
    setNameTouched(true);
    setPhoneTouched(true);

    if(makeOrder) {
      console.log(`name: ${name},phone: ${phone}, order:${JSON.stringify(order)}`);
      resetName();
      resetPhone();
      dispatch(closeOrderForm())
      dispatch(openOrderSuccess())
      dispatch(refreshDrinks())
      dispatch(refreshPizza())
      dispatch(refreshPromo())
      return
    }
    console.log(name, phone)
    resetName();
    resetPhone();
    openSuccess()
  };

  return (
    <>
      <form onSubmit={sendData} autoComplete="off" className="form">
        <div className={nameClasses}>
          <input
            className="name"
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setNameTouched(true)}
            value={name}
            placeholder={nameInvalid ? "Incorect name" : "Name"}
            maxLength='20'
          />
        </div>
        <div className={phoneClasses}>
          <input
            className="phone"
            id="phone"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            onBlur={() => setPhoneTouched(true)}
            value={phone}
            placeholder={phoneInvalid ? "Incorect phone" : "Phone"}
            maxLength='12'
          />
        </div>
        <button 
          className={formValid ? "btn" : "btn_dis"} 
          disabled={!formValid}
          type='submit'>
          {btnName}
        </button>
      </form>
    </>
  );
};

export default Form;
