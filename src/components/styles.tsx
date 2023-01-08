export const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '30px',
    borderBottom: '1px solid rgb(204, 204, 204)',
    backgroundColor: 'rgb(248, 249, 250)',
  },
  checkboxConteiner: {
    height: '19vh',
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    paddingLeft: '5px',
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
  productsGridRo: {
    margin: '0px auto',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'flex-start',
  },
  cardRo: {
    backgroundColor: 'lightgray',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: '10px',
    borderRadius: '10px',
    //border: '1px solid #0d6efd',
    boxSizing: 'border-box',
    flex: '1 0 90%',
    gap: '5px',
  },
  cardButtonsRo: {
    display: 'flex',
    gap: '5px',
    flexDirection: 'column',
  },
  productsGrid: {
    margin: '0px auto',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: 'lightgray',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '10px',
    //border: '1px solid #0d6efd',
    boxSizing: 'border-box',
    flex: '1 0 31%',
    minWidth: '250px',
  },
  cardButtons: {
    display: 'flex',
    gap: '5px',
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
  popUPbackground: {
    zIndex: '1000',
    opacity: '1',
    background: 'rgba(104, 119, 119, 0.706)',
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
  },
  404: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    backgroundImage:
      'url("https://img.freepik.com/free-vector/page-not-found-concept-illustration_114360-1869.jpg?w=740&t=st=1673180647~exp=1673181247~hmac=c794bc7898c55dd9c07e50281de5ae04be078dfae3bbb610d477c107dc900d42")',
  },
} as const;
