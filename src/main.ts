import { EventManager } from "./core/EventManager";
import { NotifierFactory } from "./notifications/NotifierFactory";
import { ShopService } from "./domain/FakeShopService";

const eventManager = new EventManager();

// On crée nos canaux de notifications grâce à la Factory
const emailNotifier = NotifierFactory.createNotifier("EMAIL");
const smsNotifier = NotifierFactory.createNotifier("SMS");
const internalNotifier = NotifierFactory.createNotifier("INTERNAL");

// On abonne nos canaux aux événements de leur choix (Observer)
eventManager.subscribe("ORDER_CREATED", emailNotifier);
eventManager.subscribe("PAYMENT_REFUSED", emailNotifier);
eventManager.subscribe("ORDER_SHIPPED", smsNotifier);
eventManager.subscribe("HIGH_VALUE_ORDER", internalNotifier);

const shopService = new ShopService(eventManager);

console.log("SCÉNARIO 1 : Nouvelle commande");
shopService.createOrder("aurelien@gmail.com", "CMD-001", 45);

console.log("\nSCÉNARIO 2 : Paiement refusé");
shopService.refusePayment("ilies@gmail.com", "CMD-002");

console.log("\nSCÉNARIO 3 : Colis expédié");
shopService.shipOrder("CMD-001", "+33711111111");

console.log("\nSCÉNARIO 4 : Commande avec montant élevé");
shopService.createOrder("corentin@gmail.com", "CMD-003", 1500);
