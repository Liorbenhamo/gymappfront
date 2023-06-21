import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./register.css";
import axios from "axios";
import emailjs from "@emailjs/browser";
function Register({ handleClose }) {
  const form = useRef();
  let emailpassword;

  const [data, setData] = useState();

  const [registerorverify, setRegisterorverify] = useState(true);
  let temp = 9;
  for (let index = 0; index < 4; index++) {
    temp = temp + `${Math.floor(Math.random() * 10)}`;
  }
  const [verify, setVerify] = useState(temp);

  function handlechange(event) {
    emailpassword = event.target.value;
    console.log(emailpassword);
  }
  async function handleclick() {
    if (emailpassword == verify) {
      console.log("nice");
      try {
        await axios.post("http://localhost:3000/gymusers", {
          username: data.username,
          firstname: data.firstname,
          lastname: data.lastname,
          password: data.password,
          email: data.email,
        });
        alert("confirmed");
        handleClose();
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("wrong input");
      handleClose();
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formdata) => {
    setRegisterorverify(false);
    console.log(formdata);
    setData(formdata);

    setTimeout(() => {
      alert("timeout");
      setVerify();
      handleClose();
    }, 300000);
    emailjs
      .sendForm(
        "service_bkgqxjq",
        "template_kps0745",
        form.current,
        `Aqy5vxlkXUDLZ3OOJ`
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    console.log(temp);
  };
  return (
    <div>
      {registerorverify ? (
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="formregister"
        >
          <p className="titleregister">Register </p>
          <p className="messageregister">
            Signup now and get full access to our app.
          </p>
          <div className="flexregister">
            <label>
              <input
                required=""
                placeholder="Firstname"
                type="text"
                className="inputregister"
                {...register("firstname", { required: true })}
              />
              {errors.firstname && (
                <div>dont fit the condition:{errors.firstname.type}</div>
              )}
              <span>Firstname</span>
            </label>

            <label>
              <input
                required=""
                placeholder="Lastname"
                type="text"
                className="inputregister"
                {...register("lastname", { required: true })}
              />
              {errors.lastname && (
                <div>dont fit the condition:{errors.lastname.type}</div>
              )}
              <span>Lastname</span>
            </label>
          </div>
          <br />
          <label>
            <input
              required=""
              placeholder="Username"
              type="text"
              className="inputregister"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <div>dont fit the condition:{errors.username.type}</div>
            )}
            <span>Username</span>
          </label>
          <br />
          <label>
            <input
              required=""
              placeholder="Email"
              type="email"
              className="inputregister"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <div>dont fit the condition:{errors.email.type}</div>
            )}
            <span>Email</span>
          </label>
          <br />
          <label>
            <input
              required=""
              placeholder="Password"
              type="password"
              className="inputregister"
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password && (
              <div>dont fit the condition:{errors.password.type}</div>
            )}
            <span>Password</span>
          </label>
          <label style={{ display: "none" }}>
            <input
              required=""
              value={verify}
              type="password"
              className="inputregister"
              {...register("passwordemail")}
            />
            <span>Password</span>
          </label>
          <br />
          <input type="submit" className="submitregister" />
        </form>
      ) : (
        <div>
          <p>code sended to your email</p>
          <input onChange={(event) => handlechange(event)} type="text" />
          <button onClick={() => handleclick()}>submit</button>
        </div>
      )}
    </div>
  );
}

export default Register;
