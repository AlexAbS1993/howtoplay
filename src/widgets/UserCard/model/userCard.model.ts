import { createStore } from "effector";

export const $currentUserID = createStore<string|null>(null)