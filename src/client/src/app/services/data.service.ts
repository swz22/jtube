import { Injectable } from '@angular/core';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  filteredVideos;

  filteredItems(search?): any {
    if (!search) {
      this.filteredVideos = this.shuffle(this.videoList);
    } else {
      this.filteredVideos = this.videoList.filter((video) =>
        video.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  }

  shuffle(list) {
    let newList = list.slice(1)
    let shuffleList = newList.reduce((p, n) => {
      const size = p.length;
      const index = Math.trunc(Math.random() * (size - 1));
      p.splice(index, 0, n);
      return p;
    }, []);

    return [list[0]].concat(shuffleList)
  }






  videoList: Array<Video> = [
    {
      id: '1',
      type: 'Sports',
      name: 'What Is Bitwise? | Bitwise Industries',
      author: 'Bitwise Industries',
      url: 'https://www.youtube.com/watch?v=yONlf6fSSI4',
      avatarurl: 'https://yt3.ggpht.com/wvoJyH9G5za5yHtD3f9_LnToPWlyz6cL4zOR1IivyF-TpfZH-P7t-ffp2sWu1pZMBLvnLOIL=s68-c-k-c0x00ffffff-no-rj',
      authorurl: 'https://www.youtube.com/channel/UCDT-S9qUcFofPtpC8W5zcJA',
      pictureurl: 'https://i.ytimg.com/vi/yONlf6fSSI4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoVGLKk6OBGxPCXmqtzqi7L2wfwg',
      views: '8K views',
    },

    {
      id: '2',
      type: 'Movies',
      name: 'House Of The Dragon | Official Teaser',
      author: 'HBO Max',
      url: 'https://www.youtube.com/watch?v=fNwwt25mheo',
      authorurl: 'https://www.youtube.com/channel/UCx-KWLTKlB83hDI6UKECtJQ',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQT2zOlOqmyG0ocscCQhhAZ6MCxPzoI3lnSBzKclg=s88-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/fNwwt25mheo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCd3Z8XFj9aXk5TyrRllra86sEtVg',
      views: '4.8M views',
    },
    {
      id: '3',
      type: 'Sports',
      name: 'Rams vs. Seahawks Week 5 Highlights',
      author: 'NFL',
      url: 'https://www.youtube.com/watch?v=BsKtDfMjHEo&',
      authorurl: 'https://www.youtube.com/user/NFL',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQQ8np3nnw8dP1yLcnsSIcCbE_aU5YjrA-WyqAsXGk=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/BsKtDfMjHEo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6mVVppLA0D9WOxZ8cUSwOYhlWzw',
      views: '2.4M views',
    },
    {
      id: '4',
      type: 'Cars',
      name: 'Flame Spitting R35 GTR in [4K] | Woyshnis Media',
      author: 'Woyshnis Media',
      authorurl: 'https://www.youtube.com/channel/UCk55DOnuAgOiFnBj-0XXwGQ',
      url: 'https://www.youtube.com/watch?v=vlDOjTaaEdA',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLTIIrDSyv8z8bWCF4t-y6MaMUQ9rgbbYCQX6U4ftjY=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/vlDOjTaaEdA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCId19ZFBfY2TZsR4TpNs_i5Gv2Mg',
      views: '1M views',
    },
    {
      id: '5',
      type: 'Food',
      name: "Gordon's Quick & Simple Dinner Recipes",
      author: 'Gordon Ramsay',
      authorurl: 'https://www.youtube.com/channel/UCIEv3lZ_tNXHzL3ox-_uUGQ',
      url: 'https://www.youtube.com/watch?v=X_qo3lnRS1k',
      avatarurl:
        'https://yt3.ggpht.com/bFpwiiOB_NLCVsIcVQ9UcwBjb1RzipnMmtNfLSWpeIaHboyGkBCq4KBitmovRbStk9WvIWIZOyo=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/X_qo3lnRS1k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvlFGi-uAQFQ36kSYN3BwaO2sOOw',
      views: '16.3M views',
    },
    {
      id: '6',
      type: 'Games',
      name: 'Forza Horizon 5 - The Final Preview',
      author: 'IGN',
      authorurl: 'https://www.youtube.com/c/IGN',
      url: 'https://www.youtube.com/watch?v=AHDj_hL4x6c',
      avatarurl:
        'https://yt3.ggpht.com/H_---ano_f27DOCejDhUdBMtBcxcv32MoXmFKQc_mBcxYSH4HPZTGuBUdm7UgI5VlutMOVX2=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/AHDj_hL4x6c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjNSrVt_-rcAR0yV2bRBM6zMwwgA',
      views: '158K views',
    },
    {
      id: '7',
      type: 'Travel',
      name: 'Big Sur: 8 Things to do on a Road Trip',
      author: 'California Through My Lens',
      authorurl: 'https://www.youtube.com/channel/UCZFRs1R9ECKDwnLy5IQzwkg',
      url: 'https://www.youtube.com/watch?v=HLxWrKHWQ6Q',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLROzPj8o2FWGFzJntlDUppMDTiV4hK0-CIlNlj_DQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/HLxWrKHWQ6Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaVHHGQ7hMgTT51UaELJu-Kc4kAg',
      views: '58k views',
    },
    {
      id: '8',
      type: 'Movies',
      name: 'Squid Game | Official Trailer | Netflix',
      author: 'Netflix',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      url: 'https://www.youtube.com/watch?v=oqxAJKy0ii4',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/oqxAJKy0ii4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCg-KGxP_f_N0jyxZ12mH2uOn8YXw',
      views: '19M views',
    },
    {
      id: '9',
      type: 'Nature',
      name: 'Our Planet | Coastal Seas | Netflix | Full Episode',
      author: 'Netflix',
      url: 'https://www.youtube.com/watch?v=r9PeYPHdpNo',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/r9PeYPHdpNo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHFYI2GE7zfQTPWhh-kEZ1Uicd1A',
      views: '15M views',
    },
    {
      id: '10',
      type: 'Movies',
      name: 'Space Jam: A New Legacy - Trailer 1',
      author: 'Warner Bros. Pictures',
      authorurl: 'https://www.youtube.com/channel/UCwYzZs_hwA6NdaQp6Hjhe5w',
      url: 'https://www.youtube.com/watch?v=0H2cIbUGJJc',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQXLYSWClZTjdXRVhw2UlJInqZ52SCnCay0AyHz0A=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/0H2cIbUGJJc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOw8BiEdRuh8OyGlIL1SXfgziNwQ',
      views: '25M views',
    },
    {
      id: '11',
      type: 'Coding',
      name: 'Angular ngrx Redux Quick Start Tutorial',
      author: 'Fireship',
      authorurl: 'https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA',
      url: 'https://www.youtube.com/watch?v=f97ICOaekNU',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/f97ICOaekNU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5q_d9ryoeABFCeqYyY73SDeMk4Q',
      views: '147K views',
    },
    {
      id: '12',
      type: 'Sports',
      name: 'UFC 259 : Israel Adesanya VS Paulo Costa',
      author: 'MMA CENTER',
      authorurl: 'https://www.youtube.com/channel/UCyZ5atg3BWVCAbGA8gmwoHw',
      url: 'https://www.youtube.com/watch?v=FMLwaayWiMM',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLRy2ZqbWuLW8I05hTmlgFSpzwUfZoNp02rbf6EB=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/FMLwaayWiMM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCky7hQXzQvaU8fY9g531XMN3mTTw',
      views: '58k views',
    },
    {
      id: '13',
      type: 'Cars',
      name: 'F9 - Official Trailer [HD] | The Fast Saga',
      author: 'The Fast Saga',
      authorurl: 'https://www.youtube.com/channel/UCJCx8aQrdx_ueXPmxTD2odQ',
      url: 'https://www.youtube.com/watch?v=aSiDu3Ywi8E',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLTH52hMEEUdLgPilzIZfN3_DD7SiuOmd_ymGM21fg=s88-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/aSiDu3Ywi8E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCX4mFH3wsIstKm4gDlM89Myv4Leg',
      views: '53M views',
    },
    {
      id: '14',
      type: 'Food',
      name: 'Brooklyn is Pizza Heaven | Munchies',
      author: 'Munchies',
      authorurl: 'https://www.youtube.com/channel/UCaLfMkkHhSA_LaCta0BzyhQ',
      url: 'https://www.youtube.com/watch?v=mH7vFc0bUpU',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSxdRPwpFCY12WZxi7Nsi4atL-TTVJnALLOU6umMQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/mH7vFc0bUpU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYpCklwmRkdygJ4nmUTG3cFf62jA',
      views: '259K views',
    },
    {
      id: '15',
      type: 'Travel',
      name: 'Santorini (Greece) - Impressions & Sunset',
      author: 'Luxury Travel Expert',
      url: 'https://www.youtube.com/watch?v=cKedc8trR2Y',
      authorurl: 'https://www.youtube.com/channel/UCYxsXxbjJO1YYa9yQ3lKC8w',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQwnAIPLW6qpKiXrIncsTg93Qx2502AHMdxJUxnVg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/cKedc8trR2Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKzrT_0QN8QiTTlom8Ni3UDUa2Ow',
      views: '1.1M views',
    },
    {
      id: '16',
      type: 'Sports',
      name: '2021 Fantasy Football - Week 5 Start or Sit',
      author: 'The Fantasy Headliners',
      authorurl: 'https://www.youtube.com/channel/UCClRnPtjFEm7Is7hpSoTBeg',
      url: 'https://www.youtube.com/watch?v=C41i8-a3QKY',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLRLT6XrUYPKZmmlkqy-38fhzik_yRFq_EUERpLI4g=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/C41i8-a3QKY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0uNxMsX95lEZJ0cnePaB8Hsvkmw',
      views: '6.3K views',
    },
    {
      id: '17',
      type: 'Food',
      name: 'Thai Street Food in Bangkok - Lunch Noodles',
      author: 'Mark Wiens',
      authorurl: 'https://www.youtube.com/channel/UCyEd6QBSgat5kkC6svyjudA',
      url: 'https://www.youtube.com/watch?v=uEMd6tQQIp8',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLRP1exSG7F2grAksH35bQpQh0ryXciffzC038vlUYg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/uEMd6tQQIp8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6pK5q5SxRmwP1uoDyIWD2sw6luw',
      views: '4.4M views',
    },
    {
      id: '18',
      type: 'Nature',
      name: 'Our Planet | Forests | Netflix | Full Episode',
      author: 'Netflix',
      url: 'https://www.youtube.com/watch?v=JkaxUblCGz0',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/JkaxUblCGz0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCWMoUDwcmrjOqR6f_4Gh_6OZjTYw',
      views: '19M views',
    },

    {
      id: '19',
      type: 'Comedy',
      name: 'Substitute Teacher - Key & Peele | Comedy Central',
      author: 'Comedy Central',
      authorurl: 'https://www.youtube.com/channel/UCUsN5ZwHx2kILm84-jPDeXw',
      url: 'https://www.youtube.com/watch?v=Dd7FixvoKBw',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQ0hOB56v2pfSoZT_FEeI36rI_UFlaaIAhNDQQw8Q=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/Dd7FixvoKBw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTWAWc_3ZmwfL0y1qlR8O7YDRXow',
      views: '201M views',
    },
    {
      id: '20',
      type: 'Travel',
      name: 'New York in 8K ULTRA HD - Capital of Earth',
      author: '8K World',
      authorurl: 'https://www.youtube.com/channel/UC4CAxaO75mfkPr3GRiSGE_w',
      url: 'https://www.youtube.com/watch?v=h3fUgOKFMNU',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSS1lyM1dY-UqjVb023wncf64ON14K9N6zQwSVH=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/h3fUgOKFMNU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEq5NaJBKogW2H6u32uVbXLDUycw',
      views: '5.4M views',
    },
    {
      id: '21',
      type: 'Movie',
      name: 'THE PAPER TIGERS Official Trailer (2021)',
      author: 'Movie Trailers Source',
      authorurl: 'https://www.youtube.com/channel/UCpJN7kiUkDrH11p0GQhLyFw',
      url: 'https://www.youtube.com/watch?v=1zM3IpjY3CI',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSkNBClOIZNjJayMdTxRhUh6LYEXjjjCv0tMJ3-mA=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/1zM3IpjY3CI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCu9k64lx1MIZVAsmYAiPLkEW3mGg',
      views: '571K views',
    },
    {
      id: '22',
      type: 'Game',
      name: 'How to Spend 14 Days in Japan | Travel Guide',
      author: 'Allan Su',
      authorurl: 'https://www.youtube.com/channel/UCEt1Ef_TQfkaEmjRmOWiFog',
      url: 'https://www.youtube.com/watch?v=IuTDuvYr7f0',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQEiRT754TD46npSu_cpdcWP2mus1_hLBy1QGI9KQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/IuTDuvYr7f0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAg2F2V_V_v7XcJ4EEbLTbwdEDSfg',
      views: '2.4M views',
    },
    {
      id: '23',
      type: 'Food',
      name: 'Homemade Oatmeal Cream Pies | Munchies',
      author: 'Munchies',
      authorurl: 'https://www.youtube.com/channel/UCaLfMkkHhSA_LaCta0BzyhQ',
      url: 'https://www.youtube.com/watch?v=sskkVQPmXfE',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSxdRPwpFCY12WZxi7Nsi4atL-TTVJnALLOU6umMQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/sskkVQPmXfE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUjrCJeaovdxM3uMZT6sHkwccQnw',
      views: '161K views',
    },
    {
      id: '24',
      type: 'Nature',
      name: 'Our Planet | Jungles | Netflix | Full Episode',
      author: 'Netflix',
      url: 'https://www.youtube.com/watch?v=um2Q9aUecy0',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/um2Q9aUecy0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOLUAic0g_GHgQgxvnIrtaVLX47A',
      views: '9.8M views',
    },
    {
      id: '25',
      type: 'Food',
      name: 'Cooking With Spice | Gordon Ramsay',
      author: 'Gordon Ramsay',
      authorurl: 'https://www.youtube.com/channel/UCIEv3lZ_tNXHzL3ox-_uUGQ',
      url: 'https://www.youtube.com/watch?v=VkOtF4hjZkM',
      avatarurl:
        'https://yt3.ggpht.com/bFpwiiOB_NLCVsIcVQ9UcwBjb1RzipnMmtNfLSWpeIaHboyGkBCq4KBitmovRbStk9WvIWIZOyo=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/VkOtF4hjZkM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOT_Tm1N5ZzQ_fUpne_9hcNiRtpA',
      views: '456K views',
    },
    {
      id: '26',
      type: 'Music',
      name: 'lofi hip hop radio - beats to relax/study to',
      author: 'Lofi Girl',
      authorurl: 'https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow',
      url: 'https://www.youtube.com/watch?v=5qap5aO4i9A',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLRBxyT5Y9xKYWPmnShA_utGUvcJnxWaFmc0CtWTkg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/5qap5aO4i9A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdFbi1Gx9FyFCNirG605gfmuAb9A',
      views: '58k views',
    },
    {
      id: '27',
      type: 'Cars',
      name: 'Rescuing Richard From Lone Wolf Mountain',
      author: 'Top Gear',
      authorurl: 'https://www.youtube.com/channel/UCjOl2AUblVmg2rA_cRgZkFg',
      url: 'https://www.youtube.com/watch?v=rKtFJxGzJX8',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLT4ZRjRmcXQMgEBOpGpcGJy0cUllleR6MkREqdosHw=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/rKtFJxGzJX8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCe1phear5MGj_b3-V7crBRqjuftg',
      views: '18M views',
    },
    {
      id: '28',
      type: 'Food',
      name: 'The French Fry King of Rio de Janeiro | Munchies',
      author: 'Munchies',
      authorurl: 'https://www.youtube.com/channel/UCaLfMkkHhSA_LaCta0BzyhQ',
      url: 'https://www.youtube.com/watch?v=Fpny0WP8sYw',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSxdRPwpFCY12WZxi7Nsi4atL-TTVJnALLOU6umMQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/Fpny0WP8sYw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAyaHGLRc0L1WiSb9VNYPuWXQGaiA',
      views: '5M views',
    },

    {
      id: '29',
      type: 'Sports',
      name: 'Cardinals vs. Dodgers NL Wild Card Game',
      author: 'MLB',
      authorurl: 'https://www.youtube.com/channel/UCoLrcjPV5PbUrUyXq5mjc_A',
      url: 'https://www.youtube.com/watch?v=WRqYkw_NRT8',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLT41a2sBIkl_J8AIkt5UXbMPx48zoMZAOMQVm37sS8=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/WRqYkw_NRT8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDm1nuSCXjL6-4FRAKQeBYsyF77gQ',
      views: '525K views',
    },
    {
      id: '30',
      type: 'Nature',
      name: 'Our Planet | Deserts to Grasslands | Netflix',
      author: 'Netflix',
      url: 'https://www.youtube.com/watch?v=XmtXC_n6X6Q',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/XmtXC_n6X6Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqA-zo_7E-ov9VhUtJi-5sBPHrUQ',
      views: '24M views',
    },
    {
      id: '31',
      type: 'Games',
      name: 'Back 4 Blood: Open Beta Sneak Preview',
      author: 'IGN',
      authorurl: 'https://www.youtube.com/channel/UCKy1dAqELo0zrOtPkf0eTMw',
      url: 'https://www.youtube.com/watch?v=y8i30UY5B7Y',
      avatarurl:
        'https://yt3.ggpht.com/H_---ano_f27DOCejDhUdBMtBcxcv32MoXmFKQc_mBcxYSH4HPZTGuBUdm7UgI5VlutMOVX2=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/y8i30UY5B7Y/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBM3qfu2xuLTt9uSh-1w1X8jlWDQA',
      views: '1.1M views',
    },
    {
      id: '32',
      type: 'Music',
      name: 'Rick Roll | You Just Got Rick Rolled!',
      author: 'YouGotRickRolled',
      authorurl: 'https://www.youtube.com/channel/UC5JRyJxfozGZ9iHA0qb0Lag',
      url: 'https://www.youtube.com/watch?v=eBGIQ7ZuuiU',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQ2RTNbnA9MtQd9ZZ6U9kg_XdD-kBJzEonWhWKA=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/iik25wqIuFo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCREtD-51HaRp3VvMAoKY4BieWEbQ',
      views: '22M views',
    },
    {
      id: '33',
      type: 'Coding',
      name: 'Node.js Tutorial for Beginners: Learn Node in 1 Hour',
      author: 'Programming with Mosh',
      authorurl: 'https://www.youtube.com/user/programmingwithmosh',
      url: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQ09D8wVCdgWoCN3IPrvVKWi48-R2QZ_yJkCmKh-A=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/TlB_eWDSMt4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZra_0VBTMEYeCaYUD3QQ0G2kGWA',
      views: '3.6M views',
    },
    {
      id: '34',
      type: 'Documentary',
      name: 'Germany: The discreet lives of the super rich',
      author: 'DW Documentary',
      authorurl: 'https://www.youtube.com/channel/UCW39zufHfsuGgpLviKh297Q',
      url: 'https://www.youtube.com/watch?v=NXaVLXSZdEw',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQaTkyJnMs1DoSFuIWtPOm4MfdpZruAEQ9rwFYSvQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/NXaVLXSZdEw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASSfaL4IdTGSU8oIQqhUYBWz2i9Q',
      views: '12.6M views',
    },
    {
      id: '35',
      type: 'Documentary',
      name: 'Genghis Khan - BBC Documentary',
      author: 'Roothmens TV',
      authorurl: 'https://www.youtube.com/user/roothmens',
      url: 'https://www.youtube.com/watch?v=XAFnxV2GYRU',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQh_EDwviz0Vr-uHi32PpcbMnneVSkCBQf43J4E=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/XAFnxV2GYRU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAuLrdXY8MEQ4U_P1jdCIo-TXVGwg',
      views: '7.2M views',
    },
    {
      id: '36',
      type: 'Food',
      name: 'Udon Noodles In Osaka | Udon Soba',
      author: 'Udon Soba Osaka Nara',
      authorurl: 'https://www.youtube.com/channel/UCsyzqlcYZJUdAV2D9DXjp6g',
      url: 'https://www.youtube.com/watch?v=uvDdGJTXrpM',
      avatarurl:
        'https://yt3.ggpht.com/autIJ2Lc0go70jkDgr-r8pQYK0lAwVK2nHWLv-2NyOrXUhqrNMa85tC_J0D4ruw-aK7hNYzG7A=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/uvDdGJTXrpM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9UilgFiUDB2zso7MPcGDHiXAxsw',
      views: '1.3M views',
    },
    {
      id: '37',
      type: 'Games',
      name: 'New World Review - The Final Verdict',
      author: 'GamingBolt',
      authorurl: 'https://www.youtube.com/channel/UCXa_bzvv7Oo1glaW9FldDhQ',
      url: 'https://www.youtube.com/watch?v=S8E2XbbhgRM',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQ7iPx8nEEY9NilxC36-QJII26DJaJdO1dbrVy_=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/S8E2XbbhgRM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYq8M92TnFzymq897jD1mOku4mDQ',
      views: '21k views',
    },
    {
      id: '38',
      type: 'Sports',
      name: 'NBA Players vs REGULAR PEOPLE!',
      author: 'BBall Insider',
      authorurl: 'https://www.youtube.com/channel/UCeg-85vaLlVOWaeSsD-9hfA',
      url: 'https://www.youtube.com/watch?v=7i5XuKIOndQ',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLTXe35IwClgKOIy-v5OuRYfg14eKXSp7i10f82P=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/7i5XuKIOndQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeBlCJLf3WGj2ERc4UO_Gew7SxdQ',
      views: '7.6M views',
    },
    {
      id: '39',
      type: 'Nature',
      name: 'Our Planet | High Seas | Netflix | Full Episode',
      author: 'Netflix',
      url: 'https://www.youtube.com/watch?v=9FqwhW0B3tY',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/9FqwhW0B3tY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5e1tASc2XWN0ns_akcNuiudYJbw',
      views: '19M views',
    },
    {
      id: '40',
      type: 'Sports',
      name: 'Buccaneers vs. Patriots Week 4 Highlights',
      author: 'NFL',
      url: 'https://www.youtube.com/watch?v=y3VebhRs0GQ',
      authorurl: 'https://www.youtube.com/channel/UCDVYQ4Zhbm3S2dlz7P1GBDg',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQQ8np3nnw8dP1yLcnsSIcCbE_aU5YjrA-WyqAsXGk=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/y3VebhRs0GQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChj7ysBEDEKAsQpq1hU0989bQCrA',
      views: '3.2M views',
    },
    {
      id: '41',
      type: 'Nature',
      name: 'Our Planet | Coastal Seas | Netflix | Full Episode',
      author: 'Netflix',
      url: 'https://www.youtube.com/watch?v=r9PeYPHdpNo',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/r9PeYPHdpNo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHFYI2GE7zfQTPWhh-kEZ1Uicd1A',
      views: '15M views',
    },
    {
      id: '42',
      type: 'Coding',
      name: 'Angular Crash Course 2021 | Traversy',
      author: 'Traversy Media',
      authorurl: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
      url: 'https://www.youtube.com/watch?v=3dHNOWTI7H8',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/3dHNOWTI7H8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDr54VpQaYdlEFj7RP-n8WjkasXHw',
      views: '337K views',
    },
    {
      id: '43',
      type: 'Movies',
      name: 'Scream | Official Trailer (2022 Movie)',
      author: 'Paramount Pictures',
      authorurl: 'https://www.youtube.com/c/paramountpictures',
      url: 'https://www.youtube.com/watch?v=beToTslH17s',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLT4ZRjRmcXQMgEBOpGpcGJy0cUllleR6MkREqdosHw=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/beToTslH17s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKfg77VuS3qY-JI5DpUHGRs7EhLw',
      views: '6M views',
    },
    {
      id: '44',
      type: 'Cars',
      name: '2022 Tesla Model S Plaid | In Depth Review',
      author: 'Ryan Shaw',
      authorurl: 'https://www.youtube.com/channel/UCfv7-e6_6ZhvDL9-7Yw5OVA',
      url: 'https://www.youtube.com/watch?v=SLtV_2Z1_x8',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQI1st1iLZ2o7cjSqCc9276i07XaCFr-cvYID2W=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/SLtV_2Z1_x8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGm--Wk5G7xsGtflg4VSuYAdIOGw',
      views: '104K views',
    },
    {
      id: '45',
      type: 'Coding',
      name: 'Reduce basics - Programming in JavaScript',
      author: 'Fun Fun Function',
      authorurl: 'https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q',
      url: 'https://www.youtube.com/watch?v=Wl98eZpkp-c',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLT0CbWENhZMG9TzCOViR7rDMeiUqDrmCc-MtqpKEA=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/Wl98eZpkp-c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiRhc_Tg4Zva5sb8NYlm8qxt8XHA',
      views: '277K views',
    },
    {
      id: '46',
      type: 'Cars',
      name: 'FIRST LOOK: Alpha WOLF electric pick-up',
      author: 'Top Gear',
      authorurl: 'https://www.youtube.com/channel/UCjOl2AUblVmg2rA_cRgZkFg',
      url: 'https://www.youtube.com/watch?v=VnshCBwi0E4&t=132s',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLT4ZRjRmcXQMgEBOpGpcGJy0cUllleR6MkREqdosHw=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/VnshCBwi0E4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwNZwszYRhvaqPV2KzlZ-lkntp1A',
      views: '519K views',
    },
    {
      id: '43',
      type: 'Coding',
      name: 'C++ Crash Course For Beginners | Traversy',
      author: 'Traversy Media',
      authorurl: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
      url: 'https://www.youtube.com/watch?v=1v_4dL8l8pQ',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/1v_4dL8l8pQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjr4NNOP2jC6hru7EGGRLpION5TQ',
      views: '259K views',
    },
    {
      id: '48',
      type: 'News',
      name: 'The Future of Work: Special Report',
      author: 'VICE News',
      authorurl: 'https://www.youtube.com/user/vicenews',
      url: 'https://www.youtube.com/watch?v=_iaKHeCKcq4',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLTBkvkXyxX6dZWzI4OIYe_uElhfIDiZsVBrb1_ihQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/_iaKHeCKcq4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4OzXhu05F4nmN0iBPgtX4_kYWEQ',
      views: '1M views',
    }
  ];

  constructor() {
    this.filteredItems()
  }
}
