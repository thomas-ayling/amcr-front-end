import styled from 'styled-components';

export const AjaxLoader = styled.img({
  width: '50px',
  aspectRatio: 1,
  marginLeft: 'calc(50vw - 25px)',
});

export const StyledHr = styled.hr({
  border: 'none',
  backgroundColor: 'var(--gl-orange)',
  width: '10%',
  margin: '12px auto 12px auto',
  height: '3px',
  borderRadius: '2px',
  opacity: '1',
});