import './App.css';
import React from 'react';
import ImageAndButtons from './components/ImageAndButtons';
import TextAndLink from './components/TextAndLink';
import Controller from './components/Controller';

const catsFetchUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';

const data = [
  {
    url: 'https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-lagoon-nebula.jpg?t=tn2400',
    topic: 'Lagoon Nebula',
    description:
      'The Lagoon Nebula, a vast stellar nursery located 4,000 light-years away, provides an extraordinary tapestry of star birth.',
    linkUrl:
      'https://hubblesite.org/contents/media/images/2015/01/3471-Image.html',
  },
  {
    url: 'https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-eagle-nebula.jpg?t=tn2400',
    topic: 'Eagle Nebula',
    description:
      'The newborn star in Herbig-Haro 24 (HH 24) is hidden from direct view, but jets blasting out along its rotation axis create a series of glowing shock fronts, revealing the new star’s presence.',
    linkUrl:
      'https://hubblesite.org/contents/media/images/2015/42/3656-Image.html',
  },
  {
    url: 'https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-hh24.jpg?t=tn2400',
    topic: 'HH24 "light saber"',
    description:
      'The newborn star in Herbig-Haro 24 (HH 24) is hidden from direct view, but jets blasting out along its rotation axis create a series of glowing shock fronts, revealing the new star’s presence.',
    linkUrl: 'https://hubblesite.org/contents/media/images/2015/42/3656-Image',
  },
  {
    url: 'https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-saturn.jpg?t=tn2400',
    topic: 'Saturn',
    description:
      'Hubble captured exquisite views of Saturn’s ring system and atmospheric details that once could only be provided by spacecraft visiting the distant world.',
    linkUrl: 'https://hubblesite.org/contents/media/images/2019/43/4565-Image',
  },
  {
    url: 'https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-milky-way-bulge.jpg?t=tn2400',
    topic: 'Milky Way Bulge',
    description:
      'The Milky Way’s bulge is a crowded and dynamic region of variously aged stars zipping around at different speeds at the heart of our galaxy.',
    linkUrl:
      'https://hubblesite.org/contents/media/images/2018/01/4101-Image.html',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      nowIndex: 0,
      delay: 5000,
      isInSliding: false,
      isGettingCats: false,
    };
  }

  slideByDerection = (isToRight) => {
    const {
      nowIndex,
      data: { length: lastIndex },
    } = this.state;

    let newIndex = isToRight ? nowIndex + 1 : nowIndex - 1;
    if (newIndex < 0) newIndex = lastIndex - 1;
    this.setState({
      nowIndex: newIndex % lastIndex,
    });
  };

  autoSlideOn = () => {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.slideByDerection(true);
      }, this.state.delay);
      this.setState({ isInSliding: true });
    }
  };

  autoSlideOff = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.setState({ isInSliding: false });
  };

  setDelay = (value) => {
    this.setState({
      delay: value,
    });
  };

  componentDidMount() {
    this.autoSlideOn();
  }

  // Just for fun

  getCoolCats = async () => {
    this.setState({
      data: await (await fetch(catsFetchUrl)).json(),
    });
  };

  toggleGetingCats = (value) => {
    console.log(value);
    this.setState({
      isGettingCats: value,
    });
    value
      ? this.getCoolCats()
      : this.setState({ isGettingCats: false, data: data });
  };

  render() {
    const { data, nowIndex, delay, isInSliding, isGettingCats } = this.state;
    return (
      <>
        <section className="flexContainer">
          <ImageAndButtons
            funOnClick={this.slideByDerection}
            imgSrc={data[nowIndex].url}
          />
          {!isGettingCats && (
            <TextAndLink
              text={data[nowIndex].description}
              topic={data[nowIndex].topic}
              linkUrl={data[nowIndex].linkUrl}
            />
          )}
        </section>
        <Controller
          delay={delay}
          isInSliding={isInSliding}
          setDelay={this.setDelay}
          autoSlideOn={this.autoSlideOn}
          autoSlideOff={this.autoSlideOff}
          toggleValue={isGettingCats}
          toggleFunction={this.toggleGetingCats}
        />
      </>
    );
  }
}

export default App;
