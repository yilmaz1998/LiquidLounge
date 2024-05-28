const mongoose = require('mongoose')
const db = require('../models')


const drinks = [
    {
      "name": "Martini",
      "img": "https://www.liquor.com/thmb/FtK86O9W4_pRq1Y3gc1iJerTGP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vodka-martini-1500x1500-hero-080af5bb8ff04851a9c0ecf77a88a818.jpg",
      "ingredients": [
        "2 1/2 oz Gin or Vodka, ",
        "1/2 oz Dry Vermouth"
      ],
      "method": "Stir gin or vodka and vermouth with ice, then strain into a chilled cocktail glass. Garnish with an olive or a twist of lemon."
    },
    {
      "name": "Old Fashioned",
      "img": "https://www.simplyrecipes.com/thmb/s_de1Nuw4ULiHNECVHOCBY5u5Wk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__01__Old-Fashioned-Cocktail-LEAD-5-1024x681-aa81a798a156453d80d1f7d41de893ff.jpg",
      "ingredients": [
        "2 oz Bourbon or Rye Whiskey, ",
        "2 dashes Angostura Bitters, ",
        "1 sugar cube, ",
        "Few dashes plain water"
      ],
      "method": "Muddle the sugar cube and bitters with a few dashes of water in a rocks glass. Add whiskey and ice cubes. Stir gently."
    },
    {
      "name": "Negroni",
      "img": "https://www.liquor.com/thmb/cmNLcCCoKU-r_OSvAahfo3Ho4D4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kingston-negroni-720x720-primary1-ef87562fea8240de92dd09c36457a8c2.jpg",
      "ingredients": [
        "1 oz Gin, ",
        "1 oz Campari, ",
        "1 oz Sweet Vermouth"
      ],
      "method": "Stir all ingredients with ice, then strain into a rocks glass filled with ice. Garnish with an orange twist."
    },
    {
      "name": "Margarita",
      "img": "https://recipes.net/wp-content/uploads/2023/05/classic-margarita-recipe_780ef5cf753cf58502c26278fa094aa1.jpeg",
      "ingredients": [
        "1 1/2 oz Tequila, ",
        "1/2 oz Triple Sec, ",
        "1 oz Fresh Lime Juice, ",
        "Salt (for rimming the glass)"
      ],
      "method": "Rub the rim of the glass with the lime slice to make the salt stick to it. Shake the other ingredients with ice, then strain into the glass."
    },
    {
      "name": "Manhattan",
      "img": "https://www.liquor.com/thmb/LWCKuJ4xuC0JfUzKiTANQz3UWZQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/black-manhattan-720x720-primary-a3f31b11acb748349c1b6c310b9213f9.jpg",
      "ingredients": [
        "2 oz Rye Whiskey, ",
        "1 oz Sweet Vermouth, ",
        "2 dashes Angostura Bitters"
      ],
      "method": "Stir all ingredients with ice, then strain into a chilled cocktail glass. Garnish with a cherry."
    },
    {
      "name": "Daiquiri",
      "img": "https://www.eatingwell.com/thmb/iFQvW6ZBu2X_dd8CskYTpTdu1aw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8145474-7b1247b843d044978faf06e0f83baf33.jpg",
      "ingredients": [
        "2 oz White Rum, ",
        "3/4 oz Fresh Lime Juice, ",
        "1/2 oz Simple Syrup"
      ],
      "method": "Shake all ingredients with ice, then strain into a cocktail glass."
    },
    {
      "name": "Whiskey Sour",
      "img": "https://www.wineenthusiast.com/wp-content/uploads/2023/05/10_22_Whiskey_Sour_Cocktail_HERO_Stocksy_4183966_1920x1280.jpg",
      "ingredients": [
        "2 oz Bourbon or Rye Whiskey, ",
        "3/4 oz Fresh Lemon Juice, ",
        "1/2 oz Simple Syrup, ",
        "1 egg white (optional)"
      ],
      "method": "Shake all ingredients with ice, then strain into a sour glass. Garnish with a cherry and an orange slice."
    },
    {
      "name": "Mojito",
      "img": "https://www.afarmgirlsdabbles.com/wp-content/uploads/2022/03/tequila-mojito_afarmgirlsdabbles_10.jpg",
      "ingredients": [
        "2 oz White Rum, ",
        "1/2 oz Simple Syrup, ",
        "3/4 oz Fresh Lime Juice, ",
        "2-4 Fresh Mint Leaves, ",
        "Club Soda"
      ],
      "method": "Muddle mint leaves and simple syrup in a highball glass. Add rum, lime juice, and ice. Top with soda water and stir gently."
    },
    {
      "name": "Tom Collins",
      "img": "https://www.foodandwine.com/thmb/FQpExQKVkFu_CeDh7OuPpED7mK4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tom-Collins-FT-RECIPE0922-2000-c9c8b25aba1d4bf89fd8030ee114b67b.jpg",
      "ingredients": [
        "2 oz Gin, ",
        "3/4 oz Fresh Lemon Juice, ",
        "1/2 oz Simple Syrup, ",
        "Club Soda"
      ],
      "method": "Shake gin, lemon juice, and simple syrup with ice, then strain into a Collins glass filled with ice. Top with club soda and stir gently."
    },
    {
      "name": "Bloody Mary",
      "img": "https://assets.epicurious.com/photos/6509dc536eab39953299f6c1/4:6/w_3242,h_4863,c_limit/Bloody-Mary_Recipe.jpg",
      "ingredients": [
        "1 1/2 oz Vodka, ",
        "3 oz Tomato Juice, ",
        "1/2 oz Fresh Lemon Juice, ",
        "Worcestershire Sauce, ",
        "Tabasco Sauce, ",
        "Salt & Pepper, ",
        "Celery Stalk (for garnish), ",
        "Lemon Wedge (for garnish)"
      ],
      "method": "Build all ingredients in a highball glass filled with ice. Stir gently. Garnish with a celery stalk and lemon wedge."
    },
    {
      "name": "Cosmopolitan",
      "img": "https://amandascookin.com/wp-content/uploads/2021/05/Cosmopolitan-Cocktail-RC.jpg",
      "ingredients": [
        "1 1/2 oz Vodka, ",
        "1/2 oz Triple Sec, ",
        "1/2 oz Fresh Lime Juice, ",
        "1/4 oz Cranberry Juice"
      ],
      "method": "Shake all ingredients with ice, then strain into a chilled cocktail glass. Garnish with a lime wheel."
    },
    {
      "name": "Singapore Sling",
      "img": "https://www.foodandwine.com/thmb/lbXvXjXVBPwhZSkm0nMrWg4tsc8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Singapore-Sling-FT-RECIPE0223-c70827d05b0f46e3a32e0bf4683d5ae5.jpg",
      "ingredients": [
        "1 1/2 oz Gin, ",
        "1/2 oz Cherry Brandy, ",
        "1/4 oz Cointreau, ",
        "1/4 oz Benedictine, ",
        "4 oz Pineapple Juice, ",
        "1/2 oz Fresh Lime Juice, ",
        "1/4 oz Grenadine, ",
        "1 dash Angostura Bitters"
      ],
      "method": "Shake all ingredients with ice, then strain into a Collins glass filled with ice. Garnish with a cherry and an orange slice."
    },
    {
      "name": "Pina Colada",
      "img": "https://images.immediate.co.uk/production/volatile/sites/30/2013/11/pina-colada-c68aca7.jpg?quality=90&resize=556,505",
      "ingredients": [
        "2 oz White Rum, ",
        "3 oz Pineapple Juice, ",
        "1 oz Coconut Cream, ",
        "Pineapple Slice (for garnish), ",
        "Cherry (for garnish)"
      ],
      "method": "Blend all ingredients with crushed ice until smooth. Pour into a chilled hurricane glass. Garnish with a pineapple slice and a cherry."
    },
    {
      "name": "Mai Tai",
      "img": "https://images.absolutdrinks.com/drink-images/Raw/Absolut/08926c84-bce4-4698-9fdb-f72e4be1fb9e.jpg",
      "ingredients": [
        "1 1/2 oz Jamaican Rum, ",
        "1/2 oz Orgeat Syrup, ",
        "1/2 oz Orange Curacao, ",
        "3/4 oz Fresh Lime Juice, ",
        "1/4 oz Simple Syrup, ",
        "Dash of Angostura Bitters, ",
        "Mint Sprig (for garnish), ",
        "Lime Wheel (for garnish)"
      ],
      "method": "Shake all ingredients with ice, then strain into a rocks glass filled with crushed ice. Garnish with mint sprig and lime wheel."
    },
    {
      "name": "Sidecar",
      "img": "https://i2.wp.com/www.splashoftaste.com/wp-content/uploads/2022/08/sidecar-drink-featured.jpg",
      "ingredients": [
        "2 oz Cognac, ",
        "1 oz Triple Sec, ",
        "3/4 oz Fresh Lemon Juice, ",
        "Sugar (for rimming the glass)"
      ],
      "method": "Shake all ingredients with ice, then strain into a sugar-rimmed cocktail glass."
    },
    {
      "name": "Sazerac",
      "img": "https://www.cocktailmag.fr/media/k2/items/cache/9ded0288e863fbe79d863f606cb05c21_M.jpg",
      "ingredients": [
        "2 oz Rye Whiskey, ",
        "1/4 oz Absinthe, ",
        "1 sugar cube, ",
        "3 dashes Peychaud's Bitters, ",
        "Lemon Peel (for garnish)"
      ],
      "method": "Rinse a chilled glass with absinthe, then discard the absinthe. Muddle the sugar cube and bitters with a few drops of water. Add whiskey and ice, then stir. Strain into the chilled glass. Garnish with a lemon peel."
    },
    {
      "name": "Corpse Reviver No. 2",
      "img": "https://d34nm4jmyicdxh.cloudfront.net/eyJidWNrZXQiOiJjaHJpc3N5LXR1eGVkby1ubzIiLCJrZXkiOiJyZWNpcGUtY29ycHNlLXJldml2ZXItMi1jb2NrdGFpbC1yZWNpcGUuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6NjAwLCJmaXQiOiJjb3ZlciJ9fX0=",
      "ingredients": [
        "3/4 oz Gin, ",
        "3/4 oz Cointreau, ",
        "3/4 oz Lillet Blanc, ",
        "3/4 oz Fresh Lemon Juice, ",
        "Dash of Absinthe"
      ],
      "method": "Shake all ingredients with ice, then strain into a chilled cocktail glass. Garnish with a cherry."
    },
    {
      "name": "French 75",
      "img": "https://www.tastingtable.com/img/gallery/french-75-cocktail-recipe-upgrade/french-75-cocktail-recipe-upgrade-1666629351.jpg",
      "ingredients": [
        "1 1/2 oz Gin, ",
        "1/2 oz Fresh Lemon Juice, ",
        "1/2 oz Simple Syrup, ",
        "Champagne"
      ],
      "method": "Shake gin, lemon juice, and simple syrup with ice, then strain into a Champagne flute. Top with Champagne."
    },
    {
      "name": "Gimlet",
      "img": "https://www.saveur.com/uploads/2021/06/10/GettyImages-1463863037_2.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=1440",
      "ingredients": [
        "2 oz Gin ,",
        "3/4 oz Lime Juice ,",
        "3/4 oz Simple Syrup"
      ],
      "method": "Shake all ingredients with ice, then strain into a chilled cocktail glass."
    },
    {
      "name": "Dark 'n' Stormy",
      "img": "https://www.southernliving.com/thmb/MB3s2IuqIRKkcvZ4YKd3yZTvxog=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Dark_and_Stormy_007-381cec023745444ca4e744e6a78badf2.jpg",
      "ingredients": [
        "2 oz Dark Rum, ",
        "3 oz Ginger Beer, ",
        "Lime Wedge (for garnish)"
      ],
      "method": "Build rum and ginger beer in a highball glass filled with ice. Stir gently. Garnish with a lime wedge."
    },
    {
      "name": "Rob Roy",
      "img": "https://www.liquor.com/thmb/vonTiiI4Gopj4VEFjLwxIBjkGkc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Rob_Roy_Credit_Tim_Nusog_2500x2500_primary-00dcd91c3f6545f6bf55342e23d28a4b.jpg",
      "ingredients": [
        "2 oz Scotch Whisky, ",
        "3/4 oz Sweet Vermouth, ",
        "Dash of Angostura Bitters"
      ],
      "method": "Stir all ingredients with ice, then strain into a chilled cocktail glass. Garnish with a cherry."
    },
    {
      "name": "Tequila Sunrise",
      "img": "https://sipstoria.com/wp-content/uploads/2021/02/tequila-sunrise.jpeg",
      "ingredients": [
        "1 1/2 oz Tequila, ",
        "3 oz Orange Juice, ",
        "1/2 oz Grenadine, ",
        "Orange Slice (for garnish), ",
        "Cherry (for garnish)"
      ],
      "method": "Build tequila and orange juice in a highball glass filled with ice. Stir gently. Slowly pour grenadine down the side of the glass to create the sunrise effect. Garnish with an orange slice and a cherry."
    },
    {
      "name": "Irish Coffee",
      "img": "https://www.kyleecooks.com/wp-content/uploads/2023/02/Irish-Coffee-SQ-1.jpg",
      "ingredients": [
        "1 1/2 oz Irish Whiskey, ",
        "4 oz Hot Coffee, ",
        "1 oz Heavy Cream, ",
        "1/2 oz Simple Syrup (optional)"
      ],
      "method": "Build whiskey and coffee in a warmed Irish coffee glass. Float cream on top by pouring it over the back of a spoon. Optionally, sweeten with simple syrup."
    },
    {
      "name": "Moscow Mule",
      "img": "https://www.foodandwine.com/thmb/DX85ldkm3kh_vUBnXH2mNR78gxA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/moscow-mule-FT-RECIPE0521-6bb69ade441546c1b1210b4e55dbcb23.jpg",
      "ingredients": [
        "2 oz Vodka, ",
        "4 oz Ginger Beer, ",
        "1/2 oz Fresh Lime Juice, ",
        "Lime Wedge (for garnish)"
      ],
      "method": "Build vodka and ginger beer in a copper mug filled with ice. Add lime juice and stir gently. Garnish with a lime wedge."
    },
    {
      "name": "White Russian",
      "img": "https://www.liquor.com/thmb/wzgqg2FC1Sqbwo_PAJofVVZIMRk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__12__20073201__white-russian-720x720-article-cbe4b9a832c64f8da0bb09407caefa7f.jpg",
      "ingredients": [
        "2 oz Vodka, ",
        "1 oz Coffee Liqueur, ",
        "1 oz Heavy Cream"
      ],
      "method": "Build vodka and coffee liqueur in an old fashioned glass filled with ice. Float heavy cream on top by pouring it over the back of a spoon."
    },
    {
      "name": "Black Russian",
      "img": "https://www.wineenthusiast.com/wp-content/uploads/2023/05/Black_Russian_Cocktail_GettyImages-669105860_1920x1280.jpg",
      "ingredients": [
        "1 1/2 oz Vodka, ",
        "3/4 oz Coffee liqueur",
      ],
      "method": "Pour ingredients into an old-fashioned glass filled with ice cubes. Stir gently."
    },
    {
      "name": "Martinez",
      "img": "https://www.thespruceeats.com/thmb/wRAzpSZBNFG69NsinBSYSFcUQTo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/martinez-cocktail-recipe-759324-hero-01-6d1091ff153b4e9e92f36ff9f755b544.jpg",
      "ingredients": [
        "2 oz Old Tom Gin, ",
        "1 oz Sweet Vermouth, ",
        "1/4 oz Maraschino Liqueur, ",
        "2 dashes Angostura Bitters"
      ],
      "method": "Stir all ingredients with ice, then strain into a chilled cocktail glass. Garnish with a lemon twist or cherry."
    },
    {
      "name": "Mint Julep",
      "img": "https://static01.nyt.com/images/2023/02/25/multimedia/CM-Mint-Julep-lpzm/CM-Mint-Julep-lpzm-superJumbo.jpg",
      "ingredients": [
        "2 1/2 oz Bourbon, ",
        "1/2 oz Simple Syrup, ",
        "8-10 Fresh Mint Leaves"
      ],
      "method": "Muddle mint leaves and simple syrup in a julep cup. Fill with crushed ice and add bourbon. Stir until the cup is frosted. Garnish with a mint sprig."
    },
    {
      "name": "Boulevardier",
      "img": "https://hips.hearstapps.com/hmg-prod/images/homemade-red-boulevardier-cocktail-royalty-free-image-1581756384.jpg?crop=1.00xw:0.668xh;0,0.189xh&resize=1200:*",
      "ingredients": [
        "1 1/2 oz Bourbon, ",
        "3/4 oz Sweet Vermouth, ",
        "3/4 oz Campari"
      ],
      "method": "Stir all ingredients with ice, then strain into a chilled cocktail glass or rocks glass filled with ice. Garnish with an orange twist."
    },
    {
      "name": "Planter's Punch",
      "img": "https://www.thespruceeats.com/thmb/-0Qzbi8Tz2olYoPZ2ywXuAD1C2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/planters-punch-recipe-759331-hero-images-1-4b8ca219bc264c088e8fd5d63be40c69.jpg",
      "ingredients": [
        "2 oz Dark Rum, ",
        "1 oz Fresh Lime Juice, ",
        "1/2 oz Simple Syrup, ",
        "Dash of Grenadine, ",
        "Dash of Angostura Bitters, ",
        "Club Soda"
      ],
      "method": "Shake rum, lime juice, simple syrup, grenadine, and bitters with ice, then strain into a highball glass filled with ice. Top with club soda and stir gently."
    },
    {
      "name": "Aviation",
      "img": "https://www.liquor.com/thmb/k5iVDrrfZ2PitrCU2E6OSL3I8gM=/440x440/filters:no_upscale():max_bytes(150000):strip_icc()/aviation-720x720-article-0ade34c5f15648bf9da5d2ed34e90729.jpg",
      "ingredients": [
        "2 oz Gin, ",
        "1/2 oz Maraschino Liqueur, ",
        "1/2 oz Creme de Violette, ",
        "3/4 oz Fresh Lemon Juice"
      ],
      "method": "Shake all ingredients with ice, then strain into a chilled cocktail glass. Garnish with a cherry."
    },
    {
      "name": "Rum Punch",
      "img": "https://amandascookin.com/wp-content/uploads/2020/05/Rum-Punch-cocktail-RC.jpg",
      "ingredients": [
        "2 oz Dark Rum, ",
        "1/2 oz Fresh Lime Juice, ",
        "1/2 oz Simple Syrup, ",
        "3 oz Orange Juice, ",
        "1 dash Angostura Bitters, ",
        "Grated Nutmeg (for garnish), ",
        "Orange Slice (for garnish), ",
        "Cherry (for garnish)"
      ],
      "method": "Shake rum, lime juice, simple syrup, orange juice, and bitters with ice, then strain into a highball glass filled with ice. Garnish with grated nutmeg, an orange slice, and a cherry."
    },
    {
      "name": "Gin Fizz",
      "img": "https://149436069.v2.pressablecdn.com/wp-content/uploads/2021/05/Classic-Gin-Fizz-Cocktail.jpg",
      "ingredients": [
        "2 oz Gin, ",
        "3/4 oz Fresh Lemon Juice, ",
        "1/2 oz Simple Syrup, ",
        "1 Egg White, ",
        "Club Soda"
      ],
      "method": "Shake gin, lemon juice, simple syrup, and egg white with ice, then strain into a highball glass without ice. Top with club soda."
    },
    {
      "name": "Paloma",
      "img": "https://www.wineenthusiast.com/wp-content/uploads/2023/05/04_23_Paloma_HERO_Stocksy_4620231_1920x1280.jpg",
      "ingredients": [
        "2 oz Tequila, ",
        "1/2 oz Fresh Lime Juice, ",
        "Grapefruit Soda, ",
        "Salt (for rimming the glass), ",
        "Lime Wedge (for garnish)"
      ],
      "method": "Rim a highball glass with salt. Fill with ice, then add tequila and lime juice. Top with grapefruit soda and stir gently. Garnish with a lime wedge."
    },
    {
      "name": "Caipirinha",
      "img": "https://assets.epicurious.com/photos/579a2d8e437fcffe02f7230b/1:1/w_2560%2Cc_limit/caipirinha-072816.jpg",
      "ingredients": [
        "2 oz Cachaca, ",
        "1/2 Lime, cut into wedges, ",
        "2 tsp White Sugar"
      ],
      "method": "Muddle lime wedges and sugar in a rocks glass. Fill with crushed ice, then add cachaca. Stir gently."
    },
    {
      "name": "Americano",
      "img": "https://www.foodandwine.com/thmb/d7VXAa1cezTsQ37pS6jYY2YX3YQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Americano-Cocktail-FT-RECIPE0123-4130dd6c79394106a8fb5948057a2bc5.jpg",
      "ingredients": [
        "1 oz Campari, ",
        "1 oz Sweet Vermouth, ",
        "Club Soda"
      ],
      "method": "Build Campari and vermouth in a rocks glass filled with ice. Top with club soda and stir gently. Garnish with an orange twist."
    },
    {
      "name": "Hemingway Daiquiri",
      "img": "https://storage.googleapis.com/gen-atmedia/3/2014/06/4db452b6ce8adf37c19f523950318ecf59d00514.jpeg",
      "ingredients": [
        "2 oz White Rum, ",
        "3/4 oz Fresh Lime Juice, ",
        "1/2 oz Grapefruit Juice, ",
        "1/2 oz Maraschino Liqueur, ",
        "1/4 oz Simple Syrup"
      ],
      "method": "Shake all ingredients with ice, then strain into a chilled cocktail glass. Garnish with a lime wheel."
    },
    {
      "name": "Cuba Libre",
      "img": "https://www.wineenthusiast.com/wp-content/uploads/2023/05/GettyImages-Elizabeth-Fernandez_Cuba-Libre_1920x1280.jpg",
      "ingredients": [
        "2 oz White Rum, ",
        "4 oz Cola, ",
        "Fresh Lime Juice, ",
        "Lime Wedge (for garnish)"
      ],
      "method": "Build rum and cola in a highball glass filled with ice. Squeeze lime wedge and drop into the glass. Stir gently."
    },
    {
      "name": "French Martini",
      "img": "https://www.thespruceeats.com/thmb/eKU3tH7129cIFQDNC8du0Y-7MSU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/french-martini-cocktail-recipe-760080-040-3229a2a425f94e3e95512ab8504c0fc9.jpg",
      "ingredients": [
        "1 1/2 oz Vodka, ",
        "1/2 oz Raspberry Liqueur, ",
        "1/2 oz Pineapple Juice"
      ],
      "method": "Shake all ingredients with ice, then strain into a chilled cocktail glass. Garnish with a raspberry."
    },
    {
      "name": "Brandy Alexander",
      "img": "https://hips.hearstapps.com/hmg-prod/images/delish-221128-brandyalexander-093-ls-focusbracket-1670341455.jpg?crop=0.595xw:0.893xh;0.383xw,0.0663xh&resize=1200:*",
      "ingredients": [
        "1 1/2 oz Brandy, ",
        "3/4 oz Dark Creme de Cacao, ",
        "3/4 oz Cream, ",
        "Nutmeg (for garnish)"
      ],
      "method": "Shake all ingredients with ice, then strain into a chilled cocktail glass. Garnish with grated nutmeg."
    },
    {
      "name": "Irish Car Bomb",
      "img": "https://cdn.tipsybartender.com/tipsybartender/jpg/youtube/iocNpq_Fy28.jpg",
      "ingredients": [
        "1/2 pint Stout Beer, ",
        "1/2 oz Irish Whiskey, ",
        "1/2 oz Irish Cream Liqueur"
      ],
      "method": "Pour Irish cream into a shot glass, then float Irish whiskey on top. Drop the shot into a pint of stout beer and drink immediately."
    },
    {
      "name": "Blue Lagoon",
      "img": "https://vintageamericancocktails.com/wp-content/uploads/2022/04/blue_lagoon.jpg",
      "ingredients": [
        "1 1/2 oz Vodka, ",
        "1/2 oz Blue Curacao, ",
        "Lemonade, ",
        "Lemon Wedge (for garnish), ",
        "Cherry (for garnish)"
      ],
      "method": "Build vodka and blue curacao in a highball glass filled with ice. Fill with lemonade, then stir gently. Garnish with a lemon wedge and a cherry."
    },
    {
      "name": "Tommy's Margarita",
      "img": "https://www.patrontequila.com/binaries/largeretina/content/gallery/patrontequila/recipes/roca-patron-reposado/tommys-margarita/tommy-marg.jpg",
      "ingredients": [
        "2 oz Tequila, ",
        "1 oz Fresh Lime Juice, ",
        "1/2 oz Agave Nectar"
      ],
      "method": "Shake all ingredients with ice, then strain into a rocks glass filled with ice."
    },
    {
      "name": "Long Island Iced Tea",
      "img": "https://www.southernliving.com/thmb/Gvj_Jq89zYjvofh8p7IIl9MiilU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_Long_Island_Iced_Tea_STEPS_076-1-661b4a152bea4d8188c0d37c57325d6f.jpg",
      "ingredients": [
        "1/2 oz Vodka, ",
        "1/2 oz Tequila, ",
        "1/2 oz Rum, ",
        "1/2 oz Gin, ",
        "1/2 oz Triple Sec, ",
        "3/4 oz Fresh Lemon Juice, ",
        "1 oz Simple Syrup, ",
        "1 splash Cola, ",
        "Lemon Wedge (for garnish)"
      ],
      "method": "Build all ingredients except cola in a highball glass filled with ice. Top with cola, then garnish with a lemon wedge."
    },  
    {
      "name": "Espresso Martini",
      "img": "https://preppykitchen.com/wp-content/uploads/2021/01/espresso-martini-feature.jpg",
      "ingredients": [
        "1 1/2 oz Vodka, ",
        "1 oz Coffee liqueur, ",
        "1/2 oz Simple syrup, ",
        "1 oz Espresso",
      ],
      "method": "Shake all ingredients with ice in a shaker. Strain into a chilled cocktail glass."
    },  
    {
      "name": "Aperol Spritz",
      "img": "https://hips.hearstapps.com/hmg-prod/images/aperol-spritz-index-64873f08af990.jpg?crop=0.6668520063015475xw:1xh;center,top&resize=1200:*",
      "ingredients": [
        "3 oz Prosecco, ",
        "2 oz Aperol, ",
        "1 oz Soda water, ",
        "Orange slice (for garnish)",
      ],
      "method": "Pour Aperol and Prosecco into a wine glass filled with ice cubes. Add a splash of soda water. Garnish with an orange slice."
    },
    {
      "name": "Penicillin",
      "img": "https://www.foodandwine.com/thmb/GOhkE1CRwAVCcf7c3-hdECJHi4M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Penicillin-Cocktail-FT-BLOG1222-399fdc77f5704bdb95dd4cdbd9a4bf72.jpg",
      "ingredients": [
        "2 oz Blended Scotch, ",
        "3/4 oz Lemon juice, ",
        "3/4 oz Honey-ginger syrup, ",
        "1/4 oz Islay single malt Scotch, ",
        "Candied ginger (for garnish)",
      ],
      "method": "Shake blended Scotch, lemon juice, and honey-ginger syrup with ice. Strain into an ice-filled rocks glass. Float Islay single malt Scotch on top. Garnish with candied ginger."
    },
    {
      "name": "Pisco Sour",
      "img": "https://assets.epicurious.com/photos/642da48b9fa87dfb969d9093/4:3/w_4467,h_3350,c_limit/PiscoSour_RECIPE_033123_50539.jpg",
      "ingredients": [
        "2 oz Pisco, ",
        "3/4 oz Lemon juice, ",
        "1/2 oz Simple syrup, ",
        "1 Egg white, ",
        "Angostura bitters",
      ],
      "method": "Dry shake all ingredients (except bitters) to emulsify egg white. Shake again with ice. Strain into a chilled rocks glass. Garnish with Angostura bitters."
    },
    {
      "name": "Sex on the Beach",
      "img": "https://hips.hearstapps.com/hmg-prod/images/sex-on-the-beach-secondary-6442f7c409343.jpg",
      "ingredients": [
        "1 1/2 oz Vodka, ",
        "1/2 oz Peach schnapps, ",
        "2 oz Orange juice, ",
        "2 oz Cranberry juice, ",
        "Orange slice and cherry (for garnish)",
      ],
      "method": "Pour all ingredients into a shaker with ice. Shake well and strain into a highball glass filled with ice cubes. Garnish with an orange slice and a cherry."
    },
    {
      "name": "Bellini",
      "img": "https://www.thespruceeats.com/thmb/SxeDamFT0599z6aygsg-T0_mxf8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/baby-bellini-mocktail-recipe-760358-hero-1-a05d936cae72476d8330feee9285d01e.jpg",
      "ingredients": [
        "2 oz Peach purée, ",
        "4 oz Prosecco",
      ],
      "method": "Pour peach purée into a chilled glass. Top with Prosecco and stir gently."
    },
    {
      "name": "Mimosa",
      "img": "https://www.giallozafferano.com/images/264-26430/Mimosa-Cocktail_1200x800.jpg",
      "ingredients": [
        "2 oz Orange juice, ",
        "4 oz Prosecco",
      ],
      "method": "Pour orange juice into a chilled glass. Top with Prosecco and stir gently."
    },
    {
      "name": "White Lady",
      "img": "https://tastecocktails.com/wp-content/uploads/2015/12/white-lady-serious-eats.jpg",
      "ingredients": [
        "2 oz Gin, ",
        "1 oz Triple sec, ",
        "1 oz Lemon juice, ",
        "1 dash Egg white, ",
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
  