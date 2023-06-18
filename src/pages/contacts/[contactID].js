import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import contacts from "../api/contacts";

export default function Contact() {
  const router = useRouter();
  const { contactID } = router.query;
  const contact = contacts.find((contact) => contact.id === contactID);

  if (!contact) {
    // Handle the case when the topic is not found
    return <h1>Contact not found</h1>;
  }
  return (
    <>
      <a href="/contacts">Back to Contacts</a>
      <Layout>
        <h1>{contact.name}</h1>
        <p>{contact.about}</p>
      </Layout>
    </>
  );
}
