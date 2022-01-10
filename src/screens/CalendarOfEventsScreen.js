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
import moment from 'moment';
import eventarray from '../constants/eventarray'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Ionicons} from  '@expo/vector-icons';

const data=[
 {date:'02/10/2018',name:'date is 10'},
 {date:'02/14/2018',name:'date is 14'},
 {date:'02/16/2018',name:'date is 16'},
 {date:'02/20/2018',name:'date is 20'},
 {date:'02/24/2018',name:'date is 24'},
 {date:'02/26/2018',name:'date is 26'},
 {date:'02/30/2018',name:'date is 30'},
 {date:'03/01/2018',name:'date is 01'},
 {date:'03/05/2018',name:'date is 05'},
 {date:'02/23/2018',name:'date is name 23'},
];
const CalendarOfEventsScreen: React.FC = ({navigation}) => {
 const [items, setItems] = useState(eventarray);
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
   var day = date.getUTCDate();
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
 
    const filterData = () =>{
        const newData = eventarray.filter(function(item) {
          const stData = item.eventdate ;
     const textData = date;
     return (stData.indexOf(textData) > -1 );
 
 });
 setItems(newData)
     }
 return (
   <View style={styles.container}>
   <StatusBar
     backgroundColor={"#fff"}
     translucent={true}
     barStyle={"dark-content"}
     /><Text style={{ fontSize:20,fontWeight:'bold',marginTop: 50,textAlign:'center' }}>Event List</Text>
   <View style={{width: '95%', alignSelf: 'center',flexDirection:'row',marginTop:10}}>
                      <View style={{width: '100%', alignSelf: 'center',
             borderColor: '#bbb',
             borderWidth: 1,borderRadius:5,flexDirection:'row'}}>
         <DateTimePickerModal
           isVisible={isDatePickerVisible}
           mode="date"
           onConfirm={handleConfirm}
           onCancel={hideDatePicker}
         />
 
         <TouchableOpacity
           style={{
             width: '80%',
             backgroundColor: '#fff',
             justifyContent: 'center',
             borderRadius: 5,
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
         <TouchableOpacity
           style={{
             width: '20%',
             justifyContent: 'center',
             borderRadius: 5,
             paddingHorizontal: 20,
             paddingVertical: 10,
           }}
           onPress={() => filterData()}>
           <Text
             style={{
               fontSize: 18,
               fontFamily: 'Poppins-Regular',
               textAlign: 'left',
             }}>
               <Ionicons name="filter-outline" size={15}/>
           </Text>
           

         </TouchableOpacity>
       </View>
     
                 </View>
                 {items[0] === undefined ?  <Text style={{width:'100%',textAlign:'center',marginTop:50}}>No data found.</Text>:null}
       <FlatList
         enableEmptySections={true}
         style={styles.eventList}
         data={items}
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
   flex:1
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

