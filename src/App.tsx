import { Header } from "./components/Header";

import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import type { PostType } from './components/Post';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/tblima.png",
      name: "Thiago Bittencourt",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera, beleza?" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz durante a formação React Rocketseat.",
      },
      { type: "link", content: "tblima.github.io/feed-project" },
    ],
    publishedAt: new Date("2025-09-07T16:20:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galera, beleza?" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz durante a formação React Rocketseat.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-03T20:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post post={post} key={post.id} />
          }) }
        </main>
      </div>
    </>
  );
}

export default App;
