import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { queries } from 'styles';

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
};
Modal.defaultProps = {
  isOpen: false,
  children: null,
};

let bodyClasses = '';
let modalRoot = '';

bodyClasses = document.body.classList;
modalRoot = document.getElementById('modal-root');

if (!modalRoot) {
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
}

export default function Modal({
  isOpen,
  children,

  ...props
}) {
  const toggleGlobalScroll = () => (isOpen ? bodyClasses.add('no-scroll') : bodyClasses.remove('no-scroll'));

  useEffect(toggleGlobalScroll, [isOpen]);

  useEffect(() => {
    return () => {
      bodyClasses.remove('no-scroll');
    };
  }, []);

  return createPortal(
    <Background isOpen={isOpen}>
      <Content {...props}>{children}</Content>
    </Background>,
    modalRoot
  );
}
const Content = styled.div`
  position: relative;
  background: white;
  box-shadow: 0 19px 82px 0 rgba(7, 7, 7, 0.39);
  padding: 8px;
  box-sizing: border-box;

  @media ${queries.mobile} {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    min-height: 100%;
    margin: 0;
    border-radius: 0;
  }

  @media ${queries.desktop} {
    width: 400px;
    padding: 32px;
    border-radius: 8px;
  }
`;
const Background = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.55);
  overflow: auto;
`;
