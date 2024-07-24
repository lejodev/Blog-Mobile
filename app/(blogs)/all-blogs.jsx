import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://blogit-backend-rwy6.onrender.com/api/blogs")
      .then((res) => res.json())
      .then((res) => {
        const { data } = res;
        // Assuming data is an object where each key is a blog entry
        setBlogs(Object.values(data)); // Convert object values to array
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const Item = ({ title, data }) => (
    <View>
      <Text>{title}</Text>
      <Text>{data.content}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={blogs}
        renderItem={({ item }) => (
          <Item title={item.attributes.title} data={item.attributes} />
        )}
        keyExtractor={(item) => item.id.toString()} // Ensure id is a string
      />
    </SafeAreaView>
  );
};

export default AllBlogs;
