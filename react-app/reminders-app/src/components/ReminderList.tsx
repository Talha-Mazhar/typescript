import React from "react";
import Reminder from "../types/reminder";

interface ReminderListProps {
  items: Reminder[];
}

function ReminderList(props: ReminderListProps) {
  return (
    <ul>
      {props.items.map((item) => (
        <li>{item.title}</li>
      ))}
    </ul>
  );
}

export default ReminderList;
