import React from 'react';
import { Tabs } from 'expo-router';
import { colors, fontSize } from '@/constants/tokens';

const TabsNavigation = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarLabelStyle: { fontSize: fontSize.xs, fontWeight: '500' },
            headerShown: false,
        }}>
            <Tabs.Screen name="favorites" />
            <Tabs.Screen name="playlists" /> 
            <Tabs.Screen name="(songs)" />
            <Tabs.Screen name="artists" />
        </Tabs>
    );
};

export default TabsNavigation;