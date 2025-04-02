const gameBox = document.querySelector('.container'),
userResult = document.querySelector('.user_result img'),
cpuResult = document.querySelector('.cpu_result img'),
result = document.querySelector('.result_text'),
optionImages = document.querySelectorAll('.option_image')

optionImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        image.classList.add('active')

        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove('active')
        })

        let imageSrc = image.querySelector('img')
        const userPokemonSrc = imageSrc.src

        let userValue
        if (userPokemonSrc.includes('charmander')) userValue = 'C'
        else if (userPokemonSrc.includes('squirtle')) userValue = 'S'
        else if (userPokemonSrc.includes('bulbasaur')) userValue = 'B'

        let randonNumber = Math.floor(Math.random() * 3)
        let cpuImages = ['img/charmander.svg', 'img/squirtle.svg', 'img/bulbasaur.svg']
        const cpuPokemonSrc = cpuImages[randonNumber]
        let cpuValue = ['C', 'S', 'B'][randonNumber]


        result.textContent = '3, 2, 1...'

        userResult.src = "img/pokebola.png"
        cpuResult.src = "img/pokebola.png"
        userResult.classList.add('balancando')
        cpuResult.classList.add('balancando')

        setTimeout(() => {
            userResult.classList.remove('balancando')
            cpuResult.classList.remove('balancando')
            userResult.src = userPokemonSrc
            cpuResult.src = cpuPokemonSrc

            if (userPokemonSrc.includes('charmander')) {
                userResult.classList.add('flipped')
            } else {
                userResult.classList.remove('flipped')
            }

            let outcomes = {
                CC: 'Empate',
                CB: 'User',
                CS: 'Cpu',
                BB: 'Empate',
                BC: 'Cpu',
                BS: 'User',
                SS: 'Empate',
                SC: 'User',
                SB: 'Cpu'
            }

            let outComeValue = outcomes[userValue + cpuValue]
            result.textContent = outComeValue === 'Empate' ? 'Empate!' : 
                               outComeValue === 'User' ? 'Você venceu!' : 'CPU venceu!'
        }, 1000)
    })
})
