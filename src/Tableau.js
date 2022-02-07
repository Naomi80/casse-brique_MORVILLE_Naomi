
class Tableau extends Phaser.Scene {
    preload() {
        this.load.image('bg', 'assets/bg.png');
        this.load.image('cercle', 'assets/cercle.png');
        this.load.image('carre', 'assets/carre.png');
        this.load.image('raquette', 'assets/raquette.png');

        this.load.audio('applause', 'assets/son/applause.mp3')


    }


    create() {
        this.hauteur=500;
        this.largeur=1000;

        //Son
        this.applause= this.sound.add('applause', {loop: false});
        this.applause.volume = 1

        //Fond
        this.bg = this.add.image(0, 0, 'bg').setOrigin(0, 0);

        //Balle
        this.balle = this.physics.add.sprite(this.largeur/2, this.hauteur/2, 'cercle').setOrigin(0, 0);
        this.balle.setDisplaySize(20,20);
        this.balle.body.setBounce(1.1,1.1);
        this.balle.setVelocityX(Phaser.Math.Between(-600,600));
        this.balle.setVelocityY(Phaser.Math.Between(300,350));
        this.balle.body.setMaxVelocityX(500);
        this.balle.body.setMaxVelocityY(700);
        this.balle.body.setAllowGravity(false)

        //Mur haut
        this.haut = this.physics.add.sprite(0, 0,'carre').setOrigin(0, 0);
        this.haut.setDisplaySize(this.largeur,20);
        this.haut.body.setAllowGravity(false);
        this.haut.setImmovable(true);

        //Mur bas
        this.bas = this.physics.add.sprite(0, this.hauteur-20,'carre').setOrigin(0, 0);
        this.bas.setDisplaySize(this.largeur,20);
        this.bas.body.setAllowGravity(false);
        this.bas.setImmovable(true);

        //Collision
        this.physics.add.collider(this.balle,this.bas);
        this.physics.add.collider(this.balle,this.haut);

        //Raquettes balle/murs
        this.gauche = this.physics.add.sprite(25, 200,'raquette').setOrigin(0, 0);
        this.gauche.setVelocityY(0);
        this.gauche.body.setAllowGravity(false);
        this.gauche.setImmovable(true);

        this.droite = this.physics.add.sprite(955, 200,'raquette').setOrigin(0, 0);
        this.droite.setVelocityY(0);
        this.droite.body.setAllowGravity(false);
        this.droite.setImmovable(true);

        let me = this;
        //Collision raquettes/balle
        this.physics.add.collider(this.balle,this.gauche, function(){
            console.log("touche gauche");
            me.rebond(me.gauche);
        });

        this.physics.add.collider(this.balle,this.gauche);

        this.physics.add.collider(this.balle,this.droite, function(){
            console.log("touche droit");
            me.rebond(me.droite);
        });

        this.physics.add.collider(this.balle,this.droite);

        this.joueurGauche = new Joueur('Jean-Mi','joueurGauche');
        this.joueurDroite = new Joueur('Gyselle','joueurDroite');
        console.log(this.joueurGauche);

        this.balleAucentre();

        this.initKeyboard();
    }





    rebond(raquette){


        let me=this;

        console.log(raquette.y)
        console.log(me.balle.y)
        console.log((me.balle.y)-(raquette.y))

        let hauteurRaquette = raquette.displayHeight;

        let positionRelativeRaquette =(this.balle.y-raquette.y);

        positionRelativeRaquette = (positionRelativeRaquette/hauteurRaquette);

        positionRelativeRaquette = (positionRelativeRaquette*2-1);
        console.log(positionRelativeRaquette);

        this.balle.setVelocityY( this.balle.body.velocity.y + positionRelativeRaquette * hauteurRaquette)
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
        //alert('Le score est de '+this.joueurGauche.score+' a '+this.joueurDroite.score)
        this.balleAucentre();
        this.applause.play()
    }

    initKeyboard() {
        let me = this;
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.gauche.setVelocityY(0);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.droite.setVelocityY(0);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.gauche.setVelocityY(0);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.droite.setVelocityY(0);
                    break;
            }
        })
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.gauche.setVelocityY(-300);

                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:

                    me.droite.setVelocityY(-300);

                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:

                    me.gauche.setVelocityY(300);

                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:

                    me.droite.setVelocityY(300);

                    break;
            }
        })
    }
    update() {

        if(this.gauche.y<this.haut.y+20){
            this.gauche.y=this.haut.y+20
        }
        if(this.gauche.y>this.bas.y-100){
            this.gauche.y=this.bas.y-100
        }
        if(this.droite.y<this.haut.y+20){
            this.droite.y=this.haut.y+20
        }
        if(this.droite.y>this.bas.y-100){
            this.droite.y=this.bas.y-100
        }


        if(this.balle.x>this.largeur){
            this.win(this.joueurGauche);
        }
        if(this.balle.x<0){
            this.win(this.joueurDroite);
        }
    }
}

