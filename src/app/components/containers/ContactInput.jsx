import * as React from "react";
import Input from "../form/Input";

export default function ContactInput() {
  const formRef = React.useRef(null);

  const handlePost = async (data) => {
    try {
      const request = await fetch(`${process.env.BASE_URL}/api/contacts/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    const formData = formRef.current;
    e.preventDefault();
    const data = {
      name: formData["name"].value,
      email: formData["email"].value,
      img_url: formData["img_url"].value || undefined,
    };

    if (!data.img_url) delete data.img_url;
    handlePost(data);
    formRef.current.reset();
    console.log(data);
  };
  return (
    <section className="mt-5">
      <h1 className="text-center text-5xl font-bold">Contact Apps</h1>
      <h2 className="text-left text-xl font-bold mt-2.5">Add New Contact</h2>
      <form className="my-6 p-4 w-[100%] shadow rounded-lg flex flex-col gap-3" ref={formRef}>
        <Input name="name" placeholder="Nama" />
        <Input name="email" placeholder="Email" />
        <Input name="img_url" placeholder="Image URL" />
        <button
          id="main__container-button"
          className="w-full text-white bg-[#007bff] border-none p-4 text-lg transition duration-300 ease-in-out rounded-[6px] hover:bg-[#0056b3] curscor-pointer"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </section>
  );
}
