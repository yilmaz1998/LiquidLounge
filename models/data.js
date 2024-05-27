const mongoose = require('mongoose')
const db = require('../models')


const drinks = [
    {
      "name": "Martini",
      "img": "https://example.com/martini.jpg",
      "ingredients": [
        "2 1/2 oz Gin or Votka",
        "1/2 oz Dry Vermouth"
      ],
      "method": "Stir gin or votka and vermouth with ice, then strain into a chilled cocktail glass. Garnish with an olive or a twist of lemon."
    },
    {
      "name": "Old Fashioned",
      "img": "https://example.com/old_fashioned.jpg",
      "ingredients": [
        "2 oz Bourbon or Rye Whiskey",
        "2 dashes Angostura Bitters",
        "1 sugar cube",
        "Few dashes plain water"
      ],
      "method": "Muddle the sugar cube and bitters with a few dashes of water in a rocks glass. Add whiskey and ice cubes. Stir gently."
    },
    {
      "name": "Negroni",
      "img": "https://example.com/negroni.jpg",
      "ingredients": [
        "1 oz Gin",
        "1 oz Campari",
        "1 oz Sweet Vermouth"
      ],
      "method": "Stir all ingredients with ice, then strain into a rocks glass filled with ice. Garnish with an orange twist."
    },
    {
      "name": "Margarita",
      "img": "https://example.com/margarita.jpg",
      "ingredients": [
        "1 1/2 oz Tequila",
        "1/2 oz Triple Sec",
        "1 oz Fresh Lime Juice",
        "Salt (for rimming the glass)"
      ],
      "method": "Rub the rim of the glass with the lime slice to make the salt stick to it. Shake the other ingredients with ice, then strain into the glass."
    },
    {
      "name": "Manhattan",
      "img": "https://example.com/manhattan.jpg",
      "ingredients": [
        "2 oz Rye Whiskey",
        "1 oz Sweet Vermouth",
        "2 dashes Angostura Bitters"
      ],
      "method": "Stir all ingredients with ice, then strain into a chilled cocktail glass. Garnish with a cherry."
    },
    {
      "name": "Daiquiri",
      "img": "https://example.com/daiquiri.jpg",
      "ingredients": [
        "2 oz White Rum",
        "3/4 oz Fresh Lime Juice",
        "1/2 oz Simple Syrup"
      ],
      "method": "Shake all ingredients with ice, then strain into a cocktail glass."
    },
    {
      "name": "Whiskey Sour",
      "img": "https://example.com/whiskey_sour.jpg",
      "ingredients": [
        "2 oz Bourbon or Rye Whiskey",
        "3/4 oz Fresh Lemon Juice",
        "1/2 oz Simple Syrup",
        "1 egg white (optional)"
      ],
      "method": "Shake all ingredients with ice, then strain into a sour glass. Garnish with a cherry and an orange slice."
    },
    {
      "name": "Mojito",
      "img": "https://example.com/mojito.jpg",
      "ingredients": [
        "2 oz White Rum",
        "1/2 oz Simple Syrup",
        "3/4 oz Fresh Lime Juice",
        "2-4 Fresh Mint Leaves",
        "Club Soda"
      ],
      "method": "Muddle mint leaves and simple syrup in a highball glass. Add rum, lime juice, and ice. Top with soda water and stir gently."
    },
    {
      "name": "Tom Collins",
      "img": "https://example.com/tom_collins.jpg",
      "ingredients": [
        "2 oz Gin",
        "3/4 oz Fresh Lemon Juice",
        "1/2 oz Simple Syrup",
        "Club Soda"
      ],
      "method": "Shake gin, lemon juice, and simple syrup with ice, then strain into a Collins glass filled with ice. Top with club soda and stir gently."
    },
    {
      "name": "Bloody Mary",
      "img": "https://example.com/bloody_mary.jpg",
      "ingredients": [
        "1 1/2 oz Vodka",
        "3 oz Tomato Juice",
        "1/2 oz Fresh Lemon Juice",
        "Worcestershire Sauce",
        "Tabasco Sauce",
        "Salt & Pepper",
        "Celery Stalk (for garnish)",
        "Lemon Wedge (for garnish)"
      ],
      "method": "Build all ingredients in a highball glass filled with ice. Stir gently. Garnish with a celery stalk and lemon wedge."
    },
    {
      "name": "Cosmopolitan",
      "img": "https://example.com/cosmopolitan.jpg",
      "ingredients": [
        "1 1/2 oz Vodka",
        "1/2 oz Triple Sec",
        "1/2 oz Fresh Lime Juice",
        "1/4 oz Cranberry Juice"
      ],
      "method": "Shake all ingredients with ice, then strain into a chilled cocktail glass. Garnish with a lime wheel."
    },
    {
      "name": "Singapore Sling",
      "img": "https://example.com/singapore_sling.jpg",
      "ingredients": [
        "1 1/2 oz Gin",
        "1/2 oz Cherry Brandy",
        "1/4 oz Cointreau",
        "1/4 oz Benedictine",
        "4 oz Pineapple Juice",
        "1/2 oz Fresh Lime Juice",
        "1/4 oz Grenadine",
        "1 dash Angostura Bitters"
      ],
      "method": "Shake all ingredients with ice, then strain into a Collins glass filled with ice. Garnish with a cherry and an orange slice."
    },
    {
      "name": "Pina Colada",
      "img": "https://example.com/pina_colada.jpg",
      "ingredients": [
        "2 oz White Rum",
        "3 oz Pineapple Juice",
        "1 oz Coconut Cream",
        "Pineapple Slice (for garnish)",
        "Cherry (for garnish)"
      ],
      "method": "Blend all ingredients with crushed ice until smooth. Pour into a chilled hurricane glass. Garnish with a pineapple slice and a cherry."
    },
    {
      "name": "Mai Tai",
      "img": "https://example.com/mai_tai.jpg",
      "ingredients": [
        "1 1/2 oz Jamaican Rum",
        "1/2 oz Orgeat Syrup",
        "1/2 oz Orange Curacao",
        "3/4 oz Fresh Lime Juice",
        "1/4 oz Simple Syrup",
        "Dash of Angostura Bitters",
        "Mint Sprig (for garnish)",
        "Lime Wheel (for garnish)"
      ],
      "method": "Shake all ingredients with ice, then strain into a rocks glass filled with crushed ice. Garnish with mint sprig and lime wheel."
    },
    {
      "name": "Sidecar",
      "img": "https://example.com/sidecar.jpg",
      "ingredients": [
        "2 oz Cognac",
        "1 oz Triple Sec",
        "3/4 oz Fresh Lemon Juice",
        "Sugar (for rimming the glass)"
      ],
      "method": "Shake all ingredients with ice, then strain into a sugar-rimmed cocktail glass."
    },
    {
      "name": "Sazerac",
      "img": "https://example.com/sazerac.jpg",
      "ingredients": [
        "2 oz Rye Whiskey",
        "1/4 oz Absinthe",
        "1 sugar cube",
        "3 dashes Peychaud's Bitters",
        "Lemon Peel (for garnish)"
      ],
      "method": "Rinse a chilled glass with absinthe, then discard the absinthe. Muddle the sugar cube and bitters with a few drops of water. Add whiskey and ice, then stir. Strain into the chilled glass. Garnish with a lemon peel."
    },
    {
      "name": "Corpse Reviver No. 2",
      "img": "https://example.com/corpse_reviver.jpg",
      "ingredients": [
        "3/4 oz Gin",
        "3/4 oz Cointreau",
        "3/4 oz Lillet Blanc",
        "3/4 oz Fresh Lemon Juice",
        "Dash of Absinthe"
      ],
      "method": "Shake all ingredients with ice, then strain into a chilled cocktail glass. Garnish with a cherry."
    },
    {
      "name": "French 75",
      "img": "https://example.com/french_75.jpg",
      "ingredients": [
        "1 1/2 oz Gin",
        "1/2 oz Fresh Lemon Juice",
        "1/2 oz Simple Syrup",
        "Champagne"
      ],
      "method": "Shake gin, lemon juice, and simple syrup with ice, then strain into a Champagne flute. Top with Champagne."
    },
    {
      "name": "Gimlet",
      "img": "https://example.com/gimlet.jpg",
      "ingredients": [
        "2 oz Gin",
        "3/4 oz Lime Juice",
        "3/4 oz Simple Syrup"
      ],
      "method": "Shake all ingredients with ice, then strain into a chilled cocktail glass."
    },
    {
      "name": "Dark 'n' Stormy",
      "img": "https://example.com/dark_and_stormy.jpg",
      "ingredients": [
        "2 oz Dark Rum",
        "3 oz Ginger Beer",
        "Lime Wedge (for garnish)"
      ],
      "method": "Build rum and ginger beer in a highball glass filled with ice. Stir gently. Garnish with a lime wedge."
    },
    {
      "name": "Rob Roy",
      "img": "https://example.com/rob_roy.jpg",
      "ingredients": [
        "2 oz Scotch Whisky",
        "3/4 oz Sweet Vermouth",
        "Dash of Angostura Bitters"
      ],
      "method": "Stir all ingredients with ice, then strain into a chilled cocktail glass. Garnish with a cherry."
    },
    {
      "name": "Tequila Sunrise",
      "img": "https://example.com/tequila_sunrise.jpg",
      "ingredients": [
        "1 1/2 oz Tequila",
        "3 oz Orange Juice",
        "1/2 oz Grenadine",
        "Orange Slice (for garnish)",
        "Cherry (for garnish)"
      ],
      "method": "Build tequila and orange juice in a highball glass filled with ice. Stir gently. Slowly pour grenadine down the side of the glass to create the sunrise effect. Garnish with an orange slice and a cherry."
    },
    {
      "name": "Irish Coffee",
      "img": "https://example.com/irish_coffee.jpg",
      "ingredients": [
        "1 1/2 oz Irish Whiskey",
        "4 oz Hot Coffee",
        "1 oz Heavy Cream",
        "1/2 oz Simple Syrup (optional)"
      ],
      "method": "Build whiskey and coffee in a warmed Irish coffee glass. Float cream on top by pouring it over the back of a spoon. Optionally, sweeten with simple syrup."
    },
    {
      "name": "Moscow Mule",
      "img": "https://example.com/moscow_mule.jpg",
      "ingredients": [
        "2 oz Vodka",
        "4 oz Ginger Beer",
        "1/2 oz Fresh Lime Juice",
        "Lime Wedge (for garnish)"
      ],
      "method": "Build vodka and ginger beer in a copper mug filled with ice. Add lime juice and stir gently. Garnish with a lime wedge."
    },
    {
      "name": "White Russian",
      "img": "https://example.com/white_russian.jpg",
      "ingredients": [
        "2 oz Vodka",
        "1 oz Coffee Liqueur",
        "1 oz Heavy Cream"
      ],
      "method": "Build vodka and coffee liqueur in an old fashioned glass filled with ice. Float heavy cream on top by pouring it over the back of a spoon."
    },
    {
      "name": "Black Russian",
      "img": "black_russian.jpg",
      "ingredients": [
        "1 1/2 oz Vodka",
        "3/4 oz Coffee liqueur",
      ],
      "method": "Pour ingredients into an old-fashioned glass filled with ice cubes. Stir gently."
    },
    {
      "name": "Martinez",
      "img": "https://example.com/martinez.jpg",
      "ingredients": [
        "2 oz Old Tom Gin",
        "1 oz Sweet Vermouth",
        "1/4 oz Maraschino Liqueur",
        "2 dashes Angostura Bitters"
      ],
      "method": "Stir all ingredients with ice, then strain into a chilled cocktail glass. Garnish with a lemon twist or cherry."
    },
    {
      "name": "Mint Julep",
      "img": "https://example.com/mint_julep.jpg",
      "ingredients": [
        "2 1/2 oz Bourbon",
        "1/2 oz Simple Syrup",
        "8-10 Fresh Mint Leaves"
      ],
      "method": "Muddle mint leaves and simple syrup in a julep cup. Fill with crushed ice and add bourbon. Stir until the cup is frosted. Garnish with a mint sprig."
    },
    {
      "name": "Boulevardier",
      "img": "https://example.com/boulevardier.jpg",
      "ingredients": [
        "1 1/2 oz Bourbon",
        "3/4 oz Sweet Vermouth",
        "3/4 oz Campari"
      ],
      "method": "Stir all ingredients with ice, then strain into a chilled cocktail glass or rocks glass filled with ice. Garnish with an orange twist."
    },
    {
      "name": "Planter's Punch",
      "img": "https://example.com/planters_punch.jpg",
      "ingredients": [
        "2 oz Dark Rum",
        "1 oz Fresh Lime Juice",
        "1/2 oz Simple Syrup",
        "Dash of Grenadine",
        "Dash of Angostura Bitters",
        "Club Soda"
      ],
      "method": "Shake rum, lime juice, simple syrup, grenadine, and bitters with ice, then strain into a highball glass filled with ice. Top with club soda and stir gently."
    },
    {
      "name": "Aviation",
      "img": "https://example.com/aviation.jpg",
      "ingredients": [
        "2 oz Gin",
        "1/2 oz Maraschino Liqueur",
        "1/2 oz Creme de Violette",
        "3/4 oz Fresh Lemon Juice"
      ],
      "method": "Shake all ingredients with ice, then strain into a chilled cocktail glass. Garnish with a cherry."
    },
    {
      "name": "Rum Punch",
      "img": "https://example.com/rum_punch.jpg",
      "ingredients": [
        "2 oz Dark Rum",
        "1/2 oz Fresh Lime Juice",
        "1/2 oz Simple Syrup",
        "3 oz Orange Juice",
        "1 dash Angostura Bitters",
        "Grated Nutmeg (for garnish)",
        "Orange Slice (for garnish)",
        "Cherry (for garnish)"
      ],
      "method": "Shake rum, lime juice, simple syrup, orange juice, and bitters with ice, then strain into a highball glass filled with ice. Garnish with grated nutmeg, an orange slice, and a cherry."
    },
    {
      "name": "Gin Fizz",
      "img": "https://example.com/gin_fizz.jpg",
      "ingredients": [
        "2 oz Gin",
        "3/4 oz Fresh Lemon Juice",
        "1/2 oz Simple Syrup",
        "1 Egg White",
        "Club Soda"
      ],
      "method": "Shake gin, lemon juice, simple syrup, and egg white with ice, then strain into a highball glass without ice. Top with club soda."
    },
    {
      "name": "Paloma",
      "img": "https://example.com/paloma.jpg",
      "ingredients": [
        "2 oz Tequila",
        "1/2 oz Fresh Lime Juice",
        "Grapefruit Soda",
        "Salt (for rimming the glass)",
        "Lime Wedge (for garnish)"
      ],
      "method": "Rim a highball glass with salt. Fill with ice, then add tequila and lime juice. Top with grapefruit soda and stir gently. Garnish with a lime wedge."
    },
    {
      "name": "Caipirinha",
      "img": "https://example.com/caipirinha.jpg",
      "ingredients": [
        "2 oz Cachaca",
        "1/2 Lime, cut into wedges",
        "2 tsp White Sugar"
      ],
      "method": "Muddle lime wedges and sugar in a rocks glass. Fill with crushed ice, then add cachaca. Stir gently."
    },
    {
      "name": "Americano",
      "img": "https://example.com/americano.jpg",
      "ingredients": [
        "1 oz Campari",
        "1 oz Sweet Vermouth",
        "Club Soda"
      ],
      "method": "Build Campari and vermouth in a rocks glass filled with ice. Top with club soda and stir gently. Garnish with an orange twist."
    },
    {
      "name": "Hemingway Daiquiri",
      "img": "https://example.com/hemingway_daiquiri.jpg",
      "ingredients": [
        "2 oz White Rum",
        "3/4 oz Fresh Lime Juice",
        "1/2 oz Grapefruit Juice",
        "1/2 oz Maraschino Liqueur",
        "1/4 oz Simple Syrup"
      ],
      "method": "Shake all ingredients with ice, then strain into a chilled cocktail glass. Garnish with a lime wheel."
    },
    {
      "name": "Cuba Libre",
      "img": "https://example.com/cuba_libre.jpg",
      "ingredients": [
        "2 oz White Rum",
        "4 oz Cola",
        "Fresh Lime Juice",
        "Lime Wedge (for garnish)"
      ],
      "method": "Build rum and cola in a highball glass filled with ice. Squeeze lime wedge and drop into the glass. Stir gently."
    },
    {
      "name": "French Martini",
      "img": "https://example.com/french_martini.jpg",
      "ingredients": [
        "1 1/2 oz Vodka",
        "1/2 oz Raspberry Liqueur",
        "1/2 oz Pineapple Juice"
      ],
      "method": "Shake all ingredients with ice, then strain into a chilled cocktail glass. Garnish with a raspberry."
    },
    {
      "name": "Brandy Alexander",
      "img": "https://example.com/brandy_alexander.jpg",
      "ingredients": [
        "1 1/2 oz Brandy",
        "3/4 oz Dark Creme de Cacao",
        "3/4 oz Cream",
        "Nutmeg (for garnish)"
      ],
      "method": "Shake all ingredients with ice, then strain into a chilled cocktail glass. Garnish with grated nutmeg."
    },
    {
      "name": "Irish Car Bomb",
      "img": "https://example.com/irish_car_bomb.jpg",
      "ingredients": [
        "1/2 pint Stout Beer",
        "1/2 oz Irish Whiskey",
        "1/2 oz Irish Cream Liqueur"
      ],
      "method": "Pour Irish cream into a shot glass, then float Irish whiskey on top. Drop the shot into a pint of stout beer and drink immediately."
    },
    {
      "name": "Blue Lagoon",
      "img": "https://example.com/blue_lagoon.jpg",
      "ingredients": [
        "1 1/2 oz Vodka",
        "1/2 oz Blue Curacao",
        "Lemonade",
        "Lemon Wedge (for garnish)",
        "Cherry (for garnish)"
      ],
      "method": "Build vodka and blue curacao in a highball glass filled with ice. Fill with lemonade, then stir gently. Garnish with a lemon wedge and a cherry."
    },
    {
      "name": "Tommy's Margarita",
      "img": "https://example.com/tommys_margarita.jpg",
      "ingredients": [
        "2 oz Tequila",
        "1 oz Fresh Lime Juice",
        "1/2 oz Agave Nectar"
      ],
      "method": "Shake all ingredients with ice, then strain into a rocks glass filled with ice."
    },
    {
      "name": "Long Island Iced Tea",
      "img": "https://example.com/long_island_iced_tea.jpg",
      "ingredients": [
        "1/2 oz Vodka",
        "1/2 oz Tequila",
        "1/2 oz Rum",
        "1/2 oz Gin",
        "1/2 oz Triple Sec",
        "3/4 oz Fresh Lemon Juice",
        "1 oz Simple Syrup",
        "1 splash Cola",
        "Lemon Wedge (for garnish)"
      ],
      "method": "Build all ingredients except cola in a highball glass filled with ice. Top with cola, then garnish with a lemon wedge."
    },  
    {
      "name": "Espresso Martini",
      "img": "espresso_martini.jpg",
      "ingredients": [
        "1 1/2 oz Vodka",
        "1 oz Coffee liqueur",
        "1/2 oz Simple syrup",
        "1 oz Espresso",
      ],
      "method": "Shake all ingredients with ice in a shaker. Strain into a chilled cocktail glass."
    },  
    {
      "name": "Aperol Spritz",
      "img": "aperol_spritz.jpg",
      "ingredients": [
        "3 oz Prosecco",
        "2 oz Aperol",
        "1 oz Soda water",
        "Orange slice (for garnish)",
      ],
      "method": "Pour Aperol and Prosecco into a wine glass filled with ice cubes. Add a splash of soda water. Garnish with an orange slice."
    },
    {
      "name": "Penicillin",
      "img": "penicillin.jpg",
      "ingredients": [
        "2 oz Blended Scotch",
        "3/4 oz Lemon juice",
        "3/4 oz Honey-ginger syrup",
        "1/4 oz Islay single malt Scotch",
        "Candied ginger (for garnish)",
      ],
      "method": "Shake blended Scotch, lemon juice, and honey-ginger syrup with ice. Strain into an ice-filled rocks glass. Float Islay single malt Scotch on top. Garnish with candied ginger."
    },
    {
      "name": "Pisco Sour",
      "img": "pisco_sour.jpg",
      "ingredients": [
        "2 oz Pisco",
        "3/4 oz Lemon juice",
        "1/2 oz Simple syrup",
        "1 Egg white",
        "Angostura bitters",
      ],
      "method": "Dry shake all ingredients (except bitters) to emulsify egg white. Shake again with ice. Strain into a chilled rocks glass. Garnish with Angostura bitters."
    },
    {
      "name": "Sex on the Beach",
      "img": "sex_on_the_beach.jpg",
      "ingredients": [
        "1 1/2 oz Vodka",
        "1/2 oz Peach schnapps",
        "2 oz Orange juice",
        "2 oz Cranberry juice",
        "Orange slice and cherry (for garnish)",
      ],
      "method": "Pour all ingredients into a shaker with ice. Shake well and strain into a highball glass filled with ice cubes. Garnish with an orange slice and a cherry."
    },
    {
      "name": "Bellini",
      "img": "bellini.jpg",
      "ingredients": [
        "2 oz Peach purée",
        "4 oz Prosecco",
      ],
      "method": "Pour peach purée into a chilled glass. Top with Prosecco and stir gently."
    },
    {
      "name": "Mimosa",
      "img": "mimosa.jpg",
      "ingredients": [
        "2 oz Orange juice",
        "4 oz Prosecco",
      ],
      "method": "Pour orange juice into a chilled glass. Top with Prosecco and stir gently."
    },
    {
      "name": "White Lady",
      "img": "white_lady.jpg",
      "ingredients": [
        "2 oz Gin",
        "1 oz Triple sec",
        "1 oz Lemon juice",
        "1 dash Egg white",
        "Lemon twist (for garnish)",
      ],
      "method": "Shake all ingredients with ice in a shaker. Strain into a chilled cocktail glass. Garnish with a lemon twist."
    },
  
  ]
  

  async function data() {
    try {
      await db.Classic.insertMany(drinks)
      console.log('Database seeded successfully.')
    } catch (error) {
      console.error('Error seeding database:', error)
    } finally {
      mongoose.connection.close()
    }
  }

  data()
  