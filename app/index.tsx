import { db,raw } from "../app/lib/db";

export async function getServerSideProps() {
  //const message = await db("Message").first("text").where({ id: 1 });
  const message = await raw("SELECT text FROM Message WHERE id = 1 LIMIT 1;");

  return {
    props: { message },
  };
};


export default function Home({ message }) {
    return (
      <h1 className="text-3xl font-bold underline">
        Hello world! {message.text}
      </h1>
    )
  }