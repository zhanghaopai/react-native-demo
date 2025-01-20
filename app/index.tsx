import AndOperator from "@/src/conditional-rendering/AndOperator";
import ConditionalRendering from "@/src/conditional-rendering/ConditionalRendering";
import FetchData from "@/src/effect/FetchData";
import MyEffect from "@/src/effect/MyEffect";
import MyFlatList from "@/src/flatlist/MyFlatList";
import ParentComponent from "@/src/props-learning/ParentComponent";
import MyReducer from "@/src/reducer/MyReducer";
import BasicCounter from "@/src/state-hooks/state/basic-counter/BasicCounter";
import UpdateArray from "@/src/state-hooks/state/update-array/UpdateArray";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <Text style={st.text1}>1. Flat List</Text>
          <MyFlatList />
          <Text style={st.text1}>2. Props Learning</Text>
          <ParentComponent />
          <Text style={st.text1}>3. Conditional Rendering</Text>
          <ConditionalRendering />
          <AndOperator />
          <Text style={st.text1}>4. States And Hooks</Text>
          <Text style={st.text2}>4.1 Basic Counter</Text>
          <BasicCounter />
          <Text style={st.text2}>4.2 Update List</Text>
          <UpdateArray />
          <Text style={st.text1}>5. Use Effect</Text>
          <Text style={st.text2}>5.1 My Effect</Text>
          <MyEffect />
          <Text style={st.text2}>5.2 Fetch Data</Text>
          <FetchData />
          <Text style={st.text1}>6. Use Reducer</Text>
          <MyReducer />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const st = StyleSheet.create({
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "lightblue",
  },
  text2: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "lightgreen",
  }
})