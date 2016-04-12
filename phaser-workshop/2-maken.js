function aanmaken() {

    maakSpel();

    // maakItem('item naam', start-posititie-x, start-positie-y);
    maakItem('speler', 50, 400);

    //
    // Opdracht 3: Voeg 5 sterren toe aan het spel
    //



    //
    // Opdracht 5: Voeg score toe aan spel
    //

}








// 
// Hieronder niets veranderen
// 









function maakSpel() {
    game.physics.startSystem(Phaser.Physics.ARCADE); //  Instellingen
    game.add.sprite(0, 0, 'lucht'); //  Achtergrond

    //  Platforms waar we op kunnen staan
    platforms = game.add.group(); 
    platforms.enableBody = true;

    // Grond aanmaken
    var grond = platforms.create(0, game.world.height - 64, 'grond');
    grond.scale.setTo(2, 2); // De grond 2 keer zo groot maken
    grond.body.immovable = true; // De grond kan niet bewegen -> "true" is aan -> "false" is uit

    //  De randen aanmaken
    var rand = platforms.create(400, 400, 'grond'); // De positie
    rand.body.immovable = true; // De balk kan niet bewegen 
    rand = platforms.create(-150, 250, 'grond'); // Nog een rand
    rand.body.immovable = true; // De balk kan niet bewegen 

    stars = game.add.group();
    vijanden = game.add.group();

    //  Voeg toetsenbord toe als controller
    cursors = game.input.keyboard.createCursorKeys();

}

function maakItem(item, start_x, start_y) {

    switch(item) {
        case 'speler':
            //  Speler aanmaken
            speler = game.add.sprite(start_x, start_y, 'speler');

            // Gebruik dit om de afbeelding kleiner/groter te maken (pas getallen aan)
            speler.scale.setTo(speler_grootte, speler_grootte);

            //  Zwaartekracht op speler
            game.physics.arcade.enable(speler);
            
            //  Speler zwaartekracht instellingen
            speler.body.bounce.y = 0.2; // Terugstuiteren bij vallen
            speler.body.gravity.y = zwaartekracht; // Zwaartekracht waarde
            speler.body.collideWorldBounds = true; // true -> kan niet voorbij de rand van het spel -> false kan wel voorbij rand
            break;
        case 'ster':
            stars.enableBody = true;

            var star = stars.create(start_x, start_y, 'ster');
            star.body.gravity.y = zwaartekracht;
            star.body.bounce.y = 0.1 + Math.random() * 0.2;

            break;
        case 'score':
            //  The score
            scoreText = game.add.text(start_x, start_y, 'score: ' + score, { fontSize: '32px', fill: '#000' });
            break;
        case 'vijand':
            // vijand aanmaken
            vijanden.enableBody = true;
            var vijand = vijanden.create(start_x, start_y, 'vijand');
            vijand.body.gravity.y = zwaartekracht;
            break;
    }

}