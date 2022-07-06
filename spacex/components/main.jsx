import line from '../public/images/line.svg'

const Main = () => {
  return (
    <div className="mainContent">
      <div className="content">
        <div className="flexContent">
          <div className="tripContainer">
            <div className="tripinfo">
              <span className="trip">Путешествие</span>
            </div>
            <div className="tripinfo">
              <span className="planet">на красную планету</span>
            </div>
            <div className="tripinfo">
              <p className="start">Начать путешествие</p>
              <img className="line" src={line.src}></img>
            </div>
          </div>
          <div className="goodList">
            <div className="item1">
              <p>Мы</p>
              <p className="bigtext">1</p>
              <p>На рынке</p>
            </div>
            <div className="item2">
              <p>Гарантируем</p>
              <p className="bigtext">50%</p>
              <p>Безопасности</p>
            </div>
            <div className="item3">
              <p>Календарик за </p>
              <p className="bigtext">2001<span>г.</span></p>
              <p>в подарок</p>
            </div>
            <div className="item4">
              <p>Путешествие</p>
              <p className="bigtext">597</p>
              <p>Дней</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="moon"></div> */}
    </div>
 )
}

export default Main
