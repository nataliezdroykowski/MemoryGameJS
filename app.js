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
    
    const grid = document.querySelector('.grid')

    // creating the board

    function CreateBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/MatchGrass.png')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', FlipCard)
            grid.appendChild(card)
        }
    }

    CreateBoard()
})  

