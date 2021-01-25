import React , {useState , useEffect , useRef } from 'react'
import Tilt from 'react-tilt'
// import eventsJSONData from '../assets/eventsData'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import moment from 'moment'
import YouTubePlayer from 'react-player/youtube'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../css/style.css';

const constWidth = Math.min(300 , window.innerWidth-70)
const constHeight = constWidth * 9/16 + 230
const constPastHeight = constWidth * 9/16 + 150
const constMax = 25
const colorArray = ['#176BEF' , '#FF3E30' , '#F7B529' , '#179C52']



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


function EventCard({
    eventsData,
    setEventsData,
    navref,
    tiltData,
    setTiltData,
    past
}){

    const mouseMove = (event , eventid) =>{
        let left = event.target.getBoundingClientRect().left
        let top = event.target.getBoundingClientRect().top
        let x = (event.clientX - left) / constWidth;
        let y = (event.clientY - top) / constHeight;
        let _x = Math.min(Math.max(x, 0), 1);
        let _y = Math.min(Math.max(y, 0), 1);

        let tiltX = (constMax / 2 - _x * constMax);
        let tiltY = (_y * constMax - constMax / 2);
        settiltdata(tiltX/5  , tiltY/5 , eventid)
    }

    const settiltdata = (tiltX , tiltY , eventid) => {
        setTiltData({...tiltData , [eventid] : {tX : tiltX , tY : tiltY}})
    }

    const noEvents = () =>{
        return(
            <div style = {{marginTop : '50px' , marginBottom : '50px' , textAlign : 'center' , color : 'grey'}}>no events</div>
        )
    }

    const scrollbutton = (data) =>{
        let size = Object.keys(data).length
        if(constWidth * size > window.innerWidth) return true;
        else return false;
    }

    
    const redirectbutton = (url) =>{
        if(url !== '' || url !== null){
            window.open(url , '_blank')
        }
    }
 
    const handlenav = (direction , navref) =>{
        if(direction === 'left'){
            navref.current.scrollLeft -= 200
        }
        else{
            navref.current.scrollLeft += 200
        }
    }

    return(
        Object.keys(eventsData).length !== 0 ?
        <div className = 'events-scroll-container ' >
            {scrollbutton(eventsData) && <IconButton className = 'events-scroll-button left-button' onClick = {()=>handlenav('left' , navref)} ><i class="fa fa-chevron-left" aria-hidden="true"></i></IconButton>}
            <div className = "events-container" ref = {navref}>
                {
                    Object.keys(eventsData).map((event , index) =>{
                        return(
                            <div key = {event}>
                                <Tilt className="Tilt event-tilt-card mx-3" onMouseLeave = {()=>{settiltdata(0,0 , event)}} onMouseMove = {(e) => mouseMove(e , event)} options={{reverse : false, max : constMax , speed : 5000 , scale : 1 }} style= {{height : past ? constPastHeight : constHeight , width : constWidth }}>
                                        {eventsData[event].youtube === false ? 
                                            <div className = 'event-card-bg' style = {{backgroundImage : `url(${eventsData[event].poster})` , transform : `translateX(${tiltData[event].tX}px) translateY(${tiltData[event].tY}px)` , height : `${constWidth * 9/16}px`}}></div>
                                            :<YouTubePlayer width = '100%' height = {`${constWidth * 9/16}px`} url = {eventsData[event].poster}/>}
                                        <div style = {{display :'flex' ,flexDirection : 'column' ,padding : '10px',color : 'black' , flex : '1'}}>
                                            <h6 style = {{flex : '1 0 0' , minHeight : '1.2rem' , overflow : 'hidden' , textOverflow : 'ellipsis'}}>{eventsData[event].name}</h6>
                                            <div style = {{marginTop : 'auto' , flex : '0 0 0' }}>
                                            <div style = {{marginBottom : '5px'}}>
                                                {
                                                    eventsData[event].topicsCovered !== 'undefined' && eventsData[event].topicsCovered.map((topic , index) =>{
                                                        return <div key = {topic} className = 'badge badge-pill' style = {{color : 'white' ,backgroundColor : `${colorArray[index%4]}` , marginLeft : '3px' , marginRight : '3px'}}>{topic}</div>
                                                    })
                                                }
                                            </div>
                                            {!past &&
                                            <div style = {{display : 'flex' , marginBottom : '10px'}}>
                                                <div style = {{marginRight : '20px'}}><p style = {{fontSize : '1.3rem' , fontWeight : '600' , margin : '0'}}>{moment.unix(eventsData[event].startTime).format('LT')}</p><p style = {{margin : '0' , fontSize : '0.7rem'}}>{moment.unix(eventsData[event].startTime).format('ll')}</p></div>
                                                <div><p style = {{fontSize : '1.3rem' , fontWeight : '600' , margin : '0'}}>{moment.unix(eventsData[event].endTime).format('LT')}</p><p style = {{margin : '0' , fontSize : '0.7rem'}}>{moment.unix(eventsData[event].endTime).format('ll')}</p></div>
                                            </div>}
                                            <Button onClick = {()=>redirectbutton(eventsData[event].url)} style={{alignSelf : 'flex-start'}} size='small' variant = 'outlined' color = 'primary'>Learn More&nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i></Button>
                                            </div>
                                        </div>
                                </Tilt>
                            </div>
                        )
                    })
                }
            </div>
            {scrollbutton(eventsData) && <IconButton className = 'events-scroll-button right-button' onClick = {()=>handlenav('right' , navref)}><i class="fa fa-chevron-right" aria-hidden="true"></i></IconButton>}
        </div>
        : noEvents()
    )
}
  

function Events(){
    const [eventsJSONData , setEventsJSONData] = useState(null)
    const [tiltData , setTiltData] = useState({});
    const [eventsLiveData , setEventsLiveData] = useState({})
    const [eventsComingData , setEventsComingData] = useState({})
    const [eventsPastData , setEventsPastData] = useState({})
    const livenavref = useRef(null)
    const comingnavref = useRef(null)
    const pastnavref = useRef(null)
    const [currentTab , setCurrentTab] = useState(0)
    

    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/dscpccoe/events/main/data.json')
        .then(response => response.json()).catch(e => alert('something went wrong'))
        .then(data => setEventsJSONData(data))
    },[])

    useEffect(()=>{
        // setEventsData(eventsJSONData)
        if(eventsJSONData == null) return;
        let live = {}
        let coming = {}
        let past = {}
        let currenttime = moment().unix()
        // console.log(typeof(moment().unix()))
        Object.keys(eventsJSONData).forEach((event , index) => {
            let currentevent = eventsJSONData[event]
            if(Number(currentevent.startTime) > currenttime){
                coming = {...coming , [event] : currentevent}
            }
            else if(Number(currentevent.startTime) <= currenttime && Number(currentevent.endTime) >= currenttime){
                live = {...live , [event] : currentevent}
            }
            else{
                past = {...past , [event] : currentevent}
            }
        })
        setEventsLiveData(live)
        setEventsComingData(coming)
        setEventsPastData(past)
        let tempdata = {}
        Object.keys(eventsJSONData).forEach((event)=>{
            tempdata[event] = {tX : 0 , tY : 0}
        })
        setTiltData(tempdata)
    },[eventsJSONData])

    const TabChange = (event  , newTab) =>{
        setCurrentTab(newTab)
    }

    return(
        <div  style = {{display : 'flex' , flexDirection : 'column', minHeight:"75vh"}}>
            <h1 className="text-center my-3">Events</h1>
        <Tabs
            value = {currentTab}
            onChange = {TabChange}
            indicatorColor = 'primary'
            variant = 'scrollable'
            scrollButtons = 'auto'
            style = {{alignSelf : 'center'}}
            aria-label="scrollable auto tabs example"
            >
            <Tab className = 'event-tab' label = 'Live'/>
            <Tab className = 'event-tab' label = 'Upcoming'/>
            <Tab className = 'event-tab' label = 'Past'/>
        </Tabs>
        {/* cards for live events */}
        <TabPanel value = {currentTab} index = {0}>
            <EventCard eventsData = {eventsLiveData} setEventsData = {setEventsLiveData} navref = {livenavref} tiltData = {tiltData} setTiltData = {setTiltData} past = {false}/>
        </TabPanel>
        {/* cards for upcoming events */}
        <TabPanel value = {currentTab} index = {1}>
            <EventCard eventsData = {eventsComingData} setEventsData = {setEventsComingData} navref = {comingnavref} tiltData = {tiltData} setTiltData = {setTiltData} past = {false}/>
        </TabPanel>
        {/* cards for past events */}
        <TabPanel value = {currentTab} index = {2}>
            <EventCard eventsData = {eventsPastData} setEventsData = {setEventsPastData} navref = {pastnavref} tiltData = {tiltData} setTiltData = {setTiltData} past = {true}/>
        </TabPanel> 
        </div>
    )
}

export default Events