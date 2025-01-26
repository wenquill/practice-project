import Button from '../../components/Button';
import Container from '../Container';
import './index.css';

const BottomSection = () => {
  return (
    <section className="bottom">
      <Container>
        <div className="bottom__container-1">
          <div className="bottom__text-container">
            <p className="bottom__text">
              Наша місія – щоб кожен українець мав можливість отримати допомогу
              й не залишився наодинці зі своїми проблемами
            </p>
            <img
              className="bottom__image-1"
              src="images/bottom.png"
              alt="image"
            />
            <img
              className="bottom__image-2"
              src="images/bottom-bg.png"
              alt="background"
            />
          </div>
        </div>
        <div className="bottom__container-2">
          <h2 className="bottom__title">Підтримайте нашу роботу!</h2>
          <p className="botoom__desc-1">
            Усі ваші донати йдуть саме на роботу фонду, заробітні плати ми
            виплачуємо з коштів грантодавців
          </p>
          <p className="bottom__gdesc-2">Наша мета 10 000 000 гривень!</p>
          <div className="bottom__goal-numbers">
            <span className="bottom__goal bottom__goal-1">00</span>
            <span className="bottom__goal bottom__goal-2">230</span>
            <span className="bottom__goal-3">025</span>
          </div>
          <Button text="Дізнатися більше" />
        </div>
      </Container>
    </section>
  );
};

export default BottomSection;
