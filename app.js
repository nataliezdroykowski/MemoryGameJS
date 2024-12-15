document.addEventListener('DOMContentLoaded', () => {
    
    //different card possibilities
    const cardArray = [
        {
            name: 'flower1',
            img: 'images/MatchFlower1.png'
        },
        {
            name: 'flower1',
            img: 'images/MatchFlower1.png'
        },
        {
            name: 'flower2',
            img: 'images/MatchFlower2.png'
        },
        {
            name: 'flower2',
            img: 'images/MatchFlower2.png'
        },
        {
            name: 'flower3',
            img: 'images/MatchFlower3.png'
        },
        {
            name: 'flower3',
            img: 'images/MatchFlower3.png'
        },
        {
            name: 'flower4',
            img: 'images/MatchFlower4.png'
        },
        {
            name: 'flower4',
            img: 'images/MatchFlower4.png'
        },
        {
            name: 'flower5',
            img: 'images/MatchFlower5.png'
        },
        {
            name: 'flower5',
            img: 'images/MatchFlower5.png'
        },
        {
            name: 'flower6',
            img: 'images/MatchFlower6.png'
        },
        {
            name: 'flower6',
            img: 'images/MatchFlower6.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())
    
    const grid = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // creating the board

    function CreateBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/MatchGrass.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', FlipCard)
            grid.appendChild(card)
        }
    }

    // checking if two cards are matches
    function CheckMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1] & cardsChosenId[0] != cardsChosenId[1]) {
            cards[optionOneId].setAttribute('src', 'images/MatchDirt.png')
            cards[optionTwoId].setAttribute('src', "images/MatchDirt.png")
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/MatchGrass.png')
            cards[optionTwoId].setAttribute('src', "images/MatchGrass.png")
        }

        cardsChosen = []
        cardsChosenId = []
        scoreDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            scoreDisplay.textContent = "Congratulations! You've matched all of the cards."
        }

    }

    // flip the card
    function FlipCard() {
        if (cardsChosen.length < 2) {
            var cardId = this.getAttribute('data-id')
            cardsChosen.push(cardArray[cardId].name)
            cardsChosenId.push(cardId)
            this.setAttribute('src', cardArray[cardId].img)
            if (cardsChosen.length === 2) {
                setTimeout(CheckMatch, 500)
            }
        }
    }

    CreateBoard()
})  

