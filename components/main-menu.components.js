"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenuComponent = void 0;
var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(page) {
        this.page = page;
        this.elementsMainMenu = this.page
            .locator('div')
            .filter({ hasText: /^Elements$/ })
            .first();
    }
    return MainMenuComponent;
}());
exports.MainMenuComponent = MainMenuComponent;
