import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: '200'
  },
  value: {
    width: 150
  },
  menuContainer: {
    backgroundColor: 'white',
    // padding: 20,
    // marginRight: 20,
    marginTop: 40,
    borderRadius: 5
  },
  menuItem: {
    margin: 10
  }
});

export default styles;
