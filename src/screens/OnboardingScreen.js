import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React from 'react'
// import { Data } from '../../utils/data'
import PagerView from 'react-native-pager-view';


// console.log(Data)


const OnboardingScreen = () => {

   
  return (
    <SafeAreaView>
        <View style={{ flex: 1 }}>
            <PagerView style={styles.viewPager} initialPage={0}>
                <View style={styles.page} key="1">
                <Text>First page</Text>
                <Text>Swipe ➡️</Text>
                </View>
                <View style={styles.page} key="2">
                <Text>Second page</Text>
                </View>
                <View style={styles.page} key="3">
                <Text>Third page</Text>
                </View>
            </PagerView>
        </View>
    </SafeAreaView>
  )
}

export default OnboardingScreen


const styles = StyleSheet.create({
    viewPager: {
      flex: 1,
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  