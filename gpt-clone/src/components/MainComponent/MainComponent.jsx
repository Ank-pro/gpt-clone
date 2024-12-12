import "./main.css";

export function MainComponent() {
  return <>
  <div className="chat-list">
    <div className="heading">What can I help with?</div>
    <div className="chat">
        <input type="text" placeholder="Message GPT" />
    </div>
    <div className="suggestion"></div>
  </div>
  </>;
}
