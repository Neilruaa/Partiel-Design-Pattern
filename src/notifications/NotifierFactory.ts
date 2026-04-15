import { EventListener } from "../core/EventListener";
import { EmailNotifier } from "./EmailNotifier";
import { SMSNotifier } from "./SMSNotifier";
import { InternalNotifier } from "./InternalNotifier";

export class NotifierFactory {
  public static createNotifier(type: 'EMAIL' | 'SMS' | 'INTERNAL'): EventListener {
    switch (type) {
      case 'EMAIL':
        return new EmailNotifier();
      case 'SMS':
        return new SMSNotifier();
      case 'INTERNAL':
        return new InternalNotifier();
      default:
        throw new Error('Type de notifier inconnu');
    }
  }
}
