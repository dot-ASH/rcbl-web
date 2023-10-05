import React from "react";
import { h1fontAlt, pfont } from "@/styles/myFonts";
import clsx from "clsx";

interface ContactValue {
  name: string;
  href: string;
}

interface Contact {
  title: string;
  icon: JSX.Element;
  value: ContactValue[];
  color: string;
}

interface ContactsProps {
  contacts: Contact[];
}

const ContactsComponent: React.FC<ContactsProps> = ({ contacts }) => {
  return (
    <div className="flex flex-row w-full h-full justify-evenly gap-[5rem] flex-wrap">
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="flex flex-row gap-[1.5rem] justify-start items-center"
        >
          <div
            className="p-[1rem] rounded-[1rem] opacity-80"
            style={{
              backgroundColor: contact.color,
              boxShadow: `2px 2px 10px ${contact.color}`,
            }}
          >
            {contact.icon}
          </div>
          <div className="flex flex-col gap-[0.5rem] justify-start items-start">
            <h1
              className={clsx(
                "text-[22px] text-[#575552]",
                h1fontAlt.className
              )}
            >
              {contact.title}
            </h1>
            <div>
              <ul>
                {contact.value.map((item, i) => (
                  <li key={i} className="leading-[2rem]">
                    <a
                      href={item.href}
                      className={clsx(
                        "text-[16px] text-[#575552] hover:underline underline-offset-2 transition duration-300",
                        pfont.className
                      )}
                      target="_blank"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactsComponent;
