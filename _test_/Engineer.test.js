const Employee = require("../lib/Engineer");

describe("Employee", () => {
    it("should return the employee's name", () => {
        expect(new Engineer("Bruce Wayne",464678,"wayne@cwayneenterprises.com").getName()).toBe("Bruce Wayne");
    });

    it("should return the employee's id", () => {
        expect(new Engineer("Bruce Wayne",464678,"wayne@cwayneenterprises.com").getId()).toBe(464678);
    });

    it("should return the employee's email", () => {
        expect(new Engineer("Bruce Wayne",464678,"wayne@cwayneenterprises.com").getEmail()).toBe("wayne@cwayneenterprises.com");
    });

    it("should return the employee's role", () => {
        expect(new Engineer("Bruce Wayne",464678,"wayne@cwayneenterprises.com").getRole()).toBe("Employee");
    });

    it("should return the Engineer's GitHub", () => {
        expect(new Engineer("Bruce Wayne",464678,"wayne@cwayneenterprises.com","Batman").getGitHub()).toBe("Batman");
    });
});