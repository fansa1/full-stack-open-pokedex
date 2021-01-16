describe('Pokedex', function() {
  it('front page can be opened', function() {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:5000')
    // eslint-disable-next-line no-undef
    cy.contains('ivysaur')
    // eslint-disable-next-line no-undef
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  // eslint-disable-next-line linebreak-style
  })
  it('ivysaur can be clicked and contents of card loaded', function() {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:5000/pokemon/ivysaur')
    // eslint-disable-next-line no-undef
    cy.contains('chlorophyll')
  // eslint-disable-next-line linebreak-style
  })
})