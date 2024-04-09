import React from 'react'
import Head from "next/head";
import styles from "@/styles/Events.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const events = () => {
  const upcomingevent = { name: "wittyhacks", location: "Indore, India", description: 'Wittyhacks prides itself on being Central India’s biggest community hackathon. Since its inception in 2018, Wittyhacks has been a platform where technology leaders and the brightest minds come together to collaborate on building tools that solve real problems.', date: '5 April 2024', link: '', image: 'https://wittyhacks4.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fe9e2409ea9734a56bedc7dc688c8ff3c%2Fassets%2Fcover%2F918.jpeg&w=1440&q=100' };

  // const pastevents = [{
  // }];

  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <div className={styles.page1}>
          <div className={styles.box1}></div>
          <h1>Upcoming <span style={{ WebkitTextStroke: '2px white', color: 'transparent', letterSpacing: '1px' }}>Events</span></h1>
        </div>

        <div className={styles.page2}>
          <img src={upcomingevent.image} alt="no_image_found" />
          <div className={styles.upcomingC}>
            <Link href={upcomingevent.link}><h1>{upcomingevent.name} <FaExternalLinkAlt size={20} style={{ marginLeft: '0.5rem' }} /></h1></Link>
            <p>{upcomingevent.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>            <h2><FaLocationDot size={20} style={{ marginRight: '0.5rem' }} /> {upcomingevent.location}</h2>
              <h2><MdDateRange size={20} style={{ marginRight: '0.5rem' }} /> {upcomingevent.date}</h2></div>
          </div>
        </div>

        <div className={styles.page3}>
          <h3>Past Events</h3> <br />
          {/*<div className={styles.page3past}>
        <img src={upcomingevent.image} alt="no_image_found" />
          <div className={styles.pastC}>
            <Link href={upcomingevent.link}><h1>{upcomingevent.name} <FaExternalLinkAlt size={20} style={{marginLeft:'0.5rem'}}/></h1></Link>
            <p>{upcomingevent.description}</p>
              <div style={{display:'flex', justifyContent:'space-between',marginTop:'0.5rem'}}>            <h2><FaLocationDot size={20} style={{marginRight:'0.5rem'}}/> {upcomingevent.location}</h2>
            <h2><MdDateRange size={20} style={{marginRight:'0.5rem'}}/> {upcomingevent.date}</h2></div>
          </div>
          </div>*/}
          <h4 style={{ textAlign: 'center' }}>Currenty there is no past events </h4>
        </div>

      </main>

    </>
  )
}

export default events