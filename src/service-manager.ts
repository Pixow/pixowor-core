import { Command } from "./plugin";

export declare type Constructable<T> = new (...args: any[]) => T;

/**
 * Service Manager contain some angular component service and global command service.
 */
export class ServiceManager {
  private services = new Map<string, any>();
  private commands = new Map<string, Command>();

  injectService<T>(service: Constructable<T>, serviceInstance: T) {
    this.services.set(service.name, serviceInstance);
  }

  getService<T>(service: Constructable<T>): T {
    return this.services.get(service.name)
  }

  registCommand(command: Command) {
    this.commands.set(command.id, command);
  }
}
