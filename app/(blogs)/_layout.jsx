import { Stack } from "expo-router";

const BlogsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="all-blogs" />
    </Stack>
  );
};

export default BlogsLayout;
