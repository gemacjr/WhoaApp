import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10
    },

    leftContainer: {
        flexDirection: 'row'
    },

    midContainer: {
        justifyContent: 'space-around'
    },

    avatar: {
        width: 60,
        height: 60,
        backgroundColor: 'red',
        marginRight: 15,
        borderRadius: 50,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    status: {
        
    }
});

export default style;