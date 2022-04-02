import axios from "axios";
describe("Adapter - Http", () => {

    it("should testing the API", async () => {
        const response = await axios({
            url: "http://localhost:3002/books",
            method: "GET"
        });
        const books = response.data;
        const [ book1, book2, book3 ] = books;
        expect(book1.title).toBe("abstract factory");
        expect(book2.title).toBe("adapter");
        expect(book3.title).toBe("strategy");
    });

});