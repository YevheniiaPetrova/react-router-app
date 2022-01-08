import React from "react";
import './main.css'
import storms1 from "../../assets/storms1.jpeg";
import storms2 from "../../assets/storms2.jpeg";
import storms3 from "../../assets/storms3.jpeg";

const Main = () => {
    return <div className="main">
        <h2>NASA can see storms from space.</h2>
        <p>From space, NASA can see so much more than what’s visible to the naked eye. Among NASA’s missions, NASA and NOAA have joint satellite missions
            monitoring storms in natural color -- what our eyes see -- as well as in other wavelengths of light, which can help identify features our eyes
            can’t on their own. For instance, images taken in infrared can show the temperatures of clouds, as well as allow us to track the movement of storms
            at night.</p>
        <div>
            <img className="main-img" src={storms1} width={400} height={200} alt="" ></img>
        </div>
        <h2>We’re looking at how climate change affects hurricane behavior.</h2>
        <p>Climate change is likely causing storms to behave differently. One change is in how storms intensify: More storms are increasing in strength quickly, 
            a process called rapid intensification, where hurricane wind speeds increase by 35 mph (or more) in just 24 hours.</p>
        <p>In 2020, a record-tying nine storms rapidly intensified. These quick changes in storm strength can leave communities in their path without time to
            properly prepare.</p>
        <p>Researchers at NASA JPL developed a machine learning model that could more accurately detect rapidly intensifying storms.</p>
        <div>
            <img className="main-img" src={storms2} width={400} height={200} alt="" ></img>
        </div>
        <p>It’s not just about how quickly hurricanes gain strength. Scientists at NASA are also looking at how climate change may be causing storms to move more
            slowly, which makes them more destructive. These “stalled” storms can slow to just a few miles an hour, dumping rain and damaging winds on one location
            at a time. Hurricane Dorian, for example, stalled over Grand Bahama and left catastrophic damage in its wake. Hurricanes Harvey and Florence experienced
            stalling as well, both causing major flooding.</p>
        <div>
            <img className="main-img" src={storms3} width={400} height={200} alt="" ></img>
        </div>

    </div>
}

export default Main;