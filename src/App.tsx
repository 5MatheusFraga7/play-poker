import PokerService from "./poker/pokerService"
import Deck from "./cards/deck";
import cardIcon from './assets/card-icon.png';
function App() {
  const pokerService = new PokerService();

  const comunitaryCards = pokerService.getComunitaryCards();

  function revealCard(cardDiv: string): void {
    console.log(cardDiv);
    const card = document.getElementById(cardDiv)

    if (card && !card.classList.contains("rotate-class-animation")) {
      card.classList.add("rotate-class-animation");
      setTimeout(function () {
        card.style.backgroundColor = 'aliceblue';
        card.style.backgroundImage = 'none';
        card.innerText = cardDiv
      }, 900);
    }

  }

  return (
    <>
      <div className="container-cards">
        {comunitaryCards.map((index) => (
          <div className="card" id={index.value + " - " + index.suit} style={{ backgroundImage: `url(${cardIcon})` }} onClick={(event) => revealCard(index.value + " - " + index.suit)}>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
