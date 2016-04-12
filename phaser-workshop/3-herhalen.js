function herhalen() {

    standaard();

}

function pijltje_naar_links() {
    speler.body.velocity.x = -150;
}

function pijltje_naar_rechts() {
    //
    // Opdracht 1: Als pijltje naar rechts wordt ingedrukt moet hij naar rechts lopen (kijk hierboven)
    // 

}

function pijltje_omhoog() {
    //
    // Opdracht 2: Zorg ervoor dat de speler springt
    // 

}

function pijltje_omlaag() {

}

function speler_raakt_ster(speler, ster) {
    //
    // Opdracht 4: verwijder de ster wanneer die wordt aangeraakt
    // 



    //
    // Opdracht 6: Verhoog de score als de ster is verzameld
    // 


}






// 
// Hieronder niets veranderen
// 







function speler_raakt_vijand(speler, vijand) {
    speler.kill();
}


function standaard() {
    //  Zorg dat de speler niet door het platform gaat
    game.physics.arcade.collide(speler, platforms);

    if (stars) {
        game.physics.arcade.collide(stars, platforms);
        game.physics.arcade.overlap(speler, stars, speler_raakt_ster, null, this);
    }

    if (vijanden) {
        game.physics.arcade.collide(vijanden, platforms);
        game.physics.arcade.overlap(speler, vijanden, speler_raakt_vijand, null, this);

        vijanden.forEach(function(object) {

            if(object.body.touching.down) {
                if(count < 140) {
                    object.body.velocity.x = 70;
                    count++;
                }else if (count >= 140) {
                    object.body.velocity.x = -70;
                    count++;
                }
                if (count > 280) {
                    count = 0;
                }
            }
        });
    }

    // Standaard staat de speler stil -> getal is 0
    speler.body.velocity.x = 0;

    // Indrukken van pijltjes
    if (cursors.left.isDown) {
        pijltje_naar_links();
    }
    else if (cursors.right.isDown) {
        pijltje_naar_rechts();
    }
    else {
        speler.animations.stop();
    }
    if (cursors.up.isDown && speler.body.touching.down)
    {
        pijltje_omhoog();
    }
    if (cursors.down.isDown)
    {
        pijltje_omlaag();
    }

    if (score != oldscore) {
        scoreText.text = 'Score: ' + score;
    }
}