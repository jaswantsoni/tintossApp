import React from 'react';
import {SafeAreaView, StatusBar, Text, ScrollView, View} from 'react-native';
import './global.css'; // Import the global CSS with Tailwind classes

/**
 * A reusable Section component with Tailwind styles.
 */
const Section: React.FC<{title: string; children?: React.ReactNode; className?: string}> = ({
  title,
  children,
  className
}) => {
  return (
    <View className="mt-8 px-6">
      <Text className="text-2xl font-semibold text-gray-900">{title}</Text>
      <Text className="mt-2 text-lg font-light text-gray-600">{children}</Text>
    </View>
  );
};

/**
 * The main application component with Tailwind styles.
 */
const App: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic" className="p-4">
        <Section title="Step One" className='p-4 bg-green-300'>
          Edit <Text className="font-bold">App.tsx</Text> to change this screen
          and then come back to see your edits.
        </Section>
        <Section title="See Your Changes">
          Hot reload to reflect your changes instantly.
        </Section>
        <Section title="Debug">
          Use debugging tools like Flipper to inspect your app.
        </Section>
        <Section title="Learn More">
          Check the React Native docs to explore more features.
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
