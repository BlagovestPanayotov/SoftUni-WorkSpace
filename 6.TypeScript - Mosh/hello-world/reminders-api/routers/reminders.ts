import { Router } from "express";

const remindersRouter = Router();

remindersRouter.get("/", (req, res) => {
  res.send("List of reminders");
});

export default remindersRouter;
