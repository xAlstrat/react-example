import { css } from '@mui/material/styles';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  gridLayout: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.spacing(4)};
  `,
  cardHover: css`
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }
  `,
  responsivePadding: css`
    padding: ${({ theme }) => theme.spacing(8, 4)};
    ${({ theme }) => theme.breakpoints.down('md')} {
      padding: ${({ theme }) => theme.spacing(6, 3)};
    }
    ${({ theme }) => theme.breakpoints.down('sm')} {
      padding: ${({ theme }) => theme.spacing(4, 2)};
    }
  `,
};

export default mixins;