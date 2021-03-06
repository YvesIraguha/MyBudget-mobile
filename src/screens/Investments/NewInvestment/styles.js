import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  expenseImage: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,1)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    height: '100%',
    opacity: 0.6
  },
  textStyle: {
    margin: 20,
    fontSize: 24,
    fontWeight: '600'
  },
  editButton: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.237602)',
    shadowOffset: {
      width: 0,
      height: 14
    },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 10,
    backgroundColor: '#617BE3'
  }
});

export default styles;
