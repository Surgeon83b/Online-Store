import { FullscreenExit } from '@mui/icons-material';

export const styles = {
  checkboxConteiner: {
    height: '19vh',
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  preductsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
  },
  productsHeader: {
    height: '75px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'space-between',
  },
  card: {
    height: '300px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    flex: '1 1 auto',
  },
  cardText: {
    color: 'black',
    wordWrap: 'normal',
  },
  footer: {
    width: '100%',
    marginTop: '30px',
    padding: '30px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTop: '1px solid rgb(204, 204, 204)',
    backgroundColor: 'rgba(248, 249, 250',
  },
  mainDescription: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  imageDescription: {
    display: 'flex',
    flex: '2',
    justifyContent: 'space-between',
  },
  infoDescription: {
    flex: '2',
  },
  imagesBar: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
  },
  mainImage: {
    flex: '5',
    width: '70%',
  },
} as const;
