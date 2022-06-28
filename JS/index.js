$(document).ready(
    function () {
        let carrinhodados = [];
        let caixa
        let preco = 0
        let btncompras
        var dados = '<input type="text" placeholder="Nome" id="inputnome" value=""><input type="text" placeholder="Email" id="inputemail" value=""><input type="text" placeholder="Numero do cartão" maxlength="19" id="inputcartao" value=""><input type="text" placeholder="Data de validade" maxlength="5" id="inputvalidade" value=""><input type="text" placeholder="ccv" maxlength="3" id="inputccv" value=""></div>'
        var obrigado = '<img src="img/logo1.png" alt="logo" class="img-fluid logo"></img>'
        // PS JOGOS COMEÇO
        $('.ps1').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesps/cards/gta5-card.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>GTA 5</h5><h5>PS4</h5><h6>R$119,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 119
                localStorage.preco = (preco)
            }
        )

        $('.ps2').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesps/cards/bf1-card.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Battlefield 1</h5><h5>PS4</h5><h6>R$54,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 54
                localStorage.preco = (preco)
            }
        )

        $('.ps3').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesps/cards/tlou2-card.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>The Last of Us part II</h5><h5>PS4</h5><h6>R$120,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 120
                localStorage.preco = (preco)
            }
        )

        $('.ps4').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesps/cards/uncharted-card.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Uncharted Collection</h5><h5>PS4</h5><h6>R$64,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 64
                localStorage.preco = (preco)
            }
        )

        $('.ps5').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesps/cards/mafia-card.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Mafia III</h5><h5>PS4</h5><h6>R$44,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 44
                localStorage.preco = (preco)
            }
        )

        $('.ps6').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesps/cards/bruxo-card.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>The witcher</h5><h5>PS4</h5><h6>R$64,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 64
                localStorage.preco = (preco)
            }
        )

        $('.ps7').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesps/cards/blood-card.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Bloodborne</h5><h5>PS4</h5><h6>R$59,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 59
                localStorage.preco = (preco)
            }
        )

        $('.ps8').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesps/cards/cod-card.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Call of Duty IW</h5><h5>PS4</h5><h6>R$119,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 119
                localStorage.preco = (preco)
            }
        )

        $('.ps9').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesps/cards/miranha-card.png" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Spider-Man</h5><h5>PS5</h5><h6>R$179,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 179
                localStorage.preco = (preco)
            }
        )

        $('.ps10').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesps/cards/demon-card.png" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Demons Souls</h5><h5>PS5</h5><h6>R$169,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 169
                localStorage.preco = (preco)
            }
        )

        $('.ps11').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesps/cards/tlou1-card.png" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>The Last of Us part I</h5><h5>PS5</h5><h6>R$279,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 279
                localStorage.preco = (preco)
            }
        )

        $('.ps12').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                } 5
                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesps/cards/back4-card.png" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Back 4 Blood</h5><h5>PS5</h5><h6>R$199,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 199
                localStorage.preco = (preco)
            }
        )
        // PS JOGOS FINAL 

        // XBOX JOGOS COMEÇO
        $('.xbox1').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesxbox/Cards Xbox/Gta-Xbox.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>GTA 5</h5><h5>Xbox One</h5><h6>R$250,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 250
                localStorage.preco = (preco)
            }
        )

        $('.xbox2').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesxbox/Cards Xbox/Fh5-Xbox.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Forza Horizon 5</h5><h5>Xbox One</h5><h6>R$250,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 250
                localStorage.preco = (preco)
            }
        )

        $('.xbox3').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12 "><div class="row d-flex"><div class="col-4"><img src="assets/imagesxbox/Cards Xbox/Fh4-Xbox.jpg" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Forza Horizon 4</h5><h5>Xbox One</h5><h6>R$250,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 250
                localStorage.preco = (preco)
            }
        )

        $('.xbox4').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesxbox/Cards Xbox/Fmsport-Xbox.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Forza Motorsport 7</h5><h5>Xbox One</h5><h6>R$250,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 250
                localStorage.preco = (preco)
            }
        )

        $('.xbox5').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesxbox/Cards Xbox/HaloInfinit-Xbox.jpg" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Halo Infinite</h5><h5>Xbox One</h5><h6>R$250,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 250
                localStorage.preco = (preco)
            }
        )

        $('.xbox6').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesxbox/Cards Xbox/Minecreft-Xbox.jpg" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Minecraft</h5><h5>Xbox One</h5><h6>R$150,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 150
                localStorage.preco = (preco)
            }
        )

        $('.xbox7').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesxbox/Cards Xbox/Sot-Xbox.jpg" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Sea Of Thieves</h5><h5>Xbox One</h5><h6>R$200,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 200
                localStorage.preco = (preco)
            }
        )

        $('.xbox8').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesxbox/Cards Xbox/Cod Vanguard-Xbox.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Call of Duty Vanguard</h5><h5>Xbox One</h5><h6>R$300,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 300
                localStorage.preco = (preco)
            }
        )

        $('.xbox9').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesxbox/Cards Xbox/Bf-2042- Xbox Series.jpg" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Battlefield 2042</h5><h5>Xbox Series X</h5><h6>R$250,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 250
                localStorage.preco = (preco)
            }
        )

        $('.xbox10').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesxbox/Cards Xbox/Elden Ring-Xbox Series.jpg" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Elden Ring</h5><h5>Xbox Series X</h5><h6>R$300,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 300
                localStorage.preco = (preco)
            }
        )

        $('.xbox11').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesxbox/Cards Xbox/Fifa 22-Xbox Series.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Fifa 22</h5><h5>Xbox Series X</h5><h6>R$250,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 250
                localStorage.preco = (preco)
            }
        )

        $('.xbox12').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                } 5
                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesxbox/Cards Xbox/FLight Simulator-Xbox Series.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Flight Simulator</h5><h5>Xbox Series X</h5><h6>R$250,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 250
                localStorage.preco = (preco)
            }
        )
        // XBOX JOGOS FINAL

        // NINTENDO JOGOS COMEÇO
        $('.nint1').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesnint/cards/arceus.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Legends: Arceus</h5><h5>Nintendo Switch</h5><h6>R$225,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 225
                localStorage.preco = (preco)
            }
        )

        $('.nint2').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesnint/cards/bayonetta.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Bayonetta</h5><h5>Nintendo Switch</h5><h6>R$84,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 84
                localStorage.preco = (preco)
            }
        )

        $('.nint3').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesnint/cards/cuphead.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Cuphead</h5><h5>nintendo Switch</h5><h6>R$53,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 53
                localStorage.preco = (preco)
            }
        )

        $('.nint4').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesnint/cards/deadcells.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Dead Cells</h5><h5>nintendo Switch</h5><h6>R$120,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 120
                localStorage.preco = (preco)
            }
        )

        $('.nint5').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesnint/cards/doom.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Doom Eternal</h5><h5>nintendo Switch</h5><h6>R$119,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 119
                localStorage.preco = (preco)
            }
        )

        $('.nint6').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesnint/cards/hollownight.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Hollow Night</h5><h5>nintendo Switch</h5><h6>R$84,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 84
                localStorage.preco = (preco)
            }
        )

        $('.nint7').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesnint/cards/mariomaker2.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Super Mario Maker</h5><h5>nintendo Switch</h5><h6>R$139,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 139
                localStorage.preco = (preco)
            }
        )

        $('.nint8').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesnint/cards/marioodyssey.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Super Mario Odyssey</h5><h5>nintendo Switch</h5><h6>R$130,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 130
                localStorage.preco = (preco)
            }
        )

        $('.nint9').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesnint/cards/minecraft.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Minecraft</h5><h5>nintendo Switch</h5><h6>R$85,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 85
                localStorage.preco = (preco)
            }
        )

        $('.nint10').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesnint/cards/mk11.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Mortal Kombat 11</h5><h5>nintendo Switch</h5><h6>R$120,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 120
                localStorage.preco = (preco)
            }
        )

        $('.nint11').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesnint/cards/pokemonshield.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Pokémon Shield</h5><h5>nintendo Switch</h5><h6>R$170,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 170
                localStorage.preco = (preco)
            }
        )

        $('.nint12').click(
            function () {
                if (localStorage.dados) {
                    carrinhodados = JSON.parse(localStorage.getItem('dados'))
                    preco = parseInt(JSON.parse(localStorage.getItem('preco')))
                }

                caixa = '<div class="js col-sm-4 col-12"><div class="row d-flex"><div class="col-4"><img src="assets/imagesnint/cards/pokemonsword.webp" alt="jogo" class="img-fluid"></div><div class="col-8 justify-content-center align-items-center d-flex flex-column"><h5>Pokémon Sword</h5><h5>nintendo Switch</h5><h6>R$170,00</h6></div></div></div>'
                carrinhodados.push(caixa)
                localStorage.dados = JSON.stringify(carrinhodados)
                preco += 170
                localStorage.preco = (preco)
            }
        )
        // NINTENDO JOGOS FINAL


        // INSERIR COMEÇO
        if (localStorage.dados && localStorage.preco) {
            carrinhodados = JSON.parse(localStorage.getItem('dados'))
            preco = parseInt(JSON.parse(localStorage.preco))
            btncompras = '<button type="button" class="btn btn-outline-light my-2 my-sm-0" data-toggle="modal" data-target="#compras">Confirmar compras</button>'
            $('#btncompras').html(btncompras)
            $('.inserir').html(carrinhodados)
            $('.inserir-compras').html('O seu total de compras foi de R$' + preco + ',00' + dados)

        }
        else {
            caixa = '<div class="vazio col-12 d-flex justify-content-between align-items-center flex-column"><img src="img/carrinhovazio.png" alt="carrinho vazio"><h1>Não foi encontrado nada em seu carrinho</h1></div>'

            btncompras = '<button type="button" class="btn btn-outline-light my-2 my-sm-0" data-toggle="modal" data-target="#compras" disabled>Confirmar compras</button>'
            $('#btncompras').html(btncompras)
            $('.inserir').html(caixa)
        }
        // INSERIR FINAL

        // CONFIRMAR COMPRAS COMEÇO
        $('#btn-confirmar').click(
            function () {
                let inputnome = $('#inputnome').val()
                let inputemail = $('#inputemail').val()
                let inputcartao = $('#inputcartao').val()
                let inputvalidade = $('#inputvalidade').val()
                let inputccv = $('#inputccv').val()
                if (inputnome != '' && inputemail != '' && inputcartao != '' && inputvalidade != '' && inputccv != '') {
                    $('.inserir-compras').html(obrigado + '\nObrigado por comprar com a gente!!!')
                    localStorage.clear(dados)
                    localStorage.clear(preco)
                    setTimeout(function(){
                        location.reload(true)
                    }, 2000)

                }
                else {
                    $('.inserir-compras').html('O seu total de compras foi de R$' + preco + ',00' + dados + '\nPreencha todos os dados por favor')
                }
            }
        )
        // CONFIRMAR COMPRAS FINAL
    }
);