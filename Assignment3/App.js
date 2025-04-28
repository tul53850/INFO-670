import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Profile } from './Profile';
import { Gallery } from './Gallery';
import { ImageView } from './Image';
import { useState } from 'react';

const appImages = [
  require('./assets/icon.png'),
  require('./assets/01.jpg'),
  require('./assets/07.gif'),
  require('./assets/08.gif'),
  require('./assets/35.gif'),
  require('./assets/75.gif'),
  require('./assets/90.gif'),
  require('./assets/128.gif'),
];

export default function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const [selectedValue, setSelectedValue] = useState(require('./assets/icon.png'));

  return (
    <View style={styles.container}>
      
      {showImage && <ImageView img={selectedValue}/>}
      {showProfile && <Profile/> /*conditional only if pressed in nav*/}
      {showGallery && <Gallery images={appImages} onSelect={setSelectedValue}/>}
      
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.tab} 
          title='Gallery'
          onPress={() => {setShowGallery(!showGallery); setShowImage(false); setShowProfile(false)}}
          >
          <Text style={styles.title}>
            {`Gallery`}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.tab} 
          title='Picture'
          onPress={() => {setShowImage(!showImage); setShowGallery(false); setShowProfile(false)}}
          >
          <Text style={styles.title}>
            {`Picture Viewing`}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.tab} 
          title='Profile'
          onPress={() => {setShowProfile(!showProfile); setShowGallery(false); setShowImage(false)}}
          >
          <Text style={styles.title}>
            {`Profile`}
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    height: 14,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    overflow: 'hidden',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowRadius: 6,
    shadowOffset: {"width":0,"height":0},
  },
  tab: {

    paddingTop: 20,
    paddingLeft: 4,
    paddingBottom: 20,
    paddingRight: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
});
