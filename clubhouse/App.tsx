import React, { useState, useEffect } from "react";
import { View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "./components/StatusBar";

import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";
import { colors, icons, images } from "./styleguide";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import Navigation from "./navigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_400Regular,
  });
  let imagesLoaded = useImages({ ...icons, ...images });
  if (!fontsLoaded || !imagesLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{flex: 1, backgroundColor: colors.beige}}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
      <StatusBar style="default" />
    </View>
  );
}

function useImages(images: { [key: string]: any }) {
  let [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    async function loadImagesAsync() {
      try {
        const imageAssetIds = Object.values(images);
        const imageLoadingPromises = imageAssetIds.map((assetId) =>
          Asset.fromModule(assetId).downloadAsync()
        );

        await Promise.all(imageLoadingPromises);
      } catch (e) {
        console.warn(e);
      } finally {
        setImagesLoaded(true);
      }
    }

    loadImagesAsync();
  });

  return imagesLoaded;
}
