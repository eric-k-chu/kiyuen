"use client";

import { ChangeEvent, FormEvent, useReducer } from "react";
import emailjs from "@emailjs/browser";

type EmailFormAction =
  | { type: "CHANGE_NAME"; payload: string }
  | { type: "CHANGE_EMAIL"; payload: string }
  | { type: "CHANGE_MESSAGE"; payload: string }
  | { type: "RESET_FORM" };

interface EmailFormState {
  name: string;
  email: string;
  message: string;
}

const INIT_STATE: EmailFormState = {
  name: "",
  email: "",
  message: "",
};

function reducer(
  state: EmailFormState,
  action: EmailFormAction,
): EmailFormState {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "CHANGE_EMAIL":
      return { ...state, email: action.payload };
    case "CHANGE_MESSAGE":
      return { ...state, message: action.payload };
    case "RESET_FORM":
      return INIT_STATE;
    default:
      return state;
  }
}

export function Contact() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: "NAME" | "EMAIL" | "MESSAGE",
  ): void {
    dispatch({
      type: `CHANGE_${type}`,
      payload: e.currentTarget.value,
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (
      state.name.length < 1 ||
      state.email.length < 1 ||
      state.message.length < 1
    ) {
      alert("Name, email, or message cannot be empty!.");
      return;
    }

    if (
      !process.env.NEXT_PUBLIC_EMAIL_SERVICE ||
      !process.env.NEXT_PUBLIC_EMAIL_TEMPLATE ||
      !process.env.NEXT_PUBLIC_EMAIL_PK
    ) {
      alert("Internal Server Error.");
      return;
    }

    const templateParams = {
      from_name: state.name,
      from_email: state.email,
      to_name: "Eric Chu",
      message: state.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_PK,
      )
      .then(() => {
        alert("Email sent successfully!");
        dispatch({
          type: "RESET_FORM",
        });
      })
      .catch(() => {
        alert("An unexpected error occured with sending an email.");
      });
  }

  return (
    <>
      <h1 className="font-nova text-5xl font-semibold uppercase">Contact</h1>
      <form
        className="mx-auto my-4 flex w-full max-w-[600px] flex-col items-center justify-center gap-8 rounded-md bg-zinc-700 p-8"
        onSubmit={handleSubmit}
      >
        <label className="w-full text-xl font-semibold">
          Name:
          <input
            type="text"
            className="my-2 w-full rounded-md bg-zinc-800 px-2 text-base font-normal leading-8"
            value={state.name}
            onChange={(e) => handleChange(e, "NAME")}
          />
        </label>
        <label className="w-full text-xl font-semibold">
          Email:
          <input
            type="text"
            className="my-2 w-full rounded-md bg-zinc-800 px-2  text-base font-normal leading-8"
            value={state.email}
            onChange={(e) => handleChange(e, "EMAIL")}
          />
        </label>
        <label className="w-full text-xl font-semibold">
          Message:
          <textarea
            rows={15}
            className="my-2 w-full resize-none rounded-md bg-zinc-800 p-2 text-base font-normal"
            value={state.message}
            onChange={(e) => handleChange(e, "MESSAGE")}
          />
        </label>
        <button
          type="submit"
          className="w-full scale-100 rounded-md bg-primary-blue p-2 text-lg font-semibold uppercase transition-transform duration-150 ease-in-out hover:scale-105"
        >
          Send
        </button>
      </form>
    </>
  );
}
