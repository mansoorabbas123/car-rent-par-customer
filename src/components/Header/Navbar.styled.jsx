import styled from "styled-components";

export const Styled = {
  NavbarWrapper: styled.nav`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: #000;
    .navlinks {
      display: flex;
    }
    .link {
      padding: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .link:hover {
      cursor: pointer;
    }
    .link_text {
      color: #4d4d4d;
    }
    .link_text:hover {
      color: #ff0063;
    }
    span {
      display: block;
    }
    .search {
      color: #4d4d4d;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-right: 1.8rem;
    }
    .search > input {
      margin-left: 5px;
      width: 25rem;
      height: 1.9rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    @media screen and (max-width: 1294px) {
      .search > input {
        width: 15rem;
      }
    }
    .search > div {
      position: absolute;
      top: 0;
      right: 0;
      width: 3rem;
      height: 100%;
      background-color: #ff0063;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  `,
};
