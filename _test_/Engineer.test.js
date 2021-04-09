const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should return the Engineer's name", () => {
        expect(new Engineer("Bruce Wayne",464678,"wayne@cwayneenterprises.com").getName()).toBe("Bruce Wayne");
    });

    it("should return the Engineer's id", () => {
        expect(new Engineer("Bruce Wayne",464678,"wayne@cwayneenterprises.com").getId()).toBe(464678);
    });

    it("should return the Engineer's email", () => {
        expect(new Engineer("Bruce Wayne",464678,"wayne@cwayneenterprises.com").getEmail()).toBe("wayne@cwayneenterprises.com");
    });

    it("should return the Engineer's role", () => {
        expect(new Engineer("Bruce Wayne",464678,"wayne@cwayneenterprises.com").getRole()).toBe("Employee");
    });

    it("should return the Engineer's GitHub", () => {
        expect(new Engineer("Bruce Wayne",464678,"wayne@cwayneenterprises.com","Batman").getGitHub()).toBe("Batman");
    });
});