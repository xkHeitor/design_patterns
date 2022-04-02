import DarkWidgetFactory from "../../../src/creational/abstract_factory/dark/DarkWidgetFactory";
import LightWidgetFactory from "../../../src/creational/abstract_factory/light/LightWidgetFactory";
import View from "../../../src/creational/abstract_factory/View";
import DraculaWidgetFactory from '../../../src/creational/abstract_factory/dracula/DraculaWidgetFactory';

describe("Widget", () => {

    it("should create a one graphic interface with dark theme", () => {
        const view = new View(new DarkWidgetFactory());
        expect(view.label.color).toBe("black");
        expect(view.button.color).toBe("white");
        expect(view.button.backgroundColor).toBe("blue");
    });


    it("should create a one graphic interface with light theme", () => {
        const view = new View(new LightWidgetFactory());
        expect(view.label.color).toBe("white");
        expect(view.button.color).toBe("white");
        expect(view.button.backgroundColor).toBe("black");
    });

    it("should create a one graphic interface with dracula theme", () => {
        const view = new View(new DraculaWidgetFactory());
        expect(view.label.color).toBe("blue");
        expect(view.button.color).toBe("black");
        expect(view.button.backgroundColor).toBe("white");
    });
 
});