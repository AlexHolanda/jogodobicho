var span1 = document.getElementById('um')
var span2 = document.getElementById('dois')
var span3 = document.getElementById('tres')
var span4 = document.getElementById('quatro')

var span5 = document.getElementById('cinco')
var span6 = document.getElementById('seis')
var span7 = document.getElementById('sete')
var span8 = document.getElementById('oito')

var span9 = document.getElementById('nove')
var span10 = document.getElementById('dez')
var span11 = document.getElementById('onze')
var span12 = document.getElementById('doze')

var span13 = document.getElementById('treze')
var span14 = document.getElementById('quatorze')
var span15 = document.getElementById('quinze')
var span16 = document.getElementById('dezeseis')

var span17 = document.getElementById('dezesete')
var span18 = document.getElementById('dezoito')
var span19 = document.getElementById('dezenove')
var span20 = document.getElementById('vinte')

var span21 = document.getElementById('vinteeum')
var span22 = document.getElementById('vinteedois')
var span23 = document.getElementById('vinteetres')
var span24 = document.getElementById('vinteequatro')

var spanres1 = document.getElementById('resnum1')
var spanres2 = document.getElementById('resnum2')
var spanres3 = document.getElementById('resnum3')
var spanres4 = document.getElementById('resnum4')
var spanres5 = document.getElementById('resnum5')
var spanres6 = document.getElementById('resnum6')
var jogo1 = [];
var jogo2 = [];
var jogo3 = [];
var jogo4 = [];
var jogo5 = [];
var jogo6 = [];
var ternoGrupo = [];

var cruzdata = document.getElementById('cruzdata')
var cruz1 = document.getElementById('cruz1')
var cruz2 = document.getElementById('cruz2')
var cruz3 = document.getElementById('cruz3')
var cruz4 = document.getElementById('cruz4')
var cruz3txt = document.getElementById('cruz3txt')

function sorteio(a, b) {
    return Math.floor(Math.random() * (a - b) + b);
}

function gerar() {

    while (jogo1.length <= 3) {
        var resultado = sorteio(0, 10);
        if (jogo1.length <= 3) {
            jogo1.push(resultado);
        }
        span1.innerHTML = jogo1[0];
        span2.innerHTML = jogo1[1];
        span3.innerHTML = jogo1[2];
        span4.innerHTML = jogo1[3];


        resultado = ""
        var resultado = sorteio(0, 10);
        if (jogo2.length <= 3) {
            jogo2.push(resultado);
        }
        span5.innerHTML = jogo2[0];
        span6.innerHTML = jogo2[1];
        span7.innerHTML = jogo2[2];
        span8.innerHTML = jogo2[3];

        resultado = ""
        var resultado = sorteio(0, 10);
        if (jogo3.length <= 3) {
            jogo3.push(resultado);
        }
        span9.innerHTML = jogo3[0];
        span10.innerHTML = jogo3[1];
        span11.innerHTML = jogo3[2];
        span12.innerHTML = jogo3[3];

        resultado = ""
        var resultado = sorteio(0, 10);
        if (jogo4.length <= 3) {
            jogo4.push(resultado);
        }
        span13.innerHTML = jogo4[0];
        span14.innerHTML = jogo4[1];
        span15.innerHTML = jogo4[2];
        span16.innerHTML = jogo4[3];

        resultado = ""
        var resultado = sorteio(0, 10);
        if (jogo5.length <= 3) {
            jogo5.push(resultado);
        }
        span17.innerHTML = jogo5[0];
        span18.innerHTML = jogo5[1];
        span19.innerHTML = jogo5[2];
        span20.innerHTML = jogo5[3];

        resultado = ""
        var resultado = sorteio(0, 10);
        if (jogo6.length <= 3) {
            jogo6.push(resultado);
        }
        span21.innerHTML = jogo6[0];
        span22.innerHTML = jogo6[1];
        span23.innerHTML = jogo6[2];
        span24.innerHTML = jogo6[3];

        duquedez1.innerHTML = (`${jogo1[2]}${jogo1[3]} - ${jogo2[2]}${jogo2[3]} `);
        duquedez2.innerHTML = (`${jogo1[2]}${jogo1[3]} - ${jogo3[2]}${jogo3[3]} `);
        duquedez3.innerHTML = (`${jogo1[2]}${jogo1[3]} - ${jogo4[2]}${jogo4[3]} `);
        duquedez4.innerHTML = (`${jogo1[2]}${jogo1[3]} - ${jogo5[2]}${jogo5[3]} `);
        duquedez5.innerHTML = (`${jogo1[2]}${jogo1[3]} - ${jogo6[2]}${jogo6[3]} `);

        duquedez6.innerHTML = (`${jogo2[2]}${jogo2[3]} - ${jogo3[2]}${jogo3[3]} `);
        duquedez7.innerHTML = (`${jogo2[2]}${jogo2[3]} - ${jogo4[2]}${jogo4[3]} `);
        duquedez8.innerHTML = (`${jogo2[2]}${jogo2[3]} - ${jogo5[2]}${jogo5[3]} `);
        duquedez9.innerHTML = (`${jogo2[2]}${jogo2[3]} - ${jogo6[2]}${jogo6[3]} `);

        duquedez10.innerHTML = (`${jogo3[2]}${jogo3[3]} - ${jogo4[2]}${jogo4[3]} `);
        duquedez11.innerHTML = (`${jogo3[2]}${jogo3[3]} - ${jogo5[2]}${jogo5[3]} `);
        duquedez12.innerHTML = (`${jogo3[2]}${jogo3[3]} - ${jogo6[2]}${jogo6[3]} `);

        duquedez13.innerHTML = (`${jogo4[2]}${jogo4[3]} - ${jogo5[2]}${jogo5[3]} `);
        duquedez14.innerHTML = (`${jogo4[2]}${jogo4[3]} - ${jogo6[2]}${jogo6[3]} `);

        duquedez15.innerHTML = (`${jogo5[2]}${jogo5[3]} - ${jogo6[2]}${jogo6[3]} `);
    }
    //Jogo 1
    if ((`${jogo1[2]}${jogo1[3]}`) == '01' || (`${jogo1[2]}${jogo1[3]}`) == '02' || (`${jogo1[2]}${jogo1[3]}`) == '03' || (`${jogo1[2]}${jogo1[3]}`) == '04') {
        spanres1.innerHTML = 'Avestruz - GRUPO 01'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '05' || (`${jogo1[2]}${jogo1[3]}`) == '06' || (`${jogo1[2]}${jogo1[3]}`) == '07' || (`${jogo1[2]}${jogo1[3]}`) == '08') {
        spanres1.innerHTML = 'Águia - GRUPO 02'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '09' || (`${jogo1[2]}${jogo1[3]}`) == '10' || (`${jogo1[2]}${jogo1[3]}`) == '11' || (`${jogo1[2]}${jogo1[3]}`) == '12') {
        spanres1.innerHTML = 'Burro - GRUPO 03'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '13' || (`${jogo1[2]}${jogo1[3]}`) == '14' || (`${jogo1[2]}${jogo1[3]}`) == '15' || (`${jogo1[2]}${jogo1[3]}`) == '16') {
        spanres1.innerHTML = 'Borboleta - GRUPO 04'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '17' || (`${jogo1[2]}${jogo1[3]}`) == '18' || (`${jogo1[2]}${jogo1[3]}`) == '19' || (`${jogo1[2]}${jogo1[3]}`) == '20') {
        spanres1.innerHTML = 'Cachorro - GRUPO 05'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '21' || (`${jogo1[2]}${jogo1[3]}`) == '22' || (`${jogo1[2]}${jogo1[3]}`) == '23' || (`${jogo1[2]}${jogo1[3]}`) == '24') {
        spanres1.innerHTML = 'Cabra - GRUPO 06'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '25' || (`${jogo1[2]}${jogo1[3]}`) == '26' || (`${jogo1[2]}${jogo1[3]}`) == '27' || (`${jogo1[2]}${jogo1[3]}`) == '28') {
        spanres1.innerHTML = 'Carneiro - GRUPO 07'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '29' || (`${jogo1[2]}${jogo1[3]}`) == '30' || (`${jogo1[2]}${jogo1[3]}`) == '31' || (`${jogo1[2]}${jogo1[3]}`) == '32') {
        spanres1.innerHTML = 'Camelo - GRUPO 08'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '33' || (`${jogo1[2]}${jogo1[3]}`) == '34' || (`${jogo1[2]}${jogo1[3]}`) == '35' || (`${jogo1[2]}${jogo1[3]}`) == '36') {
        spanres1.innerHTML = 'Cobra - GRUPO 09'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '37' || (`${jogo1[2]}${jogo1[3]}`) == '38' || (`${jogo1[2]}${jogo1[3]}`) == '39' || (`${jogo1[2]}${jogo1[3]}`) == '40') {
        spanres1.innerHTML = 'Coelho - GRUPO 10'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '41' || (`${jogo1[2]}${jogo1[3]}`) == '42' || (`${jogo1[2]}${jogo1[3]}`) == '43' || (`${jogo1[2]}${jogo1[3]}`) == '44') {
        spanres1.innerHTML = 'Cavalo - GRUPO 11'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '45' || (`${jogo1[2]}${jogo1[3]}`) == '46' || (`${jogo1[2]}${jogo1[3]}`) == '47' || (`${jogo1[2]}${jogo1[3]}`) == '48') {
        spanres1.innerHTML = 'Elefante - GRUPO 12'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '49' || (`${jogo1[2]}${jogo1[3]}`) == '50' || (`${jogo1[2]}${jogo1[3]}`) == '51' || (`${jogo1[2]}${jogo1[3]}`) == '52') {
        spanres1.innerHTML = 'Galo - GRUPO 13'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '53' || (`${jogo1[2]}${jogo1[3]}`) == '54' || (`${jogo1[2]}${jogo1[3]}`) == '55' || (`${jogo1[2]}${jogo1[3]}`) == '56') {
        spanres1.innerHTML = 'Gato - GRUPO 14'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '57' || (`${jogo1[2]}${jogo1[3]}`) == '58' || (`${jogo1[2]}${jogo1[3]}`) == '59' || (`${jogo1[2]}${jogo1[3]}`) == '60') {
        spanres1.innerHTML = 'Jacaré - GRUPO 15'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '61' || (`${jogo1[2]}${jogo1[3]}`) == '62' || (`${jogo1[2]}${jogo1[3]}`) == '63' || (`${jogo1[2]}${jogo1[3]}`) == '64') {
        spanres1.innerHTML = 'Leão - GRUPO 16'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '65' || (`${jogo1[2]}${jogo1[3]}`) == '66' || (`${jogo1[2]}${jogo1[3]}`) == '67' || (`${jogo1[2]}${jogo1[3]}`) == '68') {
        spanres1.innerHTML = 'Macaco - GRUPO 17'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '69' || (`${jogo1[2]}${jogo1[3]}`) == '70' || (`${jogo1[2]}${jogo1[3]}`) == '71' || (`${jogo1[2]}${jogo1[3]}`) == '72') {
        spanres1.innerHTML = 'Porco - GRUPO 18'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '73' || (`${jogo1[2]}${jogo1[3]}`) == '74' || (`${jogo1[2]}${jogo1[3]}`) == '75' || (`${jogo1[2]}${jogo1[3]}`) == '76') {
        spanres1.innerHTML = 'Pavão - GRUPO 19'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '77' || (`${jogo1[2]}${jogo1[3]}`) == '78' || (`${jogo1[2]}${jogo1[3]}`) == '79' || (`${jogo1[2]}${jogo1[3]}`) == '80') {
        spanres1.innerHTML = 'Peru - GRUPO 20'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '81' || (`${jogo1[2]}${jogo1[3]}`) == '82' || (`${jogo1[2]}${jogo1[3]}`) == '83' || (`${jogo1[2]}${jogo1[3]}`) == '84') {
        spanres1.innerHTML = 'Touro - GRUPO 21'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '85' || (`${jogo1[2]}${jogo1[3]}`) == '86' || (`${jogo1[2]}${jogo1[3]}`) == '87' || (`${jogo1[2]}${jogo1[3]}`) == '88') {
        spanres1.innerHTML = 'Tigre - GRUPO 22'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '89' || (`${jogo1[2]}${jogo1[3]}`) == '90' || (`${jogo1[2]}${jogo1[3]}`) == '91' || (`${jogo1[2]}${jogo1[3]}`) == '92') {
        spanres1.innerHTML = 'Urso - GRUPO 23'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '93' || (`${jogo1[2]}${jogo1[3]}`) == '94' || (`${jogo1[2]}${jogo1[3]}`) == '95' || (`${jogo1[2]}${jogo1[3]}`) == '96') {
        spanres1.innerHTML = 'Veado - GRUPO 24'
    } else if ((`${jogo1[2]}${jogo1[3]}`) == '97' || (`${jogo1[2]}${jogo1[3]}`) == '98' || (`${jogo1[2]}${jogo1[3]}`) == '99' || (`${jogo1[2]}${jogo1[3]}`) == '00') {
        spanres1.innerHTML = 'Vaca - GRUPO 25'
    }


    //Jogo 2
    if ((`${jogo2[2]}${jogo2[3]}`) == '01' || (`${jogo2[2]}${jogo2[3]}`) == '02' || (`${jogo2[2]}${jogo2[3]}`) == '03' || (`${jogo2[2]}${jogo2[3]}`) == '04') {
        spanres2.innerHTML = 'Avestruz - GRUPO 01'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '05' || (`${jogo2[2]}${jogo2[3]}`) == '06' || (`${jogo2[2]}${jogo2[3]}`) == '07' || (`${jogo2[2]}${jogo2[3]}`) == '08') {
        spanres2.innerHTML = 'Águia - GRUPO 02'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '09' || (`${jogo2[2]}${jogo2[3]}`) == '10' || (`${jogo2[2]}${jogo2[3]}`) == '11' || (`${jogo2[2]}${jogo2[3]}`) == '12') {
        spanres2.innerHTML = 'Burro - GRUPO 03'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '13' || (`${jogo2[2]}${jogo2[3]}`) == '14' || (`${jogo2[2]}${jogo2[3]}`) == '15' || (`${jogo2[2]}${jogo2[3]}`) == '16') {
        spanres2.innerHTML = 'Borboleta - GRUPO 04'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '17' || (`${jogo2[2]}${jogo2[3]}`) == '18' || (`${jogo2[2]}${jogo2[3]}`) == '19' || (`${jogo2[2]}${jogo2[3]}`) == '20') {
        spanres2.innerHTML = 'Cachorro - GRUPO 05'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '21' || (`${jogo2[2]}${jogo2[3]}`) == '22' || (`${jogo2[2]}${jogo2[3]}`) == '23' || (`${jogo2[2]}${jogo2[3]}`) == '24') {
        spanres2.innerHTML = 'Cabra - GRUPO 06'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '25' || (`${jogo2[2]}${jogo2[3]}`) == '26' || (`${jogo2[2]}${jogo2[3]}`) == '27' || (`${jogo2[2]}${jogo2[3]}`) == '28') {
        spanres2.innerHTML = 'Carneiro - GRUPO 07'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '29' || (`${jogo2[2]}${jogo2[3]}`) == '30' || (`${jogo2[2]}${jogo2[3]}`) == '31' || (`${jogo2[2]}${jogo2[3]}`) == '32') {
        spanres2.innerHTML = 'Camelo - GRUPO 08'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '33' || (`${jogo2[2]}${jogo2[3]}`) == '34' || (`${jogo2[2]}${jogo2[3]}`) == '35' || (`${jogo2[2]}${jogo2[3]}`) == '36') {
        spanres2.innerHTML = 'Cobra - GRUPO 09'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '37' || (`${jogo2[2]}${jogo2[3]}`) == '38' || (`${jogo2[2]}${jogo2[3]}`) == '39' || (`${jogo2[2]}${jogo2[3]}`) == '40') {
        spanres2.innerHTML = 'Coelho - GRUPO 10'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '41' || (`${jogo2[2]}${jogo2[3]}`) == '42' || (`${jogo2[2]}${jogo2[3]}`) == '43' || (`${jogo2[2]}${jogo2[3]}`) == '44') {
        spanres2.innerHTML = 'Cavalo - GRUPO 11'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '45' || (`${jogo2[2]}${jogo2[3]}`) == '46' || (`${jogo2[2]}${jogo2[3]}`) == '47' || (`${jogo2[2]}${jogo2[3]}`) == '48') {
        spanres2.innerHTML = 'Elefante - GRUPO 12'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '49' || (`${jogo2[2]}${jogo2[3]}`) == '50' || (`${jogo2[2]}${jogo2[3]}`) == '51' || (`${jogo2[2]}${jogo2[3]}`) == '52') {
        spanres2.innerHTML = 'Galo - GRUPO 13'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '53' || (`${jogo2[2]}${jogo2[3]}`) == '54' || (`${jogo2[2]}${jogo2[3]}`) == '55' || (`${jogo2[2]}${jogo2[3]}`) == '56') {
        spanres2.innerHTML = 'Gato - GRUPO 14'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '57' || (`${jogo2[2]}${jogo2[3]}`) == '58' || (`${jogo2[2]}${jogo2[3]}`) == '59' || (`${jogo2[2]}${jogo2[3]}`) == '60') {
        spanres2.innerHTML = 'Jacaré - GRUPO 15'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '61' || (`${jogo2[2]}${jogo2[3]}`) == '62' || (`${jogo2[2]}${jogo2[3]}`) == '63' || (`${jogo2[2]}${jogo2[3]}`) == '64') {
        spanres2.innerHTML = 'Leão - GRUPO 16'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '65' || (`${jogo2[2]}${jogo2[3]}`) == '66' || (`${jogo2[2]}${jogo2[3]}`) == '67' || (`${jogo2[2]}${jogo2[3]}`) == '68') {
        spanres2.innerHTML = 'Macaco - GRUPO 17'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '69' || (`${jogo2[2]}${jogo2[3]}`) == '70' || (`${jogo2[2]}${jogo2[3]}`) == '71' || (`${jogo2[2]}${jogo2[3]}`) == '72') {
        spanres2.innerHTML = 'Porco - GRUPO 18'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '73' || (`${jogo2[2]}${jogo2[3]}`) == '74' || (`${jogo2[2]}${jogo2[3]}`) == '75' || (`${jogo2[2]}${jogo2[3]}`) == '76') {
        spanres2.innerHTML = 'Pavão - GRUPO 19'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '77' || (`${jogo2[2]}${jogo2[3]}`) == '78' || (`${jogo2[2]}${jogo2[3]}`) == '79' || (`${jogo2[2]}${jogo2[3]}`) == '80') {
        spanres2.innerHTML = 'Peru - GRUPO 20'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '81' || (`${jogo2[2]}${jogo2[3]}`) == '82' || (`${jogo2[2]}${jogo2[3]}`) == '83' || (`${jogo2[2]}${jogo2[3]}`) == '84') {
        spanres2.innerHTML = 'Touro - GRUPO 21'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '85' || (`${jogo2[2]}${jogo2[3]}`) == '86' || (`${jogo2[2]}${jogo2[3]}`) == '87' || (`${jogo2[2]}${jogo2[3]}`) == '88') {
        spanres2.innerHTML = 'Tigre - GRUPO 22'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '89' || (`${jogo2[2]}${jogo2[3]}`) == '90' || (`${jogo2[2]}${jogo2[3]}`) == '91' || (`${jogo2[2]}${jogo2[3]}`) == '92') {
        spanres2.innerHTML = 'Urso - GRUPO 23'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '93' || (`${jogo2[2]}${jogo2[3]}`) == '94' || (`${jogo2[2]}${jogo2[3]}`) == '95' || (`${jogo2[2]}${jogo2[3]}`) == '96') {
        spanres2.innerHTML = 'Veado - GRUPO 24'
    } else if ((`${jogo2[2]}${jogo2[3]}`) == '97' || (`${jogo2[2]}${jogo2[3]}`) == '98' || (`${jogo2[2]}${jogo2[3]}`) == '99' || (`${jogo2[2]}${jogo2[3]}`) == '00') {
        spanres2.innerHTML = 'Vaca - GRUPO 25'
    }

    //Jogo 3
    if ((`${jogo3[2]}${jogo3[3]}`) == '01' || (`${jogo3[2]}${jogo3[3]}`) == '02' || (`${jogo3[2]}${jogo3[3]}`) == '03' || (`${jogo3[2]}${jogo3[3]}`) == '04') {
        spanres3.innerHTML = 'Avestruz - GRUPO 01'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '05' || (`${jogo3[2]}${jogo3[3]}`) == '06' || (`${jogo3[2]}${jogo3[3]}`) == '07' || (`${jogo3[2]}${jogo3[3]}`) == '08') {
        spanres3.innerHTML = 'Águia - GRUPO 02'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '09' || (`${jogo3[2]}${jogo3[3]}`) == '10' || (`${jogo3[2]}${jogo3[3]}`) == '11' || (`${jogo3[2]}${jogo3[3]}`) == '12') {
        spanres3.innerHTML = 'Burro - GRUPO 03'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '13' || (`${jogo3[2]}${jogo3[3]}`) == '14' || (`${jogo3[2]}${jogo3[3]}`) == '15' || (`${jogo3[2]}${jogo3[3]}`) == '16') {
        spanres3.innerHTML = 'Borboleta - GRUPO 04'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '17' || (`${jogo3[2]}${jogo3[3]}`) == '18' || (`${jogo3[2]}${jogo3[3]}`) == '19' || (`${jogo3[2]}${jogo3[3]}`) == '20') {
        spanres3.innerHTML = 'Cachorro - GRUPO 05'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '21' || (`${jogo3[2]}${jogo3[3]}`) == '22' || (`${jogo3[2]}${jogo3[3]}`) == '23' || (`${jogo3[2]}${jogo3[3]}`) == '24') {
        spanres3.innerHTML = 'Cabra - GRUPO 06'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '25' || (`${jogo3[2]}${jogo3[3]}`) == '26' || (`${jogo3[2]}${jogo3[3]}`) == '27' || (`${jogo3[2]}${jogo3[3]}`) == '28') {
        spanres3.innerHTML = 'Carneiro - GRUPO 07'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '29' || (`${jogo3[2]}${jogo3[3]}`) == '30' || (`${jogo3[2]}${jogo3[3]}`) == '31' || (`${jogo3[2]}${jogo3[3]}`) == '32') {
        spanres3.innerHTML = 'Camelo - GRUPO 08'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '33' || (`${jogo3[2]}${jogo3[3]}`) == '34' || (`${jogo3[2]}${jogo3[3]}`) == '35' || (`${jogo3[2]}${jogo3[3]}`) == '36') {
        spanres3.innerHTML = 'Cobra - GRUPO 09'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '37' || (`${jogo3[2]}${jogo3[3]}`) == '38' || (`${jogo3[2]}${jogo3[3]}`) == '39' || (`${jogo3[2]}${jogo3[3]}`) == '40') {
        spanres3.innerHTML = 'Coelho - GRUPO 10'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '41' || (`${jogo3[2]}${jogo3[3]}`) == '42' || (`${jogo3[2]}${jogo3[3]}`) == '43' || (`${jogo3[2]}${jogo3[3]}`) == '44') {
        spanres3.innerHTML = 'Cavalo - GRUPO 11'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '45' || (`${jogo3[2]}${jogo3[3]}`) == '46' || (`${jogo3[2]}${jogo3[3]}`) == '47' || (`${jogo3[2]}${jogo3[3]}`) == '48') {
        spanres3.innerHTML = 'Elefante - GRUPO 12'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '49' || (`${jogo3[2]}${jogo3[3]}`) == '50' || (`${jogo3[2]}${jogo3[3]}`) == '51' || (`${jogo3[2]}${jogo3[3]}`) == '52') {
        spanres3.innerHTML = 'Galo - GRUPO 13'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '53' || (`${jogo3[2]}${jogo3[3]}`) == '54' || (`${jogo3[2]}${jogo3[3]}`) == '55' || (`${jogo3[2]}${jogo3[3]}`) == '56') {
        spanres3.innerHTML = 'Gato - GRUPO 14'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '57' || (`${jogo3[2]}${jogo3[3]}`) == '58' || (`${jogo3[2]}${jogo3[3]}`) == '59' || (`${jogo3[2]}${jogo3[3]}`) == '60') {
        spanres3.innerHTML = 'Jacaré - GRUPO 15'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '61' || (`${jogo3[2]}${jogo3[3]}`) == '62' || (`${jogo3[2]}${jogo3[3]}`) == '63' || (`${jogo3[2]}${jogo3[3]}`) == '64') {
        spanres3.innerHTML = 'Leão - GRUPO 16'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '65' || (`${jogo3[2]}${jogo3[3]}`) == '66' || (`${jogo3[2]}${jogo3[3]}`) == '67' || (`${jogo3[2]}${jogo3[3]}`) == '68') {
        spanres3.innerHTML = 'Macaco - GRUPO 17'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '69' || (`${jogo3[2]}${jogo3[3]}`) == '70' || (`${jogo3[2]}${jogo3[3]}`) == '71' || (`${jogo3[2]}${jogo3[3]}`) == '72') {
        spanres3.innerHTML = 'Porco - GRUPO 18'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '73' || (`${jogo3[2]}${jogo3[3]}`) == '74' || (`${jogo3[2]}${jogo3[3]}`) == '75' || (`${jogo3[2]}${jogo3[3]}`) == '76') {
        spanres3.innerHTML = 'Pavão - GRUPO 19'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '77' || (`${jogo3[2]}${jogo3[3]}`) == '78' || (`${jogo3[2]}${jogo3[3]}`) == '79' || (`${jogo3[2]}${jogo3[3]}`) == '80') {
        spanres3.innerHTML = 'Peru - GRUPO 20'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '81' || (`${jogo3[2]}${jogo3[3]}`) == '82' || (`${jogo3[2]}${jogo3[3]}`) == '83' || (`${jogo3[2]}${jogo3[3]}`) == '84') {
        spanres3.innerHTML = 'Touro - GRUPO 21'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '85' || (`${jogo3[2]}${jogo3[3]}`) == '86' || (`${jogo3[2]}${jogo3[3]}`) == '87' || (`${jogo3[2]}${jogo3[3]}`) == '88') {
        spanres3.innerHTML = 'Tigre - GRUPO 22'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '89' || (`${jogo3[2]}${jogo3[3]}`) == '90' || (`${jogo3[2]}${jogo3[3]}`) == '91' || (`${jogo3[2]}${jogo3[3]}`) == '92') {
        spanres3.innerHTML = 'Urso - GRUPO 23'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '93' || (`${jogo3[2]}${jogo3[3]}`) == '94' || (`${jogo3[2]}${jogo3[3]}`) == '95' || (`${jogo3[2]}${jogo3[3]}`) == '96') {
        spanres3.innerHTML = 'Veado - GRUPO 24'
    } else if ((`${jogo3[2]}${jogo3[3]}`) == '97' || (`${jogo3[2]}${jogo3[3]}`) == '98' || (`${jogo3[2]}${jogo3[3]}`) == '99' || (`${jogo3[2]}${jogo3[3]}`) == '00') {
        spanres3.innerHTML = 'Vaca - GRUPO 25'
    }

    //Jogo 4
    if ((`${jogo4[2]}${jogo4[3]}`) == '01' || (`${jogo4[2]}${jogo4[3]}`) == '02' || (`${jogo4[2]}${jogo4[3]}`) == '03' || (`${jogo4[2]}${jogo4[3]}`) == '04') {
        spanres4.innerHTML = 'Avestruz - GRUPO 01'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '05' || (`${jogo4[2]}${jogo4[3]}`) == '06' || (`${jogo4[2]}${jogo4[3]}`) == '07' || (`${jogo4[2]}${jogo4[3]}`) == '08') {
        spanres4.innerHTML = 'Águia - GRUPO 02'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '09' || (`${jogo4[2]}${jogo4[3]}`) == '10' || (`${jogo4[2]}${jogo4[3]}`) == '11' || (`${jogo4[2]}${jogo4[3]}`) == '12') {
        spanres4.innerHTML = 'Burro - GRUPO 03'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '13' || (`${jogo4[2]}${jogo4[3]}`) == '14' || (`${jogo4[2]}${jogo4[3]}`) == '15' || (`${jogo4[2]}${jogo4[3]}`) == '16') {
        spanres4.innerHTML = 'Borboleta - GRUPO 04'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '17' || (`${jogo4[2]}${jogo4[3]}`) == '18' || (`${jogo4[2]}${jogo4[3]}`) == '19' || (`${jogo4[2]}${jogo4[3]}`) == '20') {
        spanres4.innerHTML = 'Cachorro - GRUPO 05'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '21' || (`${jogo4[2]}${jogo4[3]}`) == '22' || (`${jogo4[2]}${jogo4[3]}`) == '23' || (`${jogo4[2]}${jogo4[3]}`) == '24') {
        spanres4.innerHTML = 'Cabra - GRUPO 06'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '25' || (`${jogo4[2]}${jogo4[3]}`) == '26' || (`${jogo4[2]}${jogo4[3]}`) == '27' || (`${jogo4[2]}${jogo4[3]}`) == '28') {
        spanres4.innerHTML = 'Carneiro - GRUPO 07'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '29' || (`${jogo4[2]}${jogo4[3]}`) == '30' || (`${jogo4[2]}${jogo4[3]}`) == '31' || (`${jogo4[2]}${jogo4[3]}`) == '32') {
        spanres4.innerHTML = 'Camelo - GRUPO 08'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '33' || (`${jogo4[2]}${jogo4[3]}`) == '34' || (`${jogo4[2]}${jogo4[3]}`) == '35' || (`${jogo4[2]}${jogo4[3]}`) == '36') {
        spanres4.innerHTML = 'Cobra - GRUPO 09'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '37' || (`${jogo4[2]}${jogo4[3]}`) == '38' || (`${jogo4[2]}${jogo4[3]}`) == '39' || (`${jogo4[2]}${jogo4[3]}`) == '40') {
        spanres4.innerHTML = 'Coelho - GRUPO 10'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '41' || (`${jogo4[2]}${jogo4[3]}`) == '42' || (`${jogo4[2]}${jogo4[3]}`) == '43' || (`${jogo4[2]}${jogo4[3]}`) == '44') {
        spanres4.innerHTML = 'Cavalo - GRUPO 11'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '45' || (`${jogo4[2]}${jogo4[3]}`) == '46' || (`${jogo4[2]}${jogo4[3]}`) == '47' || (`${jogo4[2]}${jogo4[3]}`) == '48') {
        spanres4.innerHTML = 'Elefante - GRUPO 12'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '49' || (`${jogo4[2]}${jogo4[3]}`) == '50' || (`${jogo4[2]}${jogo4[3]}`) == '51' || (`${jogo4[2]}${jogo4[3]}`) == '52') {
        spanres4.innerHTML = 'Galo - GRUPO 13'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '53' || (`${jogo4[2]}${jogo4[3]}`) == '54' || (`${jogo4[2]}${jogo4[3]}`) == '55' || (`${jogo4[2]}${jogo4[3]}`) == '56') {
        spanres4.innerHTML = 'Gato - GRUPO 14'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '57' || (`${jogo4[2]}${jogo4[3]}`) == '58' || (`${jogo4[2]}${jogo4[3]}`) == '59' || (`${jogo4[2]}${jogo4[3]}`) == '60') {
        spanres4.innerHTML = 'Jacaré - GRUPO 15'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '61' || (`${jogo4[2]}${jogo4[3]}`) == '62' || (`${jogo4[2]}${jogo4[3]}`) == '63' || (`${jogo4[2]}${jogo4[3]}`) == '64') {
        spanres4.innerHTML = 'Leão - GRUPO 16'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '65' || (`${jogo4[2]}${jogo4[3]}`) == '66' || (`${jogo4[2]}${jogo4[3]}`) == '67' || (`${jogo4[2]}${jogo4[3]}`) == '68') {
        spanres4.innerHTML = 'Macaco - GRUPO 17'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '69' || (`${jogo4[2]}${jogo4[3]}`) == '70' || (`${jogo4[2]}${jogo4[3]}`) == '71' || (`${jogo4[2]}${jogo4[3]}`) == '72') {
        spanres4.innerHTML = 'Porco - GRUPO 18'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '73' || (`${jogo4[2]}${jogo4[3]}`) == '74' || (`${jogo4[2]}${jogo4[3]}`) == '75' || (`${jogo4[2]}${jogo4[3]}`) == '76') {
        spanres4.innerHTML = 'Pavão - GRUPO 19'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '77' || (`${jogo4[2]}${jogo4[3]}`) == '78' || (`${jogo4[2]}${jogo4[3]}`) == '79' || (`${jogo4[2]}${jogo4[3]}`) == '80') {
        spanres4.innerHTML = 'Peru - GRUPO 20'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '81' || (`${jogo4[2]}${jogo4[3]}`) == '82' || (`${jogo4[2]}${jogo4[3]}`) == '83' || (`${jogo4[2]}${jogo4[3]}`) == '84') {
        spanres4.innerHTML = 'Touro - GRUPO 21'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '85' || (`${jogo4[2]}${jogo4[3]}`) == '86' || (`${jogo4[2]}${jogo4[3]}`) == '87' || (`${jogo4[2]}${jogo4[3]}`) == '88') {
        spanres4.innerHTML = 'Tigre - GRUPO 22'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '89' || (`${jogo4[2]}${jogo4[3]}`) == '90' || (`${jogo4[2]}${jogo4[3]}`) == '91' || (`${jogo4[2]}${jogo4[3]}`) == '92') {
        spanres4.innerHTML = 'Urso - GRUPO 23'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '93' || (`${jogo4[2]}${jogo4[3]}`) == '94' || (`${jogo4[2]}${jogo4[3]}`) == '95' || (`${jogo4[2]}${jogo4[3]}`) == '96') {
        spanres4.innerHTML = 'Veado - GRUPO 24'
    } else if ((`${jogo4[2]}${jogo4[3]}`) == '97' || (`${jogo4[2]}${jogo4[3]}`) == '98' || (`${jogo4[2]}${jogo4[3]}`) == '99' || (`${jogo4[2]}${jogo4[3]}`) == '00') {
        spanres4.innerHTML = 'Vaca - GRUPO 25'
    }


    //Jogo 5
    if ((`${jogo5[2]}${jogo5[3]}`) == '01' || (`${jogo5[2]}${jogo5[3]}`) == '02' || (`${jogo5[2]}${jogo5[3]}`) == '03' || (`${jogo5[2]}${jogo5[3]}`) == '04') {
        spanres5.innerHTML = 'Avestruz - GRUPO 01'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '05' || (`${jogo5[2]}${jogo5[3]}`) == '06' || (`${jogo5[2]}${jogo5[3]}`) == '07' || (`${jogo5[2]}${jogo5[3]}`) == '08') {
        spanres5.innerHTML = 'Águia - GRUPO 02'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '09' || (`${jogo5[2]}${jogo5[3]}`) == '10' || (`${jogo5[2]}${jogo5[3]}`) == '11' || (`${jogo5[2]}${jogo5[3]}`) == '12') {
        spanres5.innerHTML = 'Burro - GRUPO 03'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '13' || (`${jogo5[2]}${jogo5[3]}`) == '14' || (`${jogo5[2]}${jogo5[3]}`) == '15' || (`${jogo5[2]}${jogo5[3]}`) == '16') {
        spanres5.innerHTML = 'Borboleta - GRUPO 04'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '17' || (`${jogo5[2]}${jogo5[3]}`) == '18' || (`${jogo5[2]}${jogo5[3]}`) == '19' || (`${jogo5[2]}${jogo5[3]}`) == '20') {
        spanres5.innerHTML = 'Cachorro - GRUPO 05'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '21' || (`${jogo5[2]}${jogo5[3]}`) == '22' || (`${jogo5[2]}${jogo5[3]}`) == '23' || (`${jogo5[2]}${jogo5[3]}`) == '24') {
        spanres5.innerHTML = 'Cabra - GRUPO 06'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '25' || (`${jogo5[2]}${jogo5[3]}`) == '26' || (`${jogo5[2]}${jogo5[3]}`) == '27' || (`${jogo5[2]}${jogo5[3]}`) == '28') {
        spanres5.innerHTML = 'Carneiro - GRUPO 07'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '29' || (`${jogo5[2]}${jogo5[3]}`) == '30' || (`${jogo5[2]}${jogo5[3]}`) == '31' || (`${jogo5[2]}${jogo5[3]}`) == '32') {
        spanres5.innerHTML = 'Camelo - GRUPO 08'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '33' || (`${jogo5[2]}${jogo5[3]}`) == '34' || (`${jogo5[2]}${jogo5[3]}`) == '35' || (`${jogo5[2]}${jogo5[3]}`) == '36') {
        spanres5.innerHTML = 'Cobra - GRUPO 09'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '37' || (`${jogo5[2]}${jogo5[3]}`) == '38' || (`${jogo5[2]}${jogo5[3]}`) == '39' || (`${jogo5[2]}${jogo5[3]}`) == '40') {
        spanres5.innerHTML = 'Coelho - GRUPO 10'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '41' || (`${jogo5[2]}${jogo5[3]}`) == '42' || (`${jogo5[2]}${jogo5[3]}`) == '43' || (`${jogo5[2]}${jogo5[3]}`) == '44') {
        spanres5.innerHTML = 'Cavalo - GRUPO 11'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '45' || (`${jogo5[2]}${jogo5[3]}`) == '46' || (`${jogo5[2]}${jogo5[3]}`) == '47' || (`${jogo5[2]}${jogo5[3]}`) == '48') {
        spanres5.innerHTML = 'Elefante - GRUPO 12'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '49' || (`${jogo5[2]}${jogo5[3]}`) == '50' || (`${jogo5[2]}${jogo5[3]}`) == '51' || (`${jogo5[2]}${jogo5[3]}`) == '52') {
        spanres5.innerHTML = 'Galo - GRUPO 13'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '53' || (`${jogo5[2]}${jogo5[3]}`) == '54' || (`${jogo5[2]}${jogo5[3]}`) == '55' || (`${jogo5[2]}${jogo5[3]}`) == '56') {
        spanres5.innerHTML = 'Gato - GRUPO 14'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '57' || (`${jogo5[2]}${jogo5[3]}`) == '58' || (`${jogo5[2]}${jogo5[3]}`) == '59' || (`${jogo5[2]}${jogo5[3]}`) == '60') {
        spanres5.innerHTML = 'Jacaré - GRUPO 15'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '61' || (`${jogo5[2]}${jogo5[3]}`) == '62' || (`${jogo5[2]}${jogo5[3]}`) == '63' || (`${jogo5[2]}${jogo5[3]}`) == '64') {
        spanres5.innerHTML = 'Leão - GRUPO 16'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '65' || (`${jogo5[2]}${jogo5[3]}`) == '66' || (`${jogo5[2]}${jogo5[3]}`) == '67' || (`${jogo5[2]}${jogo5[3]}`) == '68') {
        spanres5.innerHTML = 'Macaco - GRUPO 17'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '69' || (`${jogo5[2]}${jogo5[3]}`) == '70' || (`${jogo5[2]}${jogo5[3]}`) == '71' || (`${jogo5[2]}${jogo5[3]}`) == '72') {
        spanres5.innerHTML = 'Porco - GRUPO 18'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '73' || (`${jogo5[2]}${jogo5[3]}`) == '74' || (`${jogo5[2]}${jogo5[3]}`) == '75' || (`${jogo5[2]}${jogo5[3]}`) == '76') {
        spanres5.innerHTML = 'Pavão - GRUPO 19'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '77' || (`${jogo5[2]}${jogo5[3]}`) == '78' || (`${jogo5[2]}${jogo5[3]}`) == '79' || (`${jogo5[2]}${jogo5[3]}`) == '80') {
        spanres5.innerHTML = 'Peru - GRUPO 20'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '81' || (`${jogo5[2]}${jogo5[3]}`) == '82' || (`${jogo5[2]}${jogo5[3]}`) == '83' || (`${jogo5[2]}${jogo5[3]}`) == '84') {
        spanres5.innerHTML = 'Touro - GRUPO 21'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '85' || (`${jogo5[2]}${jogo5[3]}`) == '86' || (`${jogo5[2]}${jogo5[3]}`) == '87' || (`${jogo5[2]}${jogo5[3]}`) == '88') {
        spanres5.innerHTML = 'Tigre - GRUPO 22'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '89' || (`${jogo5[2]}${jogo5[3]}`) == '90' || (`${jogo5[2]}${jogo5[3]}`) == '91' || (`${jogo5[2]}${jogo5[3]}`) == '92') {
        spanres5.innerHTML = 'Urso - GRUPO 23'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '93' || (`${jogo5[2]}${jogo5[3]}`) == '94' || (`${jogo5[2]}${jogo5[3]}`) == '95' || (`${jogo5[2]}${jogo5[3]}`) == '96') {
        spanres5.innerHTML = 'Veado - GRUPO 24'
    } else if ((`${jogo5[2]}${jogo5[3]}`) == '97' || (`${jogo5[2]}${jogo5[3]}`) == '98' || (`${jogo5[2]}${jogo5[3]}`) == '99' || (`${jogo5[2]}${jogo5[3]}`) == '00') {
        spanres5.innerHTML = 'Vaca - GRUPO 25'
    }

    //Jogo 6
    if ((`${jogo6[2]}${jogo6[3]}`) == '01' || (`${jogo6[2]}${jogo6[3]}`) == '02' || (`${jogo6[2]}${jogo6[3]}`) == '03' || (`${jogo6[2]}${jogo6[3]}`) == '04') {
        spanres6.innerHTML = 'Avestruz - GRUPO 01'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '05' || (`${jogo6[2]}${jogo6[3]}`) == '06' || (`${jogo6[2]}${jogo6[3]}`) == '07' || (`${jogo6[2]}${jogo6[3]}`) == '08') {
        spanres6.innerHTML = 'Águia - GRUPO 02'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '09' || (`${jogo6[2]}${jogo6[3]}`) == '10' || (`${jogo6[2]}${jogo6[3]}`) == '11' || (`${jogo6[2]}${jogo6[3]}`) == '12') {
        spanres6.innerHTML = 'Burro - GRUPO 03'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '13' || (`${jogo6[2]}${jogo6[3]}`) == '14' || (`${jogo6[2]}${jogo6[3]}`) == '15' || (`${jogo6[2]}${jogo6[3]}`) == '16') {
        spanres6.innerHTML = 'Borboleta - GRUPO 04'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '17' || (`${jogo6[2]}${jogo6[3]}`) == '18' || (`${jogo6[2]}${jogo6[3]}`) == '19' || (`${jogo6[2]}${jogo6[3]}`) == '20') {
        spanres6.innerHTML = 'Cachorro - GRUPO 05'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '21' || (`${jogo6[2]}${jogo6[3]}`) == '22' || (`${jogo6[2]}${jogo6[3]}`) == '23' || (`${jogo6[2]}${jogo6[3]}`) == '24') {
        spanres6.innerHTML = 'Cabra - GRUPO 06'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '25' || (`${jogo6[2]}${jogo6[3]}`) == '26' || (`${jogo6[2]}${jogo6[3]}`) == '27' || (`${jogo6[2]}${jogo6[3]}`) == '28') {
        spanres6.innerHTML = 'Carneiro - GRUPO 07'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '29' || (`${jogo6[2]}${jogo6[3]}`) == '30' || (`${jogo6[2]}${jogo6[3]}`) == '31' || (`${jogo6[2]}${jogo6[3]}`) == '32') {
        spanres6.innerHTML = 'Camelo - GRUPO 08'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '33' || (`${jogo6[2]}${jogo6[3]}`) == '34' || (`${jogo6[2]}${jogo6[3]}`) == '35' || (`${jogo6[2]}${jogo6[3]}`) == '36') {
        spanres6.innerHTML = 'Cobra - GRUPO 09'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '37' || (`${jogo6[2]}${jogo6[3]}`) == '38' || (`${jogo6[2]}${jogo6[3]}`) == '39' || (`${jogo6[2]}${jogo6[3]}`) == '40') {
        spanres6.innerHTML = 'Coelho - GRUPO 10'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '41' || (`${jogo6[2]}${jogo6[3]}`) == '42' || (`${jogo6[2]}${jogo6[3]}`) == '43' || (`${jogo6[2]}${jogo6[3]}`) == '44') {
        spanres6.innerHTML = 'Cavalo - GRUPO 11'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '45' || (`${jogo6[2]}${jogo6[3]}`) == '46' || (`${jogo6[2]}${jogo6[3]}`) == '47' || (`${jogo6[2]}${jogo6[3]}`) == '48') {
        spanres6.innerHTML = 'Elefante - GRUPO 12'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '49' || (`${jogo6[2]}${jogo6[3]}`) == '50' || (`${jogo6[2]}${jogo6[3]}`) == '51' || (`${jogo6[2]}${jogo6[3]}`) == '52') {
        spanres6.innerHTML = 'Galo - GRUPO 13'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '53' || (`${jogo6[2]}${jogo6[3]}`) == '54' || (`${jogo6[2]}${jogo6[3]}`) == '55' || (`${jogo6[2]}${jogo6[3]}`) == '56') {
        spanres6.innerHTML = 'Gato - GRUPO 14'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '57' || (`${jogo6[2]}${jogo6[3]}`) == '58' || (`${jogo6[2]}${jogo6[3]}`) == '59' || (`${jogo6[2]}${jogo6[3]}`) == '60') {
        spanres6.innerHTML = 'Jacaré - GRUPO 15'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '61' || (`${jogo6[2]}${jogo6[3]}`) == '62' || (`${jogo6[2]}${jogo6[3]}`) == '63' || (`${jogo6[2]}${jogo6[3]}`) == '64') {
        spanres6.innerHTML = 'Leão - GRUPO 16'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '65' || (`${jogo6[2]}${jogo6[3]}`) == '66' || (`${jogo6[2]}${jogo6[3]}`) == '67' || (`${jogo6[2]}${jogo6[3]}`) == '68') {
        spanres6.innerHTML = 'Macaco - GRUPO 17'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '69' || (`${jogo6[2]}${jogo6[3]}`) == '70' || (`${jogo6[2]}${jogo6[3]}`) == '71' || (`${jogo6[2]}${jogo6[3]}`) == '72') {
        spanres6.innerHTML = 'Porco - GRUPO 18'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '73' || (`${jogo6[2]}${jogo6[3]}`) == '74' || (`${jogo6[2]}${jogo6[3]}`) == '75' || (`${jogo6[2]}${jogo6[3]}`) == '76') {
        spanres6.innerHTML = 'Pavão - GRUPO 19'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '77' || (`${jogo6[2]}${jogo6[3]}`) == '78' || (`${jogo6[2]}${jogo6[3]}`) == '79' || (`${jogo6[2]}${jogo6[3]}`) == '80') {
        spanres6.innerHTML = 'Peru - GRUPO 20'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '81' || (`${jogo6[2]}${jogo6[3]}`) == '82' || (`${jogo6[2]}${jogo6[3]}`) == '83' || (`${jogo6[2]}${jogo6[3]}`) == '84') {
        spanres6.innerHTML = 'Touro - GRUPO 21'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '85' || (`${jogo6[2]}${jogo6[3]}`) == '86' || (`${jogo6[2]}${jogo6[3]}`) == '87' || (`${jogo6[2]}${jogo6[3]}`) == '88') {
        spanres6.innerHTML = 'Tigre - GRUPO 22'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '89' || (`${jogo6[2]}${jogo6[3]}`) == '90' || (`${jogo6[2]}${jogo6[3]}`) == '91' || (`${jogo6[2]}${jogo6[3]}`) == '92') {
        spanres6.innerHTML = 'Urso - GRUPO 23'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '93' || (`${jogo6[2]}${jogo6[3]}`) == '94' || (`${jogo6[2]}${jogo6[3]}`) == '95' || (`${jogo6[2]}${jogo6[3]}`) == '96') {
        spanres6.innerHTML = 'Veado - GRUPO 24'
    } else if ((`${jogo6[2]}${jogo6[3]}`) == '97' || (`${jogo6[2]}${jogo6[3]}`) == '98' || (`${jogo6[2]}${jogo6[3]}`) == '99' || (`${jogo6[2]}${jogo6[3]}`) == '00') {
        spanres6.innerHTML = 'Vaca - GRUPO 25'
    }


}

function limparNumeros() {
    resultado = ""
    jogo1.length = 0
    jogo2.length = 0
    jogo3.length = 0
    jogo4.length = 0
    jogo5.length = 0
    jogo6.length = 0

    span1.innerHTML = ""
    span2.innerHTML = ""
    span3.innerHTML = ""
    span4.innerHTML = ""

    span5.innerHTML = ""
    span6.innerHTML = ""
    span7.innerHTML = ""
    span8.innerHTML = ""

    span9.innerHTML = ""
    span10.innerHTML = ""
    span11.innerHTML = ""
    span12.innerHTML = ""

    span13.innerHTML = ""
    span14.innerHTML = ""
    span15.innerHTML = ""
    span16.innerHTML = ""

    span17.innerHTML = ""
    span18.innerHTML = ""
    span19.innerHTML = ""
    span20.innerHTML = ""

    span21.innerHTML = ""
    span22.innerHTML = ""
    span23.innerHTML = ""
    span24.innerHTML = ""

    spanres1.innerHTML = ""
    spanres2.innerHTML = ""
    spanres3.innerHTML = ""
    spanres4.innerHTML = ""
    spanres5.innerHTML = ""
    spanres6.innerHTML = ""

}

function cruz() {
    var cruz3sub
    const data = new Date();
    var dia = data.getDate();
    var cruz1dia = dia + 3;
    var cruz2dia = (dia + 3) + 3;
    var cruz3dia = ((dia + 3) + 3) + 3;
    var cruz4dia = (((dia + 3) + 3) + 3) + 3;


    var dia1 = cruz1dia.toString()
    if (dia1 <= 9) {
        var A = dia1.substring(0, 1)
    } else {
        var A = dia1.substring(1, 2)
    }

    var cruz2dia1 = cruz2dia.toString()
    if (cruz2dia <= 9) {
        var B = cruz2dia1.substring(0, 1)
    } else {
        var B = cruz2dia1.substring(1, 2)
    }

    var cruz3dia1 = cruz3dia.toString()
    if (cruz3dia <= 9) {
        var C = cruz3dia1.substring(0, 1)
    } else {
        var C = cruz3dia1.substring(1, 2)
    }

    var cruz4dia1 = cruz4dia.toString()
    if (cruz4dia <= 9) {
        var D = cruz4dia1.substring(0, 1)
    } else {
        var D = cruz4dia1.substring(1, 2)
    }

    cruzres1.innerHTML = A + B + C + D
    cruzres2.innerHTML = A + B + D + C
    cruzres3.innerHTML = A + D + C + B
    cruzres4.innerHTML = A + D + B + C
    cruzres5.innerHTML = B + D + C + A
    cruzres6.innerHTML = B + C + A + D
    cruzres7.innerHTML = B + A + C + D
    cruzres8.innerHTML = B + C + D + A
    cruzres9.innerHTML = C + A + B + D
    cruzres10.innerHTML = C + A + D + B
    cruzres11.innerHTML = C + B + A + D
    cruzres12.innerHTML = C + B + D + A
    cruzres13.innerHTML = D + A + B + C
    cruzres14.innerHTML = D + B + C + A
    cruzres15.innerHTML = D + B + A + C
    cruzres16.innerHTML = D + C + B + A



}

function cruz_4() {
    var cruz3sub
    const data = new Date();
    var dia = data.getDate();
    var cruz1diad4 = dia + 4;
    var cruz2diad4 = (dia + 4) + 4;
    var cruz3diad4 = ((dia + 4) + 4) + 4;
    var cruz4dia4 = (((dia + 4) + 4) + 4) + 4;

    var dia1 = cruz1diad4.toString()
    if (dia1 <= 9) {
        var A = dia1.substring(0, 1)
    } else {
        var A = dia1.substring(1, 2)
    }

    var cruz2diad4_ = cruz2diad4.toString()
    if (cruz2diad4 <= 9) {
        var B = cruz2diad4_.substring(0, 1)
    } else {
        var B = cruz2diad4_.substring(1, 2)
    }

    var cruz3diad4_ = cruz3diad4.toString()
    if (cruz3diad4 <= 9) {
        var C = cruz3diad4_.substring(0, 1)
    } else {
        var C = cruz3diad4_.substring(1, 2)
    }

    var cruz4dia4_ = cruz4dia4.toString()
    if (cruz4dia4 <= 9) {
        var D = cruz4dia4_.substring(0, 1)
    } else {
        var D = cruz4dia4_.substring(1, 2)
    }



    cruzres1d4.innerHTML = A + B + C + D
    cruzres2d4.innerHTML = A + B + D + C
    cruzres3d4.innerHTML = A + D + C + B
    cruzres4d4.innerHTML = A + D + B + C
    cruzres5d4.innerHTML = B + D + C + A
    cruzres6d4.innerHTML = B + C + A + D
    cruzres7d4.innerHTML = B + A + C + D
    cruzres8d4.innerHTML = B + D + A + C
    cruzres9d4.innerHTML = C + A + B + D
    cruzres10d4.innerHTML = C + A + D + B
    cruzres11d4.innerHTML = C + B + A + D
    cruzres12d4.innerHTML = C + B + D + A
    cruzres13d4.innerHTML = D + A + B + C
    cruzres14d4.innerHTML = D + B + C + A
    cruzres15d4.innerHTML = D + B + A + C
    cruzres16d4.innerHTML = D + C + B + A

}

function cruz_7() {
    var cruz3sub
    const data = new Date();
    var dia = data.getDate();
    var cruz1diad7 = dia + 7;
    var cruz2diad7 = (dia + 7) + 7;
    var cruz3diad7 = ((dia + 7) + 7) + 7;
    var cruz4diad7 = (((dia + 7) + 7) + 7) + 7;

    var dia1 = cruz1diad7.toString()
    if (dia1 <= 9) {
        var A = dia1.substring(0, 1)
    } else {
        var A = dia1.substring(1, 2)
    }

    var cruz2diad7_ = cruz2diad7.toString()
    if (cruz2diad7 <= 9) {
        var B = cruz2diad7_.substring(0, 1)
    } else {
        var B = cruz2diad7_.substring(1, 2)
    }

    var cruz3diad7_ = cruz3diad7.toString()
    if (cruz3diad7 <= 9) {
        var C = cruz3diad7_.substring(0, 1)
    } else {
        var C = cruz3diad7_.substring(1, 2)
    }

    var cruz4diad7_ = cruz4diad7.toString()
    if (cruz4diad7 <= 9) {
        var D = cruz4diad7_.substring(0, 1)
    } else {
        var D = cruz4diad7_.substring(1, 2)
    }

    cruzres1d7.innerHTML = A + B + C + D
    cruzres2d7.innerHTML = A + B + D + C
    cruzres3d7.innerHTML = A + D + C + B
    cruzres4d7.innerHTML = A + D + B + C
    cruzres5d7.innerHTML = B + D + C + A
    cruzres6d7.innerHTML = B + C + A + D
    cruzres7d7.innerHTML = B + A + C + D
    cruzres8d7.innerHTML = B + D + A + C
    cruzres9d7.innerHTML = C + A + B + D
    cruzres10d7.innerHTML = C + A + D + B
    cruzres11d7.innerHTML = C + B + A + D
    cruzres12d7.innerHTML = C + B + D + A
    cruzres13d7.innerHTML = D + A + B + C
    cruzres14d7.innerHTML = D + B + C + A
    cruzres15d7.innerHTML = D + B + A + C
    cruzres16d7.innerHTML = D + C + B + A

}

function execfunc() {
    cruz();
    cruz_4();
    cruz_7();
    geraTernoGrupo();
}

function geraTernoGrupo() {

    while (ternoGrupo.length <= 14) {
        var resultado = sorteio(1, 26);
        if (!ternoGrupo.includes(resultado)) {
            if (ternoGrupo.length <= 14) {
                ternoGrupo.push(resultado);
            }
        }
    }

    ternog1.innerHTML = (`${ternoGrupo[0]}-${ternoGrupo[1]}-${ternoGrupo[2]}`)
    ternog2.innerHTML = (`${ternoGrupo[0]}-${ternoGrupo[1]}-${ternoGrupo[3]}`)
    ternog3.innerHTML = (`${ternoGrupo[0]}-${ternoGrupo[1]}-${ternoGrupo[4]}`)
    ternog4.innerHTML = (`${ternoGrupo[0]}-${ternoGrupo[1]}-${ternoGrupo[5]}`)
    ternog5.innerHTML = (`${ternoGrupo[0]}-${ternoGrupo[1]}-${ternoGrupo[6]}`)
    ternog6.innerHTML = (`${ternoGrupo[0]}-${ternoGrupo[1]}-${ternoGrupo[7]}`)
    ternog7.innerHTML = (`${ternoGrupo[0]}-${ternoGrupo[1]}-${ternoGrupo[8]}`)

    ternog8.innerHTML = (`${ternoGrupo[0]}-${ternoGrupo[1]}-${ternoGrupo[9]}`)
    ternog9.innerHTML = (`${ternoGrupo[0]}-${ternoGrupo[1]}-${ternoGrupo[10]}`)
    ternog10.innerHTML = (`${ternoGrupo[0]}-${ternoGrupo[1]}-${ternoGrupo[11]}`)
    ternog11.innerHTML = (`${ternoGrupo[0]}-${ternoGrupo[1]}-${ternoGrupo[12]}`)
    ternog12.innerHTML = (`${ternoGrupo[0]}-${ternoGrupo[1]}-${ternoGrupo[13]}`)
    ternog13.innerHTML = (`${ternoGrupo[0]}-${ternoGrupo[1]}-${ternoGrupo[14]}`)
    ternog14.innerHTML = (`${ternoGrupo[1]}-${ternoGrupo[2]}-${ternoGrupo[3]}`)

    ternog15.innerHTML = (`${ternoGrupo[1]}-${ternoGrupo[2]}-${ternoGrupo[4]}`)
    ternog16.innerHTML = (`${ternoGrupo[1]}-${ternoGrupo[2]}-${ternoGrupo[5]}`)
    ternog17.innerHTML = (`${ternoGrupo[1]}-${ternoGrupo[2]}-${ternoGrupo[6]}`)
    ternog18.innerHTML = (`${ternoGrupo[1]}-${ternoGrupo[2]}-${ternoGrupo[7]}`)
    ternog19.innerHTML = (`${ternoGrupo[1]}-${ternoGrupo[2]}-${ternoGrupo[8]}`)
    ternog20.innerHTML = (`${ternoGrupo[1]}-${ternoGrupo[2]}-${ternoGrupo[9]}`)
    ternog21.innerHTML = (`${ternoGrupo[1]}-${ternoGrupo[2]}-${ternoGrupo[10]}`)

    ternog22.innerHTML = (`${ternoGrupo[1]}-${ternoGrupo[2]}-${ternoGrupo[11]}`)
    ternog23.innerHTML = (`${ternoGrupo[1]}-${ternoGrupo[2]}-${ternoGrupo[12]}`)
    ternog24.innerHTML = (`${ternoGrupo[1]}-${ternoGrupo[2]}-${ternoGrupo[13]}`)
    ternog25.innerHTML = (`${ternoGrupo[1]}-${ternoGrupo[2]}-${ternoGrupo[14]}`)
    ternog26.innerHTML = (`${ternoGrupo[2]}-${ternoGrupo[3]}-${ternoGrupo[4]}`)
    ternog27.innerHTML = (`${ternoGrupo[2]}-${ternoGrupo[3]}-${ternoGrupo[5]}`)
    ternog28.innerHTML = (`${ternoGrupo[2]}-${ternoGrupo[3]}-${ternoGrupo[6]}`)

    ternog29.innerHTML = (`${ternoGrupo[2]}-${ternoGrupo[3]}-${ternoGrupo[7]}`)
    ternog30.innerHTML = (`${ternoGrupo[2]}-${ternoGrupo[3]}-${ternoGrupo[8]}`)
    ternog31.innerHTML = (`${ternoGrupo[2]}-${ternoGrupo[3]}-${ternoGrupo[9]}`)
    ternog32.innerHTML = (`${ternoGrupo[2]}-${ternoGrupo[3]}-${ternoGrupo[10]}`)
    ternog33.innerHTML = (`${ternoGrupo[2]}-${ternoGrupo[3]}-${ternoGrupo[11]}`)
    ternog34.innerHTML = (`${ternoGrupo[2]}-${ternoGrupo[3]}-${ternoGrupo[12]}`)
    ternog35.innerHTML = (`${ternoGrupo[2]}-${ternoGrupo[3]}-${ternoGrupo[13]}`)

    ternog36.innerHTML = (`${ternoGrupo[2]}-${ternoGrupo[3]}-${ternoGrupo[14]}`)
    ternog37.innerHTML = (`${ternoGrupo[3]}-${ternoGrupo[4]}-${ternoGrupo[5]}`)
    ternog38.innerHTML = (`${ternoGrupo[3]}-${ternoGrupo[4]}-${ternoGrupo[6]}`)
    ternog39.innerHTML = (`${ternoGrupo[3]}-${ternoGrupo[4]}-${ternoGrupo[7]}`)
    ternog40.innerHTML = (`${ternoGrupo[3]}-${ternoGrupo[4]}-${ternoGrupo[8]}`)
    ternog41.innerHTML = (`${ternoGrupo[3]}-${ternoGrupo[4]}-${ternoGrupo[9]}`)
    ternog42.innerHTML = (`${ternoGrupo[3]}-${ternoGrupo[4]}-${ternoGrupo[10]}`)

    ternog43.innerHTML = (`${ternoGrupo[3]}-${ternoGrupo[4]}-${ternoGrupo[11]}`)
    ternog44.innerHTML = (`${ternoGrupo[3]}-${ternoGrupo[4]}-${ternoGrupo[12]}`)
    ternog45.innerHTML = (`${ternoGrupo[3]}-${ternoGrupo[4]}-${ternoGrupo[13]}`)
    ternog46.innerHTML = (`${ternoGrupo[3]}-${ternoGrupo[4]}-${ternoGrupo[14]}`)
    ternog47.innerHTML = (`${ternoGrupo[4]}-${ternoGrupo[5]}-${ternoGrupo[6]}`)
    ternog48.innerHTML = (`${ternoGrupo[4]}-${ternoGrupo[5]}-${ternoGrupo[7]}`)
    ternog49.innerHTML = (`${ternoGrupo[4]}-${ternoGrupo[5]}-${ternoGrupo[8]}`)

    ternog50.innerHTML = (`${ternoGrupo[4]}-${ternoGrupo[5]}-${ternoGrupo[6]}`)
    ternog51.innerHTML = (`${ternoGrupo[4]}-${ternoGrupo[5]}-${ternoGrupo[7]}`)
    ternog52.innerHTML = (`${ternoGrupo[4]}-${ternoGrupo[5]}-${ternoGrupo[8]}`)
    ternog53.innerHTML = (`${ternoGrupo[4]}-${ternoGrupo[5]}-${ternoGrupo[9]}`)
    ternog54.innerHTML = (`${ternoGrupo[4]}-${ternoGrupo[5]}-${ternoGrupo[10]}`)
    ternog55.innerHTML = (`${ternoGrupo[4]}-${ternoGrupo[5]}-${ternoGrupo[11]}`)
    ternog56.innerHTML = (`${ternoGrupo[4]}-${ternoGrupo[5]}-${ternoGrupo[12]}`)

    ternog57.innerHTML = (`${ternoGrupo[4]}-${ternoGrupo[5]}-${ternoGrupo[13]}`)
    ternog58.innerHTML = (`${ternoGrupo[4]}-${ternoGrupo[5]}-${ternoGrupo[14]}`)
    ternog59.innerHTML = (`${ternoGrupo[5]}-${ternoGrupo[6]}-${ternoGrupo[7]}`)
    ternog60.innerHTML = (`${ternoGrupo[5]}-${ternoGrupo[6]}-${ternoGrupo[8]}`)
    ternog61.innerHTML = (`${ternoGrupo[5]}-${ternoGrupo[6]}-${ternoGrupo[9]}`)
    ternog62.innerHTML = (`${ternoGrupo[5]}-${ternoGrupo[6]}-${ternoGrupo[10]}`)
    ternog63.innerHTML = (`${ternoGrupo[5]}-${ternoGrupo[6]}-${ternoGrupo[11]}`)

    ternog64.innerHTML = (`${ternoGrupo[5]}-${ternoGrupo[6]}-${ternoGrupo[12]}`)
    ternog65.innerHTML = (`${ternoGrupo[5]}-${ternoGrupo[6]}-${ternoGrupo[13]}`)
    ternog66.innerHTML = (`${ternoGrupo[5]}-${ternoGrupo[6]}-${ternoGrupo[14]}`)
    ternog67.innerHTML = (`${ternoGrupo[6]}-${ternoGrupo[7]}-${ternoGrupo[8]}`)
    ternog68.innerHTML = (`${ternoGrupo[6]}-${ternoGrupo[7]}-${ternoGrupo[9]}`)
    ternog69.innerHTML = (`${ternoGrupo[6]}-${ternoGrupo[7]}-${ternoGrupo[10]}`)
    ternog70.innerHTML = (`${ternoGrupo[6]}-${ternoGrupo[7]}-${ternoGrupo[11]}`)

    ternog71.innerHTML = (`${ternoGrupo[6]}-${ternoGrupo[7]}-${ternoGrupo[12]}`)
    ternog72.innerHTML = (`${ternoGrupo[6]}-${ternoGrupo[7]}-${ternoGrupo[13]}`)
    ternog73.innerHTML = (`${ternoGrupo[6]}-${ternoGrupo[7]}-${ternoGrupo[14]}`)
    ternog74.innerHTML = (`${ternoGrupo[7]}-${ternoGrupo[8]}-${ternoGrupo[9]}`)
    ternog75.innerHTML = (`${ternoGrupo[7]}-${ternoGrupo[8]}-${ternoGrupo[10]}`)
    ternog76.innerHTML = (`${ternoGrupo[7]}-${ternoGrupo[8]}-${ternoGrupo[11]}`)
    ternog77.innerHTML = (`${ternoGrupo[7]}-${ternoGrupo[8]}-${ternoGrupo[12]}`)

    ternog78.innerHTML = (`${ternoGrupo[7]}-${ternoGrupo[8]}-${ternoGrupo[13]}`)
    ternog79.innerHTML = (`${ternoGrupo[7]}-${ternoGrupo[8]}-${ternoGrupo[14]}`)
    ternog80.innerHTML = (`${ternoGrupo[8]}-${ternoGrupo[9]}-${ternoGrupo[10]}`)
    ternog81.innerHTML = (`${ternoGrupo[8]}-${ternoGrupo[9]}-${ternoGrupo[11]}`)
    ternog82.innerHTML = (`${ternoGrupo[8]}-${ternoGrupo[9]}-${ternoGrupo[12]}`)
    ternog83.innerHTML = (`${ternoGrupo[8]}-${ternoGrupo[9]}-${ternoGrupo[13]}`)
    ternog84.innerHTML = (`${ternoGrupo[8]}-${ternoGrupo[9]}-${ternoGrupo[14]}`)

    ternog85.innerHTML = (`${ternoGrupo[9]}-${ternoGrupo[10]}-${ternoGrupo[11]}`)
    ternog86.innerHTML = (`${ternoGrupo[9]}-${ternoGrupo[10]}-${ternoGrupo[12]}`)
    ternog87.innerHTML = (`${ternoGrupo[9]}-${ternoGrupo[10]}-${ternoGrupo[13]}`)
    ternog88.innerHTML = (`${ternoGrupo[9]}-${ternoGrupo[10]}-${ternoGrupo[14]}`)
    ternog89.innerHTML = (`${ternoGrupo[10]}-${ternoGrupo[11]}-${ternoGrupo[12]}`)
    ternog90.innerHTML = (`${ternoGrupo[10]}-${ternoGrupo[11]}-${ternoGrupo[13]}`)
    ternog91.innerHTML = (`${ternoGrupo[10]}-${ternoGrupo[11]}-${ternoGrupo[14]}`)

    ternog92.innerHTML = (`${ternoGrupo[11]}-${ternoGrupo[12]}-${ternoGrupo[13]}`)
    ternog93.innerHTML = (`${ternoGrupo[11]}-${ternoGrupo[12]}-${ternoGrupo[14]}`)
    ternog94.innerHTML = (`${ternoGrupo[12]}-${ternoGrupo[13]}-${ternoGrupo[14]}`)
}