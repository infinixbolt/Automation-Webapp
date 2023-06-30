describe("Notes API", () => {
  context("Users", () => {
    it("Create a new user account", () => {
      cy.api({
        method: "POST",
        url: "/notes/api/users/register",
        body: {
          name: "victor",
          email: "victor@gmail.com",
          password: "1234554321",
        },
        failOnStatusCode: false,
      }).then((Response) => {
        cy.log("Response status:", Response.status);
        cy.log("Response message:", Response.body.message);
        expect(Response.status).to.be.oneOf([201, 400, 409]);
      });
    });

    it("Log in as an existing user", () => {
      cy.api({
        method: "post",
        url: "/notes/api/users/login",
        body: {
          email: "victor@gmail.com",
          password: "12344321",
        },
        //failOnStatusCode: false,
      }).then((Response) => {
        cy.log("Response status:", Response.status);
        cy.log("Response message:", Response.body.message);
        expect(Response.status).to.eq(200);
      });
    });

    it("Retrieve user profile information", () => {
      cy.api({
        method: "get",
        url: "/notes/api/users/profile",
        headers: {
          "x-auth-token":
            "43c1ad415af348c2ae375754b3b554f3dfb55e1de9194fcbaeb6788585e2fe8b",
        },
        //failOnStatusCode: false,
      }).then((Response) => {
        cy.log("Response status:", Response.status);
        cy.log("Response message:", Response.body.message);
        expect(Response.status).to.eq(200);
      });
    });

    it("Update the user profile information", () => {
      cy.api({
        method: "patch",
        url: "/notes/api/users/profile",
        headers: {
          "x-auth-token":
            "43c1ad415af348c2ae375754b3b554f3dfb55e1de9194fcbaeb6788585e2fe8b",
        },
        body: {
          name: "Santos",
        },
        //failOnStatusCode: false,
      }).then((Response) => {
        cy.log("Response status:", Response.status);
        cy.log("Response message:", Response.body.message);
        expect(Response.status).to.eq(200);
      });
    });

    it("Send password reset link to user's email", () => {
      cy.api({
        method: "post",
        url: "/notes/api/users/forgot-password",
        body: {
          email: "victor@gmail.com",
        },
        //failOnStatusCode: false,
      }).then((Response) => {
        cy.log("Response status:", Response.status);
        cy.log("Response message:", Response.body.message);
        expect(Response.status).to.eq(200);
      });
    });

    it("Verify a password reset token", () => {
      cy.api({
        method: "post",
        url: "/notes/api/users/verify-reset-password-token",
        headers: {
          "x-auth-token": "4234tfdtd2e45dtdtr",
        },
        failOnStatusCode: false,
      }).then((Response) => {
        cy.log("Response status:", Response.status);
        cy.log("Response message:", Response.body.message);
        expect(Response.status).to.be.oneOf([200, 401]);
      });
    });

    it("Reset a users Passowrd", () => {
      cy.api({
        method: "post",
        url: "/notes/api/users/reset-password",
        body: {
          "x-auth-token":
            "43c1ad415af348c2ae375754b3b554f3dfb55e1de9194fcbaeb6788585e2fe8b",
          newPassword: "yuyuyuyu",
        },
        failOnStatusCode: false,
      }).then((Response) => {
        cy.log("Response status:", Response.status);
        cy.log("Response message:", Response.body.message);
        expect(Response.status).to.be.oneOf([200, 400]);
      });
    });

    it("change a user's password", () => {
      cy.api({
        method: "post",
        url: "/notes/api/users/change-password",
        headers: {
          "x-auth-token":
            "242defb07a704baa906395bfff46ccdfc880a1a2f26344a4a38f7726bd4634d0",
        },
        body: {
          currentPassword: "123321",
          newPassword: "12344321",
        },
        failOnStatusCode: false,
      }).then((Response) => {
        cy.log("Response status:", Response.status);
        cy.log("Response message:", Response.body.message);
        //expect(Response.status).to.eq(200);
      });
    });

    it("logout a user", () => {
      cy.api({
        method: "delete",
        url: "/notes/api/users/logout",
        headers: {
          "x-auth-token":
            "242defb07a704baa906395bfff46ccdfc880a1a2f26344a4a38f7726bd4634d0",
        },
        failOnStatusCode: false,
      }).then((Response) => {
        cy.log("Response status:", Response.status);
        cy.log("Response message:", Response.body.message);
        expect(Response.status).to.eq(200, 401);
      });
    });

    it("delete a user", () => {
      cy.api({
        method: "delete",
        url: "/notes/api/users/delete-account",
        headers: {
          "x-auth-token":
            "242defb07a704baa906395bfff46ccdfc880a1a2f26344a4a38f7726bd4634d0",
        },
        failOnStatusCode: false,
      }).then((Response) => {
        cy.log("Response status:", Response.status);
        cy.log("Response message:", Response.body.message);
        expect(Response.status).to.eq(200, 401);
      });
    });
  });

  context("Notes", () => {
    it("Create a new note", () => {
      cy.api({
        method: "post",
        url: "/notes/api/notes",
        headers: {
          "x-auth-token": "43c1ad415af348c2ae375754b3b554f3dfb55e1de9194fcbaeb6788585e2fe8b",
        },
        body: {
          title: "Physics",
          description: "Atoms and Molecules",
          category: "Work",
        },

        //failOnStatusCode: false,
      }).then((Response) => {
        cy.log("Response status:", Response.status);
        cy.log("Response message:", Response.body.message);
        //expect(Response.status).to.be.oneOf([200, 401]);
      });
    });

    it("Get all notes", () => {
      cy.api({
        method: "get",
        url: "/notes/api/notes",
        headers: {
          "x-auth-token": "43c1ad415af348c2ae375754b3b554f3dfb55e1de9194fcbaeb6788585e2fe8b",
        },
        //failOnStatusCode: false,
      }).then((Response) => {
        cy.log("Response status:", Response.status);
        cy.log("Response message:", Response.body.message);
        expect(Response.status).to.eql(200);
      });
    });

    it("Get a note by ID", () => {
      cy.api({
        method: "get",
        url: "/notes/api/notes/649f0751d1562c00f7240513",
        headers: {
          "x-auth-token": "43c1ad415af348c2ae375754b3b554f3dfb55e1de9194fcbaeb6788585e2fe8b",
        },
        //failOnStatusCode: false,
      }).then((Response) => {
        cy.log("Response status:", Response.status);
        cy.log("Response message:", Response.body.message);
        expect(Response.status).to.be.oneOf([200, 401]);
      });
    });

    it("Updating an existing note", () => {
      cy.api({
        method: "put",
        url: "/notes/api/notes/649f04f4d1562c00f7240507",
        headers: {
          "x-auth-token": "43c1ad415af348c2ae375754b3b554f3dfb55e1de9194fcbaeb6788585e2fe8b",
        },
        body: {
          id: "649f04f4d1562c00f7240507",
          title: "Chemistry",
          description: "Periodic Table",
          completed: true,
          category: "Work",
        },
        //failOnStatusCode: false,
      }).then((Response) => {
        cy.log("Response status:", Response.status);
        cy.log("Response message:", Response.body.message);
        expect(Response.status).to.be.oneOf([200, 401]);
      });
    });

    it("Update the completed status of a note", () => {
      cy.api({
        method: "patch",
        url: "/notes/api/notes/649f04f4d1562c00f7240507",
        headers: {
          "x-auth-token": "43c1ad415af348c2ae375754b3b554f3dfb55e1de9194fcbaeb6788585e2fe8b",
        },
        body: {
          id: "649f04f4d1562c00f7240507",
          completed: false,
        },
        //failOnStatusCode: false,
      }).then((Response) => {
        cy.log("Response status:", Response.status);
        cy.log("Response message:", Response.body.message);
        expect(Response.status).to.be.oneOf([200, 401]);
      });
    });

    it.only("Delete a note by ID", () => {
      cy.api({
        method: "delete",
        url: "/notes/api/notes/649f04f4d1562c00f7240507",
        headers: {
          "x-auth-token": "43c1ad415af348c2ae375754b3b554f3dfb55e1de9194fcbaeb6788585e2fe8b",
        },
        body: {
          id: "649f04f4d1562c00f7240507"
        },
        failOnStatusCode: false,
      }).then((Response) => {
        cy.log("Response status:", Response.status);
        cy.log("Response message:", Response.body.message);
        expect(Response.status).to.be.oneOf([200, 404]);
      });
    });
  });
});
