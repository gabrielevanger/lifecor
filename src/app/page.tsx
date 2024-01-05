"use client";
import { Avatar, Link } from "@nextui-org/react";

const items = [
  {
    id: 1,
    title: "Entrar em contato",
    url: "tel:95984061361",
  },
  {
    id: 2,
    title: "Agendamento via whatsapp",
    url: "https://wa.me/95984061361",
  },
  {
    id: 3,
    title: "Enviar e-mail",
    url: "mailto: gabriel.evanger@gmail.com",
  },
];
function Items() {
  return (
    <>
      {items.map((item) => (
        <Link
          href={item.url}
          target="_blank"
          className="max-w-[500px] w-full bg-red-700 text-white py-3 flex justify-center rounded-md"
          key={item.id}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
}

function AvatarCustom() {
  return (
    <Avatar
      className="w-20 h-20"
      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
    />
  );
}

function Header() {
  return (
    <header>
      <h1>Clínica Lifecor | Medicina e saúde</h1>
    </header>
  );
}

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col gap-4 items-center justify-center px-5">
      <div className="flex justify-center gap-10 flex-col items-center absolute top-20 sm:top-4 ">
        <AvatarCustom />
        <Header />
      </div>
      <Items />
    </main>
  );
}
