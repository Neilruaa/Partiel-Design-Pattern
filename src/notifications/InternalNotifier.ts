import { EventListener } from "../core/EventListener";
import { Event } from "../events/Event";

export class InternalNotifier implements EventListener {
  public update(event: Event): void {
    const { name, data } = event;

    if (name === "HIGH_VALUE_ORDER") {
      console.log(`ALERTE LOGISTIQUE : La commande #${data.orderId} dépasse le montant critique (${data.amount}€).`);
    } else {
      console.log(`ALERTE LOGISTIQUE`);
    }
  }
}
