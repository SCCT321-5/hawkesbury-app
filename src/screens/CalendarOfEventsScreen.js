import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import eventarray from '../constants/eventarray'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const data= [
        {id:1, day:1, month: 'Sep'}, 
        {id:2, day:2, month: 'Jan'}, 
        {id:3, day:3, month: 'Aug'}, 
        {id:4, day:4, month: 'Dec'}, 
        {id:5, day:5, month: 'Jul'}, 
        {id:6, day:6, month: 'Oct'}, 
        {id:7, day:7, month: 'Sep'},
        {id:8, day:8, month: 'Jan'},
        {id:9, day:9, month: 'May'},
      ];
const CalendarOfEventsScreen: React.FC = ({navigation}) => {
  const [items, setItems] = useState({});
const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
  const [date, setdate] = React.useState('');
  const [pickertime, setpickertime] = React.useState('');
  const [paymentmethod, setpaymentmethod] = React.useState('');
  const clearState = () => {
    setdate('')
    setpickertime('')
    setpaymentmethod('')
}

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    var month = date.getUTCMonth() + 1; //months from 1-12
    var day = date.getUTCDate() + 1;
    var year = date.getUTCFullYear();
    var date1 = day + '/' + month + '/' + year;
    setdate(date1);
    hideDatePicker();
  };
  const handleTime = time => {
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    setpickertime(strTime);
    console.warn(strTime);
    hideTimePicker();
  };
   const onclick = item => {
        navigation.navigate({
          name: 'EventDetails',
          params: {data: item},
        });
      };
  return (
    <View style={styles.container}>
    <StatusBar
      backgroundColor={"#fff"}
      translucent={true}
      barStyle={"dark-content"}
      /><Text style={{ fontSize:20,fontWeight:'bold',marginTop: 50,textAlign:'center' }}>Business Directory</Text>
    <View style={{width: '95%', alignSelf: 'center',flexDirection:'row',marginTop:50}}>
                       <View style={{width: '100%', alignSelf: 'center'}}>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: '#fff',
              justifyContent: 'center',
              borderRadius: 5,
              borderColor: '#bbb',
              borderWidth: 1,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
            onPress={() => setDatePickerVisibility(true)}>
            <Text
              style={{
                color: '#474747',
                fontSize: 18,
                fontFamily: 'Poppins-Regular',
                textAlign: 'left',
              }}>
              {date === '' ? 'Select Date' : date}
            </Text>
          </TouchableOpacity>
        </View>
       
                  </View>
        <FlatList 
          enableEmptySections={true}
          style={styles.eventList}
          data={eventarray}
          keyExtractor= {(item) => {
            return item.id;
          }}
          contentContainerStyle={{paddingBottom:80}}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.main}   onPress = {()=>onclick(item)}>
                <View style={styles.eventBox}>
                  <View style={styles.eventDate}>
                     <Text  style={styles.eventDay}>{item.day}</Text>
                    <Text  style={styles.eventMonth}>{item.month}</Text> 
                  </View>
                  <View style={styles.eventContent}>
                    <Text  style={styles.eventTime}>{item.eventtime}</Text>
                    <Text  style={styles.userName}>{item.name}</Text>
                    <Text  style={styles.description}>Event Description</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }


const styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff",
  },
  eventList:{
    marginTop:20,
  },
  eventBox: {
    padding:10,
    marginTop:5,
    marginBottom:5,
    flexDirection: 'row',
  },
  eventDate:{
    flexDirection: 'column',
  },
  eventDay:{
    fontSize:50,
    color: "#0099FF",
    fontWeight: "600",
  },
  eventMonth:{
    fontSize:16,
    color: "#0099FF",
    fontWeight: "600",
  },
  eventContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:10,
    backgroundColor: '#FFFFFF',
    padding:10,
    borderRadius:10
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  eventTime:{
    fontSize:18,
    color:"#151515",
  },
  userName:{
    fontSize:16,
    color:"#151515",
  },
  main:{
    backgroundColor:'#bbb',
    marginBottom:10,width:'95%',alignSelf:'center',
    borderRadius:5
  }
});
export default CalendarOfEventsScreen;