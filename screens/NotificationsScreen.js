import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };
  const NotificationsScreen =({navigation})=> {
    const [visible, setVisible] = React.useState(true);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ModalPoup visible={visible}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Image
                   source={{
                    uri: 'data:image/png;base64,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'
                }}
                 
                  style={{height: 30, width: 30, border:1, borderColor:'orange'}}
                />
                
              </TouchableOpacity>
            </View>
            <View>
            <Image
                   source={{
                    uri: 'data:image/png;base64,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'
                }}
                 
                  style={{height: 50, width: 50, alignItems: 'center', paddingVertical:1}}
                />

            </View>
          </View> <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center', color:'#FFB85D'}}>Notifications screen</Text>
        </ModalPoup>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    modalBackGround: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.9)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '80%',
      backgroundColor: 'black',
      paddingHorizontal: 20,
      paddingVertical: 30,
      borderRadius: 20,
      elevation: 20,
    },
    header: {
      width: '100%',
      height: 40,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  });
  
  export default NotificationsScreen;