import { 
    StyleSheet,
  } from "react-native";

const fonts = {
    regular: {
      fontFamily: 'poppins-regular',
    },
    bold: {
      fontFamily: 'poppins-semibold',
    }
  }

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F2F6FF',
      flex: 1
    },
    headerWrapper: {
      marginBottom: 30,    
    },
    navigation: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 20,
      backgroundColor: '#fff'
    },
    avatar: {
      height: 40,
      width: 40,
      resizeMode: 'contain'
    },
    greatingWrapper: {
      paddingVertical: 30,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      paddingBottom: 40
    },
    nameWrapper: {
      ...fonts.regular,
      color: '#808080'
    },
    dayWrapper: {
      ...fonts.bold,
      color: '#14132A',
      fontSize: 24
    },
    dateWrapper: {
      ...fonts.regular,
      color: '#808080'
    },
    menuWrapper: {
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: 40,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50
    },
    menuItem: {
      ...fonts.regular,
      fontSize: 14,
      paddingHorizontal: 18,
      color: '#808080',
      paddingVertical: 10
    },
    menuItemActive: {
      ...fonts.bold,
      color: '#14132A',
      borderColor: '#eee',
      borderWidth: 1,
      borderRadius: 5,
    },

    cardWrapper: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    cardBody: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 15,
        borderBottomWidth: 5,
        borderBottomColor: '#808080'
    },
    cardLogoBackground: {
        backgroundColor: '#F2F6FF',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 15,
        marginRight: 15
    },
    cardLogo: {
        height: 43,
        width: 43,
        resizeMode: 'contain'
    },
    cardTextTitle: {
        ...fonts.bold,
        color: '#14132A',
    },
    cardTextDate: {
        ...fonts.regular,
        color: '#808080',
    },
    cardBorderBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '50%',
        height: 5,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },

    bottomNavigation: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    bottomMenuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20
    },
    bottomMenuItemActive: {
        backgroundColor: '#F2F6FF'
    },
    bottomMenuItemText: {
        ...fonts.regular,
        color: '#14132A',
        marginLeft: 10
    }

});

export default styles;