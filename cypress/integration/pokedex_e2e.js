describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('ivysaur can be clicked and contents of card loaded', function() {
    cy.visit('http://localhost:5000/pokemon/ivysaur')
    cy.contains('chlorophyll')
  })
})