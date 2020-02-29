import styled from "styled-components";
import circle from "../assets/circle.jpg";

const Wrapper = styled.div`
  background: linear-gradient(106deg, #ebfcff 0%, #f0f8ff 150%);
  /* background:  #C1B0E8; */
  background-size: cover;
  /* height: 100vh; */
  padding: 4rem;
  .sideBar {
    background: linear-gradient(180deg, #0048ba 0%, #e600e6 80%);
    /* height: 90vh; */
    padding: 2rem 1rem;
  }
  .sideBar h1 {
    margin: 3rem 4rem;
  }
  .sideBar span {
    margin-right: 5px;
  }
  .mainCont {
    background: white;
    /* height: 90vh; */
    padding: 4em 2em;
    box-shadow: 2px 2px 2px gray;
  }
  hr {
    height: 1.2px;
    color: white;
    background-color: white;
    border: none;
  }
  ul {
    margin-bottom: 1.3em;
  }

  li {
    list-style-type: none;
    font-size: 1.2rem;
    font-family: "Roboto";
    margin: 0.7em 0em;
  }
  .badge {
    padding: 0.7em;
    border-radius: 50%;
  }
  img {
    border-radius: 100%;
  }
  .br2 {
    margin: 2em 0.1em;
    font-size: 1em;
  }
  .middle {
    background: #ebf2ff;
    margin: 1em;
    padding: 1em 1em 3em 1em;
  }
  .middle h3 {
    font-family: "Arvo";
  }

  .btn-primary {
    background: linear-gradient(106deg, #0048ba 0%, #6c4fff 100%);
    border: 1px solid #475677;
    border-radius: 25px;
    padding: 8px 38px;
  }
  .btn-danger {
    background: linear-gradient(106deg, #ff3355 0%, #e80027 100%);
    border: 1px solid #475677;
    border-radius: 25px;
    padding: 8px 38px;
  }
  .cards {
    height: 10em;
    padding: 4em 2em;
    border-radius: 8px;
    margin: 2.3em 3em;
  }
  .bg-purple {
    background: linear-gradient(
        106deg,
        rgb(255, 0, 100, 0.7),
        rgb(0, 10, 200, 0.7),
        rgb(102, 153, 255, 0.7)
      ),
      url(${circle});
  }

  .bg-orange {
    background: linear-gradient(
        110deg,
        rgb(227, 50, 221, 1),
        rgb(227, 64, 64, 0.8),
        rgb(175, 0, 42, 1)
      ),
      url(${circle});
  }
  .text-info,
  .btn-info {
    background-color: #0660ba;
  }
  .pointer {
    cursor: pointer;
  }
  li:hover {
    color: wheat;
  }
`;

export default Wrapper;
