import InputText from "../../../src/behavioral/observer/InputText";
import Label from "../../../src/behavioral/observer/Label";

describe("Component", () => {

    it("Should create components", () => {
        const inputText = new InputText("country");
        const label = new Label("País: {{ country }}");
        inputText.setValue("Brasil");
        label.setValue("country", "Brasil")
        expect(label.getValue()).toBe("País: Brasil");
    });

    it("Should create reactive components", () => {
        const inputText = new InputText("country");
        const label = new Label("País: {{ country }}");
        inputText.register(label);
        inputText.setValue("Brasil");
        expect(label.getValue()).toBe("País: Brasil");
    });

});