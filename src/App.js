// import Test from "./src/test.";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";


// function ProfileStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       {/* <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="RecipientName" component={RecipientName} />
//       <Stack.Screen name="PurchaseDate" component={PurchaseDate} />
//       <Stack.Screen name="Relationship" component={Relationship} />
//       <Stack.Screen name="Interests" component={Interests} />
//       <Stack.Screen name="Price" component={Price} />
//       <Stack.Screen name="Name" component={Name} />
//       <Stack.Screen name="Swipe" component={Swipe} />
//       <Stack.Screen name="InterestsV2" component={InterestsV2} /> */}
//       <Stack.Screen name="ItemDescription" component={ItemDescription} />
//     </Stack.Navigator>
//   );
// }

// export default function App(){}

// // export default function App() {
// //   const [initializing, setInitializing] = useState(true);
// //   const [user, setUser] = useState();

// //   if () return null;

// //   if (user) {
// //     global.currRecipient = "123";
// //     return (
// //       <NavigationContainer>
// //         <Tab.Navigator
// //           screenOptions={({ route }) => ({
// //             tabBarIcon: ({ focused, color, size }) => {
// //               let iconName = "bookmark";

// //               if (route.name === "Saved") {
// //                 iconName = focused ? "bookmark" : "bookmark-outline";
// //               } else if (route.name === "Swipe") {
// //                 iconName = focused ? "gift" : "gift-outline";
// //               } else if (route.name === "Profile") {
// //                 iconName = focused ? "person-circle" : "person-circle-outline";
// //               }

// //               return <Icon name={iconName} size={size} color={color} />;
// //             },
// //             cardStyle: { backgroundColor: "white" },
// //             headerShown: false,
// //             tabBarShowLabel: false,
// //             tabBarActiveTintColor: "#3D6F99",
// //             tabBarInactiveTintColor: "gray",
// //           })}
// //         >
// //           <Tab.Screen name="Swipe" component={SwipeStack} />
// //           <Tab.Screen
// //             name="Saved"
// //             component={SavedStack}
// //             options={{ tabBarBadge: 32 }}
// //           />
// //           <Tab.Screen name="Profile" component={ProfileStack} />
// //         </Tab.Navigator>
// //       </NavigationContainer>
// //     );
// //   } else {
// //     return (
// //       <NavigationContainer>
// //         <UnauthenticatedStack />
// //       </NavigationContainer>
// //     );
// //   }
// // }


import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

