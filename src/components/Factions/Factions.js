import React, {useEffect} from 'react'
import "./Factions.css"
import tonyStark from "../../images/wallpaperflare.com_wallpaper (9).jpg";
import AvgBg from "../../images/wallpaperflare.com_wallpaper (10).jpg";
import GaurdianBg from "../../images/wallpaperflare.com_wallpaper (11).jpg";
import NavBar from "../NavBar/NavBar"
import {fetchData} from "./data"
import RosterCard from './RosterCard';


function Factions() {

    document.title = "Marvel Fandom | Factions"

    const initialData = fetchData(1);
    const gInitialData = fetchData(7);
    const xInitialData = fetchData(13);
    const vInitialData = fetchData(19);

  return (
    <React.Fragment>
        
        <section className='roster-section'>
            
            <div className='roster-container'>
            
                <div className='roster-list'>

                    <RosterCard id={1} name="Iron Man" img = "https://c4.wallpaperflare.com/wallpaper/978/488/20/scarlett-johansson-infinity-vision-hulk-wallpaper-preview.jpg" factionName="avenger"></RosterCard>
                    <RosterCard id={2} name="Captain America" img = "https://c4.wallpaperflare.com/wallpaper/334/76/1000/scarlett-johansson-infinity-vision-hulk-wallpaper-preview.jpg" factionName="avenger"></RosterCard>
                    <RosterCard id={3} name = "Black Widow" img = "https://c4.wallpaperflare.com/wallpaper/820/539/798/8k-black-widow-scarlett-johansson-avengers-infinity-war-wallpaper-preview.jpg" factionName="avenger"></RosterCard>
                    <RosterCard id={4} name = "The Hulk" img = "https://w0.peakpx.com/wallpaper/801/453/HD-wallpaper-hulk-in-avengers-infinity-war-new-poster-hulk-avengers-infinity-war-infinity-war-avengers-2018-movies-movies-poster.jpg" factionName="avenger"></RosterCard>
                    <RosterCard id={5} name = "Thor" img = "https://c4.wallpaperflare.com/wallpaper/688/198/426/scarlett-johansson-infinity-vision-hulk-wallpaper-preview.jpg" factionName="avenger"></RosterCard>
                    <RosterCard id={6} name = "Hawk Eye" img = "https://sportshub.cbsistatic.com/i/2021/03/17/dddfa240-878e-4f0c-a165-d77b5a4e04c0/avengers-endgame-hawkeye-ronin-1167795.jpg" factionName="avenger"></RosterCard>
                    
                </div>
                <div className='roster-info'>
                    <div className='roster-info-container'>
                        <img className='roster-info-img' src={AvgBg}></img>
                        <div className='roster-info-text'>
                            <h1 id='faction-name'>AVENGERS</h1>
                            <h3 id='faction-hero-name' className='avenger-hero-name'>{initialData.name}</h3>
                            <p id='faction-hero-para' className='avenger-hero-para'>
                                {initialData.para}
                            </p>
                        </div>
                        <img id='faction-hero-img' className='avenger-hero-img' src={initialData.img}></img>
                    </div>
                </div>
            </div>
        </section>

        <section className='roster-section'>
            
            <div className='roster-container'>
            
                <div className='roster-list'>

                    <RosterCard id={7} name="Star Lord" img = "https://c4.wallpaperflare.com/wallpaper/947/183/826/star-lord-12k-hd-4k-wallpaper-preview.jpg" factionName="guardian"></RosterCard>
                    <RosterCard id={8} name="Groot" img = "https://c4.wallpaperflare.com/wallpaper/135/166/559/movie-guardians-of-the-galaxy-groot-wallpaper-preview.jpg" factionName="guardian"></RosterCard>
                    <RosterCard id={9} name = "Rocket" img = "https://c4.wallpaperflare.com/wallpaper/511/618/431/cinema-gun-weapon-wallpaper-preview.jpg" factionName="guardian"></RosterCard>
                    <RosterCard id={10} name = "Gamora" img = "https://c4.wallpaperflare.com/wallpaper/626/327/749/guardians-of-the-galaxy-marvel-gamora-zoe-saldana-hd-wallpaper-preview.jpg" factionName="guardian"></RosterCard>
                    <RosterCard id={11} name = "Drax" img = "https://c4.wallpaperflare.com/wallpaper/222/697/215/guardians-of-the-galaxy-marvel-drax-hd-drax-the-destroyer-wallpaper-preview.jpg" factionName="guardian"></RosterCard>
                    <RosterCard id={12} name = "Mantis" img = "https://c4.wallpaperflare.com/wallpaper/853/766/437/movie-guardians-of-the-galaxy-vol-2-mantis-marvel-comics-pom-klementieff-wallpaper-preview.jpg" factionName="guardian"></RosterCard>
                    
                </div>
                <div className='roster-info'>
                    <div className='roster-info-container'>
                        <img className='roster-info-img' src={GaurdianBg}></img>
                        <div className='roster-info-text'>
                            <h1 id='faction-name'>GUARDIANS</h1>
                            <h3 id='faction-hero-name' className='guardian-hero-name'>{gInitialData.name}</h3>
                            <p id='faction-hero-para' className='guardian-hero-para'>
                                {gInitialData.para}
                            </p>
                        </div>
                        <img id='faction-hero-img' className='guardian-hero-img' src={gInitialData.img}></img>
                    </div>
                </div>
            </div>
        </section>

        <section className='roster-section'>
            
            <div className='roster-container'>
            
                <div className='roster-list'>

                    <RosterCard id={13} name="Wolverine" img = "https://c4.wallpaperflare.com/wallpaper/92/986/321/x-men-wolverine-adamantium-claws-wallpaper-preview.jpg" factionName="xmen"></RosterCard>
                    <RosterCard id={14} name="Professor X" img = "https://c4.wallpaperflare.com/wallpaper/696/772/38/movie-logan-hugh-jackman-logan-movie-wallpaper-preview.jpg" factionName="xmen"></RosterCard>
                    <RosterCard id={15} name = "Mystique" img = "https://c4.wallpaperflare.com/wallpaper/277/366/557/movie-x-men-dark-phoenix-jennifer-lawrence-mystique-marvel-comics-wallpaper-preview.jpg" factionName="xmen"></RosterCard>
                    <RosterCard id={16} name = "Rogue" img = "https://cdn.mos.cms.futurecdn.net/fv8rV2o6boSuipAbf5uvkU-1200-80.jpg" factionName="xmen"></RosterCard>
                    <RosterCard id={17} name = "Cyclops" img = "https://qph.cf2.quoracdn.net/main-qimg-8d98760fed3dabbe3bafb822872c98df-pjlq" factionName="xmen"></RosterCard>
                    <RosterCard id={18} name = "Juggernaut" img = "https://www.giantfreakinrobot.com/wp-content/uploads/2021/01/juggernaut1-900x506.jpg" factionName="xmen"></RosterCard>
                    
                </div>
                <div className='roster-info'>
                    <div className='roster-info-container'>
                        <img className='roster-info-img' src="https://wallpaperaccess.com/full/3262569.jpg"></img>
                        <div className='roster-info-text'>
                            <h1 id='faction-name'>X-MEN</h1>
                            <h3 id='faction-hero-name' className='xmen-hero-name'>{xInitialData.name}</h3>
                            <p id='faction-hero-para' className='xmen-hero-para'>
                                {xInitialData.para}
                            </p>
                        </div>
                        <img id='faction-hero-img' className='xmen-hero-img' src={xInitialData.img}></img>
                    </div>
                </div>
            </div>
        </section>

        <section className='roster-section'>
            
            <div className='roster-container'>
            
                <div className='roster-list'>

                    <RosterCard id={19} name="Thanos" img = "https://c4.wallpaperflare.com/wallpaper/138/645/280/marvel-titan-comics-2018-wallpaper-preview.jpg" factionName="villain"></RosterCard>
                    <RosterCard id={20} name="Kang The Conqueror" img = "https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/51ce6099e4b0d911b4489b79/63ecee31cf45de088f069e93/1676485816507/jonathan-majors-kang-the-conqueror-is-marvels-highest-rated-villain-with-test-audiences.jpg?format=1500w" factionName="villain"></RosterCard>
                    <RosterCard id={21} name = "Ultron" img = "https://c4.wallpaperflare.com/wallpaper/148/177/244/ultron-marvel-comics-smoke-robot-wallpaper-preview.jpg" factionName="villain"></RosterCard>
                    <RosterCard id={22} name = "Red Skull" img = "https://c4.wallpaperflare.com/wallpaper/843/421/160/the-film-2011-captain-america-captain-america-wallpaper-preview.jpg" factionName="villain"></RosterCard>
                    <RosterCard id={23} name = "Green Goblin" img = "https://c4.wallpaperflare.com/wallpaper/918/939/679/green-goblin-spider-man-no-way-home-marvel-cinematic-universe-hd-wallpaper-preview.jpg" factionName="villain"></RosterCard>
                    <RosterCard id={24} name = "Hela" img = "https://c4.wallpaperflare.com/wallpaper/478/298/565/thor-thor-ragnarok-hela-valkyries-wallpaper-preview.jpg" factionName="villain"></RosterCard>
                    
                </div>
                <div className='roster-info'>
                    <div className='roster-info-container'>
                        <img className='roster-info-img' src="https://cdn.wallpapersafari.com/56/32/Or1CAT.jpg"></img>
                        <div className='roster-info-text'>
                            <h1 id='faction-name'>VILLAINS</h1>
                            <h3 id='faction-hero-name' className='villain-hero-name'>{vInitialData.name}</h3>
                            <p id='faction-hero-para' className='villain-hero-para'>
                                {vInitialData.para}
                            </p>
                        </div>
                        <img id='faction-hero-img' className='villain-hero-img' src={vInitialData.img}></img>
                    </div>
                </div>
            </div>
        </section>

        

    </React.Fragment>
  )
}

export default Factions