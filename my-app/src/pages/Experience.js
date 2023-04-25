import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

import "../styles/Experience.css";


function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e947a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="10/2022 - 05/2023"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Full Stack Developer
                    </h3>
                    <p> Full Stack Developer Certificate</p>
                    /</VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="10/2022 - 05/2023"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        University of Pennsylvania</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Philadelphia,PA
                    </h4>
                    <p>Developed 3 Projects </p>
                    /</VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="05/2023 - present"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >

                    <h3 className="vertical-timeline-element-title">
                        Full Stack Developer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Philadelphia,PA
                    </h4>
                    <p>Helped the team launch 2 major features by working
                        both in the front end and back end
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>

    );
}

export default Experience;;