import { useState } from "react";
import { AccordingItem } from "./AccordingItem";

export const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export function According() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div>
      {faqs.map((element, i) => (
        <AccordingItem
          // element={element}
          title={element.title}
          num={i}
          key={element.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          <p>{element.text}</p>
        </AccordingItem>
      ))}

      <AccordingItem
        // element={element}
        title="Test 1"
        num={22}
        key="Test 1"
        curOpen={curOpen}
        onOpen={setCurOpen}
      >
        <p>Test 1</p>
      </AccordingItem>
    </div>
  );
}
