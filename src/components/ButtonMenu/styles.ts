import styled from "styled-components";

export const Container = styled.div`
  .checkboxtoggler {
    width: 2.5em;
    display: flex;
    flex-direction: column;
    gap: 0.7em;
    cursor: pointer;
  }

  .line-1 {
    background: #9b1816;
    height: 0.3em;
    border-radius: 10em;
    transition-duration: 500ms;
  }

  .line-2 {
    background: #9b1816;
    height: 0.3em;
    border-radius: 10em;
    transition-duration: 500ms;
  }

  .line-3 {
    background: #9b1816;
    height: 0.3em;
    border-radius: 10em;
    transition-duration: 500ms;
  }

  #toggleChecker {
    height: 2.5em;
    width: 100%;
    display: none;
  }

  #toggleChecker:checked + #togglerLabel .checkboxtoggler .line-1 {
    -webkit-transform: rotate(45deg) translateY(0.7em) translateX(0.7em);
    -ms-transform: rotate(45deg) translateY(0.7em) translateX(0.7em);
    transform: rotate(45deg) translateY(0.7em) translateX(0.7em);
  }

  #toggleChecker:checked + #togglerLabel .checkboxtoggler .line-2 {
    -webkit-transform: rotate(-45deg) translateY(0em) translateX(0.1em);
    -ms-transform: rotate(-45deg) translateY(0em) translateX(0.1em);
    transform: rotate(-45deg) translateY(0em) translateX(0.1em);
  }

  #toggleChecker:checked + #togglerLabel .checkboxtoggler .line-3 {
    transform: scaleX(0);
    transform-origin: left;
  }
`;
