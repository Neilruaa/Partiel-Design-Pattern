import { EventListener } from "../core/EventListener";
import { Event } from "../events/Event";

export class EmailNotifier implements EventListener {
  public update(event: Event): void {
    const { name, data } = event;

    if (name === "ORDER_CREATED") {
      console.log(`(${data.clientEmail}) Confirmation de commande #${data.orderId}`);
    } else if (name === "PAYMENT_REFUSED") {
      console.log(`Paiement refusé pour l'utilisateur ${data.clientEmail} (Commande #${data.orderId})`);
    } else {
      console.log(`Email pour ${data.clientEmail}`);
    }
  }
}
