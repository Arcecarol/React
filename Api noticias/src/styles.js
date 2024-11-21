import styled from "styled-components";

export const Container = styled.div`
margin: auto;
max-width: 1200px;
`;

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
row-gap: 2px;
`;

export const Box = styled.div`
max-width: 200px;
margin-top: 20px;
img{
    width: 100%;
}
p{
    aling:center;
}
`;


export const HomeContainer = styled.div`
  width: 100%;
  margin: auto;
  align-items: center;
  object-fit: cover;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%; 
  height: auto;
  display: flex;
  object-fit: cover;
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  color: white;
  font-size: 1em;
  font-style: italic;
  text-align: center;
  padding: 0 20px;


  @media (max-width: 600px) {
    font-size: 1.5em;
    padding: 0 5px;
  }
`;

export const Box2 = styled.div`
max-width: 100%px;
`;