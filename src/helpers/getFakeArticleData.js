const getFakeArticleData = (pageSize = 10) => {
  const articles = [
    {
      source: {
        id: 'cnn',
        name: 'CNN',
      },
      author: 'Christine Romans, New York',
      title: 'Why good news is bad news on Wall Street',
      description:
        'Strong jobs reports, robust manufacturing data, still-hot consumer spending. Any time America reports its economy is strong, Wall Street has a freak-out.',
      url: 'https://www.cnn.com/2023/01/06/economy/economy-stocks-jobs-wall-street/index.html',
      urlToImage:
        'https://media.cnn.com/api/v1/images/stellar/prod/221229113424-new-york-now-hiring.jpg?c=16x9&q=w_800,c_fill',
      publishedAt: '2023-01-06T15:37:48Z',
      content:
        'Strong jobs reports, robust manufacturing data, still-hot consumer spending. Any time America reports its economy is strong, Wall Street has a freak-out. \r\nSo why is good news taken as bad news on Wa… [+2565 chars]',
    },
    {
      source: {
        id: 'the-verge',
        name: 'The Verge',
      },
      author: 'Dan Seifert',
      title: 'How to get your news fix now that Twitter sucks',
      description:
        'Twitter used to be my source for breaking news and article recommendations. Now, I’m using tools from Apple, Google, old-school RSS, and more to stay on top of the things I care about instead.',
      url: 'https://www.theverge.com/23512499/twitter-news-alternatives-apple-google-rss-techmeme',
      urlToImage:
        'https://cdn.vox-cdn.com/thumbor/AMt9GnYRMa1CZ7NV1jqK72Kti3g=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/20086188/acastro_200715_1777_twitter_0001.0.jpg',
      publishedAt: '2022-12-16T15:17:52Z',
      content:
        'Bye. | Illustration by Alex Castro\r\n\n \n\n A few weeks ago, I deleted Twitter from my phone and tablet. This was a long time coming, and the reasons I chose to do it are obvious, so I’m not here to wri… [+6141 chars]',
    },
    {
      source: {
        id: 'the-verge',
        name: 'The Verge',
      },
      author: 'Jon Porter',
      title: 'Tuesday’s top tech news: The law comes for Bankman-Fried',
      description:
        'FTX’s co-founder Sam Bankman-Fried has been arrested, we’re expecting an a “scientific breakthrough” in the development of fusion energy, and Tim Cook has confirmed that the iPhone uses Sony camera sensors.',
      url: 'https://www.theverge.com/2022/12/13/23506980/december-13-2022-tech-news-liveblog',
      urlToImage:
        'https://cdn.vox-cdn.com/thumbor/F5-vQfriDY9GUJaNV6oeWRwkYWg=/0x0:1600x1046/1200x628/filters:focal(688x463:689x464)/cdn.vox-cdn.com/uploads/chorus_asset/file/24288018/1245273681.jpg',
      publishedAt: '2022-12-13T10:01:00Z',
      content:
        'FTX co-founder Sam Bankman-Fried, who’s been arrested. | Matias J. Ocner/Miami Herald/Tribune News Service via Getty Images\r\n\n \n\n And an important fusion energy announcement is expected later today. … [+1260 chars]',
    },
    {
      source: {
        id: 'the-verge',
        name: 'The Verge',
      },
      author: 'Mitchell Clark',
      title:
        'Thursday’s top tech news: Another Theranos exec sentenced to over a decade in prison',
      description:
        'Balwani gets almost 13 years in prison, and new updates release for Elden Ring, Portal, and Mario Kart 8 Deluxe as we round up today’s top tech news.',
      url: 'https://www.theverge.com/2022/12/8/23499707/december-8-2022-tech-news-liveblog',
      urlToImage:
        'https://cdn.vox-cdn.com/thumbor/EIIlIkjkCMsUDNSEEck5Ar1STF8=/0x0:4000x2662/1200x628/filters:focal(2241x1286:2242x1287)/cdn.vox-cdn.com/uploads/chorus_asset/file/24275551/1245440014.jpg',
      publishedAt: '2022-12-08T10:22:44Z',
      content:
        'Former Theranos President Sunny Balwani was sentenced to almost 13 years in prison. | Image: Getty\r\n\n \n\n Plus lots of new content for old games. After Theranos founder Elizabeth Holmes was sentenced … [+1223 chars]',
    },
    {
      source: {
        id: null,
        name: 'Gizmodo.com',
      },
      author: 'Rob Bricken',
      title: 'The Best and Worst Nerdy News of 2022',
      description:
        'I’ve got good news for you... and bad news. Literally. We’ve combed through the io9 archives to discover all the news stories in 2022 that either delighted us or really bummed us out—and compiled them so you can remember the good times and what you should sti…',
      url: 'https://gizmodo.com/best-worst-news-2022-james-gunn-deadpool-3-hbo-max-1849905286',
      urlToImage:
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f7959f6ce935a7555b75eedc2108d807.png',
      publishedAt: '2022-12-19T22:15:00Z',
      content:
        'It started so simply. Variety reported that the DC film, which has earned less than $400 million worldwide, was a bomb that was going to lose Warner Bros. around $200 million. This happens, even to s… [+768 chars]',
    },
    {
      source: {
        id: 'engadget',
        name: 'Engadget',
      },
      author: 'Cherlynn Low',
      title:
        "CES 2023 Day 1 recap: Catch up on the biggest news from the year's biggest tech show",
      description:
        'We’re back in Vegas for CES, and while the show doesn’t officially open until tomorrow, many exhibitors have already unveiled their new products at various press conferences and media events. Today, we’re starting to see some of the early car news that freque…',
      url: 'https://www.engadget.com/ces-2023-day-1-biggest-news-recap-195052500.html',
      urlToImage:
        'https://s.yimg.com/os/creatr-uploaded-images/2023-01/aa1e7a30-8bbc-11ed-a76f-f62b60330838',
      publishedAt: '2023-01-05T19:50:52Z',
      content:
        'Were back in Vegas for CES, and while the show doesnt officially open until tomorrow, many exhibitors have already unveiled their new products at various press conferences and media events. Today, we… [+6274 chars]',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'https://www.facebook.com/bbcnews',
      title: 'Barbara Walters: Trailblazing US news anchor dies aged 93',
      description:
        'The first woman to front a US evening news programme, she interviewed every US president from Richard Nixon to Donald Trump.',
      url: 'https://www.bbc.co.uk/news/world-us-canada-64131414',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/11BC6/production/_128164627_walters.jpg',
      publishedAt: '2022-12-31T03:15:35Z',
      content:
        'Pioneering US TV broadcaster Barbara Walters has died aged 93 after a career spanning half a century.\r\nIn 1976, she became the first female anchor on an evening news programme, at ABC News.\r\nWalters … [+466 chars]',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'https://www.facebook.com/bbcnews',
      title: "Russia's Putin scraps trademark year-end news conference",
      description:
        "No reason is given, but there is growing unease among Russians over President Putin's invasion of Ukraine.",
      url: 'https://www.bbc.co.uk/news/world-europe-63947946',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/03B4/production/_127984900_putin_presser_getty1.jpg',
      publishedAt: '2022-12-12T23:24:37Z',
      content:
        'Russian President Vladimir Putin will not hold his traditional big year-end news conference, the Kremlin has said, for the first time in 10 years.\r\nBut spokesman Dmitry Peskov said "we hope the presi… [+1897 chars]',
    },
    {
      source: {
        id: null,
        name: 'Gizmodo.com',
      },
      author: 'Andrew Liszewski and James Whitbrook',
      title:
        "This Week's Toy News Won't Be Found Under This Year's Christmas Tree",
      description:
        'Welcome back to Toy Aisle, where this week while we wait to unwrap some toys from Santa this weekend, we’re looking at all the toys we want to get our hands on in 2023! This week, Gondor calls for aid, Hasbro adds another member to its plastic Fantastic Four,…',
      url: 'https://gizmodo.com/hot-toys-gotg-mantis-mafex-boba-fett-star-trek-plates-1849910915',
      urlToImage:
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ebd9f33029e3a739ef21ea1c3690de3a.png',
      publishedAt: '2022-12-23T22:30:00Z',
      content:
        'Welcome back to Toy Aisle, where this week while we wait to unwrap some toys from Santa this weekend, were looking at all the toys we want to get our hands on in 2023! This week, Gondor calls for aid… [+3099 chars]',
    },
    {
      source: {
        id: null,
        name: 'Gizmodo.com',
      },
      author: 'Cheryl Eddy',
      title: "We Finally Have an Update on The Nevers and It's Not Great News",
      description:
        'If you watched The Nevers, HBO’s 2021 drama about women in Victorian London who suddenly manifest superpowers, there’s likely part of you still wondering if we’d ever get the promised second half of the season—with, like, some follow-through all the batshit s…',
      url: 'https://gizmodo.com/westworld-the-nevers-hbo-max-removal-is-coming-1849889571',
      urlToImage:
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b4038e14f1c9151342bef47b654f3fa6.jpg',
      publishedAt: '2022-12-13T22:20:00Z',
      content:
        'If you watched The Nevers, HBOs 2021 drama about women in Victorian London who suddenly manifest superpowers, theres likely part of you still wondering if wed ever get the promised second half of the… [+2793 chars]',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'https://www.facebook.com/bbcnews',
      title: 'Quiz of the Year, part one: Are you a 2022 news expert?',
      description: 'How well do you remember the news of the past 12 months?',
      url: 'https://www.bbc.co.uk/news/world-63822584',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/17DD4/production/_127884779_oscars.jpg',
      publishedAt: '2022-12-23T00:07:48Z',
      content:
        'How well do you remember the stories and people in the news this year?\r\nTest your memory of 2021 in our four-part Christmas quiz - 52 questions for 52 weeks of the year - part one covers January to M… [+143 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        "Travelling during South Coast's snowmageddon | CTV News - CTV News Vancouver",
      description:
        "<ol><li>Travelling during South Coast's snowmageddon | CTV News  CTV News Vancouver\r\n</li><li>Vancouver recovering after massive snow storm  CityNews\r\n</li><li>Vancouver airport restricting international flights for 2 days to clear backlog after snowstorm  CB…",
      url: 'https://bc.ctvnews.ca/snowmageddon-day-2-what-travel-looks-like-across-lower-mainland-1.6204238',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/21/snowmageddon-travel-bc-1-6204241-1671646624925.jpg',
      publishedAt: '2022-12-21T18:21:48Z',
      content:
        'For a second consecutive day, residents of B.C.s Lower Mainland are being told to avoid non-essential travel due to compact snow and slippery conditions on a majority of roads.\r\nDo not travel unless … [+1352 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title: 'Ukraine news: Russia hits key infrastructure - CTV News',
      description:
        '<ol><li>Ukraine news: Russia hits key infrastructure  CTV News\r\n</li><li>Russian missile barrage hits multiple regions in Ukraine, targeting vital infrastructure  CBC News\r\n</li><li>Russia fires dozens of missiles at Ukrainian cities  BBC\r\n</li><li>Ukraine ne…',
      url: 'https://www.ctvnews.ca/world/russia-hits-key-infrastructure-with-missiles-across-ukraine-1.6211390',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/29/ukraine-1-6211651-1672330416121.jpg',
      publishedAt: '2022-12-29T11:12:00Z',
      content:
        'KYIV, Ukraine - \r\nRussian missiles hit Ukraine Thursday in the biggest wave of strikes in weeks, damaging power stations and other critical infrastructure during freezing winter weather.\r\nRussia fire… [+4862 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title: 'B.C. bus crash victim identified | CTV News - CTV News Vancouver',
      description:
        "<ol><li>B.C. bus crash victim identified | CTV News  CTV News Vancouver\r\n</li><li>7 people remain in hospital after fatal B.C. bus crash  CBC News: The National\r\n</li><li>'It happened so fast': Survivors of fatal B.C. bus rollover question why highway wasn't …",
      url: 'https://bc.ctvnews.ca/b-c-christmas-eve-bus-crash-victim-leaves-behind-young-family-in-india-1.6209724',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/27/bus-crash-victim-1-6209730-1672167413402.jpg',
      publishedAt: '2022-12-27T18:57:00Z',
      content:
        'The cousin of one of the victims of the Christmas Eve bus crash in British Columbia says the new arrival from Punjab, India, leaves behind a wife and two young children.\r\nKalwinder Singh says 41-year… [+645 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title: 'Ukraine news: Putin orders 36-hour ceasefire - CTV News',
      description:
        "Russian President Vladimir Putin on Thursday ordered Moscow's armed forces to hold a 36-hour ceasefire in Ukraine this weekend for the Russian Orthodox Christmas holiday, the Kremlin said.",
      url: 'https://www.ctvnews.ca/world/putin-orders-weekend-truce-in-ukraine-kyiv-won-t-take-part-1.6218627',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/1/5/vladimir-putin-1-6218737-1672934499660.jpg',
      publishedAt: '2023-01-05T14:57:00Z',
      content:
        'KYIV, Ukraine - \r\nRussian President Vladimir Putin on Thursday ordered his armed forces to observe a unilateral 36-hour cease-fire in Ukraine this weekend for the Orthodox Christmas holiday, the firs… [+7493 chars]',
    },
    {
      source: {
        id: 'cnn',
        name: 'CNN',
      },
      author: 'Oliver Darcy',
      title:
        "Analysis: How McCarthy's unprecedented leadership battle is a reflection of Fox News and right-wing media",
      description:
        "It's Tucker Carlson versus Sean Hannity in the Republican Party.",
      url: 'https://www.cnn.com/2023/01/05/tech/fox-news-mccarthy/index.html',
      urlToImage:
        'https://media.cnn.com/api/v1/images/stellar/prod/230104160450-10-day-2-house-speaker-vote.jpg?c=16x9&q=w_800,c_fill',
      publishedAt: '2023-01-05T15:51:34Z',
      content:
        'Its Tucker Carlson versus Sean Hannity in the Republican Party.\r\nThe divisions inside the GOP, being laid bare on national television via the dramatic fight between Kevin McCarthy and a faction of re… [+3004 chars]',
    },
    {
      source: {
        id: null,
        name: 'Lifehacker.com',
      },
      author: 'Jake Peterson',
      title: "Lifehacker's 22 Favorite Apps of 2022",
      description:
        '“There’s an app for that” is as true in 2022 as it was in 2009. Every day, we dive through tech news, forums, and digital stores looking for the best apps to make your phone and computer even better. As the year draws to a close, we’ve highlighted 22 of our f…',
      url: 'https://lifehacker.com/lifehackers-22-favorite-apps-of-2022-1849898715',
      urlToImage:
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/aa4fdaaddb63f7037108f1eb51a8653a.jpg',
      publishedAt: '2022-12-16T15:00:00Z',
      content:
        'The DuckDuckGo app has been around for a while, but the company doubled-down on privacy features in 2022. First, theres DuckDuckGos Hide My Email feature, which shields your personal email from compa… [+681 chars]',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'https://www.facebook.com/bbcnews',
      title: 'Newport News: Boy aged six detained after shooting teacher in US',
      description:
        'The teacher is left with life-threatening injuries after the shooting in the state of Virginia.',
      url: 'https://www.bbc.co.uk/news/world-us-canada-64194407',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/942C/production/_128223973_gettyimages-1169071737.jpg',
      publishedAt: '2023-01-06T23:57:52Z',
      content:
        'A six-year-old boy has been detained by police after shooting a teacher in the US state of Virginia, officers say. \r\nThe shooting happened shortly after 14:00 local time (19:00 GMT) at Richneck Eleme… [+1757 chars]',
    },
    {
      source: {
        id: null,
        name: 'Gizmodo.com',
      },
      author: 'James Whitbrook',
      title:
        'While Away the Time to Across the Spider-Verse With These Into the Spider-Verse Trading Cards',
      description:
        'Still high on all that Across the Spider-Verse hype, between the gorgeous trailer and increasingly wider posters revealing even more Spider-cameos? Well, good news for the bad news of having to wait six more months: we’ve got a tiny distraction to help.Read m…',
      url: 'https://gizmodo.com/spider-man-across-the-spider-verse-trading-cards-1849923856',
      urlToImage:
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/31365e129cd1494a170b837455ff56a5.png',
      publishedAt: '2022-12-22T22:15:00Z',
      content:
        'Still high on all that Across the Spider-Verse hype, between the gorgeous trailer and increasingly wider posters revealing even more Spider-cameos? Well, good news for the bad news of having to wait … [+520 chars]',
    },
    {
      source: {
        id: 'engadget',
        name: 'Engadget',
      },
      author: 'Devindra Hardawar',
      title: 'Engadget Podcast: Diving into CES 2023',
      description:
        'CES is on! This week, Devindra and UK Bureau Chief Mat Smith chat about some of the biggest news from the show, including massive upgrades for laptops, wild new TV concepts and two different pee analyzers! As usual, CES is a mix of major news and random weird…',
      url: 'https://www.engadget.com/engadget-podcast-ces-2023-review-133042888.html',
      urlToImage:
        'https://s.yimg.com/os/creatr-uploaded-images/2020-11/c8e851c0-2b3d-11eb-baea-6c6fe29971fb',
      publishedAt: '2023-01-06T13:30:42Z',
      content:
        'CES is on! This week, Devindra and UK Bureau Chief Mat Smith chat about some of the biggest news from the show, including massive upgrades for laptops, wild new TV concepts and two different pee anal… [+1222 chars]',
    },
    {
      source: {
        id: null,
        name: 'The Guardian',
      },
      author: 'Guardian Staff',
      title: 'There’s news, then there’s the Guardian',
      description:
        'As events moved at a dizzying speed in 2022, the Guardian stayed true to its values, delivering journalism that brought clarity, truth, wit, ideas and an occasional dose of hope. We proved that a fast-moving world needs quality reporting now more than ever. H…',
      url: 'https://www.theguardian.com/info/ng-interactive/2022/dec/20/the-guardian-year-in-review',
      urlToImage:
        'https://i.guim.co.uk/img/media/5c0fd4cc5f4fcd3ef5a4cd98e9be2b7cbe6d2ef3/2_0_7557_4537/master/7557.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7c3950ed470f3899708491bd9555dbf8',
      publishedAt: '2022-12-20T16:00:46Z',
      content:
        '2022 How the Guardian covered a year of news\r\nA year of news, told uniquely by the Guardian\r\nIntroduction from Katharine Viner, editor-in-chief\r\n2022 has been unforgettable, yet again, for news. Foll… [+23832 chars]',
    },
    {
      source: {
        id: 'engadget',
        name: 'Engadget',
      },
      author: 'Devindra Hardawar',
      title: 'Engadget Podcast: CES 2023 Preview',
      description:
        'Can you believe CES is just a week away? For our final episode of 2022, Cherlynn, Devindra and Senior Writer Sam Rutherford dive into their expectations for CES 2023. We’ll definitely hear more from Intel and AMD when it comes to CPUs, as well as AMD and NVID…',
      url: 'https://www.engadget.com/engadget-podcast-ces-2023-preview-133032994.html',
      urlToImage:
        'https://s.yimg.com/os/creatr-uploaded-images/2020-05/f43b53b0-909f-11ea-87fd-d8d721459924',
      publishedAt: '2022-12-30T13:30:32Z',
      content:
        'Can you believe CES is just a week away? For our final episode of 2022, Cherlynn, Devindra and Senior Writer Sam Rutherford dive into their expectations for CES 2023. Well definitely hear more from I… [+1085 chars]',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'https://www.facebook.com/bbcnews',
      title: 'China Covid: Celebrity deaths spark fears over death toll',
      description:
        "News of public figures' deaths has sparked speculation about greater losses than officials have reported.",
      url: 'https://www.bbc.co.uk/news/world-asia-china-64173824',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/CBB6/production/_128205125_mediaitem128202846.jpg',
      publishedAt: '2023-01-05T10:27:29Z',
      content:
        'The growing number of Chinese public figures whose deaths are being made public is prompting people to question the official Covid death toll.\r\nThe death of Chu Lanlan, a 40-year-old opera singer, la… [+4212 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Another 146 flights cancelled at YVR | CTV News - CTV News Vancouver',
      description:
        '<ol><li>Another 146 flights cancelled at YVR | CTV News  CTV News Vancouver\r\n</li><li>Winter storm creates Canadian travel chaos as WestJet cancels numerous flights again  Global News\r\n</li><li>Travellers stranded in Winnipeg as flights cancelled  CityNews\r\n<…',
      url: 'https://bc.ctvnews.ca/another-146-flights-cancelled-at-yvr-heading-into-christmas-weekend-1.6206937',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/23/air-canada-1-6206945-1671808945378.jpg',
      publishedAt: '2022-12-23T15:22:00Z',
      content:
        'A total of 146 flights that were scheduled to depart Vancouver International Airport Friday have been cancelled, and theres a high probability of that number climbing as the region braces for another… [+1618 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        "B.C. snowstorm causes 'unprecedented' impacts at YVR airport | CTV News - CTV News Vancouver",
      description:
        "<ol><li>B.C. snowstorm causes 'unprecedented' impacts at YVR airport | CTV News  CTV News Vancouver\r\n</li><li>More snow coming for Metro Vancouver  CityNews\r\n</li><li>Wind chill drops to -40 C in central B.C., winter tires needed on Lower Mainland  Creston Va…",
      url: 'https://bc.ctvnews.ca/12-hours-on-the-tarmac-snow-wreaks-havoc-at-vancouver-airport-1.6202554',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/11/29/yvr-snow-1-6173956-1669764443622.png',
      publishedAt: '2022-12-20T18:28:00Z',
      content:
        'There were passengers stuck on the tarmac for 12 hours overnight as heavy snow snarled operations at the Vancouver airport, leading to dozens of flight cancellations and delays.\r\nOfficials at Vancouv… [+2112 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Vaughan condo shooting: Police identify 5 people killed | CTV News - CTV News Toronto',
      description:
        '<ol><li>Vaughan condo shooting: Police identify 5 people killed | CTV News  CTV News Toronto\r\n</li><li>Francesco Villi, man identified as Vaughan condo mass killer, posted videos before shooting  Toronto Star\r\n</li><li>Global National: Dec. 19 | Watch News Vi…',
      url: 'https://toronto.ctvnews.ca/police-identify-five-people-killed-in-vaughan-ont-mass-shooting-1.6201987',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/20/vaughan-shooting-memorial-1-6202722-1671567448457.jpg',
      publishedAt: '2022-12-20T19:31:30Z',
      content:
        'Police have identified the five people killed in a mass shooting at a Vaughan, Ont. condo building Sunday.\r\nThe deceased are 57-year-old Rita Camilleri, 79-year-old Vittorio Panza, 75-year-old Russel… [+1972 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        "Ottawa weather: 'Major winter storm' threatens holiday travel | CTV News - CTV News Ottawa",
      description:
        "<ol><li>Ottawa weather: 'Major winter storm' threatens holiday travel | CTV News  CTV News Ottawa\r\n</li><li>Major winter storm headed for Ontario, will likely impact holiday travel plans  Global News\r\n</li><li>'It's going to be nasty out there': Ontario braci…",
      url: 'https://ottawa.ctvnews.ca/beast-of-a-storm-coming-to-ottawa-threatening-holiday-travel-plans-1.6204093',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/21/major-ottawa-snowstorm-1-6204270-1671648181874.jpg',
      publishedAt: '2022-12-21T17:38:00Z',
      content:
        'A major winter storm is expected to bring a dangerous mix of rain, snow, flash freezing and high winds to Ottawa and much of Ontario, threatening to disrupt holiday weekend travel plans.\r\n"This is no… [+3216 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Vancouver snow: More flight delays, traffic troubles | CTV News - CTV News Vancouver',
      description:
        '<ol><li>Vancouver snow: More flight delays, traffic troubles | CTV News  CTV News Vancouver\r\n</li><li>Overnight snowfall causing mayhem in the Lower Mainland - BC | Globalnews.ca  Global News\r\n</li><li>PHOTOS: Traffic chaos ensues in B.C. following bout of he…',
      url: 'https://bc.ctvnews.ca/snowfall-warning-lifted-for-b-c-s-south-coast-travel-conditions-remain-challenging-1.6199941',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/18/snowy-road-conditions-1-6199952-1671388186072.jpeg',
      publishedAt: '2022-12-19T00:52:25Z',
      content:
        "A snowfall warning for B.C.'s South Coast was lifted Sunday afternoon, but conditions remained challenging on the roads and flight delays continued.\r\nAccording to preliminary data from Environment an… [+3793 chars]",
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Funeral for slain OPP officer Greg Pierzchala | CTV News - CTV News Toronto',
      description:
        '<ol><li>Funeral for slain OPP officer Greg Pierzchala | CTV News  CTV News Toronto\r\n</li><li>Funeral for slain OPP Const. Pierzchala held in Barrie, Ontario | LIVE  Global News\r\n</li><li>OPP Const. Grzegorz Pierzchala, slain on the job, remembered at funeral …',
      url: 'https://toronto.ctvnews.ca/funeral-held-for-opp-officer-killed-in-shooting-ambush-1.6216906',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/1/4/pierzchala-funeral-1-6217302-1672854362337.jpg',
      publishedAt: '2023-01-04T13:14:00Z',
      content:
        'Hundreds of officers from across the province have gathered at a funeral for an Ontario Provincial Police officer who was shot in an ambush last week in a county on the Niagara Peninsula.\r\n Const. Gr… [+2499 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Banff, Alta. train crash claims life of 19-year-old woman | CTV News - CTV News Calgary',
      description:
        '<ol><li>Banff, Alta. train crash claims life of 19-year-old woman | CTV News  CTV News Calgary\r\n</li><li>Woman dies after being struck by train in Banff - Calgary | Globalnews.ca  Global News\r\n</li><li>RCMP say 19-year-old woman dead after being hit by train …',
      url: 'https://calgary.ctvnews.ca/woman-killed-while-walking-on-railway-tracks-in-banff-alta-1.6211999',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2020/7/23/rcmp-generic-1-5036655-1627384312289.png',
      publishedAt: '2022-12-29T21:15:00Z',
      content:
        'Banff RCMP and the Canadian Pacific Police say a woman has died after she was struck by a train while walking on tracks near the community on Thursday.\r\nOfficials say the victim, a 19-year-old woman,… [+556 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        "Ontario's most popular baby names for 2021 | CTV News - CTV News Toronto",
      description:
        "<ol><li>Ontario's most popular baby names for 2021 | CTV News  CTV News Toronto\r\n</li><li>Olivia? Noah? Here’s a sneak peek at the top baby names in Ontario  Toronto Star\r\n</li><li>Here are Ontario's top baby names of 2021  CityNews Toronto\r\n</li><li>A look a…",
      url: 'https://toronto.ctvnews.ca/ontario-s-top-baby-names-for-2021-were-revealed-these-are-the-top-10-1.6190957',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/12/ontario-top-baby-names-1-6191010-1670861720557.jpg',
      publishedAt: '2022-12-12T16:19:29Z',
      content:
        'Ontario has just revealed the most popular baby names of last year, and one of them has been on the list for more than a decade.\r\nAccording to the province, Olivia was the number one choice for girls… [+798 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Skibicki: calls grow for police to search landfill for victims | CTV News - CTV News Winnipeg',
      description:
        '<ol><li>Skibicki: calls grow for police to search landfill for victims | CTV News  CTV News Winnipeg\r\n</li><li>Canada police say they can’t recover bodies of murdered Indigenous women  The Guardian\r\n</li><li>Manager of private landfill, where slain women are …',
      url: 'https://winnipeg.ctvnews.ca/calls-grow-for-winnipeg-police-to-search-landfill-for-victims-of-alleged-serial-killer-1.6184861',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/6/contois-harris-myran-1-6183410-1670363768254.jpg',
      publishedAt: '2022-12-08T01:11:02Z',
      content:
        'WINNIPEG - \r\nCalls are growing louder for Winnipeg police to reconsider a decision not to search a landfill for the remains of two Indigenous women.\r\nOfficers believe the remains of Marcedes Myran, 2… [+3382 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Highway 401 closed in Chatham-Kent after crash involving 12 vehicles | CTV News - CTV News Windsor',
      description:
        '<ol><li>Highway 401 closed in Chatham-Kent after crash involving 12 vehicles | CTV News  CTV News Windsor\r\n</li><li>UPDATE: Collisions prompt closure of Hwy. 401 from London to Tilbury  BlackburnNews.com\r\n</li><li>Highway 401 between Tilbury and London closed…',
      url: 'https://windsor.ctvnews.ca/crash-involving-12-vehicles-closes-highway-401-in-chatham-kent-1.6206873',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/23/chatham-crash-1-6206910-1671807444745.jpg',
      publishedAt: '2022-12-23T14:30:00Z',
      content:
        'A section of Highway 401 in Chatham-Kent is closed after a crash involving 12 vehicles.\r\nThe Chatham-Kent Detachment of the Elgin County OPP closed both the eastbound and westbound lanes of the 401 b… [+939 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Vaughan shooting leaves six, including suspect, dead | CTV News - CTV News Toronto',
      description:
        "<ol><li>Vaughan shooting leaves six, including suspect, dead | CTV News  CTV News Toronto\r\n</li><li>6 dead, including gunman, after shooting at Vaughan condo  CityNews\r\n</li><li>5 people killed in a 'horrendous' condo shooting in Canada, police say  CNN\r\n</li…",
      url: 'https://toronto.ctvnews.ca/a-horrendous-scene-investigation-underway-after-6-people-killed-in-vaughan-ont-mass-shooting-1.6200473',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/19/yrp-vaughan-shooting-1-6200503-1671456171251.png',
      publishedAt: '2022-12-19T13:09:00Z',
      content:
        'Authorities are investigating what led to a lone gunman opening fire Sunday night inside a condo tower in Vaughan, just north of Toronto, killing five people before being shot dead by police.\r\nYork R… [+2146 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'TTC: Multiple victims on Line 1 assaulted | CTV News - CTV News Toronto',
      description:
        'Four victims are being treated after a woman allegedly assaulted numerous people on the TTC’s Line 1 Monday morning.',
      url: 'https://toronto.ctvnews.ca/four-people-assaulted-suspect-arrested-in-attack-on-toronto-subway-1.6200699',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/19/st--clair-1-6200818-1671466520103.png',
      publishedAt: '2022-12-19T15:24:00Z',
      content:
        'Four victims are being treated after a woman allegedly assaulted numerous people on the Toronto Transit Commissions (TTC) Line 1 Monday morning.\r\nPolice say they received a call reporting the assault… [+981 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        "B.C. crypto mining electricity connections suspended due to 'massive' consumption | CTV News - CTV News VI",
      description:
        "<ol><li>B.C. crypto mining electricity connections suspended due to 'massive' consumption | CTV News  CTV News VI\r\n</li><li>B.C. putting 18-month freeze on new cryptocurrency mining hookups to BC Hydro | Globalnews.ca  Global News\r\n</li><li>BC Hydro to suspen…",
      url: 'https://vancouverisland.ctvnews.ca/b-c-halts-electricity-connections-for-crypto-mining-citing-massive-consumption-1.6205530',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/22/bc-hydro-lines-1-6205548-1671723304228.jpeg',
      publishedAt: '2022-12-22T15:39:00Z',
      content:
        'The British Columbia government is temporarily suspending requests for electricity connections from cryptocurrency mining operations, saying the decision is aimed at preserving the power supply while… [+1373 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Live: Funeral for slain OPP officer Greg Pierzchala | CTV News - CTV News Toronto',
      description:
        '<ol><li>Live: Funeral for slain OPP officer Greg Pierzchala | CTV News  CTV News Toronto\r\n</li><li>Funeral for slain OPP Const. Pierzchala held in Barrie, Ontario | LIVE  Global News\r\n</li><li>Honouring a fallen officer  Toronto Star\r\n</li><li>Funeral for sla…',
      url: 'https://toronto.ctvnews.ca/funeral-underway-in-barrie-today-for-slain-opp-officer-1.6216906',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/1/4/thomas-carrique-1-6217090-1672846107111.jpg',
      publishedAt: '2023-01-04T13:14:00Z',
      content:
        'A public funeral procession is underway for an Ontario Provincial Police officer who was shot in an ambush attack last week.\r\n Officers are walking towards the Sadlon Arena in 28-year-old Const. Grze… [+1527 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Ukraine news: Russian military flaws led to troop deaths - CTV News',
      description:
        "<ol><li>Ukraine news: Russian military flaws led to troop deaths  CTV News\r\n</li><li>Russia blames 'massive,' illicit cellphone usage by its troops for Ukraine strike that killed 89  CBC News\r\n</li><li>Makiivka: Russia points fingers after deadliest Ukraine a…",
      url: 'https://www.ctvnews.ca/world/sitting-ducks-russian-military-flaws-seen-in-troop-deaths-1.6216821',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/1/4/russian-soldiers-1-6216828-1672830792249.jpg',
      publishedAt: '2023-01-04T17:26:38Z',
      content:
        "KYIV, Ukraine - \r\nThe Russian military's top brass came under increasing scrutiny Wednesday as more details emerged of how at least 89 Russian soldiers, and possibly many more, were killed in a Ukrai… [+5808 chars]",
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Home in Toronto sold while owners out of country: police | CTV News - CTV News Toronto',
      description:
        "<ol><li>Home in Toronto sold while owners out of country: police | CTV News  CTV News Toronto\r\n</li><li>Toronto police seek public's help after house sold without owners' consent  CBC.ca\r\n</li><li>Suspects sought for impersonating Toronto homeowners, selling …",
      url: 'https://toronto.ctvnews.ca/toronto-homeowners-return-from-trip-to-find-they-d-been-impersonated-their-house-sold-1.6219098',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/1/5/toronto-police-wanted-1-6219106-1672946823974.jpg',
      publishedAt: '2023-01-05T19:28:00Z',
      content:
        'The owners of a Toronto home got the surprise of a lifetime when they discovered their property had been fraudulently listed and sold by two people impersonating them while away on a business trip.\r\n… [+997 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'B.C. video game studio SkyBox Labs acquired by NetEase | CTV News - CTV News VI',
      description:
        '<ol><li>B.C. video game studio SkyBox Labs acquired by NetEase | CTV News  CTV News VI\r\n</li><li>BC video game studio SkyBox Labs acquired by major Chinese tech company NetEase | Venture  Daily Hive\r\n</li><li>NetEase acquires Canadian game studio SkyBox Labs …',
      url: 'https://vancouverisland.ctvnews.ca/b-c-video-game-company-acquired-by-chinese-tech-giant-netease-1.6220816',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/1/6/skybox-labs-1-6220819-1673037883398.jpg',
      publishedAt: '2023-01-06T20:46:23Z',
      content:
        'A B.C. videogame development company that has offices in Metro Vancouver and Victoria has been purchased by Chinese tech company NetEase Games.\r\nSkyBox Labs, which has two offices in Burnaby, B.C., a… [+1510 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Woman missing since late November: police | CTV News - CTV News Calgary',
      description:
        '<ol><li>Woman missing since late November: police | CTV News  CTV News Calgary\r\n</li><li>OPS looking for 23-year-old female last seen in Nepean  Ottawa.CityNews.ca\r\n</li><li>Ottawa police seek help locating missing woman  CTV News Ottawa\r\n</li><li>Police seek…',
      url: 'https://calgary.ctvnews.ca/calgary-police-request-public-assistance-locating-calgary-woman-missing-since-late-november-1.6221829',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/1/7/stephanie-tara-hamilton-piskopos--1-6221830-1673131219739.png',
      publishedAt: '2023-01-07T22:47:00Z',
      content:
        "Calgary police are asking for the public's help in locating a southeast Calgary woman who has gone missing.\r\nStephanie Tara Hamilton-Piskopos, 28, was last seen Wednesday, Nov. 23, in the southeast C… [+867 chars]",
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Child dies at Lakeridge hospital under investigation by chief coroner | CTV News - CTV News Toronto',
      description:
        'Ontario’s Chief Coroner has launched an investigation following the “sudden and unexpected” death of a child at an Ontario hospital on Tuesday.',
      url: 'https://toronto.ctvnews.ca/chief-coroner-launches-investigation-into-sudden-and-unexpected-death-of-child-at-ontario-hospital-1.6185983',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/8/ont-hospital-1-6185987-1670510939136.jpg',
      publishedAt: '2022-12-08T17:34:22Z',
      content:
        'Ontarios Chief Coroner has launched an investigation following the sudden and unexpected death of a child at an Ontario hospital on Tuesday.\r\nThe death took place at Lakeridge Health Ajax Pickering H… [+2319 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Manitoba storm bringing heavy snow to southern Manitoba | CTV News - CTV News Winnipeg',
      description:
        '<ol><li>Manitoba storm bringing heavy snow to southern Manitoba | CTV News  CTV News Winnipeg\r\n</li><li>Slick start to Tuesday, ahead of multi-day winter storm impacts beginning late tonight  PembinaValleyOnline.com\r\n</li><li>Risk of freezing drizzle tonight,…',
      url: 'https://winnipeg.ctvnews.ca/colorado-low-could-bring-up-to-30-cm-to-southern-manitoba-1.6192461',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/2/10/manitoba-snow-1-5776362-1644520612956.jpeg',
      publishedAt: '2022-12-13T14:02:24Z',
      content:
        'A Colorado low is expected to bring heavy, wet snow to southern Manitoba this week, with accumulations that could range between 20 and 30 centimetres (cm).\r\nEnvironment and Climate Change Canada (ECC… [+2130 chars]',
    },
    {
      source: {
        id: null,
        name: 'Westernu.ca',
      },
      author: null,
      title:
        "Western News - Expert Insight: Canada's space technology a crucial contribution to the Artemis missions - Western News",
      description:
        "<ol><li>Western News - Expert Insight: Canada's space technology a crucial contribution to the Artemis missions  Western News\r\n</li><li>NASA Orion splashes down after amazing trip to the Moon and back  The Weather Network\r\n</li><li>Orion capsule returns to Ea…",
      url: 'https://news.westernu.ca/2022/12/expert-insight-canadas-space-technology-a-crucial-contribution-to-the-artemis-missions/',
      urlToImage:
        'https://news.westernu.ca/wp-content/uploads/sites/2/2022/12/Artemis_1_at_maximum_distance_from_Earth.jpg',
      publishedAt: '2022-12-13T15:30:22Z',
      content:
        'Fifty years ago this month was the last time humans walked on the surface of the moon, during the Apollo 17 mission. NASA recently took the first major step in returning humans to the moon with the A… [+6128 chars]',
    },
    {
      source: {
        id: null,
        name: 'Westernu.ca',
      },
      author: null,
      title:
        'Western News - New study uncovers negative effects of vaping - Western News',
      description:
        '<ol><li>Western News - New study uncovers negative effects of vaping  Western News\r\n</li><li>New study finds vaping can damage essential part of lungs  BlackburnNews.com\r\n</li><li>Vaping causes damage to critical layer of lungs: Western, Lawson Health study  …',
      url: 'https://news.westernu.ca/2022/12/new-study-uncovers-negative-effects-of-vaping/',
      urlToImage:
        'https://news.westernu.ca/wp-content/uploads/sites/2/2022/12/Vape_hero.jpg',
      publishedAt: '2022-12-14T13:42:15Z',
      content:
        'Researchers at the Schulich School of Medicine &amp; Dentistry and Lawson Health Research Institute have shown that vaping has a negative effect on a critical layer in the lungs and may harm lung fun… [+2277 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Hamilton police: dog attack, 11 victims, owner charged | CTV News - CTV News Toronto',
      description:
        '<ol><li>Hamilton police: dog attack, 11 victims, owner charged | CTV News  CTV News Toronto\r\n</li><li>Police charge Hamilton, Ont., woman after 11 people injured in dog attack - Canada News  Castanet.net\r\n</li><li>Eleven people attacked by dog inside Barton S…',
      url: 'https://toronto.ctvnews.ca/eleven-people-attacked-by-dog-in-hamilton-owner-charged-1.6207506',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2021/6/8/hamilton-police-1-5461486-1645656795690.jpg',
      publishedAt: '2022-12-23T20:53:00Z',
      content:
        'A 32-year-old woman has been arrested after allegedly encouraging her dog to attack multiple victims in Hamiltons east end Thursday night.\r\nJust after 7 p.m., Hamilton police were called down to 1042… [+779 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Varsity shooting: Calgary officer shoots suspect in parkade | CTV News - CTV News Calgary',
      description:
        '<ol><li>Varsity shooting: Calgary officer shoots suspect in parkade | CTV News  CTV News Calgary\r\n</li><li>Man in stable condition after police-involved shooting in Calgary, ASIRT investigating - Calgary | Globalnews.ca  Global News\r\n</li><li>Mountie fires gu…',
      url: 'https://calgary.ctvnews.ca/calgary-police-shoot-suspect-in-northwest-parking-garage-1.6205330',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/22/varsity-parking-garage-shooting-1-6205334-1671715419303.jpg',
      publishedAt: '2022-12-22T13:25:00Z',
      content:
        'One man is in hospital in serious but stable condition after being shot by police during a late-night standoff in a northwest parking garage.\r\n Officers were called to Varsity Estates Circle N.W. at … [+954 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Ottawa weather: Major winter storm arrives | CTV News - CTV News Ottawa',
      description:
        'A major winter storm brought a mix of freezing rain, snow and howling winds to Ottawa and the region overnight, followed by rain and ice pellets Friday morning. The temperature began to drop mid-afternoon, leading to a potential flash freeze on already treach…',
      url: 'https://ottawa.ctvnews.ca/monster-storm-arrives-in-ottawa-flash-freeze-expected-as-temperatures-start-to-drop-1.6205716',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/23/winter-storm-in-ottawa--road-closed-1-6207523-1671829043791.jpg',
      publishedAt: '2022-12-23T20:31:38Z',
      content:
        'Temperatures are starting to plunge in Ottawa as a monster winter storm batters the capital. Rain is turning to snow and wet surfaces are going to start to freeze.\r\nA temperature of -1 C was recorded… [+8619 chars]',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'https://www.facebook.com/bbcnews',
      title: '2022 in pictures: Striking photos from around the world',
      description:
        'A selection of some of the most powerful pictures taken by news agency photographers around the world this year.',
      url: 'https://www.bbc.co.uk/news/in-pictures-63875897',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/12261/production/_128073347_gettyimages-1240870517.jpg',
      publishedAt: '2022-12-30T00:55:31Z',
      content:
        'A selection of some of the most powerful pictures taken by news agency photographers around the world this year.',
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: null,
      title:
        'Tesla to shorten Shanghai shifts, delay hiring - Bloomberg News - Reuters',
      description:
        'Tesla Inc <a href="https://www.reuters.com/companies/TSLA.O" target="_blank">(TSLA.O)</a> will shorten shift hours at its Shanghai factory and has delayed on-boarding of new staff at its most productive plant, according to a <a href="https://www.bloomberg.com…',
      url: 'https://www.reuters.com/business/autos-transportation/tesla-shorten-shanghai-shifts-delay-hiring-bloomberg-news-2022-12-08/',
      urlToImage:
        'https://www.reuters.com/resizer/P9-IkMVHh6WZRtSqwZ_0qOdvluY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/25ALWWNU5VOIDP56LN3BYZOQVA.jpg',
      publishedAt: '2022-12-08T11:51:00Z',
      content:
        'Dec 8 (Reuters) - Tesla Inc (TSLA.O) will shorten shift hours at its Shanghai factory and has delayed on-boarding of new staff at its most productive plant, according to a report by Bloomberg News, s… [+611 chars]',
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: null,
      title: 'FTX secretly funded crypto news site - Axios - Reuters',
      description:
        "Cryptocurrency exchange FTX secretly funded media company the Block for over a year with money sent to the Block's chief executive, Axios reported on Friday, citing sources.",
      url: 'https://www.reuters.com/technology/ftx-secretly-funded-crypto-news-site-axios-2022-12-09/',
      urlToImage:
        'https://www.reuters.com/resizer/eqXmfLSWehBhpFk-Kir0_XdwL_0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KRYN3ZOJHRK5JPI75GLQECMP6U.jpg',
      publishedAt: '2022-12-09T21:48:00Z',
      content:
        "Dec 9 (Reuters) - Cryptocurrency exchange FTX secretly funded media company the Block for over a year with money sent to the Block's chief executive, Axios reported on Friday, citing sources.\r\nThe Bl… [+771 chars]",
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: null,
      title:
        'Siemens Healthineers, GE Healthcare eye Medtronic units - Bloomberg News - Reuters',
      description:
        'Siemens Healthineers AG <a href="https://www.reuters.com/companies/SHLG.DE" target="_blank">(SHLG.DE)</a> and General Electric Co\'s <a href="https://www.reuters.com/companies/GE.N" target="_blank">(GE.N)</a> healthcare business are weighing a potential acquis…',
      url: 'https://www.reuters.com/business/healthcare-pharmaceuticals/siemens-healthineers-ge-healthcare-eye-medtronic-units-bloomberg-news-2022-12-15/',
      urlToImage:
        'https://www.reuters.com/resizer/oO_w5Lechz2ntDRuBeDzfewcrvE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XXPVZW3YKJM7FDJDQRLHTCTAEM.jpg',
      publishedAt: '2022-12-15T10:26:00Z',
      content:
        "Dec 15 (Reuters) - Siemens Healthineers AG (SHLG.DE) and General Electric Co's (GE.N) healthcare business are weighing a potential acquisition of two units being spun off by Medtronic Plc (MDT.N), Bl… [+921 chars]",
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: null,
      title: 'Big news and big views dominate 2022 - Reuters',
      description:
        'This year has not been short on drama. Our best-read stories of 2022 are testament to that.',
      url: 'https://www.reuters.com/breakingviews/big-news-big-views-dominate-2022-2022-12-30/',
      urlToImage:
        'https://www.reuters.com/resizer/oPTnDXO4Vw9Wt8WwMU7ssg6iBX0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7YPI3JS4YJJSJEM52VPZJK3HQM.jpg',
      publishedAt: '2022-12-30T15:03:00Z',
      content:
        'HONG KONG, Dec 30 (Reuters Breakingviews) - This year has not been short on drama. Our best-read stories of 2022 are testament to that.\r\nElon Musks will-they-or-wont-they Twitter debacle kept readers… [+4042 chars]',
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: null,
      title:
        'Putin cancels annual marathon year-end TV news conference - Reuters.com',
      description:
        "President Vladimir Putin will not hold his traditional televised year-end news conference this month, the Kremlin said on Thursday, 10 months into Russia's stuttering invasion of Ukraine.",
      url: 'https://www.reuters.com/world/putin-cancels-annual-marathon-year-end-tv-news-conference-2022-12-12/',
      urlToImage:
        'https://www.reuters.com/resizer/NCEG_65lshjMpXfpsDUKAS6PSQU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HS2SVGZLLNJDBPLJ5OYK7KHBRQ.jpg',
      publishedAt: '2022-12-12T17:07:00Z',
      content:
        "Dec 12 (Reuters) - President Vladimir Putin will not hold his traditional televised year-end news conference this month, the Kremlin said on Thursday, 10 months into Russia's stuttering invasion of U… [+1464 chars]",
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: null,
      title:
        'Analysis: Bumper green aluminium output is good news for ... - Reuters',
      description:
        "Aluminium makers are set to boost low-carbon metal output by 10% in 2023 and churn out even more in the years ahead, driving down the cost for carmakers seeking climate-friendly supplies and shrinking the industry's hefty carbon footprint.",
      url: 'https://www.reuters.com/business/autos-transportation/bumper-green-aluminium-output-is-good-news-carmakers-climate-2022-12-17/',
      urlToImage:
        'https://www.reuters.com/resizer/bMgzQEiWzj_b7Fs7Z472SwVY2uA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZZ6IEMNG3VIPZKHNLY3ICUDVNE.jpg',
      publishedAt: '2022-12-17T15:23:00Z',
      content:
        'LONDON, Dec 17 (Reuters) - Aluminium makers are set to boost low-carbon metal output by 10% in 2023 and churn out even more in the years ahead, driving down the cost for carmakers seeking climate-fri… [+5579 chars]',
    },
    {
      source: {
        id: null,
        name: 'MarketBeat',
      },
      author: 'Thomas Hughes',
      title: 'Game-Changing News For Mullen Automotive',
      description:
        'Mullen Automotive announced game-changing news when it revealed Randy Marion Auto Group would buy 6,000 vans with deliveries to begin in Q1.',
      url: 'https://www.marketbeat.com/originals/game-changing-news-for-mullen-automotive/',
      urlToImage:
        'https://assets.entrepreneur.com/providers/marketbeat/hero-image-marketbeat-441239.jpeg',
      publishedAt: '2022-12-15T15:30:00Z',
      content:
        'MarketBeat.com - MarketBeat\r\nTo say the EV startup world is a world of fly-by-night operations and high risk is a bit of an understatement but Mullen Automotive (NASDAQ: MULN) is proving not all EV c… [+3118 chars]',
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: null,
      title:
        "Western Digital, Japan's Kioxia restart merger talks - Bloomberg News - Reuters",
      description:
        'Memory chip maker Western Digital Corp <a href="https://www.reuters.com/companies/WDC.O" target="_blank">(WDC.O)</a> and Japan\'s Kioxia Holdings Corp have restarted merger talks, Bloomberg News <a href="https://www.bloomberg.com/news/articles/2023-01-04/weste…',
      url: 'https://www.reuters.com/markets/deals/western-digital-japans-kioxia-restart-merger-talks-bloomberg-news-2023-01-05/',
      urlToImage:
        'https://www.reuters.com/resizer/on--pAo3Uy52a4eAyzUgdtTVCfw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5HXGECUAENKI7JJSA4CF4OR3DY.jpg',
      publishedAt: '2023-01-05T00:18:00Z',
      content:
        "Jan 4 (Reuters) - Memory chip maker Western Digital Corp (WDC.O) and Japan's Kioxia Holdings Corp have restarted merger talks, Bloomberg News reported on Wednesday, citing sources familiar with the m… [+1108 chars]",
    },
    {
      source: {
        id: 'reuters',
        name: 'Reuters',
      },
      author: null,
      title: "BOJ Governor Kuroda's comments at news conference - Reuters.com",
      description:
        'The Bank of Japan shocked markets on Tuesday with a surprise tweak to its bond yield controls that allows long-term interest rates to rise further, a move aimed at easing some of the costs of prolonged monetary stimulus.',
      url: 'https://www.reuters.com/markets/asia/boj-governor-kurodas-comments-news-conference-2022-12-20/',
      urlToImage:
        'https://www.reuters.com/resizer/jOPbbbExKZBY_3tDDb1JkyF3HjE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6MJKL3SXKNJCFESYYDEJVJTXAA.jpg',
      publishedAt: '2022-12-20T07:04:00Z',
      content:
        'Dec 20 (Reuters) - The Bank of Japan shocked markets on Tuesday with a surprise tweak to its bond yield controls that allows long-term interest rates to rise further, a move aimed at easing some of t… [+3199 chars]',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: null,
      title: '14 headlines that made 2022... in 74 seconds',
      description:
        'Watch a selection of some of the most momentous stories covered by BBC News this year.',
      url: 'https://www.bbc.co.uk/news/av/world-64030450',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/BF28/production/_128163984_p0drh5nw.jpg',
      publishedAt: '2022-12-31T00:39:34Z',
      content:
        'Watch a selection of some of the most momentous stories covered by BBC News this year. \r\nVideo by Megan Fisher and Mattea Bubalo',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'https://www.facebook.com/bbcnews',
      title:
        "Timed Teaser: Donald Trump's digital trading cards cost how much?",
      description:
        'Test your knowledge of the news these last few days - 10 questions, 10 seconds each. Go!',
      url: 'https://www.bbc.co.uk/news/world-us-canada-64025781',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/BD33/production/_128053484_trumpindexj.jpg',
      publishedAt: '2022-12-19T23:29:21Z',
      content:
        "Test your news knowledge against the clock. Can you outscore your friends? \r\nIf you cannot see the quiz, follow this link.\r\nWant more of the same? Try last week's teaser. Or take Friday's quiz of the… [+105 chars]",
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title: 'Lockerbie bombing: U.S. holding suspect - CTV News',
      description:
        '<ol><li>Lockerbie bombing: U.S. holding suspect  CTV News\r\n</li><li>Lockerbie bombing suspect to appear in U.S. court  National Post\r\n</li><li>News Wrap: Alleged Pan Am 103 bomber extradited to U.S. to face charges  PBS NewsHour\r\n</li><li>Opinion: The lucky s…',
      url: 'https://www.ctvnews.ca/world/libyan-accused-in-lockerbie-bombing-now-in-american-custody-1.6190015',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/11/pan-am-flight-103-1-6190016-1670767718583.jpg',
      publishedAt: '2022-12-11T14:13:00Z',
      content:
        'WASHINGTON - \r\nA Libyan intelligence official accused of making the bomb that brought down Pan Am Flight 103 over Lockerbie, Scotland, in 1988 in an international act of terrorism has been taken into… [+5764 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title: 'Benchmark-setting golfer dies - CTV News',
      description:
        '<ol><li>Benchmark-setting golfer dies  CTV News\r\n</li><li>Kathy Whitworth, winningest golfer in history, dies at 83  CBC Sports\r\n</li><li>Kathy Whitworth: Golfer who broke record for wins dies at 83  BBC\r\n</li><li>Golfer Kathy Whitworth, who clocked most prof…',
      url: 'https://www.ctvnews.ca/sports/kathy-whitworth-winningest-golfer-in-history-dies-at-83-1.6208794',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/25/kathy-whitworth-1-6208795-1672005478523.jpg',
      publishedAt: '2022-12-25T21:58:00Z',
      content:
        'Kathy Whitworth set a benchmark in golf no one has ever touched, whether it was Sam Snead or Tiger Woods, Mickey Wright or Annika Sorenstam. Her 88 victories are the most by any player on a single pr… [+3508 chars]',
    },
    {
      source: {
        id: null,
        name: 'Quinte News',
      },
      author: 'John Spitters',
      title: 'County roads remain closed - Quinte News',
      description:
        '<ol><li>County roads remain closed  Quinte News\r\n</li><li>OPP close all roads in Prince Edward County  inquinte.ca\r\n</li><li>Road closures listed from across the region as winter storm hammers the area  CTV News Barrie\r\n</li><li>Bruce County says all roads ar…',
      url: 'https://www.quintenews.com/2022/12/24/prince-edward-county-roads-remain-closed/',
      urlToImage:
        'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/1977/files/2020/09/IMG_4152.jpg',
      publishedAt: '2022-12-24T13:31:28Z',
      content:
        'The public is advised to stay home and shelter in place as all roads remain closed throughout Prince Edward County.“Even if you think you can get through the snow, you will get stuck and only slow do… [+2216 chars]',
    },
    {
      source: {
        id: null,
        name: 'The Guardian',
      },
      author: 'Staff and agencies',
      title: 'Barbara Walters, pioneering US TV news anchor, dies at 93',
      description:
        'First female network news anchor in US achieved a celebrity status on par with the rulers, royalty and entertainers she interviewedBarbara Walters, the intrepid interviewer and program host who led the way as the first woman to become a US TV news superstar d…',
      url: 'https://www.theguardian.com/media/2022/dec/31/barbara-walters-dies-pioneering-us-tv-news-anchor-abc-nbc',
      urlToImage:
        'https://i.guim.co.uk/img/media/93eaba9ab0ef9b24f01c61cab0a09282b10ae9da/0_0_3500_2099/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7ef78605f7ca8b24e162f7312bdb1f32',
      publishedAt: '2022-12-31T03:34:59Z',
      content:
        'Barbara Walters, the intrepid interviewer and program host who led the way as the first woman to become a US TV news superstar during a remarkable career, has died at the age of 93.\r\nWalters death wa… [+1712 chars]',
    },
    {
      source: {
        id: null,
        name: 'The Guardian',
      },
      author: 'Guardian sport',
      title:
        'Premier League team news: predicted lineups for the weekend action',
      description:
        'The top flight continues its raucous return with a New Year’s celebration featuring Brighton v Arsenal and Newcastle v LeedsSaturday 12.30pm BT Sport 1 Venue Molineux Last season Wolves 0 Manchester United 1 Continue reading...',
      url: 'https://www.theguardian.com/football/2022/dec/30/premier-league-team-news-predicted-lineups-for-the-weekend-action',
      urlToImage:
        'https://i.guim.co.uk/img/media/c73efce749c3f6e49c2779b6f9441db6683d2dc6/0_169_5068_3041/master/5068.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3bd3404dfc37693f9cd85334924bfa2e',
      publishedAt: '2022-12-30T18:30:55Z',
      content:
        'Wolves v Manchester United\r\nSaturday 12.30pm BT Sport 1 Venue Molineux Last season Wolves 0 Manchester United 1\r\nReferee Robert Jones This season G10 Y38 R1 3.9 cards/game\r\nOdds H 33-10 A 19-20 D 11-… [+7081 chars]',
    },
    {
      source: {
        id: 'bbc-news',
        name: 'BBC News',
      },
      author: 'https://www.facebook.com/bbcnews',
      title: "Six of India's best viral moments",
      description:
        'From a confusing news debate to a nude photoshoot, there was plenty to keep Indian social media buzzing.',
      url: 'https://www.bbc.co.uk/news/world-asia-india-64062203',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/4A14/production/_128146981_kala.jpg',
      publishedAt: '2022-12-31T00:52:37Z',
      content:
        "Sometimes, it takes time and effort to go viral on social media.\r\nAnd other times, you just go viral for yelling at the wrong man on live TV.\r\nThis year's top social media moments in India were an en… [+3914 chars]",
    },
    {
      source: {
        id: null,
        name: '9&10 News',
      },
      author: null,
      title:
        'District Health Department #10: RSV, Flu Cases Started Early, Hit Harder This Year - 9 & 10 News - 9&10 News',
      description:
        '<ol><li>District Health Department #10: RSV, Flu Cases Started Early, Hit Harder This Year - 9 & 10 News  9&10 News\r\n</li><li>Push for Ottawa residents to get the flu and COVID-19 shots before the holidays  CTV News Ottawa\r\n</li><li>Flu activity high across U…',
      url: 'https://www.9and10news.com/2022/12/12/district-health-department-10-rsv-flu-cases-started-early-hit-harder-this-year/',
      urlToImage:
        'https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.9and10news.com/content/uploads/2022/12/x/y/098149262e2a59c8dbb5141c22b02cea6a30f820.jpg',
      publishedAt: '2022-12-12T23:15:48Z',
      content:
        'Both seasons of flu and RSV started much earlier and harder this year.\r\nAlthough RSV cases were higher than usual, District Health Department #10 says there appeared to be a drop off in cases in the … [+632 chars]',
    },
    {
      source: {
        id: null,
        name: 'Castanet.net',
      },
      author: null,
      title:
        'Minister of Transportation holds news conference on holiday weekend weather events, including deadly bus crash - BC News - Castanet.net',
      description:
        '<ol><li>Minister of Transportation holds news conference on holiday weekend weather events, including deadly bus crash - BC News  Castanet.net\r\n</li><li>7 people remain in hospital after fatal B.C. bus crash  CBC News: The National\r\n</li><li>Recent arrival fr…',
      url: 'https://www.castanet.net/news/BC/403419/Minister-of-Transportation-holds-news-conference-on-holiday-weekend-weather-events-including-deadly-bus-crash',
      urlToImage:
        'https://www.castanet.net/content/2022/12/screen_shot_2022-12-26_at_7.41.43_pm_p3647175_p3647292.jpg',
      publishedAt: '2022-12-27T23:59:00Z',
      content:
        "UPDATE 3:53 p.m.\r\nBritish Columbia's transport minister says investigators looking into a bus crash that claimed four lives on the Okanagan Connector road on Christmas Eve are also considering anothe… [+8986 chars]",
    },
    {
      source: {
        id: null,
        name: 'YouTube',
      },
      author: null,
      title:
        'Donald Trump Urges Republicans To Back McCarthy As US House Speaker | US News | English News LIVE - CNN-News18',
      description:
        '<ol><li>Donald Trump Urges Republicans To Back McCarthy As US House Speaker | US News | English News LIVE  CNN-News18\r\n</li><li>Kevin McCarthy becomes U.S. House Speaker after 15 rounds of voting  CBC News\r\n</li><li>Opinion: The deal McCarthy struck was an in…',
      url: 'https://www.youtube.com/supported_browsers?next_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVcGyPI0T4sU',
      urlToImage: null,
      publishedAt: '2023-01-08T08:02:44Z',
      content:
        'Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later',
    },
    {
      source: {
        id: null,
        name: 'Gov.bc.ca',
      },
      author: null,
      title:
        'Essential travel only advised due to snow, freezing rain throughout B.C. | BC Gov News - BC Gov News',
      description:
        '<ol><li>Essential travel only advised due to snow, freezing rain throughout B.C. | BC Gov News  BC Gov News\r\n</li><li>B.C. South Coast should brace for severe winter storm, avoid non-essential travel | Globalnews.ca  Global News\r\n</li><li>More snow on the way…',
      url: 'https://news.gov.bc.ca/releases/2022EMCR0070-001940',
      urlToImage:
        'https://news.gov.bc.ca/Content/Images/Gov/default-og-image.jpg',
      publishedAt: '2022-12-22T23:09:59Z',
      content:
        'With snow and freezing rain in the forecast, which may cause dangerous road conditions, travel advisories are in place for many areas of B.C., including the Fraser Valley and mid- and south Vancouver… [+5078 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        "Ottawa weather: 20-30 mm of rain expected by New Year's Day | CTV News - CTV News Ottawa",
      description:
        'Environment Canada has issued a rainfall warning and a fog advisory for the city of Ottawa. Ottawa could see 20 to 30 mm of rain by Sunday morning.',
      url: 'https://ottawa.ctvnews.ca/ski-hills-close-parliament-hill-lightshow-cancelled-as-heavy-rain-soaks-ottawa-on-new-year-s-eve-1.6213074',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/31/rideau-canal-1-6213986-1672507709065.jpg',
      publishedAt: '2022-12-30T19:06:00Z',
      content:
        "Mother Nature is raining out some people's New Year's Eve plans, as Ottawa and eastern Ontario wrap up the year under heavy rain and a blanket of fog.\r\nEnvironment Canada has issued a rainfall warnin… [+6364 chars]",
    },
    {
      source: {
        id: 'engadget',
        name: 'Engadget',
      },
      author: 'Igor Bonifacic',
      title:
        '‘Sifu’ is getting an arena mode and heading to Xbox in March 2023',
      description:
        'Sifu’s\r\n long-awaited Arenas mode will arrive next March. Developer Sloclap made the announcement through IGN\r\n, which shared a trailer for the upcoming DLC. The studio first teased the mode last April when it published a free content roadmap\r\n for Sifu. At t…',
      url: 'https://www.engadget.com/sifu-arena-mode-xbox-availability-march-2023-165054455.html',
      urlToImage:
        'https://s.yimg.com/os/creatr-uploaded-images/2022-12/d23ad4b0-8085-11ed-bf7f-377d615eb221',
      publishedAt: '2022-12-20T16:50:54Z',
      content:
        'Sifus\r\n long-awaited Arenas mode will arrive next March. Developer Sloclap made the announcement through IGN\r\n, which shared a trailer for the upcoming DLC. The studio first teased the mode last Apri… [+1059 chars]',
    },
    {
      source: {
        id: null,
        name: 'Lifehacker.com',
      },
      author: 'Lindsey Ellefson',
      title: 'This TikTok Dryer Sheet ‘Hack’ Could Set Your House on Fire',
      description:
        'Another day, another TikTok hack that seems clean and safe but could actually be a total disaster in practice. While some viral hacks actually are as miraculous as they seem, a newer one suggesting you make a reusable dryer sheet by soaking a sponge in a fabr…',
      url: 'https://lifehacker.com/this-tiktok-dryer-sheet-hack-could-set-your-house-on-1849905164',
      urlToImage:
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b8b52b8c93af72f3603aa48190ed5c52.jpg',
      publishedAt: '2022-12-16T20:00:00Z',
      content:
        'Another day, another TikTok hack that seems clean and safe but could actually be a total disaster in practice. While some viral hacks actually are as miraculous as they seem, a newer one suggesting y… [+1485 chars]',
    },
    {
      source: {
        id: null,
        name: 'Lifehacker.com',
      },
      author: 'Lindsey Ellefson',
      title: '10 of Lifehacker’s Favorite Home Safety Tips of 2022',
      description:
        'Keeping your home clean and welcoming for other people is all fine and well, but doesn’t really matter much if your house isn’t safe. From burglars to fires, there are safety threats all around our homes, and this year, we worked hard to help you identify and…',
      url: 'https://lifehacker.com/10-of-lifehacker-s-favorite-home-safety-tips-of-2022-1849923686',
      urlToImage:
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/8dad5ba2f135ec8045439e3ccaaa6232.jpg',
      publishedAt: '2022-12-22T19:00:00Z',
      content:
        'This year, we went over how you can actually make kitchen fires worse by not responding to them correctly. The thing is, though, that a lot of the tips were counterintuitive: When a fire breaks out i… [+349 chars]',
    },
    {
      source: {
        id: null,
        name: 'Lifehacker.com',
      },
      author: 'Alicia Whitney',
      title: 'The Six Best Ways of Finding a Job Without LinkedIn or Indeed',
      description:
        'You’re likely familiar with the usual way to look for a job: Type the job title you want into a career site like LinkedIn or Indeed, add few details, and then spend hours scrolling down a list of thousands of potential jobs. When you finally get to the bottom…',
      url: 'https://lifehacker.com/the-six-best-ways-of-finding-a-job-without-linkedin-or-1849909999',
      urlToImage:
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ce73c5f50395507e3155ef858b01a4f7.jpg',
      publishedAt: '2022-12-22T15:00:00Z',
      content:
        'Youre likely familiar with the usual way to look for a job: Type the job title you want into a career site like LinkedIn or Indeed, add few details, and then spend hours scrolling down a list of thou… [+9162 chars]',
    },
    {
      source: {
        id: null,
        name: 'MarketBeat',
      },
      author: 'Kate Stalter',
      title:
        "Does Lululemon's 12% Drop Signal Bad News For Clothing Retailers?",
      description:
        'Luxury athletic clothing retailer Lululemon gapped down 12%, after warning of higher-than-anticipated inventories. Is this a bad sign for other clothing stocks?',
      url: 'https://www.marketbeat.com/originals/does-lululemons-12-drop-signal-bad-news-for-clothing-retailers/',
      urlToImage:
        'https://assets.entrepreneur.com/providers/marketbeat/hero-image-marketbeat-440863.jpeg',
      publishedAt: '2022-12-12T06:00:00Z',
      content:
        'Luxury athletic clothing retailer Lululemon Athletica Inc. (NASDAQ: LULU) was trading 12% lower mid-session Friday, after gapping down at the open. The move followed the companys warning of higher-th… [+4059 chars]',
    },
    {
      source: {
        id: 'engadget',
        name: 'Engadget',
      },
      author: 'Kris Holt',
      title: 'Watch The Game Awards here at 7:30PM ET',
      description:
        "Get ready for two and a half hours of game trailers, announcements, gameplay and maybe even a few award acceptance speeches. The ninth edition of The Game Awards\r\n is upon us. We'll be covering all the big news from tonight's event, which you can also watch l…",
      url: 'https://www.engadget.com/how-to-watch-the-game-awards-stream-start-time-220021184.html',
      urlToImage:
        'https://s.yimg.com/os/creatr-uploaded-images/2021-06/efdd18d0-cd34-11eb-aeff-bdd06c076a41',
      publishedAt: '2022-12-08T22:00:21Z',
      content:
        "Get ready for two and a half hours of game trailers, announcements, gameplay and maybe even a few award acceptance speeches. The ninth edition of The Game Awards\r\n is upon us. We'll be covering all t… [+1601 chars]",
    },
    {
      source: {
        id: 'engadget',
        name: 'Engadget',
      },
      author: 'Igor Bonifacic',
      title:
        'Twitter restores suicide-prevention feature after briefly removing it',
      description:
        'Twitter says it’s working on bringing back the #ThereIsHelp banner, a feature that pointed users to suicide prevention hotlines and other safety resources when searching for certain content. On Friday, Reuters reported that the company had removed the safety …',
      url: 'https://www.engadget.com/twitter-restores-suicde-prevention-feature-after-briefly-removing-t-200716547.html',
      urlToImage:
        'https://s.yimg.com/os/creatr-uploaded-images/2022-11/93285890-6b1a-11ed-bb7e-0e329ffc063b',
      publishedAt: '2022-12-24T20:07:16Z',
      content:
        'Twitter says its working on bringing back the #ThereIsHelp banner, a feature that pointed users to suicide prevention hotlines and other safety resources when searching for certain content. On Friday… [+1650 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Harry, Meghan vent grievances in final Netflix episodes - CTV News',
      description:
        "Prince Harry and his wife, Meghan, vented their grievances against the monarchy on Thursday in the second half of their Netflix documentary series, with Harry describing the royal press machine -- including leaking and planting stories in newspapers -- as a '…",
      url: 'https://www.ctvnews.ca/entertainment/harry-meghan-say-royal-press-playing-a-dirty-game-in-final-netflix-episodes-1.6195727',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/15/harry-and-meghan-netflix-1-6195729-1671107278553.jpg',
      publishedAt: '2022-12-15T12:33:00Z',
      content:
        'LONDON - \r\nPrince Harry and his wife, Meghan, vent their grievances against the monarchy in the second half of their Netflix documentary series released Thursday, which includes Harry describing how … [+4943 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title: 'Serial killer Charles Sobhraj freed from Nepal prison - CTV News',
      description:
        '<ol><li>Serial killer Charles Sobhraj freed from Nepal prison  CTV News\r\n</li><li>Notorious French serial killer freed from Nepal prison  CP24\r\n</li><li>Suspected serial killer Charles Sobhraj, convicted in death of Canadian, released from Nepal prison  CBC N…',
      url: 'https://www.ctvnews.ca/world/french-serial-killer-charles-the-serpent-sobhraj-freed-from-nepal-prison-1.6206717',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/23/charles-sobhraj--1-6206718-1671796262957.jpg',
      publishedAt: '2022-12-23T11:53:45Z',
      content:
        'KATHMANDU, Nepal - \r\nConfessed French serial killer Charles Sobhraj was freed from prison in Nepal on Friday after serving most of his sentence for killing American and Canadian backpackers and was t… [+1549 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title: 'Winter storm warnings expanded in Maritimes - CTV News Atlantic',
      description:
        '<ol><li>Winter storm warnings expanded in Maritimes  CTV News Atlantic\r\n</li><li>Heavy snowfall to hit parts of Nova Scotia beginning Monday night  CBC.ca\r\n</li><li>East Coast travel woes likely as storm threatens hefty snow, howling winds  The Weather Networ…',
      url: 'https://atlantic.ctvnews.ca/warnings-expanded-in-maritimes-as-winter-storm-approaches-1.6190861',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2021/2/2/snow-storm-1-5293451-1670857602168.jpg',
      publishedAt: '2022-12-13T00:22:14Z',
      content:
        'Environment Canada extended winter storm watches and warnings into eastern New Brunswick and Prince Edward Island Monday afternoon.\r\n The storm, located 450 km to the southeast of Halifax Monday even… [+3841 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        "'Freedom Convoy' report prompts calls for more security - CTV News",
      description:
        "Liberal MPs on a House of Commons committee that studied parliamentary security after the 'Freedom Convoy' say Parliament Hill should expand to include nearby streets.",
      url: 'https://www.ctvnews.ca/politics/liberals-want-to-expand-parliament-hill-after-post-convoy-security-report-1.6195264',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/14/parliament-hill-security-1-6195289-1671063130040.jpg',
      publishedAt: '2022-12-15T00:12:02Z',
      content:
        'OTTAWA - \r\nLiberal MPs on a House of Commons committee that studied parliamentary security after the "Freedom Convoy" say Parliament Hill should expand to include nearby streets.\r\nThe Liberals say a … [+4294 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title: "University of Idaho killings: Suspect's family speaks - CTV News",
      description:
        "The Pennsylvania family of a man arrested in the slayings of four University of Idaho students expressed sympathy for the families of the victims but also vowed to support him and promote 'his presumption of innocence.'",
      url: 'https://www.ctvnews.ca/world/don-t-make-erroneous-assumptions-family-of-suspect-in-idaho-college-killings-says-1.6214948',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/30/bryan-christopher-kohberger-1-6213567-1672446909394.jpg',
      publishedAt: '2023-01-02T16:32:00Z',
      content:
        "STROUDSBURG, Pa. - \r\nRelatives of a man arrested in Pennsylvania in the slayings of four University of Idaho students expressed sympathy for the victims' families but also vowed to support him and pr… [+3358 chars]",
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title: 'Jeremy Renner has surgery after snow-plow accident - CTV News',
      description:
        '<ol><li>Jeremy Renner has surgery after snow-plow accident  CTV News\r\n</li><li>Jeremy Renner in critical condition after snow-plowing accident  CBC News\r\n</li><li>Actor Jeremy Renner hospitalized after snow-related accident  CP24\r\n</li><li>Actor Jeremy Renner…',
      url: 'https://www.ctvnews.ca/entertainment/the-avengers-star-jeremy-renner-undergoes-surgery-after-snow-plow-accident-1.6214863',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/1/2/jeremy-renner-1-6215373-1672711406644.jpg',
      publishedAt: '2023-01-03T02:03:30Z',
      content:
        'RENO, Nevada - \r\nJeremy Renner suffered blunt chest trauma and orthopedic injuries in a snow plow accident in Reno, Nevada, on Sunday, a representative for the actor said Monday, and remains in criti… [+1786 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Journalist Rejean Hebert killed in Saint-Simon - CTV News Atlantic',
      description:
        'A journalist well-known to listeners of French-language radio in New Brunswick has been killed and police are treating the death as a homicide.',
      url: 'https://atlantic.ctvnews.ca/arrest-made-in-death-of-rejean-hebert-longtime-radio-journalist-in-new-brunswick-1.6214496',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/1/1/rejean-hebert-1-6214497-1672592739229.jpeg',
      publishedAt: '2023-01-01T17:08:00Z',
      content:
        "SAINT-SIMON, NEW BRUNSWICK - \r\nA journalist well-known to listeners of French-language radio in New Brunswick has been killed and police say they're investigating the death as a homicide.\r\nDonald Noe… [+1067 chars]",
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title: 'Timothy Caulfield named to Order of Canada - CTV News Edmonton',
      description:
        "<ol><li>Timothy Caulfield named to Order of Canada  CTV News Edmonton\r\n</li><li>Sidney Crosby, Eugene Levy and Karina LeBlanc among 99 new Order of Canada appointees  CBC News\r\n</li><li>NHL's Sidney Crosby, astronaut David Saint-Jacques among 99 named to Orde…",
      url: 'https://edmonton.ctvnews.ca/edmonton-professor-named-to-order-of-canada-for-his-work-fighting-health-misinformation-1.6211955',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/29/timothy-caulfield-1-6211967-1672345455638.png',
      publishedAt: '2022-12-29T20:24:00Z',
      content:
        'Edmonton professor and author Timothy Caulfield is among the newest members of the Order of Canada.\r\nCaulfield is the Canada Research Chair in Health Law and Policy, a professor in the Faculty of Law… [+1209 chars]',
    },
    {
      source: {
        id: null,
        name: 'Yahoo Entertainment',
      },
      author: 'WOFL',
      title: 'NASA plans ambitious schedule for 2023 - Yahoo News Canada',
      description:
        'NASA says it will keep the International Space Station in orbit through 2030 but Russia will be pulling out of the multi-national facility made of components...',
      url: 'https://news.yahoo.com/nasa-plans-ambitious-schedule-2023-001811931.html',
      urlToImage:
        'https://media.zenfs.com/en/wofl_fox_local_videos_410/0755cd23fb20e5eb86357d24464b220f',
      publishedAt: '2022-12-29T00:18:00Z',
      content:
        'PRINCETON, N.J. (AP) A monthslong Toni Morrison tribute at Princeton University, where the Nobel laureate taught for 17 years, will range from music created and performed by Grammy-winning vocalist C… [+295 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title: 'McCarthy: Weakened leader or emboldened survivor? - CTV News',
      description:
        '<ol><li>McCarthy: Weakened leader or emboldened survivor?  CTV News\r\n</li><li>Donald Trump Urges Republicans To Back McCarthy As US House Speaker | US News | English News LIVE  CNN-News18\r\n</li><li>Kevin McCarthy becomes U.S. House Speaker after 15 rounds of …',
      url: 'https://www.ctvnews.ca/world/speaker-mccarthy-a-weakened-leader-or-emboldened-survivor-1.6221696',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/1/7/kevin-mccarthy-1-6221698-1673116847511.jpg',
      publishedAt: '2023-01-07T18:43:45Z',
      content:
        'WASHINGTON - \r\nRepublican Kevin McCarthy is the new House speaker, but as bruising as it was for him to seize the gavel in a history-making election, it may be even more difficult for the embattled l… [+5791 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Youths arrested for bear spray attack: Police - CTV News Winnipeg',
      description:
        '<ol><li>Youths arrested for bear spray attack: Police  CTV News Winnipeg\r\n</li><li>2 Winnipeg boys aged 12 and 14 arrested for shoplifting: Police - Winnipeg | Globalnews.ca  Global News\r\n</li><li>View Full Coverage on Google News</li></ol>',
      url: 'https://winnipeg.ctvnews.ca/youths-arrested-for-bear-spray-attack-police-1.6221675',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/8/21/winnipeg-police-1-6036271-1664290331849.jpeg',
      publishedAt: '2023-01-07T18:09:54Z',
      content:
        'Two youths are facing assault and robbery charges after a bear spray attack Friday afternoon.\r\nWinnipeg police say they were called to a business in the 900 block of Milt Stegall Drive for reports of… [+1369 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Ukrainians newcomers in Canada celebrate Orthodox Christmas - CTV News',
      description:
        '<ol><li>Ukrainians newcomers in Canada celebrate Orthodox Christmas  CTV News\r\n</li><li>Ukrainian Orthodox patriarch condemns Russian war crimes at Christmas service in reclaimed church  Global News\r\n</li><li>Displaced Ukrainians mark sombre Orthodox Christma…',
      url: 'https://www.ctvnews.ca/canada/orthodox-christmas-takes-on-new-meaning-for-ukrainian-newcomers-in-canada-1.6221973',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/1/7/ottawa-1-6221975-1673143034580.png',
      publishedAt: '2023-01-08T02:00:26Z',
      content:
        "In a year filled with immense loss for many Ukrainians, this Orthodox Christmas has taken on a new meaning for the many who were forced to flee the war-torn country.\r\nNearing a year since Russia's in… [+3440 chars]",
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title: 'Former Nazi camp secretary convicted in Germany - CTV News',
      description:
        "A German court on Tuesday convicted a 97-year-old woman of being an accessory to more than 10,000 murders for her role as a secretary to the SS commander of the Nazis' Stutthof concentration camp during the Second World War.",
      url: 'https://www.ctvnews.ca/world/irmgard-furchner-97-convicted-of-being-accessory-to-more-than-10-000-murders-1.6201937',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/20/irmgard-furchner-in-court-in-itzehoe--germany-1-6202148-1671547509341.jpg',
      publishedAt: '2022-12-20T11:56:00Z',
      content:
        "BERLIN - \r\nA German court on Tuesday convicted a 97-year-old woman of being an accessory to more than 10,000 murders for her role as a secretary to the SS commander of the Nazis' Stutthof concentrati… [+4149 chars]",
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'N.S. woman talks stiff person syndrome diagnosis - CTV News Atlantic',
      description:
        "<ol><li>N.S. woman talks stiff person syndrome diagnosis  CTV News Atlantic\r\n</li><li>Céline Dion Is 'The Picture Of Resilience' Following Stiff-Person Syndrome Diagnosis (Report)  Access Hollywood\r\n</li><li>Céline Dion has a tough road ahead, but her diagnos…",
      url: 'https://atlantic.ctvnews.ca/maritime-woman-shares-details-of-her-struggle-with-stiff-person-syndrome-1.6188420',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/9/linda-cox-1-6188516-1670617806184.jpg',
      publishedAt: '2022-12-09T19:40:00Z',
      content:
        'One of the most successful singers of all time has exited the music stage.\r\nCéline Dion, the award-winning singer best-known for her hit My Heart Will Go On, has gone public with her diagnosis of sti… [+1758 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title: "Takeaways from 'Harry and Meghan' on Netflix - CTV News",
      description:
        "<ol><li>Takeaways from 'Harry and Meghan' on Netflix  CTV News\r\n</li><li>Meghan Markle Says She Learned Reality of Royal Life After Hug with Kate Middleton and Prince William  PEOPLE\r\n</li><li>Harry & Meghan review – so sickening I almost brought up my breakf…",
      url: 'https://www.ctvnews.ca/world/these-are-the-5-main-takeaways-from-harry-and-meghan-1.6186112',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/8/prince-harry-and-meghan-markle-1-6186124-1670515728249.jpg',
      publishedAt: '2022-12-08T16:09:00Z',
      content:
        'The much-anticipated docu-series Harry &amp; Meghan has finally dropped on Netflix, to the delight of fans of the couple, and the consternation to those who have had just about enough of the royal pa… [+4639 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Russian space capsule leak likely caused by micrometeorite - CTV News',
      description:
        'A coolant leak from a Russian space capsule attached to the International Space Station was likely caused by a micrometeorite strike, a Russian space official said Thursday.',
      url: 'https://www.ctvnews.ca/sci-tech/russian-space-capsule-leak-likely-caused-by-micrometeorite-1.6195979',
      urlToImage:
        'https://www.ctvnews.ca/polopoly_fs/1.6195993.1671117581!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg',
      publishedAt: '2022-12-15T15:22:32Z',
      content:
        "MOSCOW -- \r\nA coolant leak from a Russian space capsule attached to the International Space Station was likely caused by a micrometeorite strike, a Russian space official said Thursday.\r\nRussia's spa… [+2060 chars]",
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title: 'Black woman assaulted in west Edmonton - CTV News Edmonton',
      description:
        "<ol><li>Black woman assaulted in west Edmonton  CTV News Edmonton\r\n</li><li>Police looking for public's assistance to identify suspects in a hate-motivated assault  Edmonton Police Service\r\n</li><li>Edmonton police investigate hate-motivated assault after wom…",
      url: 'https://edmonton.ctvnews.ca/photos-of-suspects-in-racially-motivated-attack-released-by-police-1.6201155',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/19/assault-suspects-1-6201156-1671479256321.jpg',
      publishedAt: '2022-12-19T19:48:52Z',
      content:
        'Police are looking for two males involved in a west Edmonton assault investigators say is motivated by hate.\r\nA Black woman was leaving a business in the area of 114 Avenue and 135 Street between 4:3… [+1203 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Ukraine: Russia mulls more Iranian drones, Zelenskyy says - CTV News',
      description:
        '<ol><li>Ukraine: Russia mulls more Iranian drones, Zelenskyy says  CTV News\r\n</li><li>Russia continues drone attacks on Kyiv, cities in eastern Ukraine  CBC News\r\n</li><li>Russia, shaken by Ukrainian strike, said mulling more drones  Toronto Star\r\n</li><li>Ru…',
      url: 'https://www.ctvnews.ca/world/russia-shaken-by-ukrainian-strike-could-step-up-drone-use-1.6215487',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2023/1/3/kyiv-ukraine-1-6215490-1672745465344.jpg',
      publishedAt: '2023-01-03T11:35:00Z',
      content:
        'KYIV, Ukraine - \r\nEmergency crews on Tuesday sifted through the rubble of a building struck by Ukrainian rockets, killing at least 63 Russian soldiers barracked there in the latest blow to the Kremli… [+5765 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title: 'Idaho student killings suspect in custody - CTV News',
      description:
        'A suspect in the killings of four University of Idaho students was arrested in eastern Pennsylvania, a law enforcement official said Friday.',
      url: 'https://www.ctvnews.ca/world/suspect-in-deaths-of-four-university-of-idaho-students-arrested-1.6212885',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/30/idaho-victims-1-6212887-1672419345107.jpg',
      publishedAt: '2022-12-30T16:58:00Z',
      content:
        'HARRISBURG, Pa. - \r\nA suspect in the killings of four University of Idaho students was arrested in eastern Pennsylvania, a law enforcement official said Friday.\r\nArrest paperwork filed in Monroe Coun… [+3174 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Wintry storm stretching across Prairies, Ontario, Quebec - CTV News',
      description:
        'Canadians are bracing for a winter storm bringing snow to Saskatchewan, Manitoba, Ontario, and Quebec, and ending in already-buried Atlantic Canada.',
      url: 'https://www.ctvnews.ca/climate-and-environment/snow-in-the-prairies-and-mixed-bag-for-ontario-atlantic-canada-hit-by-two-systems-1.6194407',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/14/snow-in-winnipeg-1-6194411-1671036886102.jpg',
      publishedAt: '2022-12-14T17:02:00Z',
      content:
        'Environment Canada has issued special weather statements for parts of Saskatchewan, Manitoba, Ontario and Quebec, as a 3,000-kilometre-long storm moves across Canada on Wednesday.\r\nThe storm is a low… [+2028 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        'Domestic abuse: New digital tools make escaping harder - CTV News',
      description:
        'Digital forms of intimate partner violence began increasing in 2020, as technology became more integrated into everyday life amid the physical isolation of the pandemic.',
      url: 'https://www.ctvnews.ca/sci-tech/from-smart-homes-to-connected-cars-new-tools-of-domestic-abuse-make-escape-harder-1.6210150',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/28/phone-1-6210153-1672226061402.jpg',
      publishedAt: '2022-12-28T11:17:32Z',
      content:
        'VANCOUVER - \r\nA phone, a smart home, a digitally connected car -- these are the tools of digital domestic abuse that anti-violence experts say is on the rise.\r\n"Methods that are sort of presented as … [+6732 chars]',
    },
    {
      source: {
        id: null,
        name: 'Ctvnews.ca',
      },
      author: null,
      title:
        "Dalhousie professor studying world's oldest DNA - CTV News Atlantic",
      description:
        "<ol><li>Dalhousie professor studying world's oldest DNA  CTV News Atlantic\r\n</li><li>Oldest DNA reveals life in Greenland 2 million years ago  CP24\r\n</li><li>The oldest DNA ever found reveals a snapshot of a vanished world  Phys.org\r\n</li><li>Canadian researc…",
      url: 'https://atlantic.ctvnews.ca/world-s-oldest-dna-discovered-in-greenland-studied-by-halifax-geoscientist-1.6187660',
      urlToImage:
        'https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/12/9/svend-funder-1-6187678-1670592370021.png',
      publishedAt: '2022-12-09T13:26:00Z',
      content:
        'A significant DNA discovery in Greenland has been revealed this week and its research has a Maritime connection.\r\nA study published in the Nature journal Wednesday said the worlds oldest DNA has been… [+2810 chars]',
    },
  ];

  if (pageSize > 100) {
    console.log('A maximum of 100 articles can be displayed');
    return articles;
  }

  const filteredData = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < pageSize; i++) {
    filteredData.push(articles[i]);
  }

  return filteredData;
};

export default getFakeArticleData;
