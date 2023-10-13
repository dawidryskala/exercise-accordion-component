export function AccordingItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleClick() {
    onOpen(isOpen ? null : num);
  }

  return (
    <>
      <div
        className="item"
        onClick={() => handleClick()}
        style={isOpen ? { borderTop: "3px solid green" } : {}}
      >
        <p
          className="item-num"
          style={isOpen ? { color: "green" } : { color: "lightgray" }}
        >
          {num < 10 ? "0" + (num + 1) : num + 1}
        </p>
        <div>
          <p className="item-title" style={isOpen ? { color: "green" } : {}}>
            {title}
          </p>
          {isOpen ? children : null}
        </div>

        <button className="item-button" value={isOpen}>
          {isOpen ? "-" : "+"}
        </button>
      </div>
    </>
  );
}
