import {StyleSheet, View, Text, Image} from 'react-native';

export function ImageView({img}) {

  return (
    <View style={styles.root}>
      <View style={styles.list}>
        <View style={styles.sectionTitle}>
          <View style={styles.text}>
            <Text style={styles.title}>
              {`Picture Viewing`}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <View style={styles.image}>
                <Image source={img} style={styles.img}></Image>
              </View>
            </View>
            <View style={styles.textContent}>
              <Text style={styles.title2}>
                {`Caption`}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.chip}>
          <Text style={styles.text2}>
            {`Back`}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 412,
    height: 917,
    paddingBottom: 62,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 12,
    columnGap: 12,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  title: {
    alignSelf: 'stretch',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    paddingTop: 25,
  },
  list: {
    paddingTop: 0,
    paddingLeft: 12,
    paddingBottom: 0,
    paddingRight: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 8,
    columnGap: 8,
    alignSelf: 'stretch',
  },
  sectionTitle: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingLeft: 0,
    paddingBottom: 50,
    paddingRight: 0,
    alignItems: 'center',
    rowGap: 12,
    columnGap: 12,
    alignSelf: 'stretch',
  },
  text: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    rowGap: 8,
    columnGap: 8,
    alignSelf: 'stretch',
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.10196078568696976)',
  },
  imageContainer: {
    flexDirection: 'row',
    height: 388,
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
  image: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0, 0, 0, 0.05098039284348488)',
  },
  title2: {
    alignSelf: 'stretch',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
  },
  textContent: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 4,
    columnGap: 4,
    alignSelf: 'stretch',
  },
  text2: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  chip: {
    width: 64,
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.05098039284348488)',
  },
  title3: {
    height: 14,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    overflow: 'hidden',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14,
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
  title4: {
    height: 14,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    overflow: 'hidden',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14,
  },
  tab2: {
    paddingTop: 20,
    paddingLeft: 4,
    paddingBottom: 20,
    paddingRight: 4,
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  title5: {
    height: 14,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    overflow: 'hidden',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14,
  },
  tab3: {
    paddingTop: 20,
    paddingLeft: 4,
    paddingBottom: 20,
    paddingRight: 4,
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  img:{
    width: '100%',
    height: '100%',
  }
});
