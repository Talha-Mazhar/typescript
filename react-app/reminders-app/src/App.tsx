import React, { useEffect, useState } from "react";

import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./types/reminder";
import reminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  const removeReminder = async (id: number) => {
    await reminderService.removeReminder(id);
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };
  const addReminder = async (title: string) => {
    const reminder = await reminderService.addReminder(title);
    setReminders([reminder, ...reminders]);
  };
  return (
    <div className="App">
      <NewReminder onAddRemineder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
