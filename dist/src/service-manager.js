/**
 * Service Manager contain some angular component service and global command service.
 */
var ServiceManager = /** @class */ (function () {
    function ServiceManager() {
        this.services = new Map();
        this.commands = new Map();
    }
    ServiceManager.prototype.injectService = function (service, serviceInstance) {
        this.services.set(service.name, serviceInstance);
    };
    ServiceManager.prototype.getService = function (service) {
        return this.services.get(service.name);
    };
    ServiceManager.prototype.registCommand = function (command) {
        this.commands.set(command.id, command);
    };
    return ServiceManager;
}());
export { ServiceManager };
//# sourceMappingURL=service-manager.js.map