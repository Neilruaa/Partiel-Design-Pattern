import { EventManager } from "../core/EventManager";

export class ShopService {
  private eventManager: EventManager;

  constructor(eventManager: EventManager) {
    this.eventManager = eventManager;
  }

  public createOrder(clientEmail: string, orderId: string, amount: number): void {
    console.log(`\nCréation de la commande ${orderId} pour ${clientEmail} d'un montant de ${amount}€`);

    this.eventManager.notify("ORDER_CREATED", {
      name: "ORDER_CREATED",
      timestamp: new Date(),
      data: { orderId, clientEmail, amount }
    });

    if (amount >= 1000) {
      this.eventManager.notify("HIGH_VALUE_ORDER", {
        name: "HIGH_VALUE_ORDER",
        timestamp: new Date(),
        data: { orderId, amount }
      });
    }
  }

  public refusePayment(clientEmail: string, orderId: string): void {
    console.log(`\nRefus de paiement détecté sur la commande ${orderId}`);

    this.eventManager.notify("PAYMENT_REFUSED", {
      name: "PAYMENT_REFUSED",
      timestamp: new Date(),
      data: { orderId, clientEmail }
    });
  }

  public shipOrder(orderId: string, phoneNumber: string): void {
    console.log(`\nExpédition de la commande ${orderId}`);

    this.eventManager.notify("ORDER_SHIPPED", {
      name: "ORDER_SHIPPED",
      timestamp: new Date(),
      data: { orderId, phoneNumber }
    });
  }
}
