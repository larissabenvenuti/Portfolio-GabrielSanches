import styled from "styled-components";

export const SwitchButton = styled.button`
background: ${({ theme }) => theme.colors.backgroundAlt};
color: ${({ theme }) => theme.colors.text};
border: 2px solid ${({ theme }) => theme.colors.accent};
padding: 0.5rem 1rem;
border-radius: 50px;
cursor: pointer;
display: flex;
align-items: center;
gap: 0.5rem;
transition: all 0.3s ease;

&:hover {
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
}
`;

export const ThemeIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  
  ${SwitchButton}:hover & {
    transform: rotate(30deg);
  }
  
  svg {
    vertical-align: middle;
    transition: transform 0.3s ease;
  }
`;