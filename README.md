A web app for English learners to sort news articles based on their difficulty level, identify advanced vocabulary, and click on words to see their translations and contextual usage. This app searches news articles using the NewsAPI, then scrapes and parses the HTML of the articles. From there, the app cross-references the article content with an ordered list of the most frequently used words in the English language, and allows users to highlight the advanced words, and even click on words to see their translation and contextual usage using DeepL's translator API and the Reverso API. Although the app does not use a database, and instead stores users history and saved articles in local storage, a node server was created in order to resolve CORS errors. 

Created with React.js, Redux, Bootstrap, Swiper.js, and localStorage. 

See the deployed version: [news-edu.vercel.app] (news-edu.vercel.app)
