
class Tableau extends Phaser.Scene {
    preload() {
        this.load.image('cercle', 'assets/cercle.png');
        this.load.image('carre', 'assets/carre.png');



    }


    create() {
        this.hauteur=800;
        this.largeur=800;



        //Balle
        this.balle = this.physics.add.sprite(this.largeur/2, this.hauteur/2, 'cercle').setOrigin(0, 0);
        this.balle.setDisplaySize(20,20);
        this.balle.body.setBounce(1.2,1.1);
        this.balle.setVelocityX(Phaser.Math.Between(-600,600));
        this.balle.setVelocityY(Phaser.Math.Between(-300,350));
        this.balle.body.setMaxVelocityX(200);
        this.balle.body.setMaxVelocityY(700);
        this.balle.body.setAllowGravity(false)

        //Mur haut
        this.haut = this.physics.add.sprite(0, 0,'carre').setOrigin(0, 0);
        this.haut.setDisplaySize(this.largeur,20);
        this.haut.body.setAllowGravity(false);
        this.haut.setImmovable(true);

        //Mur gauche
        this.murGauche = this.physics.add.sprite(0,0,'carre').setOrigin(0, 0);
        this.murGauche.setDisplaySize(20,this.hauteur);
        this.murGauche.body.setAllowGravity(false);
        this.murGauche.setImmovable(true);
        //Mur droit
        this.murDroit = this.physics.add.sprite(780,0,'carre').setOrigin(0, 0);
        this.murDroit.setDisplaySize(20,this.hauteur);
        this.murDroit.body.setAllowGravity(false);
        this.murDroit.setImmovable(true);

        //Briques rangée1

        this.brique1 = this.physics.add.sprite(120, 200,'carre').setOrigin(0, 0);
        this.brique1.setDisplaySize(60,30);
        this.brique1.body.immovable = true;
        this.brique2 = this.physics.add.sprite(181, 200,'carre').setOrigin(0, 0);
        this.brique2.setDisplaySize(60,30);
        this.brique3 = this.physics.add.sprite(242, 200,'carre').setOrigin(0, 0);
        this.brique3.setDisplaySize(60,30);
        this.brique4 = this.physics.add.sprite(303, 200,'carre').setOrigin(0, 0);
        this.brique4.setDisplaySize(60,30);
        this.brique5 = this.physics.add.sprite(364, 200,'carre').setOrigin(0, 0);
        this.brique5.setDisplaySize(60,30);
        this.brique6 = this.physics.add.sprite(425, 200,'carre').setOrigin(0, 0);
        this.brique6.setDisplaySize(60,30);
        this.brique7 = this.physics.add.sprite(486, 200,'carre').setOrigin(0, 0);
        this.brique7.setDisplaySize(60,30);
        this.brique8 = this.physics.add.sprite(547, 200,'carre').setOrigin(0, 0);
        this.brique8.setDisplaySize(60,30);
        this.brique9 = this.physics.add.sprite(608, 200,'carre').setOrigin(0, 0);
        this.brique9.setDisplaySize(60,30);

        //Briques rangée2

        this.brique1 = this.physics.add.sprite(120, 231,'carre').setOrigin(0, 0);
        this.brique1.setDisplaySize(60,30);
        this.brique2 = this.physics.add.sprite(181, 231,'carre').setOrigin(0, 0);
        this.brique2.setDisplaySize(60,30);
        this.brique3 = this.physics.add.sprite(242, 231,'carre').setOrigin(0, 0);
        this.brique3.setDisplaySize(60,30);
        this.brique4 = this.physics.add.sprite(303, 231,'carre').setOrigin(0, 0);
        this.brique4.setDisplaySize(60,30);
        this.brique5 = this.physics.add.sprite(364, 231,'carre').setOrigin(0, 0);
        this.brique5.setDisplaySize(60,30);
        this.brique6 = this.physics.add.sprite(425, 231,'carre').setOrigin(0, 0);
        this.brique6.setDisplaySize(60,30);
        this.brique7 = this.physics.add.sprite(486, 231,'carre').setOrigin(0, 0);
        this.brique7.setDisplaySize(60,30);
        this.brique8 = this.physics.add.sprite(547, 231,'carre').setOrigin(0, 0);
        this.brique8.setDisplaySize(60,30);
        this.brique9 = this.physics.add.sprite(608, 231,'carre').setOrigin(0, 0);
        this.brique9.setDisplaySize(60,30);

        //Briques rangée3

        this.brique1 = this.physics.add.sprite(120, 262,'carre').setOrigin(0, 0);
        this.brique1.setDisplaySize(60,30);
        this.brique2 = this.physics.add.sprite(181, 262,'carre').setOrigin(0, 0);
        this.brique2.setDisplaySize(60,30);
        this.brique3 = this.physics.add.sprite(242, 262,'carre').setOrigin(0, 0);
        this.brique3.setDisplaySize(60,30);
        this.brique4 = this.physics.add.sprite(303, 262,'carre').setOrigin(0, 0);
        this.brique4.setDisplaySize(60,30);
        this.brique5 = this.physics.add.sprite(364, 262,'carre').setOrigin(0, 0);
        this.brique5.setDisplaySize(60,30);
        this.brique6 = this.physics.add.sprite(425, 262,'carre').setOrigin(0, 0);
        this.brique6.setDisplaySize(60,30);
        this.brique7 = this.physics.add.sprite(486, 262,'carre').setOrigin(0, 0);
        this.brique7.setDisplaySize(60,30);
        this.brique8 = this.physics.add.sprite(547, 262,'carre').setOrigin(0, 0);
        this.brique8.setDisplaySize(60,30);
        this.brique9 = this.physics.add.sprite(608, 262,'carre').setOrigin(0, 0);
        this.brique9.setDisplaySize(60,30);

        //Briques rangée4

        this.brique1 = this.physics.add.sprite(120, 293,'carre').setOrigin(0, 0);
        this.brique1.setDisplaySize(60,30);
        this.brique2 = this.physics.add.sprite(181, 293,'carre').setOrigin(0, 0);
        this.brique2.setDisplaySize(60,30);
        this.brique3 = this.physics.add.sprite(242, 293,'carre').setOrigin(0, 0);
        this.brique3.setDisplaySize(60,30);
        this.brique4 = this.physics.add.sprite(303, 293,'carre').setOrigin(0, 0);
        this.brique4.setDisplaySize(60,30);
        this.brique5 = this.physics.add.sprite(364, 293,'carre').setOrigin(0, 0);
        this.brique5.setDisplaySize(60,30);
        this.brique6 = this.physics.add.sprite(425, 293,'carre').setOrigin(0, 0);
        this.brique6.setDisplaySize(60,30);
        this.brique7 = this.physics.add.sprite(486, 293,'carre').setOrigin(0, 0);
        this.brique7.setDisplaySize(60,30);
        this.brique8 = this.physics.add.sprite(547, 293,'carre').setOrigin(0, 0);
        this.brique8.setDisplaySize(60,30);
        this.brique9 = this.physics.add.sprite(608, 293,'carre').setOrigin(0, 0);
        this.brique9.setDisplaySize(60,30);

        //Briques rangée5

        this.brique1 = this.physics.add.sprite(120, 324,'carre').setOrigin(0, 0);
        this.brique1.setDisplaySize(60,30);
        this.brique2 = this.physics.add.sprite(181, 324,'carre').setOrigin(0, 0);
        this.brique2.setDisplaySize(60,30);
        this.brique3 = this.physics.add.sprite(242, 324,'carre').setOrigin(0, 0);
        this.brique3.setDisplaySize(60,30);
        this.brique4 = this.physics.add.sprite(303, 324,'carre').setOrigin(0, 0);
        this.brique4.setDisplaySize(60,30);
        this.brique5 = this.physics.add.sprite(364, 324,'carre').setOrigin(0, 0);
        this.brique5.setDisplaySize(60,30);
        this.brique6 = this.physics.add.sprite(425, 324,'carre').setOrigin(0, 0);
        this.brique6.setDisplaySize(60,30);
        this.brique7 = this.physics.add.sprite(486, 324,'carre').setOrigin(0, 0);
        this.brique7.setDisplaySize(60,30);
        this.brique8 = this.physics.add.sprite(547, 324,'carre').setOrigin(0, 0);
        this.brique8.setDisplaySize(60,30);
        this.brique9 = this.physics.add.sprite(608, 324,'carre').setOrigin(0, 0);
        this.brique9.setDisplaySize(60,30);

        //Collision
        this.physics.add.collider(this.balle,this.murGauche);
        this.physics.add.collider(this.balle,this.murDroit);
        this.physics.add.collider(this.balle,this.haut);

        //Raquettes balle/murs
        this.raquette = this.physics.add.sprite(300, 750,'carre').setOrigin(0, 0);
        this.raquette.setDisplaySize(200,20);
        this.raquette.setVelocityY(0);
        this.raquette.body.setAllowGravity(false);
        this.raquette.setImmovable(true);

        let me = this;
        //Collision raquettes/balle
        this.physics.add.collider(this.balle,this.raquette, function(){
            me.rebond(me.raquette);
        });

        this.physics.add.collider(this.balle,this.raquette);



        this.joueurGauche = new Joueur('Joueur','joueurGauche');


        this.balleAucentre();

        this.initKeyboard();
    }





    rebond(raquette){


        let me=this;

        let largeurRaquette = raquette.displayHeight;

        let positionRelativeRaquette =(this.balle.x-raquette.x);

        positionRelativeRaquette = (positionRelativeRaquette/largeurRaquette);

        positionRelativeRaquette = (positionRelativeRaquette*2-1);
        console.log(positionRelativeRaquette);

        this.balle.setVelocityX( this.balle.body.velocity.x + positionRelativeRaquette * largeurRaquette)
    }

    balleAucentre(){
        this.balle.x = this.largeur/2
        this.balle.y = this.hauteur/2
        this.balle.setVelocityX(0)

        this.balle.setVelocityX(Math.random()>0.5?-100:100)
        this.balle.setVelocityY(0)
    }

    win(joueur){
        //alert('Joueur '+joueur.name+' gagne')
        joueur.score ++;
        //alert('Le score est de '+this.joueurGauche.score+' a '+this.joueur.score)
        this.balleAucentre();
    }

    initKeyboard() {
        let me = this;
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.raquette.setVelocityY(0);
                    break;

                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.raquette.setVelocityY(0);
                    break;
            }
        })
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.raquette.setVelocityX(300);

                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:

                    me.raquette.setVelocityX(-300);

                    break;
            }
        })
    }
    update() {




        if(this.balle.x>this.largeur){
            this.win(this.joueurGauche);
        }
    }
}

