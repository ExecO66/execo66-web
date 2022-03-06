import { AssignmentProps } from "../../src/modules/assignments/Assignment";
import { toISOString } from "../../src/utils";

describe("Assignments Page : stubbed", () => {
  it("Assignments are in right order", () => {
    cy.intercept("GET", "http://localhost:8080/student-assignment", {
      assignments: [
        {
          assignmentId: "1",
          dueDate: toISOString(
            new Date(new Date().setDate(new Date().getDate() - 1))
          ),
          availableUntil: toISOString(
            new Date(new Date().setDate(new Date().getDate() + 2))
          ),
          teacherInfo: {
            profilePicture: "",
            username: "Bob",
          },
          title: "active:incomplete",
        },
        {
          assignmentId: "1",
          dueDate: toISOString(
            new Date(new Date().setDate(new Date().getDate() + 1))
          ),
          availableUntil: toISOString(
            new Date(new Date().setDate(new Date().getDate() + 3))
          ),
          teacherInfo: {
            profilePicture: "",
            username: "Bob",
          },
          submissionInfo: {
            submissionDate: new Date(
              new Date().setDate(new Date().getDate() + 2)
            ),
            submissionId: "1",
          },
          title: "active:submitted",
        },
        {
          assignmentId: "1",
          dueDate: toISOString(
            new Date(new Date().setDate(new Date().getDate() + 3))
          ),
          availableUntil: toISOString(
            new Date(new Date().setDate(new Date().getDate() - 1))
          ),
          teacherInfo: {
            profilePicture: "",
            username: "Bob",
          },
          title: "past:incomplete",
        },
        {
          assignmentId: "1",
          dueDate: toISOString(
            new Date(new Date().setDate(new Date().getDate() + 3))
          ),
          availableUntil: toISOString(
            new Date(new Date().setDate(new Date().getDate() - 1))
          ),
          teacherInfo: {
            profilePicture: "",
            username: "Bob",
          },
          submissionInfo: {
            submissionDate: new Date(
              new Date().setDate(new Date().getDate() + 2)
            ),
            submissionId: "1",
          },
          title: "past:submitted",
        },
      ] as (AssignmentProps & {
        dueDate: string;
        availableUntil: string;
      })[],
    });

    cy.visit("http://localhost:3000/assignments");

    cy.get("[data-test^='assignment:list']").should("have.length", 2);
    cy.get("[data-test='assignment:list:active']").should("exist");
    cy.get("[data-test='assignment:list:past']").should("exist");
    cy.get("[data-test='assignment:item:submitted']").should("have.length", 2);
    cy.get("[data-test='assignment:item:incomplete']").should("have.length", 2);
  });
});
