const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should return the Intern's name", () => {
        expect(new Intern("Bruce Wayne",464678,"wayne@cwayneenterprises.com","GU").getName()).toBe("Bruce Wayne");
    });

    it("should return the Intern's id", () => {
        expect(new Intern("Bruce Wayne",464678,"wayne@cwayneenterprises.com","GU").getId()).toBe(464678);
    });

    it("should return the Intern's email", () => {
        expect(new Intern("Bruce Wayne",464678,"wayne@cwayneenterprises.com","GU").getEmail()).toBe("wayne@cwayneenterprises.com");
    });

    it("should return the Intern's role", () => {
        expect(new Intern("Bruce Wayne",464678,"wayne@cwayneenterprises.com","GU").getRole()).toBe("Intern");
    });

    it("should return the Intern's GitHub", () => {
        expect(new Intern("Bruce Wayne",464678,"wayne@cwayneenterprises.com","GU").getSchool()).toBe("GU");
    });
});
