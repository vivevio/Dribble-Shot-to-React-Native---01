import React, { Component } from "react";
import { 
  View,
  Text,
  SafeAreaView,
  Image
} from "react-native";

import * as Font from 'expo-font';
import BurgerMenu from './src/components/BurgerMenu'
import styles from './Styles'
import { Icon } from 'react-native-eva-icons';

const Card = function({image, title, date, color, progress}) {
  return (
    <View style={styles.cardWrapper}>
      <View style={[styles.cardBody, {borderBottomColor: `${color}8C`}]}>
        <View style={styles.cardLogoBackground}>
          <Image source={ image } style={styles.cardLogo} />
        </View>
        <View>
          <Text style={styles.cardTextTitle}>{title}</Text>
          <Text style={styles.cardTextDate}>{date}</Text>
        </View>
      </View>
      <View style={ [styles.cardBorderBottom, {backgroundColor: color, width: `${progress}`}] }></View>
    </View>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false
    }

  }

  componentDidMount() {
    this._loadAssetAsync()
  }

  async _loadAssetAsync() {
    await Font.loadAsync({
      'poppins-regular': require('./assets/Fonts/Poppins-Regular.ttf'),
      'poppins-semibold': require('./assets/Fonts/Poppins-SemiBold.ttf'),
    });

    this.setState({ fontsLoaded:true })
  }

  MainView() {
    return (
      <View style={styles.container}>
        <View style={ styles.headerWrapper }>
          <View style={styles.navigation}>
            <BurgerMenu />
            <View>
              <Image source={require('./assets/Img/Avatar.png')} style={styles.avatar} />
            </View>
          </View>

          <View style={ styles.greatingWrapper }>
            <Text style={ styles.nameWrapper }>Hi, Rahman!</Text>
            <Text style={ styles.dayWrapper }>Good afternoon</Text>
            <Text style={ styles.dateWrapper }>07 Desember 2019</Text>
          </View>

          <View style={ styles.menuWrapper }>
            <Text style={ [styles.menuItem, styles.menuItemActive]}>Projects</Text>
            <Text style={ styles.menuItem }>Clients</Text>
            <Text style={ styles.menuItem }>Complet</Text>
          </View>
        </View>

        <Card 
          color="#2984FC"
          image={require('./assets/Img/Google_logo.png')}
          title="Social Media App"
          progress="60%"
          date="Deadline Nov 20, 2019" />

        <Card 
          color="#FF2323"
          image={require('./assets/Img/Pinterest_logo.png')}
          title="Event App"
          progress="80%"
          date="Deadline Nov 30, 2019" />

        <Card 
          color="#3160FF"
          image={require('./assets/Img/Hyperlab_logo.png')}
          title="Dashboard"
          progress="40%"
          date="Deadline Des 25, 2019" />

        <View style={styles.bottomNavigation}>
          <View style={[styles.bottomMenuItem, styles.bottomMenuItemActive]}>
            <Icon name="home" width={24} height={24} fill="#14132A" />
            <Text style={styles.bottomMenuItemText}>Home</Text>
          </View>

          <View style={styles.bottomMenuItem}>
            <Icon name="settings-2" width={24} height={24} fill="#F2F6FF" />
          </View>

          <View style={styles.bottomMenuItem}>
            <Icon name="heart" width={24} height={24} fill="#F2F6FF" />
          </View>

          <View style={styles.bottomMenuItem}>
            <Icon name="person" width={24} height={24} fill="#F2F6FF" />
          </View>
        </View>
      </View>
    )
  }
  
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        { ! this.state.fontsLoaded ? <Text>Loading</Text> : this.MainView() }
      </SafeAreaView>
    )
  }
}
export default App;