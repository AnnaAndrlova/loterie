<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!--CSS-->

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="stylesheet" href="assets/css/index.css">
    <!--JS-->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
            crossorigin="anonymous"></script>
    <script src="assets/js/index.js"></script>

</head>
<body>
<div class="card text-white bg-info mb-3 text-center" style="width:100% ;">
    <div class="card-body">
        <h5 class="card-title">KOLO ŠTĚSTIÍ</h5>
        <p class="card-text">Vyzkoušej svoje štestí a získej skvělé výhry</p>
        <button class="btn btn-primary tlacitko">Zkusit štěstí</button>
    </div>
</div>
<div class="card border-dark mb-3 boxik" style="max-width: 18rem;">
    <div class="card-header centr">Tvůj výsledek</div>
    <div class="card-body text-dark">
        <h5 class="gratulace card-title  centr" id="gratulace">Dark card title</h5>
        <p class="card-text vyhra centr" id="vyhra">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
<script> 
$(function () {
    //prumerny pocet lidi
    let l = 4000;
    //pocet dnu
    let d = 14;
    //pocet malych vyher
    let mv = 500;
    //pocet velkych
    let vv = 3;
    // pravdepodobnostr vyhry
    // male
    let pmv= mv/d/l;
    //velke
    let pvv= vv/d/l;

    //const stopBtn = document.querySelector('.tlacitko');
    //let stopBtnClicked = false;
//co se stane kdyz kliknu na tlacitko
    $("button.tlacitko").click(() => {
        //vypnu cudlik
        //vznikne random číslo, od 0 do 1, to jeste doladim
        $("button.tlacitko").attr("disabled", true);
        let number = Math.random();
        //$('button').text(number);
        //mam dostatek velkých a malých výher?
        if (mv===0) {
            //$('button').text(number);
            //pokud je číslo rovno 0, vyhrál jsi hlavní výhru, pozdeji musím jednu hlavní vyhru odecist
            if (number<pvv) {
                $('#gratulace').text("Gratulujeme! ");
                $('#vyhra').text("Vyhrál jste velkou výhru! ");
                vv= vv - 1;


            } else {
                $('#gratulace').text("Bohužel, tentokrát to nevyšlo ");
                $('#vyhra').text("Nebuď smutný a zkus si zatočit znovu");
            }
        }else if (vv===0) {

            if (number<pmv) {
                $('#gratulace').text("Gratulujeme! ");
                $('#vyhra').text("Vyhrál jste malou výhru! ");
                mv= mv - 1;

            } else {
                $('#gratulace').text("Bohužel, tentokrát to nevyšlo ");
                $('#vyhra').text("Nebuď smutný a zkus si zatočit znovu");
            }

        } else {
            if (number<pvv) {
                $('#gratulace').text("Gratulujeme! ");
                $('#vyhra').text("Vyhrál jste velkou výhru! ");
                vv= vv - 1;
            }else if (number<pmv) {
                $('#gratulace').text("Gratulujeme! ");
                $('#vyhra').text("Vyhrál jste malou výhru! ");
                mv= mv - 1;

            } else {
                $('#gratulace').text("Bohužel, tentokrát to nevyšlo ");
                $('#vyhra').text("Nebuď smutný a zkus si zatočit znovu");
            }
        }
        //$('button').text(number);
        //pokud je číslo rovno 0, vyhrál jsi hlavní výhru, pozdeji musím jednu hlavní vyhru odecist





        }
    );
})
</script>
</body>
</html>
