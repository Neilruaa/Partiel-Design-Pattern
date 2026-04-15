import { EventListener } from "../core/EventListener";
import { Event } from "../events/Event";

export class SMSNotifier implements EventListener {
  public update(event: Event): void {
    const { name, data } = event;

    if (name === "ORDER_SHIPPED") {
      console.log(`${data.phoneNumber} Bonjour, votre commande #${data.orderId} vient d'être expédiée`);
    } else {
      console.log(`SMS pour ${data.phoneNumber}`);
    }
  }
}
