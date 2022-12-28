import styled from "styled-components";

export const Container = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 2px 2px 0 0;
  cursor: pointer;

  background: rgba(0, 0, 0, 0.1);
  margin: 0px 2px;
  border: none;
  border-bottom: 2px solid #07ce92;

  &.active {
    background: #fff;
    margin: 0;
    border-top: 2px solid #07ce92 !important;
    border-right: 2px solid #07ce92 !important;
    border-bottom: hidden !important;
    border-left: 2px solid #07ce92 !important;
  }
`;
