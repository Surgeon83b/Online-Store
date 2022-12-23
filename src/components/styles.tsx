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
} as const;
