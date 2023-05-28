import styled from "styled-components";
import { Colors, Media, S3 } from "ui";

interface IsFavorite {
  imdbID?: string;
}

const StyledMovieCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 266px;
  ${S3};
  ${Media.XXL} {
    width: 208px;
  }
  ${Media.MD} {
    width: 272px;
  }
`;

const Poster = styled.img`
  width: 100%;
  height: 357px;
  border-radius: 20px;
  margin-bottom: 20px;
  ${Media.XXL} {
    height: 279px;
  }
  ${Media.MD} {
    height: 365px;
  }
`;

const Title = styled.div`
  padding: 0 5px;
`;

const Type = styled.div`
  padding: 0 5px;
`;

const AddToFavorite = styled.button<IsFavorite>`
  width: 100%;
  height: 56px;
  background-color: ${Colors.Graphite};
  border-radius: 10px;
  :disabled {
    opacity: 0.5;
    svg {
      path {
        fill: ${Colors.Graphite};
      }
    }
    :hover {
      cursor: default;
      svg {
        path {
          fill: ${Colors.Graphite};
        }
      }
    }
  }
  :hover {
    cursor: pointer;
    svg {
      path {
        fill: ${Colors.White};
      }
    }
  }
`;
const DeleteFromFavorites = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 5px 13px;
  border-radius: 6px;
  background-color: ${Colors.Graphite};
`;

const OnFavorite = styled.div`
  background-color: ${Colors.Graphite};
  padding: 5px 5px 2px 5px;
  border-radius: 4px;
  position: absolute;
  top: 20px;
  right: 20px;
  svg {
    path {
      fill: ${Colors.Yellow};
    }
  }
`;

export { DeleteFromFavorites, StyledMovieCard, Poster, Title, Type, AddToFavorite, OnFavorite };
