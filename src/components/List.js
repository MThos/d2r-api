import React from "react";
import Textbox from "./Textbox";
import CopyIcon from "./CopyIcon";
import History from "./History";

const List = (props) => {
  const API_KEY = props.api_key;

  const CLASSES_LIST = [
    ["Amazon", "localhost:8000/amazon?api_key="],
    ["Assassin", "localhost:8000/assassin?api_key="],
    ["Barbarian", "localhost:8000/barbarian?api_key="],
    ["Druid", "localhost:8000/druid?api_key="],
    ["Necromancer", "localhost:8000/necromancer?api_key="],
    ["Paladin", "localhost:8000/paladin?api_key="],
    ["Sorceress", "localhost:8000/sorceress?api_key="]
  ];

  const ITEMS_LIST = [
    ["Runewords", "localhost:8000/runewords?api_key="],
    ["Uniques", "localhost:8000/uniques?api_key="],
    ["Sets", "localhost:8000/sets?api_key="],
    ["Normals", "localhost:8000/normals?api_key="],
    ["Exceptionals", "localhost:8000/exceptionals?api_key="],
    ["Elites", "localhost:8000/elites?api_key="]
  ];

  const CHARMS_LIST = [
    ["Unique", "localhost:8000/unique-charms?api_key="],
    ["Small", "localhost:8000/small-charms?api_key="],
    ["Large", "localhost:8000/large-charms?api_key="],
    ["Grand", "localhost:8000/grand-charms?api_key="]
  ];

  const SOCKETABLE_LIST = [
    ["Runes", "localhost:8000/runes?api_key="],
    ["Gems", "localhost:8000/gems?api_key="],
    ["Jewels", "localhost:8000/jewels?api_key="]
  ];

  return (
    <main id="endpoint-list" className="fade-in">
      <div id="api-history">
        <History api_key={API_KEY ? API_KEY : ""} />
      </div>
      <div id="api-textbox">
        <Textbox api_key={API_KEY ? API_KEY : "LOGIN TO ACCESS YOUR API KEY — OR SIGNUP FOR ACCESS"} />
        <CopyIcon copy_text={API_KEY ? API_KEY : ""} tooltip="copy key" />
      </div>
      <div id="api-list">
        <div id="class-list">
          <div className="api-list-title">&#183;CLASSES&#183;</div>
          {
          CLASSES_LIST.map((key) => (
            <div id="endpoint">
              <a key={key[0]} href={`http://${key[1] + API_KEY}`} target="_blank" rel="noreferrer">
                <div className="api-list-item" data-tip={`OPEN ${key[0].toUpperCase()} IN NEW TAB`} data-border="true" data-place="bottom" data-background-color="black">
                  <div className="api-list-item-left">
                    {key[0]}
                  </div>
                  <div className="api-list-item-center">
                    {key[1]}{API_KEY ? API_KEY : "[XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]"}
                  </div>
                </div>
              </a>
              <CopyIcon className="endpoint-copy" tooltip={`copy ${key[0]}`} copy_text={API_KEY ? key[1] + API_KEY : "[XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]"} />
            </div>
          ))
          }
        </div>
        <div id="socketable-list">
          <div className="api-list-title">&#183;SOCKETABLES&#183;</div>
          {
          SOCKETABLE_LIST.map((key) => (
            <div id="endpoint">
              <a key={key[0]} href={`http://${key[1] + API_KEY}`} target="_blank" rel="noreferrer">
                <div className="api-list-item" data-tip={`OPEN ${key[0].toUpperCase()} IN NEW TAB`} data-border="true" data-place="bottom" data-background-color="black">
                  <div className="api-list-item-left">
                    {key[0]}
                  </div>
                  <div className="api-list-item-center">
                    {key[1]}{API_KEY ? API_KEY : "[XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]"}
                  </div>
                </div>
              </a>
              <CopyIcon className="endpoint-copy" tooltip={`copy ${key[0]}`} copy_text={API_KEY ? key[1] + API_KEY : "[XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]"} />
            </div>
          ))
          }
        </div>
        <div id="items-list">
          <div className="api-list-title">&#183;CHARMS&#183;</div>
          {
          CHARMS_LIST.map((key) => (
            <div id="endpoint">
              <a key={key[0]} href={`http://${key[1] + API_KEY}`} target="_blank" rel="noreferrer">
                <div className="api-list-item" data-tip={`OPEN ${key[0].toUpperCase()} IN NEW TAB`} data-border="true" data-place="bottom" data-background-color="black">
                  <div className="api-list-item-left">
                    {key[0]}
                  </div>
                  <div className="api-list-item-center">
                    {key[1]}{API_KEY ? API_KEY : "[XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]"}
                  </div>
                </div>
              </a>
              <CopyIcon className="endpoint-copy" tooltip={`copy ${key[0]}`} copy_text={API_KEY ? key[1] + API_KEY : "[XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]"} />
            </div>
          ))
          }
        </div>
        <div id="items-list">
          <div className="api-list-title">&#183;ITEMS&#183;</div>
          {
          ITEMS_LIST.map((key) => (
            <div id="endpoint">
              <a key={key[0]} href={`http://${key[1] + API_KEY}`} target="_blank" rel="noreferrer">
                <div className="api-list-item" data-tip={`OPEN ${key[0].toUpperCase()} IN NEW TAB`} data-border="true" data-place="bottom" data-background-color="black">
                  <div className="api-list-item-left">
                    {key[0]}
                  </div>
                  <div className="api-list-item-center">
                    {key[1]}{API_KEY ? API_KEY : "[XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]"}
                  </div>
                </div>
              </a>
              <CopyIcon className="endpoint-copy" tooltip={`copy ${key[0]}`} copy_text={API_KEY ? key[1] + API_KEY : "[XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]"} />
            </div>
          ))
          }
        </div>
      </div>
    </main>
  )
}

export default List;