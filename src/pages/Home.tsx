import React, { useEffect, useState } from 'react';
import styled, { css } from "styled-components";
// @ts-ignore
import ImgSuspense from 'img-suspense';
import { artists as artistsService } from "../services";

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const CardItem = styled.div`
  width: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;

  span {
    overflow: hidden;
    font-size: 0.8rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 110px;
    text-align: center;
  }
  
  &:hover {
    img {
      filter: blur(3px) brightness(50%);
    }
    &:after {
      content: '';
      background-image: url("/images/eye.png");
      position: absolute;
      top: 60px;
      left: 50%;
      width: 32px;
      height: 32px;
      text-align: center;
      transform: translate(-50%, -50%);
    }
  }
`;

const BaseImage = css`
  margin-bottom: 8px;
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 50%;
`;

const RoundFallBack = styled.div`
  ${BaseImage};
  box-shadow: 0 1px 4px black inset;
  background-image: linear-gradient(to right, #131a22, #0d1217);;
`;

const RoundImage = styled(ImgSuspense)`
  ${BaseImage};
  object-fit: cover;
  object-position: center;
`;

interface Artist {
  id: number;
  name: string;
  image: string;
}

const Home = () => {
  const [artists, setArtists] = useState<Array<Artist>>([]);

  useEffect(() => {
    async function init() {
      const responseArtists = await artistsService();
      const artistsData = responseArtists.data.data;
      setArtists(artistsData);
    }
    init();
  }, []);

  return (
    <section>
      <h2>Artists ({artists.length})</h2>
      <List>
        {artists.map((artist: Artist) => (
          <CardItem key={artist.id}>
            <RoundImage
              src={artist.image}
              alt={artist.name}
              fallback={<RoundFallBack />}
              onError={() => console.log('Error loading image.')}
            />
            <span title={artist.name}>{artist.name}</span>
          </CardItem>
        ))}
      </List>
    </section>
  );
};

export default Home;
