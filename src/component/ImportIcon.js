import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
export default function Icons({ name, size, color, type, ...props }) {
    switch (type) {
        case 'AntDesign':
            return <AntDesign {...props} color={color} size={size} name={name} />;
        case 'Feather':
            return <Feather {...props} color={color} size={size} name={name} />;
        case 'Entypo':
            return <Entypo {...props} color={color} size={size} name={name} />;
        case 'FontAwesome':
            return <FontAwesome {...props} color={color} size={size} name={name} />;
        case 'FontAwesome5Brnds':
        case 'FontAwesome5':
            return <FontAwesome5 {...props} color={color} size={size} name={name} />;
        case 'fontawesome5pro':
            return <FontAwesome5Pro {...props} color={color} size={size} name={name} />;
        case 'Fontisto':
            return <Fontisto {...props} color={color} size={size} name={name} />;
        case 'EvilIcons':
            return <EvilIcons {...props} color={color} size={size} name={name} />;
        case 'Foundation':
            return <Foundation {...props} color={color} size={size} name={name} />;
        case 'Octicons':
            return <Octicons {...props} color={color} size={size} name={name} />;
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons {...props} color={color} size={size} name={name} />;
        case 'Ionicons':
            return <Ionicons {...props} color={color} size={size} name={name} />;
        case 'SimpleLineIcons':
            return <SimpleLineIcons {...props} color={color} size={size} name={name} />;
        case 'Zocial':
            return <Zocial {...props} color={color} size={size} name={name} />;
    }
    /** Default MaterialIcons */
    return <MaterialIcons {...props} />;

}

