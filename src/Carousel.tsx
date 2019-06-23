import React from 'react';
import { Photo } from '@frontendmasters/pet';

interface IProps {
  media: Photo[];
}

interface IState {
  photos: string[];
  active: number;
}

class Carousel extends React.Component<IProps, IState> {
  public state = {
    photos: [],
    active: 0
  };

  public static getDerivedStateFromProps({ media }: IProps) {
    let photos = ['http://placecorgi.com/600/600'];
    console.log(media);
    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  public handleIndexClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    if (e.target.dataset.index) {
      this.setState({ active: +e.target.dataset.index });
    }
  };

  public render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              alt="animal thumbnail"
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              className={index === active ? 'active' : ''}
              src={photo}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
