import { EventListener } from "./EventListener";
import { Event } from "../events/Event";

export class EventManager {
  private listeners: Record<string, EventListener[]> = {};

  public subscribe(eventType: string, listener: EventListener): void {
    if (!this.listeners[eventType]) {
      this.listeners[eventType] = [];
    }
    this.listeners[eventType].push(listener);
    console.log(`Nouvel abonnement pour l'événement : ${eventType}`);
  }


  public unsubscribe(eventType: string, listener: EventListener): void {
    if (!this.listeners[eventType]) return;

    this.listeners[eventType] = this.listeners[eventType].filter(l => l !== listener);
    console.log(`Désabonnement pour l'événement : ${eventType}`);
  }

  public notify(eventType: string, event: Event): void {
    const eventListeners = this.listeners[eventType];

    if (eventListeners && eventListeners.length > 0) {
      console.log(`\n Envoie de l'événement '${eventType}' à ${eventListeners.length} écouteur(s)`);
      for (const listener of eventListeners) {
        listener.update(event);
      }
    } else {
      console.log(`Aucun écouteur pour l'événement '${eventType}'.`);
    }
  }
}
