import React from "react";
import "./register.css";
import { useForm } from "react-hook-form";
import { InfoContext } from "../src/App";
import axios from "axios";
function Creditcard({ price, handleClose }) {
  const info = React.useContext(InfoContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await axios.put("http://localhost:3000/putusers", {
        cardcode: data.cardcode,
        cardnum: data.cardnum,
        expiremonth: data.expiremonth,
        expireyear: data.expireyear,
        identitycard: data.identitycard,
        price: data.price,
        _id: data._id,
      });
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="formregister">
        <p className="titleregister">enter credit details </p>
        <p className="messageregister">
          buy your choosen package before price rise.
        </p>
        <label>
          <input
            required=""
            placeholder="card number"
            type="text"
            className="inputregister"
            {...register("cardnum", { required: true })}
          />
          {errors.cardnum && (
            <div>dont fit the condition:{errors.cardnum.type}</div>
          )}
          <span>card number</span>
        </label>
        <br />
        <label>
          <input
            required=""
            placeholder="id"
            type="text"
            className="inputregister"
            {...register("identitycard", { required: true })}
          />
          {errors.identitycard && (
            <div>dont fit the condition:{errors.identitycard.type}</div>
          )}
          <span>id</span>
        </label>
        <br />
        <div className="flexregister">
          <label>
            <input
              required=""
              placeholder="expired year"
              type="text"
              className="inputregister"
              {...register("expireyear", { required: true })}
            />
            {errors.expireyear && (
              <div>dont fit the condition:{errors.expireyear.type}</div>
            )}
            <span>expired year</span>
          </label>
          <label>
            <input
              required=""
              placeholder="expired month"
              type="text"
              className="inputregister"
              {...register("expiremonth", { required: true })}
            />
            {errors.expiremonth && (
              <div>dont fit the condition:{errors.expiremonth.type}</div>
            )}
            <span>expired month</span>
          </label>
        </div>
        <br />
        <div className="flexregister">
          <label>
            <input
              required=""
              placeholder="code"
              type="text"
              className="inputregister"
              {...register("cardcode", { required: true })}
            />
            {errors.cardcode && (
              <div>dont fit the condition:{errors.cardcode.type}</div>
            )}
            <span>code</span>
          </label>
          <label>
            <input
              required=""
              type="text"
              value={price}
              className="inputregister"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <div>dont fit the condition:{errors.price.type}</div>
            )}
            <span>price</span>
          </label>
        </div>
        <br />
        <label>
          <input
            required=""
            type="text"
            value={info.correntuser._id}
            className="inputregister"
            {...register("_id", { required: true })}
          />
          {errors._id && <div>dont fit the condition:{errors._id.type}</div>}
          <span>the new gym member id</span>
        </label>
        <br />
        <input type="submit" className="submitregister" />
      </form>
    </div>
  );
}

export default Creditcard;
