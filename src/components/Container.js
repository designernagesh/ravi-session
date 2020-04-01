import React from 'react'
import TopStory from './TopStory'
import img1 from '../images/img1.jpg'

const Container = () => {
    return(
        <div className="container1">
            <h2>Top Stories</h2>
            <TopStory 
            src="https://c.ndtvimg.com/2020-03/dqqfmbs8_coronaviruspregnantwoman_120x90_29_March_20.jpg?output-quality=80&downsize=105:79" 
            alt="ndtvimage" 
            content="Pregnant Woman Turned Back By Delhi Cops As Migrants Struggle To Get Home" />

            <TopStory
            src={img1}
            alt="ndtvimage"
            content="2 Men From Nagaland Denied Entry To Mysuru Store Amid COVID-19 Scare" />

            <TopStory 
            src="https://c.ndtvimg.com/2020-03/dqqfmbs8_coronaviruspregnantwoman_120x90_29_March_20.jpg?output-quality=80&downsize=105:79" 
            alt="ndtvimage" 
            content="Walking Home From Delhi For Over 200 km, Delivery Agent Dies On Highway" />

            <TopStory 
            src="https://c.ndtvimg.com/2020-03/dqqfmbs8_coronaviruspregnantwoman_120x90_29_March_20.jpg?output-quality=80&downsize=105:79" 
            alt="ndtvimage" 
            content="Pregnant Woman Turned Back By Delhi Cops As Migrants Struggle To Get Home" />

            <TopStory 
            src="https://c.ndtvimg.com/2020-03/dqqfmbs8_coronaviruspregnantwoman_120x90_29_March_20.jpg?output-quality=80&downsize=105:79" 
            alt="ndtvimage" 
            content="Pregnant Woman Turned Back By Delhi Cops As Migrants Struggle To Get Home" />       

        </div>
    )
}

export default Container
