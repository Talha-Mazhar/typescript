import React from "react";

import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./types/reminder";

function App() {
  const reminders: Reminder[] = [
    { id: 1, title: "Reminder 1" },
    { id: 2, title: "Reminder 2" },
    { id: 3, title: "Reminder 3" },
    { id: 4, title: "Reminder 4" },
    { id: 5, title: "Reminder 5" },
  ];

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
