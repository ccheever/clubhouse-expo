import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import { colors, icons, images } from "./styleguide";
import { StatusBar } from "./components/StatusBar";
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
    <View style={{ flex: 1, backgroundColor: colors.beige }}>
      <ActionSheetProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </ActionSheetProvider>
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
