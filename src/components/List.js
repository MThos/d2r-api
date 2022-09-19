import React from "react";
import Textbox from "./Textbox";
import Subtitle from "./Subtitle";
import CopyIcon from "./CopyIcon";

const List = () => {
  const API_KEY = React.useState("ZJbRh9u1kmLBUIQBVA9k6Gwpk7XWRHVqvkcIGhlH7GZrfS8IDXsJfLjbP");

  const API_LIST = [
    ["Amazon", "localhost:8000/amazon?api_key="],
    ["Assassin", "localhost:8000/assassin?api_key="],
    ["Barbarian", "localhost:8000/barbarian?api_key="],
    ["Druid", "localhost:8000/druid?api_key="],
    ["Necromancer", "localhost:8000/necromancer?api_key="],
    ["Paladin", "localhost:8000/paladin?api_key="],
    ["Sorceress", "localhost:8000/sorceress?api_key="]
  ];

  return (
    <main className="fade-in">
      <Subtitle title="KEY" />
      <div id="api-textbox">
        <Textbox api_key={API_KEY[0]} />
        <CopyIcon api_key={API_KEY[0]} tooltip="copy key" />
      </div>
      <Subtitle title="ENDPOINTS" />
      <div id="api-list">
      {
        API_LIST.map((key) => (
          <a key={key[0]} href={`http://${key[1] + API_KEY[0]}`} target="_blank" rel="noreferrer">
            <div className="api-list-item" data-tip={key[0]} data-border="true" data-place="bottom" data-background-color="black">
              <div className="api-list-item-left">
                {key[0]}
              </div>
              <div className="api-list-item-right">
                {key[1]}{API_KEY[0]}
              </div>
            </div>
          </a>
        ))
      }
      </div>
    </main>
  )
}

export default List;