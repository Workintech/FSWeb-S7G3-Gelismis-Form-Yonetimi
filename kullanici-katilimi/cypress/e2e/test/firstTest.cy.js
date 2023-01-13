describe("ilk testim", function () {
  it("does not do much", function () {
    expect(true).to.equal(true);
  });
});

describe("ikinci test", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000/"); //sayfayı visit edip o yüklendikten sonra başlasın diye beforeEach dedik
  });
  it("does not do much", function () {
    cy.get('[data-cy="buton"]').should("be.disabled");
    cy.get('[data-cy="isim"]').type("ceylin");
    cy.get('[data-cy="email"]').type("asd@asd.com");
    cy.get('[data-cy="sifre"]').type("123");
    cy.get('[data-cy="kosul"]').check();
    cy.get('[data-cy="buton"]').click();
    cy.get('[data-cy="form-submit"]').submit();
  });
});
