import * as React from "react";
import ContactItem from "../ContactItem";

export default function ContactList() {
  const [contacts, setContacts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.BASE_URL}/api/contacts`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        setContacts(data.data);
        // console.log(data.data);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    };
    fetchData();
  }, [contacts]);

  const handleDelete = async (id) => {
    try {
        const request = await fetch(`${process.env.BASE_URL}/api/contacts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
            }
        })
    }catch(error){
        console.log(error);
    }
  }

  if(loading) return <p>Loading...</p>;
  return (
    <section className="mt-5 w-full flex flex-col">
      <h2 className="text-left text-xl font-bold mt-2.5">Contact List</h2>
      <div id="mt-5 w-full flex flex-col">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            imgUrl={contact.img_url}
            name={contact.name}
            email={contact.email}
            onDelete={() => handleDelete(contact.id)}
            id={contact.id}
          />
        ))}
      </div>
    </section>
  );
}
