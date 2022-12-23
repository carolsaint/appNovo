// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import { AppBar, HStack, IconButton } from "@react-native-material/core";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
// import 'react-native-gesture-handler';

// const App = () => (
//   <View>
  // <AppBar
  //   title="AppBar"
  //   style={styles.appBar}
  //   leading={props => (
  //     <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
  //   )}
  //   trailing={props => (
  //     <HStack>
  //       <IconButton
  //         icon={props => <Icon name="magnify" {...props} />}
  //         {...props}
  //       />
  //       <IconButton
  //         icon={props => <Icon name="dots-vertical" {...props} />}
  //         {...props}
  //       />
  //     </HStack>


  //   )}
  // />

//   <Text style={styles.text}>hello</Text>
//   </View>
// );

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   appBar:{
//     backgroundColor: "green"
//   },
//   button: {
//     color: "red"
//   },
//   text:{
//     color: "green",
//     alignSelf: "center"
//   }
// });


import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react'
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

let options = [

  {name: 'Home', id: 1
  },
  {name: 'Apps', id: 2
  },
]

options.push({
  name: 'Pass',
  id: 10
}, {
  name: 'Chat',
  id: 11
}, )

let config = {
  name: 'Config',
  id: 3
}

export default function App() {

  const [visible, setVisible] = React.useState(false);

  return (
    <View style = {styles.container}> 

<AppBar
    title="AppBar"
    style={styles.appBar}
    leading={props => (
      <IconButton icon={props => <Icon name="menu" {...props} />} {...props} onPress = {
        open
      } />
      
    )}
    trailing={props => (
      <HStack>
        <IconButton
          icon={props => <Icon name="magnify" {...props} />}
          {...props}
        />
        <IconButton
          icon={props => <Icon name="dots-vertical" {...props} />}
          {...props}
        />
      </HStack>


    )}
  />

    {visible ? <View style={styles.nav}>{options.map((option) => (

    <View key = {option.id}style = {styles.tab}> 
    <Text style={styles.tabText}> {option.name}</Text>        
    </View > )
    )}
    <Text style = {styles.tabConfig}> {config.name}</Text>
           <Icon name="setting" />
        
    </View >: null }
    </View>);

function open() {
  setVisible(!visible)
  console.log(visible)
}
}

const styles = StyleSheet.create({
  container:{
    marginTop: 20
  },
  nav: {
    height: 1000,
    width: 300,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'lightgrey',
    flex: 1,
    marginTop: 8,
    borderColor: '#000000',
    borderWidth: 2
  },
  tab: {
    paddingLeft: 16,
    paddingTop: 10,
    height: 50,
  },
  tabConfig:{
    paddingLeft: 16,
    paddingTop: 10,
    height: 50,
    marginTop: 360
  },
  tabText:{
    textAlign: 'justify',
  },
  appBar:{
    backgroundColor: '#949494',
  }
});