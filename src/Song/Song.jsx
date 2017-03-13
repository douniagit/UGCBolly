import React from 'react';
import Navbar from "../navbar/Navbar.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import CLAudioPlayer from 'react-cl-audio-player';
//import Bande from "../Bande/Bande.jsx";

import './claudioPlayer.css';

const songs = [
  {
    url: ' SurajHuaMaddham.mp3',
    cover: 'http://static.filmfare.com/content/2015/Dec/thumb_1441285805_600x450_1450089705.jpg',
    artist: {
      name: 'KABHI KHUSHI KABHIE GHAM',
      song: 'Suraj Hua Maddham'
    }
  },
  {
    url: 'CholiKePeecheKyaHai.mp3',
    cover: 'http://i10.dainikbhaskar.com/thumbnail/655x588/web2images/www.dailybhaskar.com/2016/07/10/khalnayak_cover_146813959.jpg',
    artist: {
      name: 'KHALNAYAK',
      song: 'Choli Ke Peeche Kya Hai'
    }
  },
  {
    url: 'Criminal.mp3',
    cover: 'https://i.ytimg.com/vi/UO3SdeZm-5M/maxresdefault.jpg',
    artist: {
      name: 'RA.ONE',
      song: 'Criminal'
    }
  },
  {
    url: 'DolaReDola.mp3',
    cover: 'http://merylia.m.e.pic.centerblog.net/wwzvc59w.jpg',
    artist: {
      name: 'DEVDAS',
      song: 'Dola Re Dola'
    }
  },
  {
    url: 'KalHoNaaHo.mp3',
    cover: 'https://bollyspice.com/wp-content/uploads/2013/11/13nov_10thAnniversaryKHNH07.jpg',
    artist: {
      name: 'KAL HO NAA HO',
      song: 'Kal Ho Naa Ho'
    }
  },
  {
    url: 'KaliyonKaChaman.mp3',
    cover: 'http://ahdwallpaper.com/wp-content/uploads/2015/04/Meghna-Naidu-Cuite.jpg',
    artist: {
      name: 'MEGHNA NAIDU',
      song: 'Kaliyon Ka Chaman'
    }
  },
  {
    url: 'RadhaKaiseNaJale.mp3',
    cover: 'http://www.voicesofyouth.org/assets/556f5d6294687-full.jpeg',
    artist: {
      name: 'LAGAAN',
      song: 'Radha Kai se Na jale'
      }
    },
    {
    url: 'RoshniSe.mp3',
    cover: 'http://www.fotoguru.co/upload/images/2017/2/movie-poster-hd-wallpapers-ashoka-the-great-2001.jpg',
    artist: {
      name: 'ASHOKA',
      song: 'Roshni Se'
    }
  },
  {
    url: 'TumseMilkeDilkaJoHaal.mp3',
    cover: 'https://s-media-cache-ak0.pinimg.com/originals/e4/93/6c/e4936c2aba5947720e0df4fe288d304f.jpg',
    artist: {
      name: 'ME HOON NA',
      song: 'Tumse Milke Dil Ka Jo Haal'
    }
  }
  
];

class Song extends React.Component {
  render() {
    return (
      <div className="Song">
        
        <Navbar />
        <Header />
        {/*} <Bande />*/}
       	<CLAudioPlayer songs={songs} controls autoplay/>
        <Footer />
        

      </div>
    );
  }
}

export default Song;