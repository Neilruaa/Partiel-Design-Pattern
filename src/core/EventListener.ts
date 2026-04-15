import { Event } from "../events/Event";

export interface EventListener {
  update(event: Event): void;
}
