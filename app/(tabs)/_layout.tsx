import React from 'react';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';

import { useThemeColor } from '@/hooks/use-theme-color';

export default function TabLayout() {
  const color = useThemeColor({}, 'tabIconSelected');

  return (
    <NativeTabs tintColor={color}>
      <NativeTabs.Trigger name="index">
        <Label>Explore</Label>
        <Icon sf="plus.app" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="explore">
        <Icon sf="map.fill" drawable="custom_settings_drawable" />
        <Label>Plans</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <Icon sf="person" drawable="custom_settings_drawable" />
        <Label>Profile</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
