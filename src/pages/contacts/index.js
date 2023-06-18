import Link from "next/link";
import contacts from "../api/contacts";

export default function Contacts() {
  return (
    <>
      <h1>Contacts</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link href={`/contacts/${contact.id}`}>
              <h3>{contact.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
