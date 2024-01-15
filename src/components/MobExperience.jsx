import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import'./mob.css'
const MobExperience = () => {
    return (
        <div>
            <VerticalTimeline  lineColor= "black" animate ={true} >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'black', color: '#fff' ,width:"82vw",marginLeft:"12vw" }}
                    contentArrowStyle={{ borderRight: '7px solid black' }}
                    date="June 2021 - Present, Bangalore"
                    iconStyle={{ background: 'black',width:"10px",height:"10px" ,margin: "14px"}}
                   
                >
                    <h3 className="vertical-timeline-element-title " style={{marginButtom:"2vw",fontSize:"6vw"}}>Software Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Softway</h4>
                    <p className='f-garamond' >
                    Developed robust application architecture for web-based enterprise software. Contributed significantly to three diverse projects, showcasing adaptability.
                    </p>
                    <p className='f-garamond'>
                    Tech Stack: React.js, Electron.js, JavaScript, Node.js, AWS.
                    </p>
                    

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'black', color: '#fff' ,width:"82vw",marginLeft:"12vw" }}
                    contentArrowStyle={{ borderRight: '7px solid black' }}
                    date = "March 2021 - May 2021, Ahmadabad"

                    iconStyle={{ background: 'black',width:"10px",height:"10px" ,margin: "14px"}}
                    
                >
                    <h3 className="vertical-timeline-element-title" style={{marginButtom:"2vw",fontSize:"6vw"}}>FULL-STACK DEVELOPER INTERN</h3>
                    <h4 className="vertical-timeline-element-subtitle">Infoware India Pvt Ltd</h4>
                    <p className='f-garamond'>
                    Developed React and node full-stack applications with the team, efficiently deploying code to production and releasing stable releases on the schedule.    
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="November 2020 - March 2021, Noida"
                    contentStyle={{ background: 'black', color: '#fff' ,width:"82vw",marginLeft:"12vw" }}
                    contentArrowStyle={{ borderRight: '7px solid black' }}

                    iconStyle={{ background: 'black',width:"10px",height:"10px" ,margin: "14px"}}
                    
                >
                    <h3 className="vertical-timeline-element-title" style={{marginButtom:"2vw",fontSize:"6vw"}}>REACT DEVELOPER INTERN</h3>
                    <h4 className="vertical-timeline-element-subtitle">CREESYNC SOFTWARE TECHNOLOGIES</h4>
                    <p className='f-garamond'>
                    Created reusable React components that played a pivotal role in significant commercial projects, seamlessly integrated and utilized across the entire application.      
                    </p>
                </VerticalTimelineElement>
               
                <VerticalTimelineElement
                    iconStyle={{ background: 'black',width:"10px",height:"10px" ,margin: "14px"}}
                    />
            </VerticalTimeline>

        </div>
    )
}

export default MobExperience