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
    let newList = list.slice(1);
    let shuffleList = newList.reduce((p, n) => {
      const size = p.length;
      const index = Math.trunc(Math.random() * (size - 1));
      p.splice(index, 0, n);
      return p;
    }, []);

    return [list[0]].concat(shuffleList);
  }

  videoList: Array<Video> = [
    {
      id: '1',
      type: 'Sports',
      name: 'What Is Bitwise? | Bitwise Industries',
      author: 'Bitwise Industries',
      url: 'https://www.youtube.com/watch?v=yONlf6fSSI4',
      avatarurl:
        'https://yt3.ggpht.com/wvoJyH9G5za5yHtD3f9_LnToPWlyz6cL4zOR1IivyF-TpfZH-P7t-ffp2sWu1pZMBLvnLOIL=s68-c-k-c0x00ffffff-no-rj',
      authorurl: 'https://www.youtube.com/channel/UCDT-S9qUcFofPtpC8W5zcJA',
      pictureurl:
        'https://i.ytimg.com/vi/yONlf6fSSI4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoVGLKk6OBGxPCXmqtzqi7L2wfwg',
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
      name: 'Flame Spitting R35 GTR in [4K]',
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
      name: 'Our Planet | Coastal Seas | Netflix',
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
      type: 'Cars',
      name: 'Midnight Run (R34 GTR / RX7 / Evo) 4K',
      author: 'Hartnett Media',
      authorurl: 'https://www.youtube.com/channel/UC9iy0bQd8OddxuHl1e3qkzw',
      url: 'https://www.youtube.com/watch?v=31kplxJn6nw',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQ5-7SQSVz7C_kfRLqPg_eZxW1rb-lmoZLwR70a=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/31kplxJn6nw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrB9EjvXqOTIArNlLyj-GQnIs1wA',
      views: '9.8M views',
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
      name: 'Substitute Teacher - Key & Peele',
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
      name: 'lofi hip hop radio - beats to relax/study',
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
      type: 'Travel',
      name: 'Cancún, Mexico 🇲🇽 - by drone [4K]',
      author: 'Drone Snap',
      url: 'https://www.youtube.com/watch?v=W-zf6fgo4A8',
      authorurl: 'https://www.youtube.com/user/TheSushiminator',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLTF_K2FAgJaZ9gxNBG62Wi2dkXwAdCeJqUjqup6Fw=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/W-zf6fgo4A8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDu60XVpmFSa9bHjmu2y7cTn80UHw',
      views: '432k views',
    },
    {
      id: '28',
      type: 'Nature',
      name: 'Tigers 101 | National Geographic',
      author: 'National Geographic',
      authorurl: 'https://www.youtube.com/channel/UCpVm7bg6pXKo1Pr6k5kxG9A',
      url: 'https://www.youtube.com/watch?v=FK3dav4bA4s',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLTdh4vj3oGXpCXT3lMqha9_Qq4-JvMBlpztnHvi_mI=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/FK3dav4bA4s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_GyjJvppj9rN_y8W7R4bN4MP3TQ',
      views: '3.5M views',
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
      name: 'Rick Roll',
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
      type: 'Earth',
      name: 'EARTH in 8K ULTRA HD',
      author: '8K Videos Ultra HD',
      authorurl: 'https://www.youtube.com/user/programmingwithmosh',
      url: 'https://www.youtube.com/watch?v=QSNa8U1yGrM',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSelHSUNQBi9u-1QptMfOq8LOx7UUg_VNrZ9GTX1Q=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/QSNa8U1yGrM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvILfq0m2tlhKLQ41_kCbhttvbkQ',
      views: '5.76M views',
    },
    {
      id: '34',
      type: 'Sports',
      name: 'Best of Michael Jordan',
      author: 'NBA',
      authorurl: 'https://www.youtube.com/channel/UCWJ2lWNubArHWmf3FIHbfcQ',
      url: 'https://www.youtube.com/watch?v=cuLprHh_BRg',
      avatarurl:
        'https://yt3.ggpht.com/rFBD18lZT2qeXNBkVMrqgCtRPX9ctXFRXVtrekvuPWMg2iiUzZrYmyR8PkuDgrDrbL9Vz8F8ABY=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/cuLprHh_BRg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCM-2gHPWzJicHuL8qKiI7i8Z7DKQ',
      views: '16.6M views',
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
      name: 'Age of Empires 4 Review',
      author: 'IGN',
      authorurl: 'https://www.youtube.com/channel/UCKy1dAqELo0zrOtPkf0eTMw',
      url: 'https://www.youtube.com/watch?v=oYboN1gXRC0',
      avatarurl:
        'https://yt3.ggpht.com/H_---ano_f27DOCejDhUdBMtBcxcv32MoXmFKQc_mBcxYSH4HPZTGuBUdm7UgI5VlutMOVX2=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/oYboN1gXRC0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBChjbD0huwurW474MwMOD6Dv6WdQ',
      views: '563k views',
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
      type: 'Sports',
      name: 'Steelers vs. Chargers Week 11 | NFL 2021',
      author: 'NFL',
      url: 'https://www.youtube.com/watch?v=6kn3Dkaq4yI',
      authorurl: 'https://www.youtube.com/c/NFL',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSYGtZ9i8jDd7fiw278IYvZ9sdXsDJDfBIR66PHHX0=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/6kn3Dkaq4yI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASb2GxfzRhXDjTgwXRcgWOTAX9wA',
      views: '648k views',
    },
    {
      id: '42',
      type: 'Travel',
      name: 'MYKONOS ISLAND (Greece) | Highlights',
      author: 'Luxury Travel Expert',
      url: 'https://www.youtube.com/watch?v=po2T3OX5WfE',
      authorurl: 'https://www.youtube.com/channel/UCYxsXxbjJO1YYa9yQ3lKC8w',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQwnAIPLW6qpKiXrIncsTg93Qx2502AHMdxJUxnVg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/po2T3OX5WfE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApmV5ZpPanvZM2zG1i15iBowNDNg',
      views: '777k views',
    },
    {
      id: '65',
      type: 'Travel',
      name: 'Banff Alberta Canada Travel 2021',
      author: 'Lvfree Adventures',
      url: 'https://www.youtube.com/watch?v=M2jhYbUIEyU',
      authorurl: 'https://www.youtube.com/channel/UCssLZSqf3M3okxPdG6kt9_w',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSjDsMomUTLhK24rQeGDCONedhwQTNNK25UBFLR=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/M2jhYbUIEyU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_gy67dnxGMnZKk64YrqjdAVSBzg',
      views: '204k views',
    },
    {
      id: '44',
      type: 'Cars',
      name: '2022 Tesla Model S Plaid',
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
      type: 'Cars',
      name: 'Midnight Run II (R34 GTR / RX7 / S15) | 4K',
      author: 'Hartnett Media',
      authorurl: 'https://www.youtube.com/channel/UC9iy0bQd8OddxuHl1e3qkzw',
      url: 'https://www.youtube.com/watch?v=u9fftcQGSa0',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLQ5-7SQSVz7C_kfRLqPg_eZxW1rb-lmoZLwR70a=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/u9fftcQGSa0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBI2FygFEFMeaNCwhEOSq99CxeOnQ',
      views: '2.4M views',
    },
    {
      id: '46',
      type: 'Travel',
      name: 'Palawan Philippines 4K - Relaxing music',
      author: 'Piano Relaxing',
      url: 'https://www.youtube.com/watch?v=C5OMzFG2hSg',
      authorurl: 'https://www.youtube.com/channel/UCEiS8m8OLFI0REntmsTvzjA',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLS1ux6GXmgjIw4kkiJHfeuY0Bi9N0kjPaWVKzBv=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/C5OMzFG2hSg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQT5BMfb0Ici9WDtomW7SL2RtZPg',
      views: '333k views',
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
      type: 'Cars',
      name: 'Aventador SVJ: shaping the future',
      author: 'Lamborghini',
      authorurl: 'https://www.youtube.com/channel/UC9DXZC8BCDOW6pYAQKgozqw',
      url: 'https://www.youtube.com/watch?v=viW44cUfxCE',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSASv4CCrVU31tCD0SQUb9UYkgYPddiB7tpCM4QGrA=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/viW44cUfxCE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnOAndwPWgASpd-hBHreVF1AzRZg',
      views: '4.5M views',
    },
    {
      id: '49',
      type: 'Food',
      name: 'The Hot Dog King of Tulsa | Munchies',
      author: 'Munchies',
      authorurl: 'https://www.youtube.com/channel/UCaLfMkkHhSA_LaCta0BzyhQ',
      url: 'https://www.youtube.com/watch?v=W20wnEQTWUs',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSxdRPwpFCY12WZxi7Nsi4atL-TTVJnALLOU6umMQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/W20wnEQTWUs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgFK4kwYdOrUN90Hdva3ycap-dNQ',
      views: '1.5m views',
    },
    {
      id: '50',
      type: 'Food',
      name: 'The Menchi-Katsu King of Tokyo | Munchies',
      author: 'Munchies',
      authorurl: 'https://www.youtube.com/channel/UCaLfMkkHhSA_LaCta0BzyhQ',
      url: 'https://www.youtube.com/watch?v=UVZMF6sZp_g',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSxdRPwpFCY12WZxi7Nsi4atL-TTVJnALLOU6umMQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/UVZMF6sZp_g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtfLUG9bNaHx8IsYsDe5SmPulLsQ',
      views: '74K views',
    },
    {
      id: '51',
      type: 'Food',
      name: 'The Rotisserie King of San Francisco',
      author: 'Munchies',
      authorurl: 'https://www.youtube.com/channel/UCaLfMkkHhSA_LaCta0BzyhQ',
      url: 'https://www.youtube.com/watch?v=mH7vFc0bUpU',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSxdRPwpFCY12WZxi7Nsi4atL-TTVJnALLOU6umMQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/qZpjRF9j-io/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9u3jIEsIDpL9o0OfoyQAS0savxw',
      views: '1.3M views',
    },
    {
      id: '52',
      type: 'Food',
      name: 'The Tamale Queen of New York | Munchies',
      author: 'Munchies',
      authorurl: 'https://www.youtube.com/channel/UCaLfMkkHhSA_LaCta0BzyhQ',
      url: 'https://www.youtube.com/watch?v=xB98UsKLoGk',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSxdRPwpFCY12WZxi7Nsi4atL-TTVJnALLOU6umMQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/xB98UsKLoGk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfPl8bsJFnnmw8BJCm9X814X2Rvw',
      views: '6.8M views',
    },
    {
      id: '53',
      type: 'Nature',
      name: 'Planet Earth II: Official Trailer | BBC Earth',
      author: 'Netflix',
      authorurl: 'https://www.youtube.com/channel/UCwmZiChSryoWQCZMIQezgTg',
      url: 'https://www.youtube.com/watch?v=c8aFcHFu8QM',
      avatarurl:
        'https://yt3.ggpht.com/KDLFW5YWda7nuYUN3sGj6vIPKZedI_JsNeoldsPDSgw6UoC9hmqVLmRg8hVoxQxyb_EYeMLjfQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/c8aFcHFu8QM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJwsGOGv_S0M0pF0km5T2S7oG9fg',
      views: '14M views',
    },
    {
      id: '54',
      type: 'Food',
      name: 'Street Tacos of Texas | Munchies',
      author: 'Munchies',
      authorurl: 'https://www.youtube.com/channel/UCaLfMkkHhSA_LaCta0BzyhQ',
      url: 'https://www.youtube.com/watch?v=0jTHnyobAGU',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSxdRPwpFCY12WZxi7Nsi4atL-TTVJnALLOU6umMQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/0jTHnyobAGU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9R4hna_gtZ8fkggyaLm8VNd03_g',
      views: '2.8M views',
    },
    {
      id: '55',
      type: 'Food',
      name: 'Top Tier Sushi Out of a Food Truck',
      author: 'Munchies',
      authorurl: 'https://www.youtube.com/channel/UCaLfMkkHhSA_LaCta0BzyhQ',
      url: 'https://www.youtube.com/watch?v=MeyLQVPdRnE',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSxdRPwpFCY12WZxi7Nsi4atL-TTVJnALLOU6umMQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/MeyLQVPdRnE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaLqs-ZL-F-upoyd2DlXfPy3jTnw',
      views: '11K views',
    },
    {
      id: '56',
      type: 'Food',
      name: 'The Al Pastor King of San Francisco |Munchies',
      author: 'Munchies',
      authorurl: 'https://www.youtube.com/channel/UCaLfMkkHhSA_LaCta0BzyhQ',
      url: 'https://www.youtube.com/watch?v=-tZUqwGV934',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSxdRPwpFCY12WZxi7Nsi4atL-TTVJnALLOU6umMQ=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/-tZUqwGV934/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFeKgkZ1Es97Dx8RrPbIoRFF962A',
      views: '1.4M views',
    },
    {
      id: '57',
      type: 'Movies',
      name: 'King’s Past: The Narcos Legacy | Netflix',
      author: 'Netflix',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      url: 'https://www.youtube.com/watch?v=u-nactjYKb8',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/u-nactjYKb8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOysryE9mDIKHdo_aOmCU4JIuLmg',
      views: '22.2M views',
    },
    {
      id: '58',
      type: 'Movies',
      name: 'Narcos: Mexico | Season 3 Trailer | Netflix',
      author: 'Netflix',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      url: 'https://www.youtube.com/watch?v=hhZBDO0CKJo',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/hhZBDO0CKJo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOu_gqxOTB2HebvfQvWvi_OXzmyA',
      views: '1.9M views',
    },
    {
      id: '59',
      type: 'Movies',
      name: 'Cowboy Bebop | Official Trailer | Netflix',
      author: 'Netflix',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      url: 'https://www.youtube.com/watch?v=ULCIHP5dc44',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/ULCIHP5dc44/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4OsIAO4iCiytAU9PeQgqsOvQlyw',
      views: '3.7M views',
    },
    {
      id: '60',
      type: 'Movies',
      name: 'The Witcher Season 2 | Official Trailer | Netflix',
      author: 'Netflix',
      authorurl: 'https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw',
      url: 'https://www.youtube.com/watch?v=TJFVV2L8GKs',
      avatarurl:
        'https://yt3.ggpht.com/ytc/AKedOLSIL-3Y7k9QAFE2MKEtPe5I4gmTdJ5dCyxFH-sxbg=s68-c-k-c0x00ffffff-no-rj',
      pictureurl:
        'https://i.ytimg.com/vi/TJFVV2L8GKs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmMVbd8fhZvB6dQM0X7xbHJ5oK2g',
      views: '7.2M views',
    },
  ];

  constructor() {
    this.filteredItems();
  }
}
