
import { Feather } from '@expo/vector-icons'

import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/Home';
import Details from '../screens/Details';
import Contact from '../screens/contact';

const Tabs = createBottomTabNavigator()
const Drawer = createDrawerNavigator();
// const ProfileStack = createNativeStackNavigator()

// const ProfileStackScreen = () => {
//     return(
//         <ProfileStack.Navigator
//             initialRouteName="Login"
//             screenOptions={{ headerShown: false }}
//         >
//             <ProfileStack.Screen name="Login" component={Login} />
//             <ProfileStack.Screen name="Register" component={Register} />
//         </ProfileStack.Navigator>
//     )
// }

const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={Details} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    );
  }

const BottomTabs = () => {
    return(
        <Tabs.Navigator 
            screenOptions={{ 
                headerShown: false, 
                tabBarShowLabel: true,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: "#343A40",
                },
            }}
        >
            <Tabs.Screen 
                name="Home"
                component={MainStackNavigator}
                options={{ 
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name='home'
                            size={25}
                            color={ focused ? '#FFFFFF' : '#C0C0C0' }
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="Details"
                component={MainStackNavigator}
                options={{ 
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name='menu'
                            size={25}
                            color={ focused ? '#FFFFFF' : '#C0C0C0' }
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="Contact"
                component={MainStackNavigator}
                options={{ 
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name='phone'
                            size={25}
                            color={ focused ? '#FFFFFF' : '#C0C0C0' }
                        />
                    )
                }}
            />
        </Tabs.Navigator>
    )
}

// const DrawerNavigator = () => {
//     return(
//       <Drawer.Navigator>
//         <Drawer.Screen name="Contact" component={BottomTabs} />
//         {/* <Drawer.Screen name="Details" component={BottomTabs} />
//         <Drawer.Screen name="Contact" component={BottomTabs} /> */}
//       </Drawer.Navigator>
//     );
// }

export function AppRoutes() {
    return(
        <BottomTabs />
    )
}